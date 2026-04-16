from fastapi import APIRouter, Depends, HTTPException
from bson import ObjectId
from app.db.mongo import get_database
from app.deps.auth import get_current_user
from app.models.enums import Role
from app.services import student as student_service

router = APIRouter()

@router.get("/student/tests")
async def get_student_tests(db=Depends(get_database), user=Depends(get_current_user)):
    # Only allow students
    if user.get("role") != Role.STUDENT.value:
        raise HTTPException(status_code=403, detail="Only students can access their tests.")
    student_id = user.get("sub")
    # Fetch all tests assigned to this student (customize as needed)
    # For now, fetch all published tests (or filter by enrolled courses)
    tests = await student_service.get_tests_for_student(db, student_id)
    return tests


@router.get("/student/tests/debug")
async def debug_student_tests(db=Depends(get_database), user=Depends(get_current_user)):
    """
    Dev-only helper to diagnose why student tests list is empty.
    Returns computed enrollment course_ids + matched published tests.
    """
    if user.get("role") != Role.STUDENT.value:
        raise HTTPException(status_code=403, detail="Only students can access their tests.")

    student_id = user.get("sub")

    def _id_variants(raw_id: str) -> list:
        raw = str(raw_id)
        variants = [raw]
        if ObjectId.is_valid(raw):
            variants.append(ObjectId(raw))
        return variants

    student_variants = _id_variants(str(student_id))
    enrollments = await db["enrollments"].find({"student_id": {"$in": student_variants}}).to_list(None)

    # Collect unique course ids in both string and ObjectId forms.
    course_id_variants: list = []
    seen_keys: set[str] = set()
    enrolled_course_ids_raw: list[str] = []
    for e in enrollments:
        cid = e.get("course_id")
        if not cid:
            continue
        enrolled_course_ids_raw.append(str(cid))
        for v in _id_variants(str(cid)):
            key = str(v)
            if key in seen_keys:
                continue
            seen_keys.add(key)
            course_id_variants.append(v)

    tests_found = []
    tests_any_found = []
    tests_any_count = 0
    tests_published_count = 0
    if course_id_variants:
        # Total tests for these course ids (any publish status)
        cursor_any = db["tests"].find({"course_id": {"$in": course_id_variants}})
        async for doc in cursor_any:
            tests_any_count += 1
            if len(tests_any_found) < 25:
                doc["_id"] = str(doc["_id"])
                tests_any_found.append(
                    {
                        "_id": doc["_id"],
                        "title": doc.get("title"),
                        "course_id": doc.get("course_id"),
                        "is_published": doc.get("is_published"),
                    }
                )

        cursor = db["tests"].find(
            {"course_id": {"$in": course_id_variants}, "is_published": True}
        )
        async for doc in cursor:
            doc["_id"] = str(doc["_id"])
            tests_published_count += 1
            tests_found.append(
                {
                    "_id": doc["_id"],
                    "title": doc.get("title"),
                    "course_id": doc.get("course_id"),
                    "is_published": doc.get("is_published"),
                }
            )
            if len(tests_found) >= 25:
                break

    return {
        "student_id": student_id,
        "enrollments_count": len(enrollments),
        "enrolled_course_ids_raw": enrolled_course_ids_raw,
        "course_id_variants_used": [str(x) for x in course_id_variants[:50]],
        "tests_any_count": tests_any_count,
        "tests_published_count": tests_published_count,
        "tests_found_count": len(tests_found),
        "tests_found_sample": tests_found,
        "tests_any_sample": tests_any_found,
    }
