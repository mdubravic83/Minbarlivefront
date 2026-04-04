import { useParams } from "react-router";
import { Globe, Share2, QrCode, Radio, Eye } from "lucide-react";
import { useState } from "react";

export function PodcastViewer() {
  const { id } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [bilingualMode, setBilingualMode] = useState(false);

  const languages = [
    { code: "english", name: "English" },
    { code: "arabic", name: "Arabic" },
    { code: "urdu", name: "Urdu" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Minimal Header */}
      <header className="bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">ML</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F172A]">Ramadan Reflections - Episode 12</p>
                <div className="flex items-center gap-2 text-xs text-[#475569]">
                  <span className="flex items-center gap-1">
                    <Radio size={10} className="text-red-500 animate-pulse" />
                    Live
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye size={10} />
                    67 viewers
                  </span>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-[#F8FAFC] rounded">
              <Share2 size={18} className="text-[#475569]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Viewer */}
      <main className="max-w-5xl mx-auto px-6 py-6">
        {/* Embedded Player Info */}
        <div className="bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded-lg p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Now playing on Spotify</p>
              <h2 className="text-lg font-semibold">Listen on your podcast app while reading the transcript here</h2>
            </div>
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded transition-colors backdrop-blur">
              Open on Spotify
            </button>
          </div>
        </div>

        {/* Language Controls */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-[#475569]" />
              <span className="text-sm text-[#475569]">Select language:</span>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      selectedLanguage === lang.code
                        ? "bg-[#0F766E] text-white"
                        : "bg-[#F8FAFC] text-[#0F172A] hover:bg-[#F0FDFA]"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#475569]">Bilingual mode</span>
              <button
                onClick={() => setBilingualMode(!bilingualMode)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  bilingualMode ? "bg-[#0F766E]" : "bg-[#CBD5E1]"
                }`}
              >
                <span
                  className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all ${
                    bilingualMode ? "right-0.5" : "left-0.5"
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Transcript */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg">
          <div className="border-b border-[#CBD5E1] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-[#0F172A]">Live Transcript</h3>
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded">
                <Radio size={10} className="animate-pulse" />
                Live
              </span>
            </div>
            <span className="text-xs text-[#475569]">Auto-updating</span>
          </div>

          {/* Transcript Content */}
          <div className="p-6 h-[600px] overflow-y-auto">
            {!bilingualMode ? (
              // Single Language Mode
              <div className="space-y-4 text-base leading-relaxed">
                {selectedLanguage === "english" ? (
                  <>
                    <p className="text-[#0F172A]">
                      <span className="inline-block w-16 text-[#475569] text-sm">[00:45]</span>
                      Assalamu alaikum everyone, welcome back to Ramadan Reflections. I'm so glad you're joining us for episode 12.
                    </p>
                    <p className="text-[#0F172A]">
                      <span className="inline-block w-16 text-[#475569] text-sm">[01:12]</span>
                      Today we're exploring the spiritual dimensions of fasting and how it transforms our relationship with Allah.
                    </p>
                    <p className="text-[#0F172A]">
                      <span className="inline-block w-16 text-[#475569] text-sm">[01:45]</span>
                      As the Prophet Muhammad, peace be upon him, taught us - fasting is not just about abstaining from food and drink.
                    </p>
                    <p className="text-[#0F172A]">
                      <span className="inline-block w-16 text-[#475569] text-sm">[02:20]</span>
                      It's a comprehensive training program for the soul, teaching us patience, gratitude, and self-discipline.
                    </p>
                    <p className="text-[#0F172A]">
                      <span className="inline-block w-16 text-[#475569] text-sm">[02:55]</span>
                      Let's discuss three key principles that can help us maximize the spiritual benefits of Ramadan.
                    </p>
                    <p className="text-[#0F766E] animate-pulse">
                      <span className="inline-block w-16 text-[#475569] text-sm">[03:15]</span>
                      First, intention and sincerity in our worship...
                    </p>
                  </>
                ) : selectedLanguage === "arabic" ? (
                  <>
                    <p className="text-[#0F172A]" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[00:45]</span>
                      السلام عليكم جميعاً، مرحباً بكم مرة أخرى في تأملات رمضان
                    </p>
                    <p className="text-[#0F172A]" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[01:12]</span>
                      اليوم نستكشف الأبعاد الروحية للصيام وكيف يحول علاقتنا مع الله
                    </p>
                    <p className="text-[#0F172A]" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[01:45]</span>
                      كما علمنا النبي محمد صلى الله عليه وسلم - الصيام ليس مجرد الامتناع عن الطعام والشراب
                    </p>
                    <p className="text-[#0F766E] animate-pulse" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[03:15]</span>
                      أولاً، النية والإخلاص في عبادتنا...
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[#0F172A]" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[00:45]</span>
                      السلام علیکم، رمضان کی تاملات میں آپ سب کا خیر مقدم
                    </p>
                    <p className="text-[#0F172A]" dir="rtl">
                      <span className="inline-block w-16 text-[#475569] text-sm">[01:12]</span>
                      آج ہم روزے کی روحانی جہتوں کا جائزہ لے رہے ہیں
                    </p>
                  </>
                )}
              </div>
            ) : (
              // Bilingual Mode
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6 pb-4 border-b border-[#CBD5E1]">
                  <div>
                    <p className="text-xs font-semibold text-[#0F766E] uppercase tracking-wide mb-3">English (Original)</p>
                    <p className="text-[#0F172A] leading-relaxed">
                      <span className="block text-[#475569] text-sm mb-1">[00:45]</span>
                      Assalamu alaikum everyone, welcome back to Ramadan Reflections.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0F766E] uppercase tracking-wide mb-3">Arabic (Translation)</p>
                    <p className="text-[#0F172A] leading-relaxed" dir="rtl">
                      <span className="block text-[#475569] text-sm mb-1">[00:45]</span>
                      السلام عليكم جميعاً، مرحباً بكم مرة أخرى في تأملات رمضان
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pb-4 border-b border-[#CBD5E1]">
                  <div>
                    <p className="text-[#0F172A] leading-relaxed">
                      <span className="block text-[#475569] text-sm mb-1">[01:12]</span>
                      Today we're exploring the spiritual dimensions of fasting.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#0F172A] leading-relaxed" dir="rtl">
                      <span className="block text-[#475569] text-sm mb-1">[01:12]</span>
                      اليوم نستكشف الأبعاد الروحية للصيام
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pb-4 border-b border-[#CBD5E1]">
                  <div>
                    <p className="text-[#0F766E] leading-relaxed animate-pulse">
                      <span className="block text-[#475569] text-sm mb-1">[02:55]</span>
                      Let's discuss three key principles...
                    </p>
                  </div>
                  <div>
                    <p className="text-[#0F766E] leading-relaxed animate-pulse" dir="rtl">
                      <span className="block text-[#475569] text-sm mb-1">[02:55]</span>
                      دعونا نناقش ثلاثة مبادئ رئيسية...
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Session Info Footer */}
        <div className="mt-6 bg-white border border-[#CBD5E1] rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#0F172A]">Share this companion page</p>
              <p className="text-xs text-[#475569] mt-1">
                Let others follow along in their preferred language
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0F766E] text-white text-sm rounded hover:bg-[#14532D]">
                <QrCode size={16} />
                Show QR Code
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                <Share2 size={16} />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="mt-12 py-6 border-t border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#475569]">
            <span>Powered by</span>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">ML</span>
              </div>
              <span className="font-semibold text-[#0F172A]">MinbarLive</span>
            </div>
          </div>
          <p className="text-xs text-[#475569]">
            Multilingual podcast companion
          </p>
        </div>
      </footer>
    </div>
  );
}
