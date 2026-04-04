import { Building2, Users, Settings as SettingsIcon, Globe, Palette, Bell } from "lucide-react";

export function Organization() {
  const users = [
    {
      name: "Ahmed Hassan",
      email: "ahmed@organization.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Fatima Khan",
      email: "fatima@organization.com",
      role: "Editor",
      status: "Active",
    },
    {
      name: "Omar Abdullah",
      email: "omar@organization.com",
      role: "Viewer",
      status: "Active",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Organization & Settings</h1>
        <p className="text-sm text-[#475569] mt-1">
          Manage organization profile and preferences
        </p>
      </div>

      {/* Organization Profile */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
            <Building2 size={20} className="text-[#0F766E]" />
          </div>
          <h2 className="text-lg font-semibold text-[#0F172A]">Organization Profile</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#475569] mb-2">
              Organization Name
            </label>
            <input
              type="text"
              defaultValue="Main Organization"
              className="w-full px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#475569] mb-2">Website</label>
            <input
              type="url"
              defaultValue="https://organization.com"
              className="w-full px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-[#475569] mb-2">
              Organization Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]"
              defaultValue="A community-focused Islamic center serving multilingual audiences."
            />
          </div>
        </div>
      </div>

      {/* Branding Settings */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
            <Palette size={20} className="text-[#0F766E]" />
          </div>
          <h2 className="text-lg font-semibold text-[#0F172A]">Branding</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#475569] mb-2">
              Organization Logo
            </label>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#F8FAFC] border border-[#CBD5E1] rounded flex items-center justify-center">
                <Building2 size={32} className="text-[#CBD5E1]" />
              </div>
              <button className="px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Upload Logo
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#475569] mb-2">Primary Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                defaultValue="#0F766E"
                className="w-12 h-10 border border-[#CBD5E1] rounded cursor-pointer"
              />
              <input
                type="text"
                defaultValue="#0F766E"
                className="px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E] font-mono"
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg">
        <div className="border-b border-[#CBD5E1] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
              <Users size={20} className="text-[#0F766E]" />
            </div>
            <h2 className="font-semibold text-[#0F172A]">User Management</h2>
          </div>
          <button className="px-4 py-2 bg-[#0F766E] text-white text-sm rounded hover:bg-[#134E4A]">
            Invite User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1]">
              {users.map((user, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC]">
                  <td className="px-6 py-4 text-sm text-[#0F172A]">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-[#475569]">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                        user.role === "Admin"
                          ? "bg-[#F0FDFA] text-[#0F766E]"
                          : "bg-[#F8FAFC] text-[#475569]"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3 py-1.5 border border-[#CBD5E1] text-[#0F172A] text-xs rounded hover:bg-[#F8FAFC]">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Notification Settings */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
              <Bell size={20} className="text-[#0F766E]" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F172A]">
              Notification Preferences
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#475569]">Email notifications</span>
              <div className="w-12 h-6 bg-[#14B8A6] rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#475569]">Quality alerts</span>
              <div className="w-12 h-6 bg-[#14B8A6] rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#475569]">Usage warnings</span>
              <div className="w-12 h-6 bg-[#CBD5E1] rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Defaults */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
              <SettingsIcon size={20} className="text-[#0F766E]" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F172A]">Studio Defaults</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Default source language
              </label>
              <select className="w-full px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]">
                <option>Arabic</option>
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Auto-generate subtitles
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#0F766E] rounded border-[#CBD5E1]"
                />
                <span className="text-sm text-[#475569]">Enabled by default</span>
              </div>
            </div>
          </div>
        </div>

        {/* Podcast Defaults */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
              <SettingsIcon size={20} className="text-[#0F766E]" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F172A]">
              Podcast Companion Defaults
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Default visibility
              </label>
              <select className="w-full px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Auto-generate QR codes
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-[#0F766E] rounded border-[#CBD5E1]"
                />
                <span className="text-sm text-[#475569]">Enabled by default</span>
              </div>
            </div>
          </div>
        </div>

        {/* Public Page Settings */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center">
              <Globe size={20} className="text-[#0F766E]" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F172A]">Public Pages</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Public library URL
              </label>
              <input
                type="text"
                value="minbarlive.com/org/main"
                readOnly
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-[#475569] mb-2">
                Custom domain (coming soon)
              </label>
              <input
                type="text"
                placeholder="library.organization.com"
                disabled
                className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-sm text-[#CBD5E1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}