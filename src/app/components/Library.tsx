import { Search, Filter, Tag, Eye, EyeOff, Star } from "lucide-react";
import { Link } from "react-router";

export function Library() {
  const featuredItems = [
    {
      id: "1",
      title: "Eid Khutbah 2026",
      type: "Live Sermon",
      speaker: "Imam Abdullah",
      summary: "Celebrating Eid and reflecting on the blessed month of Ramadan",
      tags: ["Eid", "Celebration", "Community"],
      language: "Arabic → Multiple",
      isFeatured: true,
      isPublic: true,
      thumbnail: "featured",
    },
    {
      id: "2",
      title: "Tafsir Series - Surah Al-Baqarah",
      type: "Studio Video",
      speaker: "Sheikh Ahmed Hassan",
      summary: "Deep dive into the meanings and wisdom of Ayat al-Kursi",
      tags: ["Tafsir", "Quran", "Study"],
      language: "Arabic → Multiple",
      isFeatured: true,
      isPublic: true,
      thumbnail: "featured",
    },
  ];

  const items = [
    {
      id: "3",
      title: "Friday Khutbah - Faith & Patience",
      type: "Live Sermon",
      speaker: "Imam Abdullah",
      summary: "A powerful reminder about patience in difficult times",
      tags: ["Khutbah", "Faith", "Character"],
      language: "Arabic → English",
      isFeatured: false,
      isPublic: true,
    },
    {
      id: "4",
      title: "Ramadan Reflections - Episode 12",
      type: "Podcast",
      speaker: "Dr. Fatima Khan",
      summary: "Discussion on spiritual growth during Ramadan",
      tags: ["Ramadan", "Spirituality", "Growth"],
      language: "English → Arabic, Urdu",
      isFeatured: false,
      isPublic: true,
    },
    {
      id: "5",
      title: "Youth Q&A - Identity in Modern World",
      type: "Studio Video",
      speaker: "Sheikh Omar",
      summary: "Addressing challenges faced by Muslim youth today",
      tags: ["Youth", "Identity", "Q&A"],
      language: "English → Spanish",
      isFeatured: false,
      isPublic: true,
    },
    {
      id: "6",
      title: "Internal Staff Training",
      type: "Studio Video",
      speaker: "Management Team",
      summary: "Organization procedures and protocols",
      tags: ["Training", "Internal"],
      language: "English",
      isFeatured: false,
      isPublic: false,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Library</h1>
        <p className="text-sm text-[#475569] mt-1">
          Discover and explore your multilingual content library
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]"
          />
          <input
            type="text"
            placeholder="Search sermons, podcasts, videos by title, speaker, or topic..."
            className="w-full pl-12 pr-4 py-3 border border-[#CBD5E1] rounded-lg text-sm focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
          />
        </div>

        {/* Filter Row */}
        <div className="flex items-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
            <Filter size={16} />
            All Types
          </button>
          <button className="px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
            All Speakers
          </button>
          <button className="px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
            All Languages
          </button>
          <button className="px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
            All Tags
          </button>
          <button className="px-3 py-2 bg-white border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
            All Categories
          </button>
          <button className="px-3 py-2 bg-white border-2 border-[#D4AF37] text-[#D4AF37] rounded text-sm hover:bg-[#FEF3C7] font-medium">
            ⭐ Featured Only
          </button>
          <div className="flex-1"></div>
          <span className="text-sm text-[#475569]">246 items</span>
        </div>
      </div>

      {/* Featured Section */}
      {featuredItems.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star size={18} className="text-[#D4AF37]" />
            <h2 className="font-semibold text-[#0F172A]">Featured Content</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                to={`/watch/${item.id}`}
                className="bg-gradient-to-br from-white to-[#FEF3C7]/20 border-2 border-[#D4AF37]/30 rounded-lg overflow-hidden hover:border-[#D4AF37] transition-all hover:shadow-lg"
              >
                {/* Thumbnail Placeholder */}
                <div className="bg-gradient-to-br from-[#2E7D32] to-[#0F766E] aspect-video flex items-center justify-center relative">
                  <div className="text-5xl text-white/20">▶</div>
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#D4AF37] text-white text-xs font-semibold rounded flex items-center gap-1.5">
                    <Star size={12} />
                    Featured
                  </span>
                  <span className="absolute top-3 right-3">
                    {item.isPublic ? (
                      <Eye size={16} className="text-white" />
                    ) : (
                      <EyeOff size={16} className="text-white" />
                    )}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#0F172A] text-base flex-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded font-medium">
                        {item.type}
                      </span>
                      <span className="text-sm text-[#475569]">{item.speaker}</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">{item.summary}</p>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#F8FAFC] text-[#475569] text-xs rounded flex items-center gap-1"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-[#475569]">Languages: {item.language}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Content Grid */}
      <div>
        <h2 className="font-semibold text-[#0F172A] mb-4">All Content</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/watch/${item.id}`}
              className="bg-white border border-[#CBD5E1] rounded-lg overflow-hidden hover:border-[#0F766E] transition-colors"
            >
              {/* Thumbnail Placeholder */}
              <div className="bg-[#F8FAFC] aspect-video flex items-center justify-center border-b border-[#CBD5E1] relative">
                <div className="text-4xl text-[#CBD5E1]">▶</div>
                <span className="absolute top-3 right-3">
                  {item.isPublic ? (
                    <Eye size={16} className="text-[#0F766E]" />
                  ) : (
                    <EyeOff size={16} className="text-[#475569]" />
                  )}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#0F172A] text-sm flex-1">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#F0FDFA] text-[#0F766E] text-xs rounded">
                      {item.type}
                    </span>
                    <span className="text-xs text-[#475569]">{item.speaker}</span>
                  </div>
                  <p className="text-xs text-[#475569] line-clamp-2">{item.summary}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#F8FAFC] text-[#475569] text-xs rounded flex items-center gap-1"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[#475569]">{item.language}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Previous
        </button>
        <button className="px-3 py-2 bg-[#0F766E] text-white rounded text-sm">1</button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          2
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          3
        </button>
        <button className="px-3 py-2 border border-[#CBD5E1] rounded text-sm text-[#475569] hover:bg-[#F8FAFC]">
          Next
        </button>
      </div>
    </div>
  );
}