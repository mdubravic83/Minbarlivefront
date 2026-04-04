import { Plus, Filter, QrCode, Share2, ExternalLink, Globe, Eye, LayoutList, LayoutGrid, Square } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function PodcastCompanion() {
  const [viewMode, setViewMode] = useState<"list" | "grid" | "card">("grid");
  
  const sessions = [
    {
      id: "1",
      title: "Ramadan Reflections - Ep. 12",
      platform: "Spotify",
      platformColor: "bg-green-500",
      source: "English",
      targets: ["Arabic", "Urdu"],
      status: "Live",
      viewers: 67,
      isPublic: true,
      url: "minbarlive.com/p/xyz123",
    },
    {
      id: "2",
      title: "Faith & Life Discussion",
      platform: "Apple Podcasts",
      platformColor: "bg-purple-500",
      source: "Arabic",
      targets: ["English", "French"],
      status: "Live",
      viewers: 34,
      isPublic: true,
      url: "minbarlive.com/p/abc456",
    },
    {
      id: "3",
      title: "Youth Q&A Series",
      platform: "YouTube",
      platformColor: "bg-red-500",
      source: "English",
      targets: ["Spanish", "Somali"],
      status: "Scheduled",
      viewers: 0,
      isPublic: false,
      url: "minbarlive.com/p/def789",
    },
    {
      id: "4",
      title: "Tafsir Deep Dive",
      platform: "Spotify",
      platformColor: "bg-green-500",
      source: "Arabic",
      targets: ["English"],
      status: "Ended",
      viewers: 142,
      isPublic: true,
      url: "minbarlive.com/p/ghi012",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#0F172A]">Podcast Companion</h1>
          <p className="text-sm text-[#475569] mt-1">
            Live transcription companion for external podcast episodes
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded-lg hover:bg-[#C49B2F] transition-colors shadow-sm">
          <Plus size={18} />
          New Companion Session
        </button>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          <Filter size={16} />
          All Status
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          All Platforms
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Public/Private
        </button>
        <div className="flex-1"></div>
        
        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-1">
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "list"
                ? "bg-white text-[#0F766E] shadow-sm"
                : "text-[#475569] hover:text-[#0F172A]"
            }`}
            title="List View"
          >
            <LayoutList size={16} />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "grid"
                ? "bg-white text-[#0F766E] shadow-sm"
                : "text-[#475569] hover:text-[#0F172A]"
            }`}
            title="Grid View"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`p-1.5 rounded transition-colors ${
              viewMode === "card"
                ? "bg-white text-[#0F766E] shadow-sm"
                : "text-[#475569] hover:text-[#0F172A]"
            }`}
            title="Card View"
          >
            <Square size={16} />
          </button>
        </div>
        
        <span className="text-xs text-[#475569]">2 live • 67 active viewers</span>
      </div>

      {/* List View (Table) */}
      {viewMode === "list" && (
        <div className="bg-white border border-[#CBD5E1] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Episode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Platform
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Languages
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Viewers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Companion URL
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
                    <Link
                      to={`/podcast-companion/${session.id}`}
                      className="text-sm font-medium text-[#0F172A] hover:text-[#0F766E]"
                    >
                      {session.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${session.platformColor}`}></span>
                      <span className="text-sm text-[#475569]">{session.platform}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-[#475569]">
                      <span className="font-medium text-[#0F172A]">{session.source}</span> → {session.targets.join(", ")}
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
                      {session.status === "Live" && (
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                      )}
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Eye size={14} className="text-[#475569]" />
                      <span className="font-medium text-[#0F172A]">{session.viewers}</span>
                      {session.isPublic && (
                        <Globe size={14} className="text-[#0F766E] ml-2" title="Public" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-[#0F766E] font-mono">{session.url}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                        title="Generate QR Code"
                      >
                        <QrCode size={16} className="text-[#475569]" />
                      </button>
                      <button
                        className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                        title="Share Link"
                      >
                        <Share2 size={16} className="text-[#475569]" />
                      </button>
                      <button
                        className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                        title="Open Public Page"
                      >
                        <ExternalLink size={16} className="text-[#475569]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Grid View (Original 2-Column) */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((session) => (
            <Link
              key={session.id}
              to={`/podcast-companion/${session.id}`}
              className="bg-white border border-[#CBD5E1] rounded-lg p-5 hover:border-[#0F766E] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-[#0F172A] mb-2">{session.title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${session.platformColor}`}></span>
                      <span className="text-xs text-[#475569] font-medium">
                        {session.platform}
                      </span>
                    </div>
                    <span className="text-xs text-[#CBD5E1]">•</span>
                    <span className="text-xs text-[#475569]">
                      {session.source} → {session.targets.join(", ")}
                    </span>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 px-2 py-1 text-xs font-semibold rounded-full ${
                    session.status === "Live"
                      ? "bg-red-100 text-red-700"
                      : session.status === "Scheduled"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-[#CBD5E1] text-[#475569]"
                  }`}
                >
                  {session.status}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#CBD5E1]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Eye size={14} className="text-[#475569]" />
                    <span className="font-medium text-[#0F172A]">{session.viewers}</span>
                    <span className="text-xs text-[#475569]">viewers</span>
                  </div>
                  {session.isPublic && (
                    <div className="flex items-center gap-1.5">
                      <Globe size={14} className="text-[#0F766E]" />
                      <span className="text-xs text-[#0F766E] font-medium">Public</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                    title="Generate QR Code"
                  >
                    <QrCode size={16} className="text-[#475569]" />
                  </button>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                    title="Share Link"
                  >
                    <Share2 size={16} className="text-[#475569]" />
                  </button>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="p-2 hover:bg-[#F0FDFA] rounded transition-colors"
                    title="Open Public Page"
                  >
                    <ExternalLink size={16} className="text-[#475569]" />
                  </button>
                </div>
              </div>

              {/* URL Preview */}
              <div className="mt-3 pt-3 border-t border-[#CBD5E1]">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#475569]">Companion URL:</span>
                  <span className="text-xs text-[#0F766E] font-mono">{session.url}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Card View (Full-Width) */}
      {viewMode === "card" && (
        <div className="space-y-3">
          {sessions.map((session) => (
            <div 
              key={session.id} 
              className="bg-white border border-[#CBD5E1] rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-6">
                {/* Left Section - Main Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start gap-3">
                    {session.status === "Live" && (
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse flex-shrink-0 mt-1"></div>
                    )}
                    <div className="flex-1">
                      <Link
                        to={`/podcast-companion/${session.id}`}
                        className="text-base font-semibold text-[#0F172A] hover:text-[#0F766E]"
                      >
                        {session.title}
                      </Link>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${session.platformColor}`}></span>
                          <span className="text-sm text-[#475569] font-medium">
                            {session.platform}
                          </span>
                        </div>
                        <span className="text-sm text-[#CBD5E1]">•</span>
                        <span className="text-sm text-[#475569]">
                          <span className="font-medium text-[#0F172A]">{session.source}</span> → {session.targets.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* URL */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#475569]">Companion URL:</span>
                    <span className="text-[#0F766E] font-mono">{session.url}</span>
                  </div>
                </div>

                {/* Middle Section - Stats */}
                <div className="flex items-center gap-6">
                  {/* Status */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full ${
                      session.status === "Live"
                        ? "bg-red-100 text-red-700"
                        : session.status === "Scheduled"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-[#CBD5E1] text-[#475569]"
                    }`}
                  >
                    {session.status === "Live" && (
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                    )}
                    {session.status}
                  </span>

                  {/* Viewers */}
                  <div className="text-center">
                    <p className="text-xs text-[#94A3B8] mb-0.5">Viewers</p>
                    <div className="flex items-center gap-1">
                      <Eye size={14} className="text-[#475569]" />
                      <span className="font-semibold text-[#0F172A]">{session.viewers}</span>
                    </div>
                  </div>

                  {/* Public/Private */}
                  <div className="text-center min-w-[60px]">
                    <p className="text-xs text-[#94A3B8] mb-0.5">Access</p>
                    {session.isPublic ? (
                      <div className="flex items-center gap-1 justify-center">
                        <Globe size={14} className="text-[#0F766E]" />
                        <span className="text-xs font-medium text-[#0F766E]">Public</span>
                      </div>
                    ) : (
                      <span className="text-xs font-medium text-[#94A3B8]">Private</span>
                    )}
                  </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    to={`/podcast-companion/${session.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white text-sm font-medium rounded-lg hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-sm"
                  >
                    <ExternalLink size={16} />
                    Open
                  </Link>
                  <button
                    className="p-2 hover:bg-[#F0FDFA] rounded-lg transition-colors"
                    title="Generate QR Code"
                  >
                    <QrCode size={18} className="text-[#475569]" />
                  </button>
                  <button
                    className="p-2 hover:bg-[#F0FDFA] rounded-lg transition-colors"
                    title="Share Link"
                  >
                    <Share2 size={18} className="text-[#475569]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Info Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#F0FDFA] to-white border border-[#0F766E]/20 rounded-lg p-5">
          <h3 className="font-semibold text-[#0F172A] mb-2">What is Podcast Companion?</h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Provide live transcription and translation for external podcast episodes. 
            Viewers access a companion page via QR code or link while listening on their platform.
          </p>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
          <h3 className="font-semibold text-[#0F172A] mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#475569]">This Week</span>
              <span className="font-medium text-[#0F172A]">8 sessions</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#475569]">Total Viewers</span>
              <span className="font-medium text-[#0F172A]">243</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#475569]">Avg Session Time</span>
              <span className="font-medium text-[#0F172A]">32 min</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
          <h3 className="font-semibold text-[#0F172A] mb-3">Supported Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Spotify", color: "bg-green-500" },
              { name: "Apple", color: "bg-purple-500" },
              { name: "YouTube", color: "bg-red-500" },
              { name: "RSS", color: "bg-orange-500" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-xs"
              >
                <span className={`w-2 h-2 rounded-full ${platform.color}`}></span>
                <span className="text-[#0F172A]">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}