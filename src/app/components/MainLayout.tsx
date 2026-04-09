import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Podcast,
  Video,
  Sparkles,
  Library as LibraryIcon,
  Shield,
  CreditCard,
  Building2,
  Users,
  Upload,
  DollarSign,
  FileText,
  BarChart3,
  Settings as SettingsIcon,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  User,
  Menu,
  X,
  Zap,
  Play,
  Square,
  QrCode,
  Share2,
  Eye,
  Download,
  Activity,
  Archive,
  FileEdit,
  Globe,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Database,
  Cookie,
  Wrench,
  FileText as LogIcon,
  BarChart2,
  CheckCircle,
} from "lucide-react";
import { MinaretIcon, MosqueIconSimple } from "./icons/MosqueIcon";
import { IslamicStar } from "./icons/IslamicStar";
import { OctagonalStar } from "./icons/OctagonalStar";
import minbarLiveLogo from "figma:asset/2349625403c50d44935dfca0c2b0a36dce0c05c5.png";

// Simulated user role and modules
const userRole = "Owner"; // Owner, Super Admin, Admin
const organizationModules = ["HutbaLive", "Studio", "Podcast", "HutbaAsistent"];
const currentScope = "All Organizations"; // For Owner/Super Admin
const currentPlan = "Pro Plan";

