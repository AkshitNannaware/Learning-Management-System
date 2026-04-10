import React from 'react'
import { useState } from 'react'
import { Settings, Bell, Shield, Database, Mail, Globe, Save, X, Plus, Search, Upload, Download } from 'lucide-react'
import { Switch } from '../../components/superadmin/Ui'

export default function SuperAdminSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [autoBackup, setAutoBackup] = useState(true)

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex flex-col gap-[11px] items-start relative shrink-0">
            <div className="bg-[#ffd966] flex items-center px-[10px] py-[6.5px] rounded-[12px] shrink-0">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                Configuration hub
              </div>
            </div>

            <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
              Configure platform-wide settings and preferences
            </div>

            <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
              Manage general settings, notifications, security, backups, email configuration, and localization.
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[12px]">
            <div className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <Save className="h-[18px] w-[18px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Save All Settings
              </div>
            </div>
            <div className="border border-black/[0.08] flex gap-[8px] h-[40px] items-center justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
              <X className="h-[18px] w-[18px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Reset to Default
              </div>
            </div>
          </div>
        </section>

        {/* Settings Sections */}
        <div className="max-w-full space-y-[24px]">
          {/* General Settings */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Settings className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">General Settings</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Field label="Platform Name" defaultValue="LMS Platform" />
              <Field label="Platform URL" defaultValue="https://lms.platform.com" />
              <Field label="Support Email" defaultValue="support@lms.platform.com" />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Bell className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Notifications</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Toggle label="Email Notifications" checked={emailNotifications} onChange={setEmailNotifications} />
              <Toggle label="Push Notifications" checked={pushNotifications} onChange={setPushNotifications} />
              <Field label="Notification Recipients" defaultValue="admin@example.com, manager@example.com" />
            </div>
          </div>

          {/* Security */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Shield className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Security</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Toggle label="Two-Factor Authentication" checked={twoFactorAuth} onChange={setTwoFactorAuth} />
              <Field label="Session Timeout (minutes)" defaultValue="30" />
              <Field label="Password Policy" defaultValue="Minimum 8 characters, 1 number, 1 special character" />
            </div>
          </div>

          {/* Database & Backup */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Database className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Database &amp; Backup</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Toggle label="Automatic Backups" checked={autoBackup} onChange={setAutoBackup} />
              <div className="grid grid-cols-2 gap-[16px]">
                <Field label="Backup Frequency" defaultValue="Daily" />
                <Field label="Retention Period (days)" defaultValue="30" />
              </div>
              <div className="pt-[8px]">
                <button className="bg-[#e8f5ff] border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] rounded-[6px]">
                  <Database className="h-[16px] w-[16px] text-[#5b3df6]" />
                  <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                    Backup Now
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Email Configuration */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Mail className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Email Configuration</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Field label="SMTP Host" defaultValue="smtp.example.com" />
              <Field label="SMTP Port" defaultValue="587" />
              <Field label="SMTP Username" defaultValue="admin@example.com" />
              <Field label="SMTP Password" defaultValue="••••••••" type="password" />
            </div>
          </div>

          {/* Localization */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[18px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#e8f5ff] flex items-center justify-center rounded-[6px] shrink-0 size-[40px]">
                <Globe className="h-[18px] w-[18px] text-[#5b3df6]" />
              </div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Localization</h3>
            </div>
            <div className="w-full space-y-[16px]">
              <Field label="Default Language" defaultValue="English" />
              <Field label="Timezone" defaultValue="Asia/Kolkata (IST)" />
              <div className="grid grid-cols-2 gap-[16px]">
                <Field label="Currency" defaultValue="INR (₹)" />
                <Field label="Date Format" defaultValue="DD/MM/YYYY" />
              </div>
              <Field label="Time Format" defaultValue="12-hour (hh:mm AM/PM)" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-[12px] pt-[8px]">
            <button className="border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] rounded-[6px] bg-white">
              <X className="h-[16px] w-[16px] text-[#94a3b8]" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Cancel
              </div>
            </button>
            <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px]">
              <Save className="h-[16px] w-[16px] text-white" />
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                Save All Settings
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, defaultValue, type = "text" }) {
  return (
    <label className="flex flex-col gap-[6px]">
      <span className="text-[13px] font-medium text-[#0f172a]">{label}</span>
      <input 
        type={type}
        defaultValue={defaultValue} 
        className="w-full border border-black/[0.08] rounded-[6px] px-[15px] py-[10px] text-[14px] focus:outline-none focus:border-[#5b3df6] transition-colors" 
      />
    </label>
  )
}

function Toggle({ label, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-[8px]">
      <span className="text-[14px] font-medium text-[#0f172a]">{label}</span>
      <Switch checked={checked} onChange={onChange} />
    </div>
  )
}
