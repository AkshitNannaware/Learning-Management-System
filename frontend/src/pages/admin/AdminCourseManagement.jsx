import React, { useState } from 'react'
import {
  Search,
  Upload,
  ChevronDown,
  ImageIcon,
  FileStack,
  Check,
  ClipboardList,
  Rocket,
} from 'lucide-react'

const AVATAR =
  'https://www.figma.com/api/mcp/asset/cac9530e-475b-4f0c-b716-69a17ab9bc2f'

const steps = [
  { id: 'basics', label: '1. Basics' },
  { id: 'content', label: '2. Content' },
  { id: 'pricing', label: '3. Pricing' },
  { id: 'publish', label: '4. Publish' },
]

const modules = [
  {
    n: '01',
    title: 'Foundations of scientific thinking',
    meta: '3 lessons • 1 live workshop • Intro experiments kit',
  },
  {
    n: '02',
    title: 'Robotics basics and sensors',
    meta: '4 lessons • 2 downloadable worksheets • Coding starter lab',
  },
  {
    n: '03',
    title: 'Build, test, and present',
    meta: '5 lessons • Final project • Peer showcase session',
  },
]

function FieldLabel({ children }) {
  return <label className="text-[13px] font-medium text-[#0f1724]">{children}</label>
}

function InputShell({ children, className = '' }) {
  return (
    <div
      className={`flex min-h-11 items-center rounded-md border border-black/[0.08] bg-white px-[15px] py-2 ${className}`}
    >
      {children}
    </div>
  )
}

