import { useState } from "react";
import { Link } from "react-router";
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { MosqueIconSimple } from "./icons/MosqueIcon";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Hero */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E] p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
              <MosqueIconSimple size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">MinbarLive</h1>
              <p className="text-sm text-white/80">B2B SaaS Platform</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-lg">
            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your<br />
              Islamic Content
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Professional live translation, podcast transcripts, video processing, and content management
              for mosques and Islamic organizations worldwide.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full border border-white/30">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <span className="text-sm text-white font-medium">Live Translation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full border border-white/30">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <span className="text-sm text-white font-medium">AI Processing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full border border-white/30">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <span className="text-sm text-white font-medium">Content Library</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="relative z-10 flex items-center gap-12">
          <div>
            <p className="text-3xl font-bold text-white">47+</p>
            <p className="text-sm text-white/80">Organizations</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">1,000+</p>
            <p className="text-sm text-white/80">Live Sessions</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">50k+</p>
            <p className="text-sm text-white/80">Viewers Reached</p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-12 bg-[#F8FAFC]">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E] rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <MosqueIconSimple size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">MinbarLive</h1>
            <p className="text-sm text-[#475569] mt-1">Admin Portal</p>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
              Welcome Back
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Sign in to access your admin dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-[#475569]" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#0F172A] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-[#475569]" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-[#475569] hover:text-[#0F172A]" />
                  ) : (
                    <Eye size={18} className="text-[#475569] hover:text-[#0F172A]" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-2 border-[#CBD5E1] text-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                />
                <span className="text-sm text-[#475569]">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-[#0F766E] hover:text-[#14B8A6] font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-semibold rounded-xl hover:from-[#14B8A6] hover:to-[#0F766E] focus:outline-none focus:ring-4 focus:ring-[#0F766E]/20 shadow-lg hover:shadow-xl transition-all group"
            >
              <LogIn size={20} />
              <span>Sign In</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#CBD5E1]"></div>
            <span className="text-xs text-[#475569] uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-[#CBD5E1]"></div>
          </div>

          {/* Create Account Link */}
          <div className="text-center">
            <p className="text-sm text-[#475569]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#D4AF37] hover:text-[#C49B2F] font-semibold transition-colors"
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-gradient-to-br from-[#F0FDFA] to-white border border-[#0F766E]/20 rounded-xl">
            <p className="text-xs text-[#475569] text-center">
              Need help? Contact{" "}
              <a
                href="mailto:support@minbarlive.com"
                className="text-[#0F766E] font-medium hover:underline"
              >
                support@minbarlive.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
