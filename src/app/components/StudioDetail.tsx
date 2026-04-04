import { useParams, Link } from "react-router";
import { ArrowLeft, Play, Download, FileText, Languages, Subtitles, Eye, EyeOff, Settings } from "lucide-react";

export function StudioDetail() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div>
        <Link to="/studio" className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#0F172A] mb-3">
          <ArrowLeft size={16} />
          Back to Studio
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#0F172A]">Tafsir Series - Surah Al-Baqarah</h1>
            <p className="text-sm text-[#475569] mt-1">Sheikh Ahmed Hassan • 45:32</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 border border-[#CBD5E1] rounded hover:bg-[#F8FAFC]">
              <Settings size={18} className="text-[#475569]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Video Preview */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg aspect-video flex items-center justify-center mb-4">
              <Play size={64} className="text-[#CBD5E1]" />
            </div>
            
            {/* Processing Status */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-[#F8FAFC] rounded">
                <p className="text-xs text-[#475569] mb-1">Transcript</p>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Complete</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded">
                <p className="text-xs text-[#475569] mb-1">Translation</p>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Processing</span>
                <p className="text-xs text-[#475569] mt-1">68% done</p>
              </div>
              <div className="p-3 bg-[#F8FAFC] rounded">
                <p className="text-xs text-[#475569] mb-1">Subtitles</p>
                <span className="px-2 py-1 bg-[#CBD5E1] text-[#475569] text-xs font-medium rounded">Pending</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] px-6 py-3">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E]">
                  <FileText size={16} />
                  Transcript
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                  <Languages size={16} />
                  Translation
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">
                  <Subtitles size={16} />
                  Subtitles
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-4 h-96 overflow-y-auto space-y-3 text-sm leading-relaxed">
                <p className="text-[#0F172A]">[00:00] بسم الله الرحمن الرحيم...</p>
                <p className="text-[#0F172A]">[00:15] نبدأ اليوم في تفسير آية الكرسي...</p>
                <p className="text-[#0F172A]">[00:45] الله لا إله إلا هو الحي القيوم...</p>
                <p className="text-[#0F172A]">[01:12] هذه الآية العظيمة من أعظم آيات القرآن...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Video Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-[#475569] mb-1">Speaker</p>
                <p className="text-[#0F172A]">Sheikh Ahmed Hassan</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Duration</p>
                <p className="text-[#0F172A] font-mono">45:32</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Source Language</p>
                <p className="text-[#0F172A]">Arabic</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Target Languages</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["English", "Urdu", "French"].map((lang) => (
                    <span key={lang} className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Export & Download</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                <span>Transcript</span>
                <Download size={14} />
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                <span>Translations</span>
                <Download size={14} />
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                <span>SRT Files</span>
                <Download size={14} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Publish Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Public visibility</span>
                <button className="relative w-11 h-6 bg-[#0F766E] rounded-full">
                  <span className="absolute w-5 h-5 bg-white rounded-full top-0.5 right-0.5 transition-all"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Allow embedding</span>
                <button className="relative w-11 h-6 bg-[#0F766E] rounded-full">
                  <span className="absolute w-5 h-5 bg-white rounded-full top-0.5 right-0.5 transition-all"></span>
                </button>
              </div>
              <button className="w-full px-4 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded hover:bg-[#C49B2F] mt-3">
                Publish to Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
