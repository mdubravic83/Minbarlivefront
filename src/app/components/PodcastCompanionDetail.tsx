import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Copy, Globe, MessageSquare, Eye, Settings } from "lucide-react";

export function PodcastCompanionDetail() {
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <div>
        <Link to="/podcast-companion" className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#0F172A] mb-3">
          <ArrowLeft size={16} />
          Back to Podcast Companion
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-[#0F172A]">Ramadan Reflections - Ep. 12</h1>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">Live</span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-[#475569]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Spotify
              </span>
              <span>Started 15 min ago</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#D4AF37] text-white text-sm font-semibold rounded-lg hover:bg-[#C49B2F]">
              End Session
            </button>
            <button className="p-2 border border-[#CBD5E1] rounded hover:bg-[#F8FAFC]">
              <Settings size={18} className="text-[#475569]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] px-6 py-3">
              <div className="flex items-center gap-6">
                <button className="px-3 py-2 text-sm font-medium text-[#0F766E] border-b-2 border-[#0F766E]">Live Transcript</button>
                <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">Translations</button>
                <button className="px-3 py-2 text-sm text-[#475569] hover:text-[#0F172A]">Viewer Activity</button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#475569]">Active Viewers</span>
                    <Eye size={14} className="text-[#0F766E]" />
                  </div>
                  <p className="text-2xl font-semibold text-[#0F172A]">67</p>
                </div>
                <div className="p-4 bg-[#F8FAFC] rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#475569]">Interactions</span>
                    <MessageSquare size={14} className="text-[#0F766E]" />
                  </div>
                  <p className="text-2xl font-semibold text-[#0F172A]">12</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#0F172A]">Live Transcript (English)</h3>
                <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg p-4 h-96 overflow-y-auto space-y-3 text-sm leading-relaxed">
                  <p className="text-[#0F172A]">[00:45] Assalamu alaikum everyone, welcome back to Ramadan Reflections...</p>
                  <p className="text-[#0F172A]">[01:12] Today we're exploring the spiritual dimensions of fasting...</p>
                  <p className="text-[#0F172A]">[01:45] As the Prophet ﷺ taught us, fasting is not just abstaining from food...</p>
                  <p className="text-[#0F172A]">[02:20] It's about training our souls to be patient and grateful...</p>
                  <p className="text-[#0F766E] animate-pulse">[02:55] Let's discuss three key principles...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Session Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-[#475569] mb-1">Platform</p>
                <p className="text-[#0F172A] font-medium">Spotify</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Source Language</p>
                <p className="text-[#0F172A]">English</p>
              </div>
              <div>
                <p className="text-xs text-[#475569] mb-1">Active Translations</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["Arabic", "Urdu"].map((lang) => (
                    <span key={lang} className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Companion Access</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[#475569] mb-2">Public URL</p>
                <div className="flex items-center gap-2">
                  <input type="text" value="minbarlive.com/p/xyz123" readOnly className="flex-1 px-2 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded text-xs font-mono" />
                  <button className="p-1.5 hover:bg-[#F0FDFA] rounded"><Copy size={14} className="text-[#475569]" /></button>
                </div>
              </div>
              <button className="w-full px-3 py-2 bg-[#0F766E] text-white text-sm rounded hover:bg-[#14532D]">Generate QR Code</button>
              <button className="w-full px-3 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">Share Link</button>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-[#0F172A] mb-4">Source Episode</h3>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded hover:bg-[#F0FDFA]">
              <span className="text-sm text-[#0F172A]">Open on Spotify</span>
              <ExternalLink size={14} className="text-[#475569]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
