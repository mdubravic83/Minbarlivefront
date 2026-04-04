import { useState } from "react";
import { Link } from "react-router";
import { UserPlus, Mail, Lock, Eye, EyeOff, Building2, User, ArrowRight, CheckCircle } from "lucide-react";
import { MosqueIconSimple } from "./icons/MosqueIcon";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", formData);
  };

  const features = [
    "Live khutbah translation in real-time",
    "AI-powered podcast transcription",
    "Professional video processing",
    "Comprehensive content library",
    "Multi-language support",
    "Advanced analytics & insights",
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E] p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <Link to="/login" className="flex items-center gap-3 mb-16 group">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-white/30 transition-colors">
              <MosqueIconSimple size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">MinbarLive</h1>
              <p className="text-sm text-white/80">B2B SaaS Platform</p>
            </div>
          </Link>

          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <p className="text-white/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-white/80 text-sm">
            Join 47+ organizations already transforming their Islamic content
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-6 sm:p-12 bg-[#F8FAFC] overflow-y-auto">
        <div className="w-full max-w-xl">
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E] rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <MosqueIconSimple size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">MinbarLive</h1>
            <p className="text-sm text-[#475569] mt-1">Create Your Account</p>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
              Get Started Free
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Create your organization account to access MinbarLive
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Organization Name */}
            <div>
              <label htmlFor="orgName" className="block text-sm font-medium text-[#0F172A] mb-2">
                Organization Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Building2 size={18} className="text-[#475569]" />
                </div>
                <input
                  id="orgName"
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  placeholder="Your mosque or organization"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                  required
                />
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#0F172A] mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-[#475569]" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Password */}
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
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-[#475569]" />
                    ) : (
                      <Eye size={18} className="text-[#475569]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#0F172A] mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-[#475569]" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} className="text-[#475569]" />
                    ) : (
                      <Eye size={18} className="text-[#475569]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="w-5 h-5 mt-0.5 rounded border-2 border-[#CBD5E1] text-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                required
              />
              <label htmlFor="terms" className="text-sm text-[#475569]">
                I agree to the{" "}
                <Link to="/terms" className="text-[#0F766E] hover:underline font-medium">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-[#0F766E] hover:underline font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] text-white font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-all group"
            >
              <UserPlus size={20} />
              <span>Create Account</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#CBD5E1]"></div>
            <span className="text-xs text-[#475569] uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-[#CBD5E1]"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-[#475569]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#0F766E] hover:text-[#14B8A6] font-semibold transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
