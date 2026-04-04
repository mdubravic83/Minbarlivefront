import { useParams, Link } from "react-router";
import { 
  ArrowLeft, 
  Eye, 
  Copy, 
  ExternalLink,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  Radio,
  Square,
  Play,
  Pause,
  XCircle,
  QrCode,
  TrendingUp,
  Volume2,
  Signal,
  Users,
  BarChart3,
  Zap,
  AlertTriangle,
  History
} from "lucide-react";
import { MinaretIcon, MosqueIconSimple } from "./icons/MosqueIcon";

export function HutbaLiveDetail() {
  const { id } = useParams();

  // Mock session data
  const session = {
    id: "ses_123",
    title: "Islamski Centar Zagreb",
    lecturer: "Imam Haris - Croatian Center for Islamic Spirituality",
    status: "live", // live, paused, stopped
    startTime: "10:30 AM",
    duration: "00:42:15",
    rtmpUrl: "rtmps://pub-tech-prod.auth.eu2.fastly.net/",
    endTime: "12:30 PM",
    viewers: {
      current: 0,
      peak: 3,
      total: 8
    },
    source: {
      type: "Browser Capture",
      status: "streaming",
      quality: "good"
    },
    transcript: {
      currentLanguage: "Bosnian (BS)",
      secondaryLanguage: "English (EN)",
      captureSpeed: "1.2s",
      confidence: 94,
      wordsPerMinute: 142,
      lastSegment: "Allahu Teala kaže u Kur'anu da je najbolji govor govor Allaha, a najbolji put je put Poslanika Muhammeda sallallahu alejhi ve sellem...",
      segmentTimestamp: "00:41:58"
    }
  };

  const metrics = {
    deliveryPace: 96,
    hadeesIntensity: 96,
    audienceOverreach: 0,
    captionPresence: 60
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Back Navigation */}
      <Link 
        to="/hutba-live/sessions" 
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to HutbaLive</span>
      </Link>

      {/* Alert Banner - Remote capture backing is streaming */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-3 sm:p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-amber-900">Browser capture backlog raste</h3>
            <p className="text-xs sm:text-sm text-amber-800 mt-1">
              Queue 1, dropped 0. Prati uredaj, mrežu i ingest stabilnost.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Session Summary & Controls */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Session Summary Card */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-[#0F172A]">Session Summary</h2>
                  <p className="text-sm text-[#475569] mt-0.5">{session.title}</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
                    <Square size={14} />
                    <span className="hidden sm:inline">Stop session</span>
                    <span className="sm:hidden">Stop</span>
                  </button>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
                    <XCircle size={14} />
                    <span className="hidden sm:inline">Kill session</span>
                    <span className="sm:hidden">Kill</span>
                  </button>
                  <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] hover:from-[#C49B2F] hover:to-[#B38B1F] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 shadow-md">
                    <QrCode size={14} />
                    <span className="hidden sm:inline">Mosque QR code</span>
                    <span className="sm:hidden">QR</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Left Side - Live Transcript Focus (LARGER) */}
                <div className="space-y-4">
                  {/* Language Detection */}
                  <div className="flex items-center gap-4 pb-3 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide">
                        Live Capture
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2.5 py-1 bg-[#0F766E] text-white text-xs font-bold rounded">
                        {session.transcript.currentLanguage}
                      </div>
                      <span className="text-xs text-[#475569]">→</span>
                      <div className="px-2.5 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded">
                        {session.transcript.secondaryLanguage}
                      </div>
                    </div>
                  </div>

                  {/* Live Transcript Display - LARGER */}
                  <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F0FDFA] border-2 border-[#0F766E]/20 rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#0F766E] animate-pulse" />
                        <span className="text-xs font-semibold text-[#0F766E]">
                          {session.transcript.segmentTimestamp}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-xs text-[#475569]">Capture Speed</p>
                          <p className="text-base font-bold text-[#0F766E]">{session.transcript.captureSpeed}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#475569]">Confidence</p>
                          <p className="text-base font-bold text-[#0F766E]">{session.transcript.confidence}%</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* LARGER TRANSCRIPT TEXT */}
                    <div className="min-h-[140px] mb-4">
                      <p className="text-base leading-relaxed text-[#0F172A]">
                        {session.transcript.lastSegment}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#CBD5E1]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#475569]" />
                        <span className="text-sm text-[#475569]">
                          {session.transcript.wordsPerMinute} words/min
                        </span>
                      </div>
                      <button className="text-sm text-[#0F766E] hover:text-[#14B8A6] font-medium transition-colors">
                        View Full Transcript →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side - Live Metrics & Quality */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-[#475569] uppercase tracking-wide">
                    Live Analytics
                  </h3>

                  {/* Stream Info - Languages & ID */}
                  <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#475569]">Languages</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#0F172A]">Bosnian</span>
                        <span className="text-xs text-[#475569]">→</span>
                        <span className="text-xs font-semibold text-[#0F172A]">English</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#E2E8F0]">
                      <span className="text-xs text-[#475569]">Stream ID</span>
                      <code className="text-xs font-mono font-semibold text-[#0F172A]">{session.id}</code>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-lg p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium opacity-90">Session Duration</span>
                    </div>
                    <p className="text-3xl font-bold font-mono">{session.duration}</p>
                    <p className="text-xs opacity-75 mt-1">Started at {session.startTime}</p>
                  </div>

                  {/* Viewers Metrics */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#475569] uppercase tracking-wide mb-2">
                      Viewer Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 text-center">
                        <Eye className="w-4 h-4 text-[#0F766E] mx-auto mb-1" />
                        <p className="text-xl font-bold text-[#0F172A]">{session.viewers.current}</p>
                        <p className="text-xs text-[#475569]">Live</p>
                      </div>
                      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 text-center">
                        <TrendingUp className="w-4 h-4 text-[#0F766E] mx-auto mb-1" />
                        <p className="text-xl font-bold text-[#0F172A]">{session.viewers.peak}</p>
                        <p className="text-xs text-[#475569]">Peak</p>
                      </div>
                      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3 text-center">
                        <Users className="w-4 h-4 text-[#0F766E] mx-auto mb-1" />
                        <p className="text-xl font-bold text-[#0F172A]">{session.viewers.total}</p>
                        <p className="text-xs text-[#475569]">Total</p>
                      </div>
                    </div>
                  </div>

                  {/* Quality Indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Signal className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs text-green-900">Audio Quality</span>
                      </div>
                      <span className="text-xs font-bold text-green-700">Excellent</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs text-green-900">Connection</span>
                      </div>
                      <span className="text-xs font-bold text-green-700">Stable</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-xs text-amber-900">Latency</span>
                      </div>
                      <span className="text-xs font-bold text-amber-700">{session.transcript.captureSpeed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Session Insights */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-base sm:text-lg font-semibold text-[#0F172A]">Session Insights</h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                AI-live analysis of Al-Khutbah shows most salient analysis
              </p>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Session Load */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-[#0F172A]">Session load</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Stutters", value: 0 },
                      { label: "Segments", value: 0 },
                      { label: "Unique", value: 0 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                        <span className="text-sm text-[#475569]">{item.label}</span>
                        <span className="text-base font-semibold text-[#0F172A]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hutbah Meters */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-[#0F172A]">Hutbah meters</h3>
                  <div className="space-y-3">
                    {/* Delivery Pace */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-[#475569]">Delivery pace</span>
                        <span className="text-sm font-semibold text-[#0F766E]">{metrics.deliveryPace}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#0F766E] to-[#14B8A6] rounded-full transition-all"
                          style={{ width: `${metrics.deliveryPace}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-[#475569] mt-1">Normal pace is typical</p>
                    </div>

                    {/* Hadees Intensity */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-[#475569]">Hadees intensity</span>
                        <span className="text-sm font-semibold text-[#0F766E]">{metrics.hadeesIntensity}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#0F766E] to-[#14B8A6] rounded-full transition-all"
                          style={{ width: `${metrics.hadeesIntensity}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-[#475569] mt-1">Great! Average depth</p>
                    </div>

                    {/* Audience Overreach */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-[#475569]">Audience overreach</span>
                        <span className="text-sm font-semibold text-[#475569]">{metrics.audienceOverreach}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#CBD5E1] rounded-full transition-all"
                          style={{ width: `${metrics.audienceOverreach}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-[#475569] mt-1">No complex topics detected</p>
                    </div>

                    {/* Caption Presence */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-[#475569]">Caption presence</span>
                        <span className="text-sm font-semibold text-amber-600">{metrics.captionPresence}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all"
                          style={{ width: `${metrics.captionPresence}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-amber-700 mt-1">Manual Quran citation helps user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stream History */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-semibold text-[#0F172A]">Stream history</h2>
              <button className="px-3 py-1.5 text-xs sm:text-sm text-[#0F766E] hover:bg-[#F0FDFA] rounded-lg transition-colors font-medium">
                SHOW
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-sm text-[#475569] text-center py-8">
                Speed exceeding 48 hours contains and capture sources
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Capture Diagnostics & Status */}
        <div className="space-y-4 sm:space-y-6">
          {/* Transcript & Translation */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-sm sm:text-base font-semibold text-[#0F172A]">
                Transcript & translation
              </h2>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              {/* Video Transcript */}
              <div>
                <h3 className="text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                  VIDEO TRANSCRIPT
                </h3>
                <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-3">
                  <p className="text-xs sm:text-sm text-[#475569]">
                    1 language in active frame
                  </p>
                </div>
              </div>

              {/* Personal Translation Tokens */}
              <div>
                <h3 className="text-xs font-semibold text-[#0F172A] mb-2 uppercase tracking-wide">
                  PERSONAL TRANSLATION TOKENS
                </h3>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs sm:text-sm text-amber-800">
                    A large number of advance tokens are typical for a typical Jumu'ah frame
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Capture Diagnostics */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-sm sm:text-base font-semibold text-[#0F172A]">
                CAPTURE DIAGNOSTICS
              </h2>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Signal size={14} className="text-[#0F766E]" />
                    <span className="text-xl sm:text-2xl font-bold text-[#0F172A]">0</span>
                  </div>
                  <p className="text-xs text-[#475569]">Sessions</p>
                </div>

                <div className="text-center p-3 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Activity size={14} className="text-[#0F766E]" />
                    <span className="text-xl sm:text-2xl font-bold text-[#0F172A]">0</span>
                  </div>
                  <p className="text-xs text-[#475569]">Segments</p>
                </div>
              </div>

              {/* Browser Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-green-900">
                      Browser capture is currently streaming the audio
                    </h4>
                  </div>
                </div>
              </div>

              {/* Stream Status Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#475569]">Audio Status</span>
                  <span className="text-[#0F172A] font-medium flex items-center gap-1">
                    <Volume2 size={12} className="text-green-600" />
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#475569]">Connection</span>
                  <span className="text-[#0F172A] font-medium flex items-center gap-1">
                    <Zap size={12} className="text-green-600" />
                    Stable
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#475569]">Quality</span>
                  <span className="text-[#0F172A] font-medium">Good</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stream Status */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm">
            <div className="border-b border-[#CBD5E1] px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-sm sm:text-base font-semibold text-[#0F172A]">
                Stream Status
              </h2>
            </div>

            <div className="p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#475569]">Type</span>
                <span className="text-xs sm:text-sm font-medium text-[#0F172A]">{session.source.type}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#475569]">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></div>
                  Streaming
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#475569]">Quality</span>
                <span className="text-xs sm:text-sm font-medium text-[#0F766E] capitalize">{session.source.quality}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#475569]">Duration</span>
                <span className="text-xs sm:text-sm font-mono text-[#0F172A]">{session.duration}</span>
              </div>
            </div>
          </div>

          {/* QR Code Preview (Optional) */}
          <div className="bg-gradient-to-br from-[#F0FDFA] to-white border-2 border-[#0F766E] rounded-xl shadow-sm p-4 sm:p-5">
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white border-2 border-[#CBD5E1] rounded-lg mx-auto mb-3 flex items-center justify-center">
                <QrCode size={64} className="text-[#CBD5E1]" />
              </div>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-1">Mosque QR Code</h3>
              <p className="text-xs text-[#475569] mb-3">
                Scan to join live session
              </p>
              <button className="w-full px-4 py-2 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] hover:from-[#C49B2F] hover:to-[#B38B1F] text-white text-sm font-semibold rounded-lg transition-all shadow-md">
                Generate New QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}