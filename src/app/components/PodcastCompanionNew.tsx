import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Mic,
  Volume2,
  Play,
  Square,
  ExternalLink,
  Share2,
  QrCode,
  Trash2,
  Globe,
  Radio,
  CheckCircle,
  Copy,
} from "lucide-react";

type SessionStatus = "draft" | "ready" | "source-selection" | "capturing" | "live";

export function PodcastCompanionNew() {
  const navigate = useNavigate();
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSourceLang, setSelectedSourceLang] = useState("English");
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("draft");
  const [showAudioSourceModal, setShowAudioSourceModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedAudioSource, setSelectedAudioSource] = useState<"microphone" | "tab-audio" | null>(null);
  const [selectedTranslationLang, setSelectedTranslationLang] = useState<string | null>(null);

  // Mock data after URL is pasted
  const podcastTitle = customTitle || "Bloomberg Live: Business, Finance, Earnings & Investment News | Watch 7AM - 6PM ET Weekdays";

  const sourceLangs = ["English", "Hrvatski", "Bosanski", "Arabic", "Deutsch", "Türkçe", "Auto-detect"];
  
  const translationLanguages = [
    { code: "en", name: "English", native: "English" },
    { code: "hr", name: "Hrvatski", native: "Croatian" },
    { code: "bs", name: "Bosanski", native: "Bosnian" },
    { code: "de", name: "Deutsch", native: "German" },
    { code: "tr", name: "Türkçe", native: "Turkish" },
    { code: "sq", name: "Shqip", native: "Albanian" },
    { code: "ar", name: "العربية", native: "Arabic" },
    { code: "fr", name: "Français", native: "French" },
  ];

  const handleCreateSession = () => {
    if (youtubeUrl) {
      setSessionStatus("ready");
    }
  };

  const handleStartTranscription = () => {
    setShowAudioSourceModal(true);
  };

  const handleAudioSourceSelect = (source: "microphone" | "tab-audio") => {
    setSelectedAudioSource(source);
    setShowAudioSourceModal(false);
    setSessionStatus("capturing");
  };

  const handleOpenPodcastStream = () => {
    setShowLanguageModal(true);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedTranslationLang(lang);
    setShowLanguageModal(false);
    setSessionStatus("live");
  };

  const handleStopCapture = () => {
    setSelectedAudioSource(null);
    setSessionStatus("ready");
  };

  const handleEndSession = () => {
    setSessionStatus("draft");
    setYoutubeUrl("");
    setCustomTitle("");
    setSpeaker("");
    setDescription("");
    setSelectedAudioSource(null);
    setSelectedTranslationLang(null);
  };

  // Mock transcript data for live view
  const mockTranscript = [
    { id: 1, original: "I'll start your week with conversations that explore what drives the world's most influential people.", translation: "Započet ću vaš tjedan s razgovorima koji istražuju što pokreće najutjecajnije ljude svijeta." },
    { id: 2, original: "Najavljeni nositelji: posljednih dvadeset pet godina, intervjuiram sam lidereefore baraka.", translation: "Najavljeni nositelji: posljednih dvadeset pet godina, intervjuiram sam lidereefore baraka." },
    { id: 3, original: "Tak i mnoho ikoni.", translation: "Tak i mnoho ikoni." },
    { id: 4, original: "Često se pitam o pobjednama trenutka.", translation: "Često se pitam o pobjednama trenutka." },
    { id: 5, original: "ali uvijek sam bio svakidašnji ko su ti ljudi kao osobe, ko za svjetu podučara voda za Francois Mackook.", translation: "ali uvijek sam bio svakidašnji ko su ti ljudi kao osobe, ko za svjetu podučara voda za Francois Mackook." },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Back Navigation */}
      <Link
        to="/podcast-companion/sessions"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to Sessions</span>
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">Create Podcast Companion Session</h1>
        <p className="text-xs sm:text-sm text-[#475569] mt-1">
          Paste a YouTube URL — the title is fetched automatically.
        </p>
      </div>

      {sessionStatus === "draft" && (
        <>
          {/* URL Input Card */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                YouTube URL
              </label>
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="Paste YouTube URL here..."
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent"
              />
            </div>

            {/* Advanced Options */}
            <div>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                <span>Advanced options</span>
              </button>

              {showAdvanced && (
                <div className="mt-4 space-y-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                  <div>
                    <label className="block text-sm text-[#475569] mb-2">
                      Custom title (overrides YouTube title)
                    </label>
                    <input
                      type="text"
                      value={customTitle}
                      onChange={(e) => setCustomTitle(e.target.value)}
                      placeholder="Custom title..."
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#475569] mb-2">
                      Speaker / host (optional)
                    </label>
                    <input
                      type="text"
                      value={speaker}
                      onChange={(e) => setSpeaker(e.target.value)}
                      placeholder="Speaker / host..."
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#475569] mb-2">
                      Short description (optional)
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Short description..."
                      rows={3}
                      className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Create Button */}
            <button
              onClick={handleCreateSession}
              disabled={!youtubeUrl}
              className="px-6 py-3 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white text-sm font-semibold rounded-lg hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create podcast page
            </button>
          </div>
        </>
      )}

      {sessionStatus !== "draft" && sessionStatus !== "live" && (
        <>
          {/* Session Card */}
          <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
            {/* Header with Status */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#CBD5E1]">
              <h2 className="text-base sm:text-lg font-semibold text-[#0F172A]">{podcastTitle}</h2>
              <div className="flex items-center gap-2">
                {sessionStatus === "capturing" && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    TRANSCRIBING
                  </span>
                )}
                {sessionStatus === "ready" && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-400 text-white text-xs font-semibold rounded-full">
                    NO STREAM
                  </span>
                )}
              </div>
            </div>

            {/* Transcription Control */}
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-2">Transcription control</h3>
                
                {sessionStatus === "ready" && (
                  <>
                    <p className="text-sm text-[#475569] mb-4">
                      Start a transcription session to enable live transcript and translation on the public page.
                    </p>

                    {/* Source Language Selection */}
                    <div className="mb-4">
                      <label className="block text-xs font-medium text-[#475569] mb-2">
                        Source language (podcast audio)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {sourceLangs.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => setSelectedSourceLang(lang)}
                            className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                              selectedSourceLang === lang
                                ? "bg-[#0F766E] text-white border-[#0F766E] font-medium"
                                : "bg-white text-[#475569] border-[#CBD5E1] hover:border-[#0F766E]"
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleStartTranscription}
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      <Play size={16} />
                      Start transcription
                    </button>
                  </>
                )}

                {sessionStatus === "source-selection" && (
                  <p className="text-sm text-[#475569]">
                    Stream is active. Choose an audio source to begin capturing and transcribing.
                  </p>
                )}

                {sessionStatus === "capturing" && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-red-600">LIVE — Capturing audio</span>
                    </div>
                    <p className="text-sm text-[#475569] mb-4">
                      Capturing: {selectedAudioSource === "microphone" ? "Zadano - Microphone Array (Intel® Smart Sound Technology for Digital Microphones)" : "Browser Tab Audio"}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={handleStopCapture}
                        className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                      >
                        <Square size={16} />
                        Stop capture
                      </button>
                      <button
                        onClick={handleEndSession}
                        className="px-5 py-2.5 bg-white border-2 border-[#CBD5E1] text-[#475569] text-sm font-medium rounded-lg hover:border-[#0F766E] hover:text-[#0F766E] transition-colors"
                      >
                        End entire session
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleOpenPodcastStream}
                    disabled={sessionStatus !== "capturing"}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0F766E] hover:bg-[#14B8A6] text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ExternalLink size={16} />
                    Open
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#CBD5E1] text-[#475569] text-sm font-medium rounded-lg hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                    <Share2 size={16} />
                    Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#CBD5E1] text-[#475569] text-sm font-medium rounded-lg hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                    <QrCode size={16} />
                    QR
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#CBD5E1] text-red-600 text-sm font-medium rounded-lg hover:border-red-600 hover:bg-red-50 transition-colors">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>

              {/* Status Pills */}
              <div className="flex items-center gap-2 pt-4">
                <span className="text-xs text-[#475569]">Status:</span>
                <span className="px-2 py-1 bg-[#F1F5F9] text-[#475569] text-xs font-medium rounded">DRAFT</span>
                {sessionStatus === "capturing" && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">LIVE</span>
                )}
                <span className="px-2 py-1 bg-[#F1F5F9] text-[#475569] text-xs font-medium rounded">ENDED</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Live View with Video and Transcript */}
      {sessionStatus === "live" && (
        <div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#CBD5E1] bg-gradient-to-r from-[#F0FDFA] to-white">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#0F172A]">{podcastTitle}</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-red-600">LIVE</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#475569] hover:border-[#0F766E] transition-colors">
                <Globe size={14} />
                <span className="hidden sm:inline">{selectedTranslationLang}</span>
              </button>
              <button className="px-3 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#475569] hover:border-[#0F766E] transition-colors">
                Hide overlay
              </button>
              <button className="px-3 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#475569] hover:border-[#0F766E] transition-colors">
                Subtitle style
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F766E] text-white rounded-lg text-xs font-medium hover:bg-[#14B8A6] transition-colors">
                <Share2 size={14} />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button className="px-3 py-1.5 bg-white border border-[#CBD5E1] rounded-lg text-xs text-[#475569] hover:border-[#0F766E] transition-colors">
                Fullscreen
              </button>
            </div>
          </div>

          {/* Video and Transcript Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Video Player (2/3) */}
            <div className="lg:col-span-2 bg-black aspect-video lg:aspect-auto">
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                {/* Mock Video Frame */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={32} className="text-white/70" />
                  </div>
                  <p className="text-white/70 text-sm">Video Player</p>
                  <p className="text-white/50 text-xs mt-1">YouTube Embed</p>
                </div>

                {/* Live Subtitle Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-white text-center text-base sm:text-lg font-medium drop-shadow-lg">
                    I'll start your week with conversations that explore what drives the world's most influential people.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Transcript (1/3) */}
            <div className="lg:col-span-1 bg-[#F8FAFC] border-l border-[#CBD5E1]">
              <div className="sticky top-0 bg-white border-b border-[#CBD5E1] px-4 py-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#0F172A]">Live transcript</h3>
                <button className="text-xs text-[#0F766E] font-medium hover:text-[#14B8A6] transition-colors">
                  Bosnian
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
                {mockTranscript.map((item) => (
                  <div key={item.id} className="bg-white border border-[#E2E8F0] rounded-lg p-3 space-y-2">
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {item.translation}
                    </p>
                    {item.translation !== item.original && (
                      <p className="text-xs text-[#94A3B8] italic border-t border-[#E2E8F0] pt-2">
                        {item.original}
                      </p>
                    )}
                  </div>
                ))}

                {/* Live Indicator */}
                <div className="flex items-center justify-center gap-2 py-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#475569]">Live transcription active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="border-t border-[#CBD5E1] px-4 sm:px-6 py-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleEndSession}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <Square size={16} />
                  End Session
                </button>
                <button className="px-4 py-2 bg-white border border-[#CBD5E1] text-[#475569] text-sm font-medium rounded-lg hover:border-[#0F766E] hover:text-[#0F766E] transition-colors">
                  Session Settings
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <CheckCircle size={14} className="text-green-600" />
                <span>Audio: {selectedAudioSource === "microphone" ? "Microphone" : "Tab Audio"}</span>
                <span className="mx-2">•</span>
                <span>Translation: {selectedTranslationLang}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audio Source Selection Modal */}
      {showAudioSourceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowAudioSourceModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-[#0F766E] via-[#D4AF37] to-[#0F766E]"></div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Choose Audio Source</h3>
              <p className="text-sm text-[#475569] mb-6">
                Stream is active. Choose an audio source to begin capturing and transcribing.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => handleAudioSourceSelect("microphone")}
                  className="w-full flex items-center gap-3 px-5 py-4 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white rounded-xl hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-md"
                >
                  <Mic size={20} />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">Browser microphone</p>
                    <p className="text-xs opacity-90">Capture from system microphone</p>
                  </div>
                </button>

                <button
                  onClick={() => handleAudioSourceSelect("tab-audio")}
                  className="w-full flex items-center gap-3 px-5 py-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-md"
                >
                  <Volume2 size={20} />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm">Browser tab audio</p>
                    <p className="text-xs opacity-90">Capture audio from this tab</p>
                  </div>
                </button>
              </div>

              <button
                onClick={() => setShowAudioSourceModal(false)}
                className="w-full mt-4 px-4 py-2 text-sm text-[#475569] hover:text-[#0F172A] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowLanguageModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="h-1 bg-gradient-to-r from-[#0F766E] via-[#D4AF37] to-[#0F766E]"></div>

            <div className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">MinbarLive</h2>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-4">{podcastTitle}</h3>

              <h4 className="text-xl font-semibold text-[#0F172A] mb-2">Choose your translation language</h4>
              <p className="text-sm text-[#475569] mb-6">
                Live transcript will be translated to your chosen language in real-time.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {translationLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.name)}
                    className="p-4 bg-white border-2 border-[#CBD5E1] rounded-xl hover:border-[#0F766E] hover:bg-[#F0FDFA] transition-all text-center group"
                  >
                    <p className="font-semibold text-[#0F172A] mb-1">{lang.name}</p>
                    <p className="text-xs text-[#475569]">{lang.native}</p>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-[#475569]">
                <Globe size={16} className="text-[#0F766E]" />
                <span>Translation language</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
