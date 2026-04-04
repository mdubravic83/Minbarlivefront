import { Link } from "react-router";
import {
  Building2,
  Users,
  ChevronRight,
  Plus,
  Settings,
  CheckCircle,
  XCircle,
  Edit,
} from "lucide-react";
import { MinaretIcon } from "./icons/MosqueIcon";

export function PlatformOrganizations() {
  const organizations = [
    {
      id: 1,
      name: "Downtown Masjid Network",
      type: "Super Organization",
      children: [
        {
          id: 2,
          name: "Downtown Main Hall",
          type: "Child Organization",
          admins: 3,
          modules: ["HutbaLive", "Studio", "Podcast"],
          plan: "Pro",
        },
        {
          id: 3,
          name: "Downtown Community Center",
          type: "Child Organization",
          admins: 2,
          modules: ["HutbaLive", "Podcast"],
          plan: "Standard",
        },
      ],
      admins: 5,
      modules: ["HutbaLive", "Studio", "Podcast", "HutbaAsistent"],
      plan: "Enterprise",
    },
    {
      id: 4,
      name: "Islamic Center North",
      type: "Single Organization",
      admins: 4,
      modules: ["HutbaLive", "Studio"],
      plan: "Pro",
    },
    {
      id: 5,
      name: "Community Masjid",
      type: "Single Organization",
      admins: 2,
      modules: ["Studio"],
      plan: "Standard",
    },
  ];

  const getModuleBadges = (modules: string[]) => {
    const colors: Record<string, string> = {
      HutbaLive: "bg-[#F0FDFA] text-[#0F766E]",
      Studio: "bg-blue-50 text-blue-700",
      Podcast: "bg-purple-50 text-purple-700",
      HutbaAsistent: "bg-yellow-50 text-yellow-700",
    };

    return modules.map((module) => (
      <span
        key={module}
        className={`px-1.5 sm:px-2 py-0.5 ${colors[module]} text-xs rounded-full font-medium whitespace-nowrap`}
      >
        {module}
      </span>
    ));
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
            Organizations & Admins
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            Manage organization hierarchy, admins, modules, and permissions
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-md">
          <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
          Add Organization
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold truncate">
                Total Orgs
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">47</p>
              <p className="text-xs text-[#475569] mt-1 truncate">+3 this month</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
              <Building2 size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold truncate">
                Super Orgs
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">8</p>
              <p className="text-xs text-[#475569] mt-1 truncate">With child orgs</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
              <Building2 size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold truncate">
                Total Admins
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">128</p>
              <p className="text-xs text-[#475569] mt-1 truncate">Across all orgs</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
              <Users size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold truncate">
                Active Now
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">12</p>
              <p className="text-xs text-green-600 mt-1 truncate">Active sessions</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
              <CheckCircle size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Organization List with Hierarchy */}
      <div className="bg-white border border-[#CBD5E1] rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[#CBD5E1] p-4 sm:p-5 bg-gradient-to-r from-[#F8FAFC] to-white">
          <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">Organization Hierarchy</h2>
        </div>

        <div className="divide-y divide-[#CBD5E1]">
          {organizations.map((org) => (
            <div key={org.id}>
              {/* Parent/Super Organization */}
              <div className="p-3 sm:p-5 hover:bg-[#F8FAFC] transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 w-full">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 size={18} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                        <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">{org.name}</h3>
                        <span className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 text-xs rounded-full font-medium whitespace-nowrap">
                          {org.type}
                        </span>
                        <span className="px-1.5 sm:px-2 py-0.5 bg-gradient-to-br from-[#FEF3C7] to-[#FEF9E5] text-[#92400E] text-xs rounded-full font-medium whitespace-nowrap">
                          {org.plan}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5">
                        <span className="text-xs sm:text-sm text-[#475569]">
                          {org.admins} admins
                        </span>
                        <span className="text-[#CBD5E1]">•</span>
                        <div className="flex flex-wrap gap-1">
                          {getModuleBadges(org.modules)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Link
                      to={`/platform/organizations/${org.id}`}
                      className="flex-1 sm:flex-none flex items-center justify-center p-2 hover:bg-white border border-[#CBD5E1] rounded-lg transition-colors"
                    >
                      <Settings size={14} className="text-[#475569] sm:w-4 sm:h-4" />
                    </Link>
                    <Link
                      to={`/platform/organizations/${org.id}/edit`}
                      className="flex-1 sm:flex-none flex items-center justify-center p-2 hover:bg-white border border-[#CBD5E1] rounded-lg transition-colors"
                    >
                      <Edit size={14} className="text-[#475569] sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Child Organizations */}
              {org.children && org.children.length > 0 && (
                <div className="bg-[#F8FAFC] pl-8 sm:pl-12">
                  {org.children.map((child) => (
                    <div
                      key={child.id}
                      className="p-3 sm:p-5 border-l-2 border-[#CBD5E1] hover:bg-white transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-2 sm:gap-3 flex-1 w-full">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-[#CBD5E1] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 size={14} className="text-[#0F766E] sm:w-4 sm:h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-1">
                              <h4 className="font-medium text-[#0F172A] text-sm">{child.name}</h4>
                              <span className="px-1.5 py-0.5 bg-[#F8FAFC] text-[#475569] text-xs rounded-full whitespace-nowrap">
                                {child.type}
                              </span>
                              <span className="px-1.5 py-0.5 bg-gradient-to-br from-[#FEF3C7] to-[#FEF9E5] text-[#92400E] text-xs rounded-full font-medium whitespace-nowrap">
                                {child.plan}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                              <span className="text-xs text-[#475569]">
                                {child.admins} admins
                              </span>
                              <span className="text-[#CBD5E1]">•</span>
                              <div className="flex flex-wrap gap-1">
                                {getModuleBadges(child.modules)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <Link
                            to={`/platform/organizations/${child.id}`}
                            className="flex-1 sm:flex-none flex items-center justify-center p-1.5 sm:p-2 hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg transition-colors"
                          >
                            <Settings size={12} className="text-[#475569] sm:w-[14px] sm:h-[14px]" />
                          </Link>
                          <Link
                            to={`/platform/organizations/${child.id}/edit`}
                            className="flex-1 sm:flex-none flex items-center justify-center p-1.5 sm:p-2 hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg transition-colors"
                          >
                            <Edit size={12} className="text-[#475569] sm:w-[14px] sm:h-[14px]" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}