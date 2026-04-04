import { Upload, Link as LinkIcon, Filter, MoreHorizontal, Play, FileText, Languages, Subtitles, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

export function Studio() {
  const videos = [
    {
      id: "1",
      title: "Tafsir Series - Surah Al-Baqarah",
      speaker: "Sheikh Ahmed Hassan",
      duration: "45:32",
      transcript: "Complete",
      translation: "Processing",
      subtitles: "Pending",
      isPublic: true,
    },
    {
      id: "2",
      title: "Youth Lecture - Identity & Faith",
      speaker: "Dr. Fatima Khan",
      duration: "32:18",
      transcript: "Complete",
      translation: "Complete",
      subtitles: "Complete",
      isPublic: true,
    },
    {
      id: "3",
      title: "Friday Khutbah - March 28",
      speaker: "Imam Abdullah",
      duration: "22:45",
      transcript: "Processing",
      translation: "Pending",
      subtitles: "Pending",
      isPublic: false,
    },
    {
      id: "4",
      title: "Ramadan Prep Series - Ep 3",
      speaker: "Sheikh Omar",
      duration: "38:12",
      transcript: "Complete",
      translation: "Complete",
      subtitles: "Failed",
      isPublic: false,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Studio</h1>
          <p className="text-sm text-[#475569] mt-1">
            Process recorded videos with transcription and translation
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC] transition-colors">
            <LinkIcon size={18} />
            Import from URL
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded-lg hover:bg-[#C49B2F] transition-colors shadow-sm">
            <Upload size={18} />
            Upload Video
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          <Filter size={16} />
          All Jobs
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Processing
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Completed
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Failed
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Public Only
        </button>
      </div>

      {/* Videos Table */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Speaker
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Transcript
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Translation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Subtitles
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                Visibility
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-[#475569] uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#CBD5E1]">
            {videos.map((video, idx) => (
              <tr key={idx} className="hover:bg-[#F8FAFC]">
                <td className="px-6 py-4 text-sm text-[#0F172A]">{video.title}</td>
                <td className="px-6 py-4 text-sm text-[#475569]">{video.speaker}</td>
                <td className="px-6 py-4 text-sm text-[#475569]">{video.duration}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                      video.transcript === "Complete"
                        ? "bg-green-100 text-green-700"
                        : video.transcript === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-[#CBD5E1] text-[#475569]"
                    }`}
                  >
                    {video.transcript}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                      video.translation === "Complete"
                        ? "bg-green-100 text-green-700"
                        : video.translation === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-[#CBD5E1] text-[#475569]"
                    }`}
                  >
                    {video.translation}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                      video.subtitles === "Complete"
                        ? "bg-green-100 text-green-700"
                        : video.subtitles === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : video.subtitles === "Failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-[#CBD5E1] text-[#475569]"
                    }`}
                  >
                    {video.subtitles}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {video.isPublic ? (
                    <Eye size={16} className="text-[#14B8A6]" />
                  ) : (
                    <EyeOff size={16} className="text-[#475569]" />
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-[#F0FDFA] rounded">
                    <MoreHorizontal size={16} className="text-[#475569]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail View Concept */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <h3 className="font-semibold text-[#0F172A] mb-4">Video Processing Details</h3>
          
          {/* Video Preview Placeholder */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg aspect-video flex items-center justify-center mb-4">
            <Play size={48} className="text-[#CBD5E1]" />
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#CBD5E1] mb-4">
            <button className="px-4 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E] flex items-center gap-2">
              <FileText size={16} />
              Transcript
            </button>
            <button className="px-4 py-2 text-sm text-[#475569] hover:text-[#0F172A] flex items-center gap-2">
              <Languages size={16} />
              Translation
            </button>
            <button className="px-4 py-2 text-sm text-[#475569] hover:text-[#0F172A] flex items-center gap-2">
              <Subtitles size={16} />
              Subtitles
            </button>
          </div>

          {/* Content Area */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-4 h-48 overflow-y-auto text-xs text-[#475569]">
            <p className="mb-2">[00:00] Bismillah ar-Rahman ar-Rahim...</p>
            <p className="mb-2">[00:15] Today we continue our Tafsir series...</p>
            <p className="mb-2">[00:45] Looking at verse 255, Ayat al-Kursi...</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Export Actions */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
            <h3 className="font-semibold text-[#0F172A] mb-4">Export & Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Download Transcript
              </button>
              <button className="w-full px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Download Translations
              </button>
              <button className="w-full px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Download SRT Files
              </button>
            </div>
          </div>

          {/* Publish Settings */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
            <h3 className="font-semibold text-[#0F172A] mb-4">Publish Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Public visibility</span>
                <div className="w-12 h-6 bg-[#CBD5E1] rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#475569]">Allow embedding</span>
                <div className="w-12 h-6 bg-[#14B8A6] rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-[#0F766E] text-white text-sm rounded hover:bg-[#134E4A] mt-3">
                Publish to Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}