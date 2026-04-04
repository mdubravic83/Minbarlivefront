import { Activity, Podcast, DollarSign, AlertCircle, Clock, Eye, CheckCircle, AlertTriangle, Plus, Upload, Sparkles, TrendingUp, Users, Building2, BarChart3 } from "lucide-react";
import { Link } from "react-router";
import { MinaretIcon, MosqueIconSimple } from "./icons/MosqueIcon";

// Simulate user's role, modules, and scope
const userRole = "Owner"; // Owner, Super Admin, Admin
const userModules = ["HutbaLive", "Studio", "Podcast", "HutbaAsistent"];
const currentScope = "All Organizations"; // For Owner/Super Admin

export function Dashboard() {
  // Determine primary module for focused CTA
  const primaryModule = userModules.includes("HutbaLive")
    ? "HutbaLive"
    : userModules.includes("Studio")
    ? "Studio"
    : userModules.includes("Podcast")
    ? "Podcast"
    : null;

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">Dashboard</h1>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            {userRole === "Owner" && `Viewing: ${currentScope}`}
            {userRole === "Super Admin" && `Managing scoped organizations`}
            {userRole === "Admin" && "Organization overview"}
          </p>
        </div>

        {/* Module-Specific Primary Action */}
        {primaryModule === "HutbaLive" && (
          <Link
            to="/hutba-live/sessions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm sm:text-base font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg hover:shadow-xl"
          >
            <MinaretIcon size={18} className="sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Start HutbaLive Session</span>
          </Link>
        )}

        {primaryModule === "Studio" && (
          <Link
            to="/studio/upload"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm sm:text-base font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg hover:shadow-xl"
          >
            <Upload size={18} className="sm:w-5 sm:h-5" />
            Upload Video
          </Link>
        )}

        {primaryModule === "Podcast" && (
          <Link
            to="/podcast-companion/sessions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm sm:text-base font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg hover:shadow-xl"
          >
            <Podcast size={18} className="sm:w-5 sm:h-5" />
            Start Podcast Session
          </Link>
        )}
      </div>

      {/* Owner-Specific Global Metrics */}
      {userRole === "Owner" && (
        <div className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div>
              <h2 className="text-base sm:text-lg font-semibold">Platform Overview</h2>
              <p className="text-xs sm:text-sm opacity-90 mt-1">All organizations • Global metrics</p>
            </div>
            <Link
              to="/platform"
              className="w-full sm:w-auto text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs sm:text-sm font-medium transition-colors"
            >
              Platform Control
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm opacity-90">Total Orgs</span>
                <Building2 size={14} className="sm:w-4 sm:h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold">47</p>
              <p className="text-xs opacity-75 mt-1">+3 this month</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm opacity-90">Active</span>
                <Activity size={14} className="sm:w-4 sm:h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold">12</p>
              <p className="text-xs opacity-75 mt-1">Live sessions</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm opacity-90">Cost MTD</span>
                <DollarSign size={14} className="sm:w-4 sm:h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold">$8.2k</p>
              <p className="text-xs opacity-75 mt-1">All orgs</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm opacity-90">Quality</span>
                <BarChart3 size={14} className="sm:w-4 sm:h-4" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold">94%</p>
              <p className="text-xs opacity-75 mt-1">Average</p>
            </div>
          </div>
        </div>
      )}

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {userModules.includes("HutbaLive") && (
          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold">
                  {userRole === "Owner" ? "Global Sessions" : "Active Sessions"}
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">
                  {userRole === "Owner" ? "12" : "2"}
                </p>
                <div className="text-xs text-red-600 mt-1 flex items-center gap-1.5 font-medium">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Broadcasting now
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MinaretIcon size={20} className="text-red-600 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold">
                Active Viewers
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">
                {userRole === "Owner" ? "1,847" : "412"}
              </p>
              <p className="text-xs text-green-600 mt-1 font-medium">
                +{userRole === "Owner" ? "142" : "28"} in 10min
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        {userModules.includes("Studio") && (
          <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold">
                  Studio Jobs
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">
                  {userRole === "Owner" ? "84" : "12"}
                </p>
                <p className="text-xs text-[#475569] mt-1">
                  {userRole === "Owner" ? "23 processing" : "3 processing"}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0">
                <Activity size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white border border-[#CBD5E1] rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide font-semibold">
                {userRole === "Owner" ? "Platform Cost" : "Monthly Cost"}
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mt-2">
                ${userRole === "Owner" ? "8.2k" : "248"}
              </p>
              <p className="text-xs text-[#475569] mt-1">
                {userRole === "Owner" ? "MTD all orgs" : "85/100 hours"}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0FDFA] rounded-xl flex items-center justify-center flex-shrink-0">
              <DollarSign size={20} className="text-[#0F766E] sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Module Quick Access Cards */}
      <div>
        <h2 className="font-semibold text-[#0F172A] mb-3 sm:mb-4 text-sm sm:text-base">Your Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {userModules.includes("HutbaLive") && (
            <Link
              to="/hutba-live/sessions"
              className="bg-gradient-to-br from-[#F0FDFA] via-[#E6FAF5] to-white border-2 border-[#0F766E]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#0F766E] transition-all hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MinaretIcon size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-red-100 to-red-50 text-red-700 text-xs rounded-full border border-red-200 font-semibold">
                  {userRole === "Owner" ? "12 Live" : "2 Live"}
                </span>
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1 text-sm sm:text-base">HutbaLive</h3>
              <p className="text-xs sm:text-sm text-[#475569]">Manage live khutbah sessions</p>
            </Link>
          )}

          {userModules.includes("Studio") && (
            <Link
              to="/studio/jobs"
              className="bg-gradient-to-br from-white to-[#F8FAFC] border-2 border-[#CBD5E1] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#0F766E] transition-all hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Upload size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 text-xs rounded-full border border-blue-200 font-semibold">
                  {userRole === "Owner" ? "23 Processing" : "3 Processing"}
                </span>
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1 text-sm sm:text-base">Studio</h3>
              <p className="text-xs sm:text-sm text-[#475569]">Process recorded videos</p>
            </Link>
          )}

          {userModules.includes("Podcast") && (
            <Link
              to="/podcast-companion/sessions"
              className="bg-gradient-to-br from-white to-[#F8FAFC] border-2 border-[#CBD5E1] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#0F766E] transition-all hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Podcast size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-br from-green-100 to-green-50 text-green-700 text-xs rounded-full border border-green-200 font-semibold">
                  {userRole === "Owner" ? "7 Active" : "2 Active"}
                </span>
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1 text-sm sm:text-base">Podcast Companion</h3>
              <p className="text-xs sm:text-sm text-[#475569]">Live podcast transcription</p>
            </Link>
          )}

          {userModules.includes("HutbaAsistent") && (
            <Link
              to="/hutba-asistent"
              className="bg-gradient-to-br from-[#FEF3C7] via-[#FEF9E5] to-white border-2 border-[#D4AF37]/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#D4AF37] transition-all hover:shadow-xl group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1 text-sm sm:text-base">HutbaAsistent</h3>
              <p className="text-xs sm:text-sm text-[#475569]">AI khutbah preparation</p>
            </Link>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white border border-[#CBD5E1] rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="border-b border-[#CBD5E1] p-4 sm:p-5 bg-gradient-to-r from-[#F8FAFC] to-white">
            <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">
              {userRole === "Owner" ? "Platform Activity" : "Recent Activity"}
            </h2>
          </div>
          <div className="divide-y divide-[#CBD5E1]">
            {[
              {
                title: "Friday Khutbah - English Translation",
                org: userRole === "Owner" ? "Downtown Masjid" : null,
                type: "HutbaLive",
                status: "Live",
                time: "Now",
                link: "/hutba-live/sessions/1",
                module: "HutbaLive",
              },
              {
                title: "Ramadan Reflections Episode 5",
                org: userRole === "Owner" ? "Islamic Center North" : null,
                type: "Podcast Companion",
                status: "Live",
                time: "15 min ago",
                link: "/podcast-companion/sessions/1",
                module: "Podcast",
              },
              {
                title: "Tafsir Series - Surah Al-Baqarah",
                org: userRole === "Owner" ? "Community Masjid" : null,
                type: "Studio Processing",
                status: "Processing",
                time: "2 hours ago",
                link: "/studio/jobs/1",
                module: "Studio",
              },
              {
                title: "Youth Lecture - Identity & Faith",
                org: userRole === "Owner" ? "Youth Islamic Center" : null,
                type: "Studio Processing",
                status: "Complete",
                time: "Yesterday",
                link: "/studio/jobs/2",
                module: "Studio",
              },
              {
                title: "Community Q&A Session",
                org: userRole === "Owner" ? "Downtown Masjid" : null,
                type: "HutbaLive",
                status: "Ended",
                time: "2 days ago",
                link: "/hutba-live/archive/2",
                module: "HutbaLive",
              },
            ]
              .filter((item) => userModules.includes(item.module))
              .slice(0, 5)
              .map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hover:bg-gradient-to-r hover:from-[#F8FAFC] hover:to-white transition-all"
                >
                  <div
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${
                      item.status === "Live"
                        ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50"
                        : item.status === "Processing"
                        ? "bg-blue-500"
                        : item.status === "Complete"
                        ? "bg-green-500"
                        : "bg-[#CBD5E1]"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-[#0F172A] font-medium truncate">{item.title}</p>
                    <div className="flex items-center gap-2 sm:gap-3 mt-0.5 flex-wrap">
                      {item.org && (
                        <span className="text-xs text-[#475569] truncate">{item.org} •</span>
                      )}
                      <span className="text-xs text-[#475569]">{item.type}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                          item.status === "Live"
                            ? "bg-gradient-to-r from-red-100 to-red-50 text-red-700"
                            : item.status === "Processing"
                            ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700"
                            : item.status === "Complete"
                            ? "bg-gradient-to-r from-green-100 to-green-50 text-green-700"
                            : "bg-[#F8FAFC] text-[#475569]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-[#475569] flex items-center gap-1 flex-shrink-0">
                    <Clock size={12} />
                    <span className="hidden sm:inline">{item.time}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Alerts */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-[#CBD5E1] p-4 sm:p-5 bg-gradient-to-r from-[#F8FAFC] to-white">
              <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">Alerts</h2>
            </div>
            <div className="p-3 sm:p-4 space-y-3">
              {userRole === "Owner" && (
                <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl">
                  <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                  <div>
                    <p className="text-xs font-medium text-red-900">Quality Issues</p>
                    <p className="text-xs text-red-900 mt-1">
                      7 sessions require review across 3 organizations
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-[#FEF3C7] to-[#FEF9E5] border border-[#FCD34D] rounded-xl">
                <AlertCircle size={14} className="text-[#D97706] flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <div>
                  <p className="text-xs font-medium text-[#92400E]">Usage Alert</p>
                  <p className="text-xs text-[#92400E] mt-1">
                    {userRole === "Owner"
                      ? "3 organizations near usage limits"
                      : "85% of processing hours used"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Reviews / Actions */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-[#CBD5E1] p-4 sm:p-5 bg-gradient-to-r from-[#F8FAFC] to-white">
              <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">Pending</h2>
            </div>
            <div className="p-3 sm:p-4 space-y-2">
              {userRole === "Owner" && (
                <Link
                  to="/platform/quality"
                  className="flex items-center justify-between p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl hover:bg-gradient-to-r hover:from-[#F0FDFA] hover:to-[#F8FAFC] transition-all"
                >
                  <span className="text-xs sm:text-sm text-[#0F172A]">Quality Issues</span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-br from-red-100 to-red-50 text-red-700 text-xs rounded-full font-semibold">
                    7
                  </span>
                </Link>
              )}
              <Link
                to="/library"
                className="flex items-center justify-between p-2.5 sm:p-3 bg-[#F8FAFC] rounded-xl hover:bg-gradient-to-r hover:from-[#F0FDFA] hover:to-[#F8FAFC] transition-all"
              >
                <span className="text-xs sm:text-sm text-[#0F172A]">Ready to Publish</span>
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 text-xs rounded-full font-semibold">
                  5
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}