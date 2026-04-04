import { Plus, FileText, Sparkles, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router";

export function HutbaAsistent() {
  const recentDrafts = [
    {
      id: "1",
      title: "The Importance of Family Values in Islam",
      topic: "Family, Society",
      language: "English",
      status: "Draft",
      updated: "2 hours ago",
    },
    {
      id: "2",
      title: "الصبر والتقوى في الحياة اليومية",
      topic: "Character, Faith",
      language: "Arabic",
      status: "Complete",
      updated: "Yesterday",
    },
    {
      id: "3",
      title: "Youth and Identity in Modern World",
      topic: "Youth, Society",
      language: "English",
      status: "Draft",
      updated: "3 days ago",
    },
  ];

  const suggestedTopics = [
    { title: "The Mercy of Allah", category: "Aqeedah" },
    { title: "Rights of Neighbors", category: "Society" },
    { title: "Gratitude and Thankfulness", category: "Character" },
    { title: "Seeking Knowledge", category: "Education" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={24} className="text-[#D4AF37]" />
            <h1 className="text-2xl font-semibold text-[#0F172A]">HutbaAsistent</h1>
          </div>
          <p className="text-sm text-[#475569] mt-1">
            AI-assisted khutbah preparation and outline generator
          </p>
        </div>
        <Link
          to="/hutba-asistent/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-sm font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-md hover:shadow-lg"
        >
          <Plus size={18} />
          Create New Draft
        </Link>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-br from-[#F0FDFA] via-[#E6FAF5] to-white border-2 border-[#0F766E]/20 rounded-2xl p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <Sparkles size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-[#0F172A] mb-1">About HutbaAsistent</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Generate structured khutbah outlines powered by authentic Islamic sources.
              Customize your draft, add references, and export to Word or PDF for further preparation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="col-span-2 space-y-6">
          {/* Recent Drafts */}
          <div className="bg-white border border-[#CBD5E1] rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-[#CBD5E1] p-5 bg-gradient-to-r from-[#F8FAFC] to-white">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-[#0F172A]">Recent Drafts</h2>
                <button className="text-sm text-[#0F766E] hover:underline">View All</button>
              </div>
            </div>
            <div className="divide-y divide-[#CBD5E1]">
              {recentDrafts.map((draft) => (
                <Link
                  key={draft.id}
                  to={`/hutba-asistent/draft/${draft.id}`}
                  className="p-5 flex items-center gap-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#F0FDFA] rounded flex items-center justify-center flex-shrink-0">
                    <FileText size={20} className="text-[#0F766E]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#0F172A] mb-1">{draft.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#475569]">
                      <span>{draft.topic}</span>
                      <span>•</span>
                      <span>{draft.language}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {draft.updated}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      draft.status === "Complete"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {draft.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Exports */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] p-5">
              <h2 className="font-semibold text-[#0F172A]">Recent Exports</h2>
            </div>
            <div className="p-5">
              <div className="space-y-3">
                {[
                  { title: "Family Values - Final Draft.docx", date: "Yesterday", format: "Word" },
                  { title: "Patience and Piety.pdf", date: "3 days ago", format: "PDF" },
                  { title: "Youth Guidance Outline.docx", date: "1 week ago", format: "Word" },
                ].map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-[#475569]" />
                      <div>
                        <p className="text-sm text-[#0F172A] font-medium">{file.title}</p>
                        <p className="text-xs text-[#475569]">Exported {file.date}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-white border border-[#CBD5E1] text-xs text-[#475569] rounded">
                      {file.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Quick Start */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="font-semibold text-[#0F172A] mb-4">Quick Start</h3>
            <div className="space-y-2">
              <Link
                to="/hutba-asistent/new"
                className="block w-full px-4 py-2 bg-[#0F766E] text-white text-sm text-center rounded hover:bg-[#14532D]"
              >
                New Outline
              </Link>
              <button className="w-full px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
                Browse Templates
              </button>
            </div>
          </div>

          {/* Suggested Topics */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="font-semibold text-[#0F172A] mb-4">Suggested Topics</h3>
            <div className="space-y-2">
              {suggestedTopics.map((topic, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-3 bg-[#F8FAFC] rounded hover:bg-[#F0FDFA] transition-colors"
                >
                  <p className="text-sm text-[#0F172A] font-medium">{topic.title}</p>
                  <p className="text-xs text-[#475569] mt-0.5">{topic.category}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Corpus Summary */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-[#0F766E]" />
              <h3 className="font-semibold text-[#0F172A]">Knowledge Base</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#475569] mb-1">Total Sources</p>
                <p className="text-xl font-semibold text-[#0F172A]">3,247</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Last Updated</p>
                <p className="text-sm text-[#0F172A]">2 days ago</p>
              </div>
              <button className="w-full px-3 py-2 border border-[#CBD5E1] text-[#475569] text-xs rounded hover:bg-[#F8FAFC]">
                View Sources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}