import { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowLeft, 
  Square, 
  QrCode, 
  Share2, 
  Eye, 
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Users,
  Globe,
  Wifi,
  Activity
} from "lucide-react";
import { MinaretIcon } from "./icons/MosqueIcon";

export function HutbaLiveSession() {
  const [isRecording, setIsRecording] = useState(false);

  // Mock real-time data
  const [stats, setStats] = useState({
    duration: "00:12:34",
    viewers: 342,
    packetsReceived: 1247,
    packetsLost: 3,
    successRate: 99.8,
    avgLatency: 124,
    errors: 2,
  });

  // Mock transcript data
  const rawTranscript = [
    { id: 1, time: "00:10:12", speaker: "Imam", text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ", confidence: 98 },
    { id: 2, time: "00:10:18", speaker: "Imam", text: "الحمد لله رب العالمين", confidence: 97 },
    { id: 3, time: "00:10:24", speaker: "Imam", text: "والصلاة والسلام على رسول الله", confidence: 99 },
    { id: 4, time: "00:10:32", speaker: "Imam", text: "أيها المسلمون، اتقوا الله حق تقاته", confidence: 96 },
  ];

  const translatedTranscript = [
    { id: 1, time: "00:10:12", language: "English", text: "In the name of Allah, the Most Gracious, the Most Merciful", confidence: 97 },
    { id: 2, time: "00:10:18", language: "English", text: "All praise is due to Allah, Lord of the worlds", confidence: 96 },
    { id: 3, time: "00:10:24", language: "English", text: "And peace and blessings upon the Messenger of Allah", confidence: 98 },
    { id: 4, time: "00:10:32", language: "English", text: "O Muslims, fear Allah as He should be feared", confidence: 95 },
  ];

  const handleStartStop = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            to="/hutba-live/archive"
            className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
          >
            <ArrowLeft size={18} className="text-[#475569]" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">Live Session Control</h1>
            <p className="text-xs sm:text-sm text-[#475569] mt-1">
              Friday Jumu'ah - Main Hall
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#CBD5E1] rounded-lg hover:bg-[#F8FAFC] transition-colors text-sm">
            <QrCode size={16} />
            <span className="hidden sm:inline">QR Code</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white border border-[#CBD5E1] rounded-lg hover:bg-[#F8FAFC] transition-colors text-sm">
            <Share2 size={16} />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button className="flex-1 sm:flex-none p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors">
            <Settings size={18} className="text-[#475569]" />
          </button>
        </div>
      </div>

      {/* Start/Stop Button */}
      <div className="flex justify-center">
        <button
          onClick={handleStartStop}
          className={`flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all ${
            isRecording
              ? "bg-gradient-to-br from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
              : "bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white hover:from-[#C49B2F] hover:to-[#B38B1F]"
          }`}
        >
          {isRecording ? (
            <>
              <Square size={24} className="fill-current animate-pulse" />
              <span>Stop Session</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-700/50 rounded-full text-xs">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Recording
              </div>
            </>
          ) : (
            <>
              <MinaretIcon size={24} />
              <span>Start Session</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content - Transcript & Statistics */}
      {isRecording && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Side - Transcript */}
          <div className="space-y-4">
            {/* Raw Transcript */}
            <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-[#CBD5E1] p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white">
                <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">Raw Transcript (Arabic)</h2>
              </div>
              <div className="p-3 sm:p-4 space-y-2 max-h-[300px] sm:max-h-[400px] overflow-y-auto">
                {rawTranscript.map((item) => (
                  <div key={item.id} className="flex gap-2 sm:gap-3 p-2 sm:p-3 bg-[#F8FAFC] rounded-lg hover:bg-[#F0FDFA] transition-colors">
                    <div className="flex-shrink-0">
                      <span className="text-xs text-[#475569] font-mono">{item.time}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#0F172A] text-right" dir="rtl">{item.text}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#475569]">{item.speaker}</span>
                        <span className="text-xs text-[#475569]">•</span>
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-1 bg-[#CBD5E1] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: `${item.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-[#475569]">{item.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Translated Transcript */}
            <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-[#CBD5E1] p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white">
                <h2 className="font-semibold text-[#0F172A] text-sm sm:text-base">Translated (English)</h2>
              </div>
              <div className="p-3 sm:p-4 space-y-2 max-h-[300px] sm:max-h-[400px] overflow-y-auto">
                {translatedTranscript.map((item) => (
                  <div key={item.id} className="flex gap-2 sm:gap-3 p-2 sm:p-3 bg-[#F0FDFA] rounded-lg hover:bg-[#E6FAF5] transition-colors">
                    <div className="flex-shrink-0">
                      <span className="text-xs text-[#475569] font-mono">{item.time}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#0F172A]">{item.text}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-1.5 py-0.5 bg-[#0F766E] text-white text-xs rounded">
                          {item.language}
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-1 bg-[#CBD5E1] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0F766E] rounded-full"
                              style={{ width: `${item.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-[#475569]">{item.confidence}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="space-y-4">
            {/* Session Info */}
            <div className="bg-gradient-to-br from-[#F0FDFA] to-white border-2 border-[#0F766E]/30 rounded-xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">Session Info</h3>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Live
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-[#475569] mb-1">Duration</p>
                  <p className="text-lg sm:text-xl font-semibold text-[#0F172A] font-mono">{stats.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#475569] mb-1">Viewers</p>
                  <div className="flex items-center gap-1.5">
                    <Users size={16} className="text-[#0F766E]" />
                    <p className="text-lg sm:text-xl font-semibold text-[#0F172A]">{stats.viewers}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Statistics */}
            <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-[#CBD5E1] p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white">
                <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">Network Statistics</h3>
              </div>
              <div className="p-3 sm:p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Wifi size={16} className="text-[#0F766E]" />
                    <span className="text-sm text-[#475569]">Packets Received</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A]">{stats.packetsReceived}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2">
                    <XCircle size={16} className="text-red-500" />
                    <span className="text-sm text-[#475569]">Packets Lost</span>
                  </div>
                  <span className="text-sm font-semibold text-red-600">{stats.packetsLost}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm text-green-900 font-medium">Success Rate</span>
                  </div>
                  <span className="text-sm font-semibold text-green-900">{stats.successRate}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#0F766E]" />
                    <span className="text-sm text-[#475569]">Avg Latency</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A]">{stats.avgLatency}ms</span>
                </div>
              </div>
            </div>

            {/* Errors & Warnings */}
            <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-[#CBD5E1] p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white">
                <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">Errors & Warnings</h3>
              </div>
              <div className="p-3 sm:p-4">
                {stats.errors === 0 ? (
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm text-green-900">No errors detected</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertTriangle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-yellow-900 font-medium">Audio quality dip</p>
                        <p className="text-xs text-yellow-700 mt-0.5">Detected at 00:08:42</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertTriangle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-yellow-900 font-medium">Translation delay</p>
                        <p className="text-xs text-yellow-700 mt-0.5">Latency spike +340ms</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-[#CBD5E1] p-3 sm:p-4 bg-gradient-to-r from-[#F8FAFC] to-white">
                <h3 className="font-semibold text-[#0F172A] text-sm sm:text-base">Active Languages</h3>
              </div>
              <div className="p-3 sm:p-4 space-y-2">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#475569]" />
                    <span className="text-sm text-[#0F172A]">Arabic</span>
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">Source</span>
                  </div>
                  <CheckCircle size={14} className="text-green-500" />
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-[#F0FDFA] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#0F766E]" />
                    <span className="text-sm text-[#0F172A]">English</span>
                    <span className="px-1.5 py-0.5 bg-[#0F766E] text-white text-xs rounded">Target</span>
                  </div>
                  <Activity size={14} className="text-[#0F766E] animate-pulse" />
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-[#F0FDFA] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#0F766E]" />
                    <span className="text-sm text-[#0F172A]">Urdu</span>
                    <span className="px-1.5 py-0.5 bg-[#0F766E] text-white text-xs rounded">Target</span>
                  </div>
                  <Activity size={14} className="text-[#0F766E] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Not Recording State */}
      {!isRecording && (
        <div className="flex items-center justify-center py-12 sm:py-20">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F0FDFA] to-[#E6FAF5] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MinaretIcon size={32} className="text-[#0F766E] sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">Ready to Start</h3>
            <p className="text-sm text-[#475569]">
              Click "Start Session" to begin live khutbah translation and transcription
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
