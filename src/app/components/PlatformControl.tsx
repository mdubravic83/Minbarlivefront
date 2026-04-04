import { Link } from "react-router";
import {
  Building2,
  Users,
  Database,
  Cookie,
  BookOpen,
  DollarSign,
  Wrench,
  FileText,
  BarChart3,
  CheckCircle,
  Shield,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export function PlatformControl() {
  const stats = [
    { label: "Total Organizations", value: "47", change: "+3 this month", icon: Building2, color: "blue" },
    { label: "Active Admins", value: "128", change: "+12 this month", icon: Users, color: "green" },
    { label: "Active Sessions", value: "12", change: "8 HutbaLive, 4 Podcast", icon: TrendingUp, color: "purple" },
    { label: "Platform Cost (MTD)", value: "$8.2k", change: "Across all orgs", icon: DollarSign, color: "yellow" },
  ];

  const sections = [
    {
      title: "Organizations & Admins",
      description: "Manage organization hierarchy, admins, modules, and permissions",
      icon: Building2,
      link: "/platform/organizations",
      badge: "47 orgs",
      color: "from-blue-50 to-blue-100/50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Imports & Sources",
      description: "Manage cookies, khutbah KB sources, and import workflows",
      icon: Database,
      link: "/platform/imports",
      badge: "3 sources",
      color: "from-green-50 to-green-100/50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Raw Costs & Adjustments",
      description: "View raw costs, add adjustments, and manage billing details",
      icon: DollarSign,
      link: "/platform/raw-costs",
      badge: "$8.2k MTD",
      color: "from-yellow-50 to-yellow-100/50",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Dev Logs",
      description: "Searchable system logs with severity badges and detail views",
      icon: FileText,
      link: "/platform/logs",
      badge: "2.3k entries",
      color: "from-gray-50 to-gray-100/50",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Analytics",
      description: "Platform-wide analytics, scoped by organization or super org",
      icon: BarChart3,
      link: "/platform/analytics",
      badge: "All scopes",
      color: "from-purple-50 to-purple-100/50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Session Quality",
      description: "Quality reports, flagged sessions, terminology issues, corrections",
      icon: CheckCircle,
      link: "/platform/quality",
      badge: "7 flagged",
      color: "from-red-50 to-red-100/50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield size={20} className="text-[#D4AF37] sm:w-6 sm:h-6" />
            <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">Platform Control</h1>
          </div>
          <p className="text-xs sm:text-sm text-[#475569]">
            Owner-only access • Manage global operations, costs, and quality
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold truncate">
                    {stat.label}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">{stat.value}</p>
                  <p className="text-xs text-[#475569] mt-1 truncate">{stat.change}</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
                  <Icon size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alert Banner */}
      <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FEF9E5] border border-[#FCD34D] rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-2 sm:gap-3">
          <AlertCircle size={18} className="text-[#D97706] flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
          <div>
            <p className="font-semibold text-[#92400E] text-sm sm:text-base">Attention Required</p>
            <p className="text-xs sm:text-sm text-[#92400E] mt-1">
              7 sessions flagged for quality review • 3 organizations approaching usage limits
            </p>
          </div>
        </div>
      </div>

      {/* Platform Sections Grid */}
      <div>
        <h2 className="font-semibold text-[#0F172A] mb-3 sm:mb-4 text-sm sm:text-base">Platform Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Link
                key={idx}
                to={section.link}
                className={`bg-gradient-to-br ${section.color} border ${section.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all group`}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${section.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Icon size={20} className={`${section.iconColor} sm:w-6 sm:h-6`} />
                  </div>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 ${section.iconBg} ${section.iconColor} text-xs rounded-full font-semibold whitespace-nowrap`}>
                    {section.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-1 text-sm sm:text-base">{section.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569]">{section.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}