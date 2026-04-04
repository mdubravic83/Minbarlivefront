import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Dashboard } from "./components/Dashboard";
import { HutbaLive } from "./components/HutbaLive";
import { HutbaLiveDetail } from "./components/HutbaLiveDetail";
import { PodcastCompanion } from "./components/PodcastCompanion";
import { PodcastCompanionDetail } from "./components/PodcastCompanionDetail";
import { Studio } from "./components/Studio";
import { StudioDetail } from "./components/StudioDetail";
import { HutbaAsistent } from "./components/HutbaAsistent";
import { Library } from "./components/Library";
import { Quality } from "./components/Quality";
import { Billing } from "./components/Billing";
import { Organization } from "./components/Organization";
import { PublicVideoDetail } from "./components/PublicVideoDetail";
import { PodcastViewer } from "./components/PodcastViewer";
import { PlatformControl } from "./components/PlatformControl";
import { PlatformOrganizations } from "./components/PlatformOrganizations";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

// Placeholder components
function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Settings</h1>
      <p className="text-sm text-[#475569] mt-2">General application settings</p>
    </div>
  );
}

function DashboardActivity() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Activity</h1>
      <p className="text-sm text-[#475569] mt-2">Recent activity across all modules</p>
    </div>
  );
}

function DashboardAlerts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Alerts</h1>
      <p className="text-sm text-[#475569] mt-2">System alerts and notifications</p>
    </div>
  );
}

function PlatformImports() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Imports</h1>
      <p className="text-sm text-[#475569] mt-2">Manage cookies and khutbah knowledge base imports (Owner only)</p>
    </div>
  );
}

function PlatformCosts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Raw Costs & Adjustments</h1>
      <p className="text-sm text-[#475569] mt-2">Manage platform costs and billing adjustments (Owner only)</p>
    </div>
  );
}

function PlatformLogs() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Dev Logs</h1>
      <p className="text-sm text-[#475569] mt-2">View system logs and debugging information (Owner only)</p>
    </div>
  );
}

function PlatformAnalytics() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Platform Analytics</h1>
      <p className="text-sm text-[#475569] mt-2">Global analytics and session quality metrics (Owner only)</p>
    </div>
  );
}

function PlatformQuality() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Session Quality</h1>
      <p className="text-sm text-[#475569] mt-2">Quality reports and flagged sessions (Owner only)</p>
    </div>
  );
}

function HutbaAsistentNew() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">New Khutbah Draft</h1>
      <p className="text-sm text-[#475569] mt-2">Create a new AI-assisted khutbah outline</p>
    </div>
  );
}

function HutbaAsistentDraft() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0F172A]">Draft Editor</h1>
      <p className="text-sm text-[#475569] mt-2">Edit and refine your khutbah draft</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      // Dashboard with submenus
      { index: true, Component: Dashboard },
      { path: "dashboard/activity", Component: DashboardActivity },
      { path: "dashboard/alerts", Component: DashboardAlerts },
      // HutbaLive with submenus
      { path: "hutba-live/sessions", Component: HutbaLive },
      { path: "hutba-live/active", Component: HutbaLive },
      { path: "hutba-live/archive", Component: HutbaLive },
      { path: "hutba-live/templates", Component: HutbaLive },
      { path: "hutba-live/sessions/:id", Component: HutbaLiveDetail },
      // Podcast Companion with submenus
      { path: "podcast-companion/sessions", Component: PodcastCompanion },
      { path: "podcast-companion/live", Component: PodcastCompanion },
      { path: "podcast-companion/published", Component: PodcastCompanion },
      { path: "podcast-companion/access", Component: PodcastCompanion },
      { path: "podcast-companion/sessions/:id", Component: PodcastCompanionDetail },
      { path: "podcast-companion/:id", Component: PodcastCompanionDetail }, // Legacy route for backward compatibility
      // Studio with submenus
      { path: "studio/jobs", Component: Studio },
      { path: "studio/upload", Component: Studio },
      { path: "studio/public", Component: Studio },
      { path: "studio/exports", Component: Studio },
      { path: "studio/jobs/:id", Component: StudioDetail },
      // HutbaAsistent with submenus
      { path: "hutba-asistent", Component: HutbaAsistent },
      { path: "hutba-asistent/new", Component: HutbaAsistentNew },
      { path: "hutba-asistent/drafts", Component: HutbaAsistent },
      { path: "hutba-asistent/references", Component: HutbaAsistent },
      { path: "hutba-asistent/drafts/:id", Component: HutbaAsistentDraft },
      // Library with submenus
      { path: "library", Component: Library },
      { path: "library/videos", Component: Library },
      { path: "library/hutbe", Component: Library },
      { path: "library/podcasts", Component: Library },
      { path: "library/featured", Component: Library },
      // Billing with submenus
      { path: "billing", Component: Billing },
      { path: "billing/invoices", Component: Billing },
      { path: "billing/usage", Component: Billing },
      { path: "billing/costs", Component: Billing },
      // Organization with submenus
      { path: "organization/profile", Component: Organization },
      { path: "organization/admins", Component: Organization },
      { path: "organization/branding", Component: Organization },
      { path: "organization/modules", Component: Organization },
      { path: "organization/hierarchy", Component: Organization },
      // Platform Control (Owner only) with submenus
      { path: "platform", Component: PlatformControl },
      { path: "platform/organizations", Component: PlatformOrganizations },
      { path: "platform/imports", Component: PlatformImports },
      { path: "platform/cookies", Component: PlatformImports },
      { path: "platform/kb-sources", Component: PlatformImports },
      { path: "platform/raw-costs", Component: PlatformCosts },
      { path: "platform/adjustments", Component: PlatformCosts },
      { path: "platform/logs", Component: PlatformLogs },
      { path: "platform/analytics", Component: PlatformAnalytics },
      { path: "platform/quality", Component: PlatformQuality },
      // Settings with submenus
      { path: "settings", Component: Settings },
      { path: "settings/notifications", Component: Settings },
      { path: "settings/public", Component: Settings },
      { path: "settings/defaults", Component: Settings },
      // Legacy routes for compatibility
      { path: "quality", Component: Quality },
    ],
  },
  // Public routes (no MainLayout)
  {
    path: "/watch/:id",
    Component: PublicVideoDetail,
  },
  {
    path: "/p/:id",
    Component: PodcastViewer,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
]);