export default function AdminCourseManagement() {
  const [activeStep, setActiveStep] = useState('basics')

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-7">
        <div>
          <p className="text-[13px] font-medium text-[#94a3b8]">Client admin panel</p>
          <h1 className="text-2xl font-bold leading-tight text-[#0f172a]">Course Management</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 min-w-[280px] items-center gap-2.5 rounded-md border border-black/[0.08] bg-white px-[15px]">
            <Search className="h-[18px] w-[18px] shrink-0 text-[#94a3b8]" />
            <input
              type="search"
              placeholder="Search students, courses, or classes"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-black/[0.08] bg-[#e8f5ff] px-[17px] text-sm font-medium text-[#0f172a]"
          >
            <Upload className="h-[18px] w-[18px]" />
            Bulk Upload
          </button>
          <div className="flex items-center gap-3 rounded-md border border-black/[0.08] bg-white px-2.5 py-2">
            <img
              src={AVATAR}
              alt=""
              className="h-9 w-9 shrink-0 rounded-md object-cover"
            />
            <div className="text-left">
              <div className="text-sm font-semibold leading-tight">Rahul Mehta</div>
              <div className="text-[13px] text-[#94a3b8]">Institute Owner</div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8 pb-16">
        <section
          className="relative overflow-hidden rounded-lg border border-black/[0.08] p-6"
          style={{
            background: 'linear-gradient(127.823deg, rgb(255, 255, 255) 0%, rgb(232, 245, 255) 100%)',
          }}
        >
          <div className="flex flex-col gap-4 pr-4 md:pr-72">
            <span className="inline-flex w-fit rounded-xl bg-[#ffd966] px-2.5 py-1.5 text-[11.915px] font-medium text-[#4b2e00]">
              Create
            </span>
            <h2 className="max-w-[650px] text-[27.801px] font-bold leading-[1.2] text-[#0f172a]">
              Create a new course with modules, pricing, and publishing settings.
            </h2>
            <p className="max-w-[650px] text-[13.9px] text-[#94a3b8]">
              Set up the essentials first, then move through content, review, and publishing. The layout stays
              balanced and spacious so admins can complete setup without losing context.
            </p>
            <div className="inline-flex flex-wrap gap-2 rounded-xl bg-[#f1f5f9] p-1">
              {steps.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(s.id)}
                  className={`rounded-xl px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    activeStep === s.id
                      ? 'border border-black/[0.08] bg-white text-[#0f1724]'
                      : 'text-[#6b7280] hover:text-[#0f1724]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:absolute md:right-6 md:top-6 md:mt-0">
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]"
            >
              Save Draft
            </button>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#6c5ce7] px-3.5 text-sm font-medium text-white"
            >
              Continue to Content
            </button>
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1 space-y-6">
            <section className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0f1724]">Course basics</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                    Start with the core details learners and instructors will see across the platform.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">
                  Auto-saved
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 gap-x-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <FieldLabel>Course title</FieldLabel>
                  <InputShell>
                    <span className="text-sm text-[#0f1724]">STEM Explorers Advanced</span>
                  </InputShell>
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel>Category</FieldLabel>
                  <InputShell className="justify-between">
                    <span className="text-sm text-[#0f1724]">Science & Technology</span>
                    <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
                  </InputShell>
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel>Level</FieldLabel>
                  <InputShell className="justify-between">
                    <span className="text-sm text-[#0f1724]">Intermediate</span>
                    <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
                  </InputShell>
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel>Course format</FieldLabel>
                  <InputShell className="justify-between">
                    <span className="text-sm text-[#0f1724]">Hybrid · Live + Recorded</span>
                    <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
                  </InputShell>
                </div>

                <div className="md:col-span-2">
                  <FieldLabel>Short description</FieldLabel>
                  <div className="mt-2 rounded-md border border-black/[0.08] bg-white px-[15px] py-3">
                    <p className="text-sm leading-relaxed text-[#0f1724]">
                      A structured STEM program for ages 10–14 covering robotics basics, hands-on science
                      experiments, and guided problem-solving through weekly live sessions and recorded lessons.
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-[#6b7280]">
                    Keep this under 220 characters for listing cards and landing pages.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <FieldLabel>Duration</FieldLabel>
                  <InputShell>
                    <span className="text-sm text-[#0f1724]">8 weeks · 24 lessons</span>
                  </InputShell>
                </div>
                <div className="flex flex-col gap-2">
                  <FieldLabel>Primary instructor</FieldLabel>
                  <InputShell className="justify-between">
                    <span className="text-sm text-[#0f1724]">Aisha Verma</span>
                    <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
                  </InputShell>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0f1724]">Cover and learning assets</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                    Add the hero visual and starter resources before building the full course outline.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-10 items-center rounded-md bg-[#e9f2ff] px-3.5 text-sm font-medium text-[#0f1724]"
                >
                  Asset Library
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex flex-col gap-4 rounded-lg bg-[#f1f5f9] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#edebff]">
                      <ImageIcon className="h-[22px] w-[22px] text-[#5b3df6]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f1724]">Course cover image</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#6b7280]">
                        Upload a wide visual for course cards and public listings. Recommended ratio: 16:9.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]"
                  >
                    Choose File
                  </button>
                </div>

                <div className="flex flex-col gap-4 rounded-lg bg-[#f1f5f9] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#edebff]">
                      <FileStack className="h-[22px] w-[22px] text-[#5b3df6]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0f1724]">Starter files and PDFs</div>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#6b7280]">
                        Upload lesson notes, worksheets, and welcome materials learners receive at enrollment.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]"
                  >
                    Upload Files
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-black/[0.08] bg-white p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0f1724]">Initial module outline</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                    Create the first structure now. You can add videos, quizzes, and assignments in the next step.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-10 items-center rounded-md bg-[#6c5ce7] px-3.5 text-sm font-medium text-white"
                >
                  Add Module
                </button>
              </div>

              <ul className="mt-5 space-y-3">
                {modules.map((m) => (
                  <li
                    key={m.n}
                    className="flex flex-col gap-3 rounded-md bg-[#f1f5f9] p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white text-[13px] font-semibold text-[#0f1724]">
                        {m.n}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0f1724]">{m.title}</div>
                        <div className="mt-1 text-xs text-[#6b7280]">{m.meta}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]"
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="w-full shrink-0 space-y-6 lg:w-[360px]">
            <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
              <h3 className="text-base font-semibold text-[#0f1724]">Setup summary</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                A quick view of what is ready before the course goes to review.
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3.5 py-3">
                  <span className="text-[13px] text-[#0f1724]">Basics completed</span>
                  <span className="rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">
                    Ready
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3.5 py-3">
                  <span className="text-[13px] text-[#0f1724]">3 starter modules added</span>
                  <span className="text-[13px] text-[#6b7280]">In progress</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3.5 py-3">
                  <span className="text-[13px] text-[#0f1724]">Pricing not set yet</span>
                  <span className="text-[13px] text-[#6b7280]">Pending</span>
                </div>
                <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3.5 py-3">
                  <span className="text-[13px] text-[#0f1724]">Publishing checklist</span>
                  <span className="text-[13px] text-[#6b7280]">2/5 done</span>
                </div>
              </div>

              <div className="my-4 h-px bg-black/[0.08]" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Estimated launch</span>
                  <span className="text-[#0f1724]">Next Tuesday</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Assigned owner</span>
                  <span className="text-[#0f1724]">Rahul Mehta</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Visibility</span>
                  <span className="text-[#0f1724]">Private draft</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
              <h3 className="text-base font-semibold text-[#0f1724]">Pricing preview</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                Balanced admin layout with quick commercial decisions available from the side panel.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <FieldLabel>Base price</FieldLabel>
                  <InputShell className="mt-2">
                    <span className="text-sm text-[#0f1724]">₹4,999</span>
                  </InputShell>
                </div>
                <div>
                  <FieldLabel>Enrollment cap</FieldLabel>
                  <InputShell className="mt-2">
                    <span className="text-sm text-[#0f1724]">120 students</span>
                  </InputShell>
                </div>
                <div>
                  <FieldLabel>Discount eligibility</FieldLabel>
                  <InputShell className="mt-2 justify-between">
                    <span className="text-sm text-[#0f1724]">Coupons allowed</span>
                    <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
                  </InputShell>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full min-h-10 items-center justify-center rounded-md bg-[#e9f2ff] text-sm font-medium text-[#0f1724]"
              >
                Open Pricing Step
              </button>
            </div>

            <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
              <h3 className="text-base font-semibold text-[#0f1724]">Publishing workflow</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">
                Follow the same approval path used in the main dashboard.
              </p>

              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#edebff]">
                    <Check className="h-4 w-4 text-[#5b3df6]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f1724]">Draft</div>
                    <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                      Course basics and first modules are being created.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#edebff]">
                    <ClipboardList className="h-4 w-4 text-[#5b3df6]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f1724]">Review</div>
                    <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                      Academic team checks curriculum coverage and downloadable files.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#edebff]">
                    <Rocket className="h-4 w-4 text-[#5b3df6]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0f1724]">Publish</div>
                    <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                      Make the course visible to learners after pricing and banner assets are approved.
                    </p>
                  </div>
                </li>
              </ul>

              <button
                type="button"
                className="mt-4 flex w-full min-h-10 items-center justify-center rounded-md bg-[#6c5ce7] text-sm font-medium text-white"
              >
                Send for Review
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
