import React, { useEffect, useState } from 'react'
import { BookOpen, Clock, PlayCircle } from 'lucide-react'
import { api } from '../../lib/api'

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80'

function getYoutubeVideoId(url) {
	if (!url) return ''

	try {
		const parsed = new URL(url)
		const host = parsed.hostname.replace(/^www\./, '')

		if (host === 'youtu.be') {
			return parsed.pathname.split('/').filter(Boolean)[0] || ''
		}

		if (host === 'youtube.com' || host === 'm.youtube.com') {
			const fromQuery = parsed.searchParams.get('v')
			if (fromQuery) return fromQuery

			const parts = parsed.pathname.split('/').filter(Boolean)
			if (parts[0] === 'embed' || parts[0] === 'shorts') {
				return parts[1] || ''
			}
		}
	} catch {
		return ''
	}

	return ''
}

function getCourseImage(course) {
	if (course?.image) return course.image
	if (course?.thumbnail) return course.thumbnail
	if (course?.banner) return course.banner

	const videoId = getYoutubeVideoId(course?.youtube_url)
	if (videoId) {
		return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
	}

	return FALLBACK_IMAGE
}

function formatDate(value) {
	if (!value) return 'Recently enrolled'

	const date = new Date(value)
	if (Number.isNaN(date.getTime())) return 'Recently enrolled'

	return date.toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})
}

export default function StudentMyCourses() {
	const [courses, setCourses] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		setLoading(true)
		setError('')
		Promise.all([
			api('/lms/enrollments?limit=200').catch(() => ({ items: [] })),
			api('/lms/courses?limit=500').catch(() => ({ items: [] })),
		])
			.then(([enr, crs]) => {
				const enrollMap = new Map((enr.items || []).map((x) => [x.course_id, x]))
				const mapped = (crs.items || [])
					.filter((course) => enrollMap.has(course._id))
					.map((course) => ({ ...course, enrolledAt: enrollMap.get(course._id)?.created_at || null }))
				setCourses(mapped)
			})
			.catch((err) => {
				setCourses([])
				setError(err?.message || 'Unable to load courses.')
			})
			.finally(() => setLoading(false))
	}, [])

	return (
		<div className="min-h-full bg-[#F7FAFD]">
			<div className="bg-gradient-to-b from-[#f6f8fa] to-[#f7fcff] p-4 sm:p-6 lg:p-7">
				<section className="rounded-[8px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] px-4 py-5 sm:px-6 sm:py-6">
					<span className="inline-flex h-[28px] items-center rounded-[12px] bg-[#ffd966] px-[10px] text-[12px] font-medium text-[#4b2e00]">
						Student Dashboard
					</span>
					<h1 className="mt-3 text-[24px] font-bold leading-tight text-[#0f172a] sm:text-[30px]">My Courses</h1>
					<p className="mt-2 max-w-[760px] text-[14px] text-[#64748b]">
						Yahan aapke saare enrolled courses cards me dikh rahe hain. Checkout successful hone ke baad course automatically yahin add ho jayega.
					</p>
					<div className="mt-4 inline-flex h-[36px] items-center rounded-[12px] border border-black/[0.08] bg-white px-[16px] text-[12px] font-medium text-[#0f172a]">
						Total enrolled courses: {courses.length}
					</div>
				</section>

				<section className="mt-6 rounded-[8px] border border-black/[0.08] bg-white p-4 sm:p-5">
					<div className="mb-4 flex items-center justify-between gap-3">
						<h2 className="text-[20px] font-bold text-[#0f172a]">Enrolled Courses</h2>
						<span className="inline-flex items-center rounded-[10px] bg-[#e8f5ff] px-3 py-1 text-[11px] font-medium text-[#2563eb]">
							{courses.length} active
						</span>
					</div>

					{error ? <p className="mb-3 text-[12px] text-red-600">{error}</p> : null}

					{loading ? (
						<div className="rounded-[16px] border border-black/[0.08] bg-[#fafcff] p-8 text-center text-[13px] text-[#64748b]">
							Loading enrolled courses...
						</div>
					) : courses.length > 0 ? (
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
							{courses.map((course, index) => (
								<article key={`${course?.title || 'course'}-${index}`} className="overflow-hidden rounded-[16px] border border-black/[0.08] bg-[#fafcff]">
									<img
										src={getCourseImage(course)}
										alt={course?.title || 'Course'}
										className="h-[170px] w-full object-cover"
									/>

									<div className="space-y-4 p-4">
										<div className="flex flex-wrap gap-2">
												<span className="inline-flex h-[26px] items-center rounded-[10px] bg-[#f1f5f9] px-[10px] text-[11px] font-medium text-[#0f172a]">
													{course?.course_type || 'Course'}
												</span>
										</div>

										<div>
											<h3 className="text-[18px] font-bold text-[#0f172a]">{course?.title || 'Untitled course'}</h3>
												<p className="mt-1 text-[13px] text-[#64748b]">{course?.description || 'No description available.'}</p>
										</div>

										<div className="grid grid-cols-2 gap-2 text-[12px]">
											<div className="rounded-[10px] bg-white p-2.5">
												<p className="text-[#94a3b8]">Price</p>
													<p className="mt-1 font-semibold text-[#0f172a]">Rs. {Number(course?.price || 0)}</p>
											</div>
											<div className="rounded-[10px] bg-white p-2.5">
												<p className="text-[#94a3b8]">Enrolled</p>
												<p className="mt-1 font-semibold text-[#0f172a]">{formatDate(course?.enrolledAt)}</p>
											</div>
										</div>

										<div className="space-y-2 text-[12px] text-[#64748b]">
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4 text-[#5b3df6]" />
													<span>{course?.course_type === 'paid' ? 'Paid access' : 'Self-paced'}</span>
											</div>
										</div>

										<button
											type="button"
												onClick={() => {
													if (course?.youtube_url) window.open(course.youtube_url, '_blank')
												}}
												disabled={!course?.youtube_url}
											className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-[#5b3df6] px-4 text-[13px] font-semibold text-white hover:bg-[#4a2ed8]"
										>
											<PlayCircle className="h-4 w-4" />
												{course?.youtube_url ? 'Start Learning' : 'Content Not Available'}
										</button>
									</div>
								</article>
							))}
						</div>
					) : (
						<div className="rounded-[16px] border border-dashed border-black/[0.12] bg-[#fafcff] p-8 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ede7ff] text-[#5b3df6]">
								<BookOpen className="h-7 w-7" />
							</div>
							<h3 className="mt-4 text-[18px] font-bold text-[#0f172a]">No enrolled courses yet</h3>
							<p className="mt-2 text-[13px] text-[#64748b]">
								Browse Courses page se enroll karo, successful checkout ke baad courses yahan cards me dikhenge.
							</p>
						</div>
					)}
				</section>
			</div>
		</div>
	)
}
