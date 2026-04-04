import { useParams } from "react-router";
import { Play, Globe, Share2, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

export function PublicVideoDetail() {
  const { id } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [activeTab, setActiveTab] = useState("transcript");

  const languages = [
    { code: "english", name: "English" },
    { code: "arabic", name: "Arabic" },
    { code: "urdu", name: "Urdu" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#CBD5E1]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">ML</span>
            </div>
            <span className="font-semibold text-[#0F172A]">MinbarLive</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
            <Share2 size={16} />
            Share
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Video Section */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg overflow-hidden mb-6">
          {/* Video Player Placeholder */}
          <div className="bg-[#0F172A] aspect-video flex items-center justify-center">
            <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Play size={32} className="text-[#0F766E] ml-1" />
            </button>
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-[#0F172A] mb-2">
              Tafsir Series - Surah Al-Baqarah (Ayat al-Kursi)
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#475569]">
              <span>Sheikh Ahmed Hassan</span>
              <span>•</span>
              <span>45:32</span>
              <span>•</span>
              <span>March 28, 2026</span>
            </div>

            {/* Language Selector */}
            <div className="mt-4 flex items-center gap-3">
              <Globe size={18} className="text-[#475569]" />
              <span className="text-sm text-[#475569]">View in:</span>
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
          </div>
        </div>

        {/* Content Tabs & Transcript */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-white border border-[#CBD5E1] rounded-lg">
              {/* Tabs */}
              <div className="border-b border-[#CBD5E1] px-6 py-3">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setActiveTab("transcript")}
                    className={`px-3 py-2 text-sm font-medium ${
                      activeTab === "transcript"
                        ? "text-[#0F766E] border-b-2 border-[#0F766E]"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    Transcript
                  </button>
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`px-3 py-2 text-sm font-medium ${
                      activeTab === "summary"
                        ? "text-[#0F766E] border-b-2 border-[#0F766E]"
                        : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    Summary
                  </button>
                </div>
              </div>

              {/* Transcript Content */}
              {activeTab === "transcript" && (
                <div className="p-6">
                  <div className="space-y-4 text-sm leading-relaxed">
                    {selectedLanguage === "english" ? (
                      <>
                        <p className="text-[#0F172A]">
                          <span className="text-[#475569] mr-2">[00:00]</span>
                          Bismillah ar-Rahman ar-Rahim. In the name of Allah, the Most Gracious, 
                          the Most Merciful.
                        </p>
                        <p className="text-[#0F172A]">
                          <span className="text-[#475569] mr-2">[00:15]</span>
                          Today we continue our Tafsir series with one of the most powerful verses 
                          in the Quran - Ayat al-Kursi, the Throne Verse.
                        </p>
                        <p className="text-[#0F172A]">
                          <span className="text-[#475569] mr-2">[00:45]</span>
                          Allah, there is no deity except Him, the Ever-Living, the Sustainer of existence.
                        </p>
                        <p className="text-[#0F172A]">
                          <span className="text-[#475569] mr-2">[01:12]</span>
                          This verse, found in Surah Al-Baqarah verse 255, is considered one of the 
                          greatest verses of the Quran.
                        </p>
                        <p className="text-[#0F172A]">
                          <span className="text-[#475569] mr-2">[01:45]</span>
                          The Prophet Muhammad, peace be upon him, taught us that reciting this verse 
                          provides protection and brings immense blessings.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[#0F172A]" dir="rtl">
                          <span className="text-[#475569] ml-2">[00:00]</span>
                          بسم الله الرحمن الرحيم
                        </p>
                        <p className="text-[#0F172A]" dir="rtl">
                          <span className="text-[#475569] ml-2">[00:15]</span>
                          نبدأ اليوم في تفسير آية الكرسي، من أعظم آيات القرآن الكريم
                        </p>
                        <p className="text-[#0F172A]" dir="rtl">
                          <span className="text-[#475569] ml-2">[00:45]</span>
                          الله لا إله إلا هو الحي القيوم
                        </p>
                      </>
                    )}
                  </div>

                  <button className="mt-6 flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F0FDFA]">
                    <Download size={16} />
                    Download Transcript
                  </button>
                </div>
              )}

              {activeTab === "summary" && (
                <div className="p-6">
                  <div className="space-y-4 text-sm leading-relaxed text-[#0F172A]">
                    <p>
                      In this comprehensive lecture, Sheikh Ahmed Hassan provides an in-depth 
                      analysis of Ayat al-Kursi (Verse 255 of Surah Al-Baqarah), one of the 
                      most significant verses in the Quran.
                    </p>
                    <h3 className="font-semibold mt-4">Key Topics Covered:</h3>
                    <ul className="list-disc list-inside space-y-2 text-[#475569]">
                      <li>The divine attributes mentioned in the verse</li>
                      <li>The meaning of Al-Hayy (The Ever-Living) and Al-Qayyum (The Sustainer)</li>
                      <li>Protection and blessings of reciting this verse</li>
                      <li>Historical context and scholarly interpretations</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">About</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-[#475569] mb-1">Speaker</p>
                  <p className="text-[#0F172A] font-medium">Sheikh Ahmed Hassan</p>
                </div>
                <div>
                  <p className="text-xs text-[#475569] mb-1">Organization</p>
                  <p className="text-[#0F172A]">Islamic Center</p>
                </div>
                <div>
                  <p className="text-xs text-[#475569] mb-1">Available Languages</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {languages.map((lang) => (
                      <span
                        key={lang.code}
                        className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded"
                      >
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Content */}
            <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Related Content</h3>
              <div className="space-y-3">
                {[
                  { title: "Tafsir Series - Ep. 1", duration: "42:15" },
                  { title: "Understanding Surah Al-Baqarah", duration: "38:22" },
                  { title: "Daily Quran Reflections", duration: "25:10" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block p-3 bg-[#F8FAFC] rounded hover:bg-[#F0FDFA] transition-colors"
                  >
                    <p className="text-sm text-[#0F172A] font-medium">{item.title}</p>
                    <p className="text-xs text-[#475569] mt-1">{item.duration}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["Tafsir", "Quran", "Faith", "Study"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#475569] rounded hover:bg-[#F0FDFA] cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#CBD5E1] mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">ML</span>
              </div>
              <span className="font-semibold text-[#0F172A]">MinbarLive</span>
            </div>
            <p className="text-sm text-[#475569]">
              Multilingual Islamic content platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
