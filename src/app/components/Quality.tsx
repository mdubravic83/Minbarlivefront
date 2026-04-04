import { TrendingUp, AlertTriangle, CheckCircle, FileText } from "lucide-react";

export function Quality() {
  const reports = [
    {
      content: "Friday Khutbah - March 28",
      type: "Live Sermon",
      qualityScore: 94,
      issues: 2,
      date: "2 days ago",
    },
    {
      content: "Tafsir Series Episode 8",
      type: "Studio Video",
      qualityScore: 87,
      issues: 5,
      date: "3 days ago",
    },
    {
      content: "Ramadan Podcast Ep. 12",
      type: "Podcast",
      qualityScore: 96,
      issues: 1,
      date: "4 days ago",
    },
    {
      content: "Youth Q&A Session",
      type: "Live Sermon",
      qualityScore: 82,
      issues: 8,
      date: "5 days ago",
    },
  ];

  const suggestions = [
    {
      title: "Audio quality improvement needed",
      content: "2 videos detected with background noise above threshold",
      priority: "Medium",
    },
    {
      title: "Translation accuracy review",
      content: "1 sermon flagged for terminology review",
      priority: "High",
    },
    {
      title: "Subtitle timing adjustment",
      content: "3 videos with subtitle sync issues",
      priority: "Low",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Quality</h1>
        <p className="text-sm text-[#475569] mt-1">
          Monitor and improve content quality
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide">
                Average Quality Score
              </p>
              <p className="text-3xl font-semibold text-[#0F172A] mt-2">91.5</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +2.3% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-[#F0FDFA] rounded flex items-center justify-center">
              <CheckCircle size={24} className="text-[#0F766E]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide">Flagged Items</p>
              <p className="text-3xl font-semibold text-[#0F172A] mt-2">7</p>
              <p className="text-xs text-[#475569] mt-1">Requiring attention</p>
            </div>
            <div className="w-12 h-12 bg-[#FEF3C7] rounded flex items-center justify-center">
              <AlertTriangle size={24} className="text-[#D97706]" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide">
                Unresolved Suggestions
              </p>
              <p className="text-3xl font-semibold text-[#0F172A] mt-2">12</p>
              <p className="text-xs text-[#475569] mt-1">Pending review</p>
            </div>
            <div className="w-12 h-12 bg-[#F0FDFA] rounded flex items-center justify-center">
              <FileText size={24} className="text-[#0F766E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Quality Reports Table */}
        <div className="col-span-2 bg-white border border-[#CBD5E1] rounded-lg">
          <div className="border-b border-[#CBD5E1] p-5">
            <h2 className="font-semibold text-[#0F172A]">Quality Reports</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                    Content
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                    Issues
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1]">
                {reports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC]">
                    <td className="px-6 py-4 text-sm text-[#0F172A]">
                      {report.content}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#475569]">{report.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[100px] h-2 bg-[#CBD5E1] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              report.qualityScore >= 90
                                ? "bg-green-500"
                                : report.qualityScore >= 80
                                ? "bg-[#14B8A6]"
                                : "bg-yellow-500"
                            }`}
                            style={{ width: `${report.qualityScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-[#0F172A] font-medium">
                          {report.qualityScore}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                          report.issues === 0
                            ? "bg-green-100 text-green-700"
                            : report.issues <= 3
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {report.issues} {report.issues === 1 ? "issue" : "issues"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#475569]">{report.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Suggestions Panel */}
        <div className="space-y-6">
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] p-5">
              <h2 className="font-semibold text-[#0F172A]">Suggestions</h2>
            </div>
            <div className="p-4 space-y-3">
              {suggestions.map((suggestion, idx) => (
                <div
                  key={idx}
                  className="p-3 border border-[#CBD5E1] rounded hover:border-[#0F766E] transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-medium text-[#0F172A]">
                      {suggestion.title}
                    </h3>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        suggestion.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : suggestion.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {suggestion.priority}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569]">{suggestion.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Improvement Guide */}
          <div className="bg-white border border-[#CBD5E1] rounded-lg">
            <div className="border-b border-[#CBD5E1] p-5">
              <h2 className="font-semibold text-[#0F172A]">Improvement Guide</h2>
            </div>
            <div className="p-4 space-y-3 text-xs text-[#475569]">
              <div className="flex gap-2">
                <div className="w-1 bg-[#0F766E] rounded-full flex-shrink-0"></div>
                <p>Use high-quality audio equipment for best transcription results</p>
              </div>
              <div className="flex gap-2">
                <div className="w-1 bg-[#0F766E] rounded-full flex-shrink-0"></div>
                <p>Minimize background noise during recordings</p>
              </div>
              <div className="flex gap-2">
                <div className="w-1 bg-[#0F766E] rounded-full flex-shrink-0"></div>
                <p>Review translations within 24 hours for accuracy</p>
              </div>
              <div className="flex gap-2">
                <div className="w-1 bg-[#0F766E] rounded-full flex-shrink-0"></div>
                <p>Ensure consistent terminology across all content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
