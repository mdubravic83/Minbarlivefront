import { useParams, Link } from "react-router";
import { 
  ArrowLeft, 
  Eye, 
  Settings, 
  Copy, 
  ExternalLink,
  Users,
  Globe,
  MessageSquare,
  Activity
} from "lucide-react";
import { MinaretIcon } from "./icons/MosqueIcon";

export function HutbaLiveDetail() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <Link 
          to="/hutba-live" 
          className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#0F172A] mb-3"
        >
          <ArrowLeft size={16} />
          Back to HutbaLive
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-[#0F172A]">
                Friday Jumu'ah - Main Hall
              </h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-br from-red-100 to-red-50 text-red-700 text-sm font-semibold rounded-full border border-red-200">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                Live
              </span>
            </div>
            <p className="text-sm text-[#475569] mt-1">
              Started at 10:30 AM • Duration: 00:42:15
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-md">
              End Session
            </button>
            <button className="p-2 border border-[#CBD5E1] rounded hover:bg-[#F8FAFC]">
              <Settings size={18} className="text-[#475569]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Tabs */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] px-6 py-3">
              <div className="flex items-center gap-6">
                <button className="px-3 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E]">
                  Live Control
                </button>
                <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                  Transcript
                </button>
                <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                  Translations
                </button>
                <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                  Analytics
                </button>
              </div>
            </div>

            {/* Control Panel Content */}
            <div className="p-6 space-y-6">
              {/* Live Stream Status */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Stream Status</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#475569]">Audio Quality</span>
                      <Activity size={14} className="text-[#0F766E]" />
                    </div>
                    <p className="text-lg font-semibold text-[#0F172A]">Excellent</p>
                    <div className="w-full h-1.5 bg-[#CBD5E1] rounded-full mt-2">
                      <div className="w-[92%] h-full bg-[#0F766E] rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#475569]">Active Viewers</span>
                      <Eye size={14} className="text-[#0F766E]" />
                    </div>
                    <p className="text-lg font-semibold text-[#0F172A]">342</p>
                    <p className="text-xs text-green-600 mt-1">+12 in last 5 min</p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#475569]">Messages</span>
                      <MessageSquare size={14} className="text-[#0F766E]" />
                    </div>
                    <p className="text-lg font-semibold text-[#0F172A]">28</p>
                    <p className="text-xs text-[#475569] mt-1">Viewer questions</p>
                  </div>
                </div>
              </div>

              {/* Active Languages */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Active Translations</h3>
                <div className="space-y-3">
                  {[
                    { lang: "English", viewers: 187, status: "Active", quality: 94 },
                    { lang: "Urdu", viewers: 98, status: "Active", quality: 91 },
                    { lang: "French", viewers: 57, status: "Active", quality: 89 },
                  ].map((translation, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-[#CBD5E1] rounded-lg">
                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-[#0F766E]" />
                        <div>
                          <p className="text-sm font-medium text-[#0F172A]">{translation.lang}</p>
                          <p className="text-xs text-[#475569]">Quality: {translation.quality}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-[#475569]">
                          <Eye size={14} />
                          <span className="font-medium text-[#0F172A]">{translation.viewers}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                          {translation.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Transcript Preview */}
              <div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Live Transcript (Arabic)</h3>
                <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-4 h-64 overflow-y-auto">
                  <div className="space-y-3 text-sm text-[#0F172A]">
                    <p className="leading-relaxed">
                      [10:30] بسم الله الرحمن الرحيم، الحمد لله رب العالمين...
                    </p>
                    <p className="leading-relaxed">
                      [10:32] إخوتي وأخواتي في الله، موضوع خطبة اليوم عن الصبر والتقوى...
                    </p>
                    <p className="leading-relaxed">
                      [10:35] يقول الله تعالى في سورة البقرة: يا أيها الذين آمنوا استعينوا بالصبر والصلاة...
                    </p>
                    <p className="leading-relaxed text-[#0F766E] animate-pulse">
                      [10:42] والصبر من أعظم الأخلاق التي يتحلى بها المؤمن...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Metadata Panel */}
        <div className="space-y-4">
          {/* Session Info */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Session Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-[#475569] mb-1">Organization</p>
                <p className="text-[#0F172A] font-medium">Downtown Masjid</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Source Language</p>
                <p className="text-[#0F172A] font-medium">Arabic</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Target Languages</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["English", "Urdu", "French"].map((lang, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Started</p>
                <p className="text-[#0F172A]">10:30 AM</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Duration</p>
                <p className="text-[#0F172A] font-mono">00:42:15</p>
              </div>
            </div>
          </div>

          {/* Viewer Distribution */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Viewer Distribution</h3>
            <div className="space-y-3">
              {[
                { lang: "English", count: 187, percent: 55 },
                { lang: "Urdu", count: 98, percent: 29 },
                { lang: "French", count: 57, percent: 16 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[#475569]">{item.lang}</span>
                    <span className="text-[#0F172A] font-medium">{item.count}</span>
                  </div>
                  <div className="w-full h-2 bg-[#F8FAFC] rounded-full">
                    <div 
                      className="h-full bg-[#0F766E] rounded-full" 
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share & Access */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Share & Access</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#475569] mb-2">Public URL</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="minbarlive.com/live/xyz123"
                    readOnly
                    className="flex-1 px-2 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-xs font-mono"
                  />
                  <button className="p-1.5 hover:bg-[#F0FDFA] rounded">
                    <Copy size={14} className="text-[#475569]" />
                  </button>
                  <button className="p-1.5 hover:bg-[#F0FDFA] rounded">
                    <ExternalLink size={14} className="text-[#475569]" />
                  </button>
                </div>
              </div>
              <button className="w-full px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Generate QR Code
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-[#0F766E] text-white text-sm rounded hover:bg-[#14532D]">
                Save as Template
              </button>
              <button className="w-full px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Download Transcript
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}