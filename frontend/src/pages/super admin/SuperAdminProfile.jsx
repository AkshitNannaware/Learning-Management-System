import React, { useEffect, useMemo, useState } from 'react'
import { api } from '../../lib/api'

export default function SuperAdminProfile() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [initialFullName, setInitialFullName] = useState('')
  const [initialEmail, setInitialEmail] = useState('')

  const isChanged = useMemo(
    () => fullName.trim() !== initialFullName.trim() || email.trim().toLowerCase() !== initialEmail.trim().toLowerCase(),
    [fullName, email, initialFullName, initialEmail],
  )

  useEffect(() => {
    let cancelled = false

    const loadProfile = async () => {
      try {
        setLoading(true)
        setError('')
        const data = await api('/auth/me')
        if (cancelled) return
        const fetchedName = data?.full_name || ''
        const fetchedEmail = data?.email || ''
        setFullName(fetchedName)
        setEmail(fetchedEmail)
        setInitialFullName(fetchedName)
        setInitialEmail(fetchedEmail)
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || 'Unable to load super admin profile')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadProfile()
    return () => {
      cancelled = true
    }
  }, [])

  const handleSave = async () => {
    try {
      setSaving(true)
      setError('')
      setSuccess('')
      const payload = {
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
      }
      await api('/auth/me', {
        method: 'PATCH',
        body: JSON.stringify(payload),
      })
      setInitialFullName(payload.full_name)
      setInitialEmail(payload.email)
      setSuccess('Profile updated successfully')
    } catch (err) {
      setError(err?.message || 'Unable to update profile')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-full bg-[#F7FAFD] p-4 sm:p-6 lg:p-7">
      <section className="rounded-[8px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-5 sm:p-6">
        <h2 className="text-[26px] font-bold text-[#0f172a] sm:text-[30px]">Super Admin Profile</h2>
        <p className="mt-2 text-[14px] text-[#64748b]">
          Manage developer owner identity, account preferences, and platform-level access settings.
        </p>
      </section>

      <section className="mt-6 rounded-[8px] border border-black/[0.08] bg-white p-5 sm:p-6">
        <h3 className="text-[18px] font-bold text-[#0f172a]">Account details</h3>
        {error ? <p className="mt-3 text-[13px] text-red-600">{error}</p> : null}
        {success ? <p className="mt-3 text-[13px] text-[#0284c7]">{success}</p> : null}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-[#0f172a]">Full name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={loading || saving}
              className="h-10 w-full rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
            />
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-[#0f172a]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || saving}
              className="h-10 w-full rounded-[6px] border border-black/[0.08] px-3 text-[13px]"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading || saving || !isChanged}
            className="h-10 rounded-[6px] bg-[#5b3df6] px-4 text-[13px] font-medium text-white hover:bg-[#4c2dd9] disabled:opacity-60"
          >
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </section>
    </div>
  )
}
