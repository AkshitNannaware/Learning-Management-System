# services/instructor.py (extension)
from bson import ObjectId

async def get_tests_for_student(db, student_id):
    # Find all published tests for courses the student is enrolled in.
    # This function must be tolerant to data stored as either `str` or `ObjectId`
    # in `enrollments.student_id` / `enrollments.course_id` and `tests.course_id`.
    def _id_variants(raw_id: str) -> list:
        raw = str(raw_id)
        variants = [raw]
        if ObjectId.is_valid(raw):
            variants.append(ObjectId(raw))
        return variants

    # 1. Find enrolled course_ids
    student_variants = _id_variants(str(student_id))
    enrollments = await db["enrollments"].find({"student_id": {"$in": student_variants}}).to_list(None)
    course_ids: list = []
    for e in enrollments:
        cid = e.get("course_id")
        if not cid:
            continue
        course_ids.extend(_id_variants(str(cid)))

    if not course_ids:
        return []

    # 2. Find published tests for those courses
    tests = []
    cursor = db["tests"].find({
        "course_id": {"$in": course_ids},
        "is_published": True
    })
    async for doc in cursor:
        doc["_id"] = str(doc["_id"])
        tests.append(doc)
    return tests