// Quick Actions Modal Component
function QuickActionsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSessionActive, setIsSessionActive] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-[#0F766E] via-[#D4AF37] to-[#0F766E]"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#CBD5E1]/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-white" />
            </div>
            <h2 className="font-semibold text-[#0F172A]">Quick Actions</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#F8FAFC] rounded-lg transition-colors"
          >
            <X size={20} className="text-[#475569]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3 max-h-[70vh] overflow-y-auto">
          {organizationModules.includes("HutbaLive") && (
            <button
              onClick={() => setIsSessionActive(!isSessionActive)}
              className={`w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 rounded-xl transition-all shadow-sm hover:shadow-md ${
                isSessionActive
                  ? "bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 text-red-700"
                  : "bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white hover:from-[#C49B2F] hover:to-[#B38B1F]"
              }`}
            >
              {isSessionActive ? (
                <>
                  <Square size={18} className="fill-current flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm sm:text-base">Stop Session</p>
                    <p className="text-xs opacity-90">End current HutbaLive session</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-red-600 text-white text-xs rounded-full font-semibold">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Live
                  </div>
                </>
              ) : (
                <>
                  <MinaretIcon size={18} className="flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-sm sm:text-base">Start HutbaLive Session</p>
                    <p className="text-xs opacity-90">Begin live khutbah translation</p>
                  </div>
                </>
              )}
            </button>
          )}

          {isSessionActive && (
            <>
              <Link
                to="/hutba-live/sessions/1"
                onClick={onClose}
                className="w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] border-2 border-[#0F766E] text-[#0F766E] rounded-xl hover:from-[#CCFBF1] hover:to-[#99F6E4] transition-all shadow-sm"
              >
                <Eye size={18} className="flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">View Live Transcript</p>
                  <p className="text-xs">Open session control panel</p>
                </div>
              </Link>

              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl hover:bg-[#F8FAFC] hover:border-[#0F766E] transition-all">
                <QrCode size={18} className="text-[#475569] flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">Generate QR Code</p>
                  <p className="text-xs text-[#475569]">For public access</p>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl hover:bg-[#F8FAFC] hover:border-[#0F766E] transition-all">
                <Share2 size={18} className="text-[#475569] flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">Share Link</p>
                  <p className="text-xs text-[#475569]">Copy session URL</p>
                </div>
              </button>
            </>
          )}

          {organizationModules.includes("Studio") && (
            <>
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent"></div>
                <span className="text-xs text-[#475569] uppercase tracking-wider">Other Actions</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent"></div>
              </div>
              <Link
                to="/studio/upload"
                onClick={onClose}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl hover:bg-[#F8FAFC] hover:border-[#0F766E] transition-all"
              >
                <Upload size={18} className="text-[#475569] flex-shrink-0" />
                <div className="flex-1 text-left">
                  <p className="font-semibold text-sm">Upload to Studio</p>
                  <p className="text-xs text-[#475569]">Process recorded video</p>
                </div>
              </Link>
            </>
          )}

          {organizationModules.includes("Podcast") && (
            <Link
              to="/podcast-companion/sessions"
              onClick={onClose}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl hover:bg-[#F8FAFC] hover:border-[#0F766E] transition-all"
            >
              <Podcast size={18} className="text-[#475569] flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">New Podcast Companion</p>
                <p className="text-xs text-[#475569]">Start companion session</p>
              </div>
            </Link>
          )}

          <Link
            to="/library"
            onClick={onClose}
            className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl hover:bg-[#F8FAFC] hover:border-[#0F766E] transition-all"
          >
            <Download size={18} className="text-[#475569] flex-shrink-0" />
            <div className="flex-1 text-left">
              <p className="font-semibold text-sm">Export / Download</p>
              <p className="text-xs text-[#475569]">Access transcripts & videos</p>
            </div>
          </Link>
        </div>
        
        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-[#0F766E] via-[#D4AF37] to-[#0F766E]"></div>
      </div>
    </div>
  );
}

// Navigation structure with submenus
const getNavigationStructure = (role: string, modules: string[]) => {
  const structure = [
    {
      section: "Dashboard",
      icon: LayoutDashboard,
      items: [
        { name: "Overview", path: "/" },
        { name: "Activity", path: "/dashboard/activity" },
        { name: "Alerts", path: "/dashboard/alerts" },
      ],
    },
    modules.includes("HutbaLive") && {
      section: "HutbaLive",
      icon: MinaretIcon,
      items: [
        { name: "Sessions", path: "/hutba-live/sessions" },
        { name: "Active Session", path: "/hutba-live/active" },
        { name: "Archive", path: "/hutba-live/archive" },
        { name: "Templates", path: "/hutba-live/templates" },
      ],
    },
    modules.includes("Podcast") && {
      section: "Podcast Companion",
      icon: Podcast,
      items: [
        { name: "Sessions", path: "/podcast-companion/sessions" },
        { name: "Live Viewer", path: "/podcast-companion/live" },
        { name: "Published", path: "/podcast-companion/published" },
        { name: "QR / Access", path: "/podcast-companion/access" },
      ],
    },
    modules.includes("Studio") && {
      section: "Studio",
      icon: Video,
      items: [
        { name: "Jobs", path: "/studio/jobs" },
        { name: "Upload", path: "/studio/upload" },
        { name: "Public Videos", path: "/studio/public" },
        { name: "Exports", path: "/studio/exports" },
      ],
    },
    modules.includes("HutbaAsistent") && {
      section: "HutbaAsistent",
      icon: Sparkles,
      items: [
        { name: "Overview", path: "/hutba-asistent" },
        { name: "New Draft", path: "/hutba-asistent/new" },
        { name: "Drafts", path: "/hutba-asistent/drafts" },
        { name: "References", path: "/hutba-asistent/references" },
      ],
    },
    {
      section: "Library",
      icon: LibraryIcon,
      items: [
        { name: "All Content", path: "/library" },
        { name: "Videos", path: "/library/videos" },
        { name: "Hutbe", path: "/library/hutbe" },
        { name: "Podcasts", path: "/library/podcasts" },
        { name: "Featured", path: "/library/featured" },
      ],
    },
    {
      section: "Billing",
      icon: CreditCard,
      items: [
        { name: "Overview", path: "/billing" },
        { name: "Invoices", path: "/billing/invoices" },
        { name: "Usage", path: "/billing/usage" },
        { name: "Cost Breakdown", path: "/billing/costs" },
      ],
    },
    {
      section: "Organization",
      icon: Building2,
      items: [
        { name: "Profile", path: "/organization/profile" },
        { name: "Admins", path: "/organization/admins" },
        { name: "Branding", path: "/organization/branding" },
        { name: "Modules", path: "/organization/modules" },
        { name: "Hierarchy", path: "/organization/hierarchy" },
      ],
    },
    role === "Owner" && {
      section: "Platform Control",
      icon: Shield,
      badge: "Owner",
      items: [
        { name: "Overview", path: "/platform" },
        { name: "Organizations", path: "/platform/organizations" },
        { name: "Imports", path: "/platform/imports" },
        { name: "Cookies", path: "/platform/cookies" },
        { name: "KB Sources", path: "/platform/kb-sources" },
        { name: "Raw Costs", path: "/platform/raw-costs" },
        { name: "Adjustments", path: "/platform/adjustments" },
        { name: "Dev Logs", path: "/platform/logs" },
        { name: "Analytics", path: "/platform/analytics" },
        { name: "Session Quality", path: "/platform/quality" },
      ],
    },
    {
      section: "Settings",
      icon: SettingsIcon,
      items: [
        { name: "General", path: "/settings" },
        { name: "Notifications", path: "/settings/notifications" },
        { name: "Public Pages", path: "/settings/public" },
        { name: "Defaults", path: "/settings/defaults" },
      ],
    },
  ].filter(Boolean);

  return structure;
};

export function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    Dashboard: true,
    HutbaLive: true,
  });
  const [clickedMenuItem, setClickedMenuItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationStructure = getNavigationStructure(userRole, organizationModules);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => {
      // Close all other sections (accordion behavior)
      const newState: Record<string, boolean> = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      // Toggle the clicked section
      newState[section] = !prev[section];
      return newState;
    });
  };

  // Close mobile menu on route change
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      <QuickActionsModal isOpen={quickActionsOpen} onClose={() => setQuickActionsOpen(false)} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - Desktop & Mobile Drawer */}
      <aside
        className={`bg-white border-r border-[#CBD5E1] flex flex-col transition-all duration-300 
          fixed lg:relative inset-y-0 left-0 z-50
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${sidebarCollapsed ? "lg:w-16 w-64" : "w-64"}`}
      >
        {/* Logo */}
        <div className="h-14 sm:h-16 flex items-center justify-between px-4 border-b border-[#CBD5E1] bg-gradient-to-r from-[#F0FDFA] to-white">
          {(!sidebarCollapsed || mobileMenuOpen) && (
            <div className="flex items-center gap-2">
              <img 
                src={minbarLiveLogo} 
                alt="MinbarLive Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              />
              <span className="font-semibold text-[#0F172A] text-sm sm:text-base">MinbarLive</span>
            </div>
          )}
          {sidebarCollapsed && !mobileMenuOpen && (
            <img 
              src={minbarLiveLogo} 
              alt="MinbarLive Logo" 
              className="w-8 h-8 object-contain mx-auto"
            />
          )}
          {/* Close button on mobile */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-2 hover:bg-[#F8FAFC] rounded-lg"
          >
            <X size={20} className="text-[#475569]" />
          </button>
        </div>

        {/* Toggle Sidebar Button - Desktop only */}
        {!sidebarCollapsed && (
          <div className="hidden lg:block px-4 py-2 border-b border-[#CBD5E1]">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#475569] hover:bg-[#F8FAFC] rounded-lg transition-colors"
            >
              <Menu size={16} />
              <span>Collapse</span>
            </button>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 sm:py-4 px-2 sm:px-3 space-y-1">
          {navigationStructure.map((group: any) => {
            const Icon = group.icon;
            const isExpanded = expandedSections[group.section];
            const hasActiveItem = group.items.some((item: any) => location.pathname === item.path);
            const defaultPath = group.items[0]?.path; // First item as default

            return (
              <div key={group.section}>
                {/* Section Header */}
                <button
                  onClick={() => {
                    // If collapsed, navigate to first item
                    if (sidebarCollapsed && !mobileMenuOpen && defaultPath) {
                      navigate(defaultPath);
                    } else {
                      // Otherwise, toggle accordion
                      toggleSection(group.section);
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl text-sm transition-all ${
                    hasActiveItem
                      ? "bg-gradient-to-r from-[#F0FDFA] to-[#E6FAF5] text-[#0F766E] font-medium"
                      : "text-[#475569] hover:bg-gradient-to-r hover:from-[#F8FAFC] hover:to-white"
                  } ${sidebarCollapsed && !mobileMenuOpen ? "justify-center px-2" : ""}`}
                  title={sidebarCollapsed && !mobileMenuOpen ? group.section : undefined}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  {(!sidebarCollapsed || mobileMenuOpen) && (
                    <>
                      <span className="flex-1 text-left">{group.section}</span>
                      {group.badge && (
                        <span className="px-1.5 py-0.5 bg-[#D4AF37] text-white text-xs rounded">
                          {group.badge}
                        </span>
                      )}
                      <ChevronRight
                        size={14}
                        className={`transition-transform flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </>
                  )}
                </button>

                {/* Submenu Items */}
                {(!sidebarCollapsed || mobileMenuOpen) && isExpanded && (
                  <div className="ml-7 sm:ml-9 mt-1 space-y-0.5">
                    {group.items.map((item: any) => {
                      const isActive = location.pathname === item.path;
                      const itemClicked = clickedMenuItem === item.path;
                      
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={(e) => {
                            setClickedMenuItem(item.path);
                            setTimeout(() => setClickedMenuItem(null), 600);
                            handleLinkClick();
                          }}
                          className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "bg-[#0F766E]/10 text-[#0F766E] font-medium"
                              : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                          }`}
                        >
                          <div className="relative w-[8px] h-[8px]">
                            <IslamicStar 
                              size={8} 
                              className={`absolute inset-0 transition-all duration-300 ${
                                isActive ? "text-[#0F766E]" : "text-[#CBD5E1]"
                              } ${
                                itemClicked ? "opacity-0 scale-0 rotate-180" : "opacity-100 scale-100 rotate-0"
                              }`}
                            />
                            <OctagonalStar 
                              size={8} 
                              className={`absolute inset-0 transition-all duration-300 ${
                                isActive ? "text-[#D4AF37]" : "text-[#0F766E]"
                              } ${
                                itemClicked ? "opacity-100 scale-125 rotate-0" : "opacity-0 scale-0 rotate-180"
                              }`}
                            />
                          </div>
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Expand Button (when collapsed) - Desktop only */}
        {sidebarCollapsed && (
          <div className="hidden lg:block p-4 border-t border-[#CBD5E1]">
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="w-full p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
            >
              <ChevronRight size={18} className="text-[#475569] mx-auto" />
            </button>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        {headerVisible && (
          <header className="h-14 sm:h-16 bg-white border-b border-[#CBD5E1] flex items-center justify-between px-3 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-[#F8FAFC] rounded-lg"
              >
                <Menu size={20} className="text-[#475569]" />
              </button>

              {/* Organization Scope Switcher - Hidden on small mobile */}
              {(userRole === "Owner" || userRole === "Super Admin") && (
                <div className="hidden sm:block">
                  <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg hover:border-[#0F766E] transition-colors text-sm">
                    <Building2 size={14} className="text-[#475569]" />
                    <span className="hidden md:inline text-sm text-[#0F172A]">{currentScope}</span>
                    <ChevronDown size={12} className="text-[#475569]" />
                  </button>
                </div>
              )}

              {/* Quick Actions Button */}
              <button
                onClick={() => setQuickActionsOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-[#D4AF37] to-[#C49B2F] text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-md hover:shadow-lg"
              >
                <Zap size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Quick Actions</span>
                <span className="sm:hidden">Actions</span>
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 sm:p-2 hover:bg-[#F8FAFC] rounded-lg relative"
              >
                <Search size={16} className="text-[#475569] sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Notifications */}
              <button className="relative p-1.5 sm:p-2 hover:bg-[#F8FAFC] rounded-lg">
                <Bell size={16} className="text-[#475569] sm:w-[18px] sm:h-[18px]" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D4AF37] rounded-full"></span>
              </button>

              {/* Profile */}
              <button className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 hover:bg-[#F8FAFC] rounded-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#2E7D32] to-[#0F766E] rounded-full flex items-center justify-center">
                  <User size={14} className="text-white sm:w-4 sm:h-4" />
                </div>
                <ChevronDown size={12} className="text-[#475569] hidden sm:block" />
              </button>

              {/* Hide Header Toggle - Desktop only */}
              <button
                onClick={() => setHeaderVisible(false)}
                className="hidden lg:block p-2 hover:bg-[#F8FAFC] rounded-lg text-[#475569]"
                title="Hide header"
              >
                <X size={18} />
              </button>
            </div>
          </header>
        )}

        {/* Show Header Button (when hidden) */}
        {!headerVisible && (
          <button
            onClick={() => setHeaderVisible(true)}
            className="absolute top-4 right-4 z-10 p-2 bg-white border border-[#CBD5E1] rounded-lg shadow-lg hover:bg-[#F8FAFC]"
            title="Show header"
          >
            <Menu size={18} className="text-[#475569]" />
          </button>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}