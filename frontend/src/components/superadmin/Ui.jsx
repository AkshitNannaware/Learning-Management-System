import React from 'react'

export function Modal({ open, title, description, children, onClose, maxWidth = 'max-w-xl' }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className={`w-full ${maxWidth} rounded-xl bg-white p-6 shadow-2xl`}>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description ? <p className="text-sm text-gray-500">{description}</p> : null}
        </div>
        {children}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export function Switch({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 rounded-full transition ${
        checked ? 'bg-indigo-600' : 'bg-gray-300'
      }`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
          checked ? 'left-5' : 'left-0.5'
        }`}
      />
    </button>
  )
}
