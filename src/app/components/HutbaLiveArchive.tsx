import { Plus, Eye, Play, Settings2, Archive, Copy } from "lucide-react";
import { Link } from "react-router";
import { MinaretIcon } from "./icons/MosqueIcon";

export function HutbaLiveArchive() {
  const sessions = [
    {
      id: "1",
      title: "Friday Jumu'ah - Main Hall",
      organization: "Downtown Masjid",
      source: "Arabic",
      targets: ["English", "Urdu", "French"],
      status: "Live",
      started: "10:30 AM",
      duration: "00:42:15",
      viewers: 342,
      quality: 94,
    },
    {
      id: "2",
      title: "Taraweeh Night 15",
      organization: "Community Center",
      source: "Arabic",
      targets: ["English", "Spanish"],
      status: "Live",
      started: "9:45 PM",
      duration: "00:18:32",
      viewers: 128,
      quality: 91,
    },
    {
      id: "3",
      title: "Sunday Youth Lecture",
      organization: "Youth Institute",
      source: "English",
      targets: ["Arabic", "Somali"],
      status: "Scheduled",
      started: "Tomorrow 2:00 PM",
      duration: "--:--:--",
      viewers: 0,
      quality: null,
    },
    {
      id: "4",
      title: "Eid Khutbah 2026",
      organization: "Downtown Masjid",
      source: "Arabic",
      targets: ["English", "Urdu", "Bengali", "Turkish"],
      status: "Ended",
      started: "March 30, 8:00 AM",
      duration: "00:52:18",
      viewers: 1247,
      quality: 96,
    },
    {
      id: "5",
      title: "Weekly Tafsir Session",
      organization: "Islamic Center",
      source: "Arabic",
      targets: ["English"],
      status: "Ended",
      started: "Yesterday 7:00 PM",
      duration: "01:15:45",
      viewers: 89,
      quality: 88,
    },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">HutbaLive Sessions</h1>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            View all sessions, active broadcasts, and archived recordings
          </p>
        </div>
        <Link
          to="/hutba-live/sessions"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-md"
        >
          <Plus size={18} />
          New Session
        </Link>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-[#CBD5E1] px-3 sm:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto w-full sm:w-auto">
              <button className="px-3 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E] whitespace-nowrap">
                All Sessions
              </button>
              <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A] whitespace-nowrap">
                Active
              </button>
              <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A] whitespace-nowrap">
                Scheduled
              </button>
              <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A] whitespace-nowrap">
                Archive
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] w-full sm:w-auto justify-end">
              <span className="whitespace-nowrap">2 live • 470 viewers</span>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Session
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Languages
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Started / Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Viewers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Quality
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1]">
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-[#F8FAFC]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {session.status === "Live" && (
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse flex-shrink-0"></div>
                      )}
                      <div>
                        <Link
                          to={`/hutba-live/sessions/${session.id}`}
                          className="text-sm font-medium text-[#0F172A] hover:text-[#0F766E]"
                        >
                          {session.title}
                        </Link>
                        {session.status === "Live" && (
                          <p className="text-xs text-[#475569] mt-0.5">
                            Duration: {session.duration}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    {session.organization}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-xs text-[#475569] mb-1">
                        From: <span className="font-medium text-[#0F172A]">{session.source}</span>
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {session.targets.map((lang, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs font-semibold rounded-full ${
                        session.status === "Live"
                          ? "bg-red-100 text-red-700"
                          : session.status === "Scheduled"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-[#CBD5E1] text-[#475569]"
                      }`}
                    >
                      {session.status === "Live" && <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>}
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    {session.started}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span className="font-medium text-[#0F172A]">{session.viewers}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {session.quality ? (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[60px] h-1.5 bg-[#CBD5E1] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              session.quality >= 90 ? "bg-green-500" : "bg-yellow-500"
                            }`}
                            style={{ width: `${session.quality}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-[#475569] font-medium">
                          {session.quality}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-[#CBD5E1]">--</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {session.status === "Live" && (
                        <>
                          <Link
                            to={`/hutba-live/sessions/${session.id}`}
                            className="p-2 hover:bg-[#F0FDFA] rounded"
                            title="View Live"
                          >
                            <Play size={16} className="text-[#0F766E]" />
                          </Link>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Settings">
                            <Settings2 size={16} className="text-[#475569]" />
                          </button>
                        </>
                      )}
                      {session.status === "Ended" && (
                        <>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Copy URL">
                            <Copy size={16} className="text-[#475569]" />
                          </button>
                          <button className="p-2 hover:bg-[#F0FDFA] rounded" title="Archive">
                            <Archive size={16} className="text-[#475569]" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden divide-y divide-[#CBD5E1]">
          {sessions.map((session) => (
            <div key={session.id} className="p-4 hover:bg-[#F8FAFC] transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  {session.status === "Live" && (
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse flex-shrink-0 mt-1.5"></div>
                  )}
                  <div className="min-w-0 flex-1">
                    <Link
                      to={`/hutba-live/sessions/${session.id}`}
                      className="text-sm font-medium text-[#0F172A] hover:text-[#0F766E] block"
                    >
                      {session.title}
                    </Link>
                    <p className="text-xs text-[#475569] mt-1">{session.organization}</p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap ${
                    session.status === "Live"
                      ? "bg-red-100 text-red-700"
                      : session.status === "Scheduled"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-[#CBD5E1] text-[#475569]"
                  }`}
                >
                  {session.status === "Live" && <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>}
                  {session.status}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Started</span>
                  <span className="text-[#0F172A] font-medium">{session.started}</span>
                </div>
                {session.status === "Live" && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">Duration</span>
                    <span className="text-[#0F172A] font-medium font-mono">{session.duration}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Viewers</span>
                  <div className="flex items-center gap-1">
                    <Eye size={12} />
                    <span className="text-[#0F172A] font-medium">{session.viewers}</span>
                  </div>
                </div>
                {session.quality && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">Quality</span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-[#CBD5E1] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            session.quality >= 90 ? "bg-green-500" : "bg-yellow-500"
                          }`}
                          style={{ width: `${session.quality}%` }}
                        ></div>
                      </div>
                      <span className="text-[#0F172A] font-medium">{session.quality}%</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-[#CBD5E1]">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs text-[#475569]">From:</span>
                  <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">{session.source}</span>
                  <span className="text-xs text-[#475569]">To:</span>
                  {session.targets.map((lang, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                
                {session.status === "Live" && (
                  <Link
                    to={`/hutba-live/sessions/${session.id}`}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white text-sm font-medium rounded-lg hover:from-[#14B8A6] hover:to-[#0F766E] transition-all mt-2"
                  >
                    <Play size={14} />
                    View Live Session
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
