import { CreditCard, Download, TrendingUp, Clock, DollarSign } from "lucide-react";

export function Billing() {
  const invoices = [
    {
      date: "March 2026",
      amount: "$248.00",
      status: "Paid",
      invoiceId: "INV-2026-03",
    },
    {
      date: "February 2026",
      amount: "$212.00",
      status: "Paid",
      invoiceId: "INV-2026-02",
    },
    {
      date: "January 2026",
      amount: "$195.00",
      status: "Paid",
      invoiceId: "INV-2026-01",
    },
    {
      date: "December 2025",
      amount: "$267.00",
      status: "Paid",
      invoiceId: "INV-2025-12",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#0F172A]">Billing</h1>
        <p className="text-sm text-[#475569] mt-1">
          Manage your plan and billing information
        </p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="col-span-2 bg-white border border-[#CBD5E1] rounded-lg p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-[#0F172A]">Current Plan</h2>
              <p className="text-sm text-[#475569] mt-1">
                Pro Plan - Organization tier
              </p>
            </div>
            <span className="px-3 py-1 bg-[#14B8A6] text-white text-sm font-medium rounded">
              Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
                Monthly Cost
              </p>
              <p className="text-2xl font-semibold text-[#0F172A]">$199/mo</p>
            </div>
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
                Next Billing
              </p>
              <p className="text-2xl font-semibold text-[#0F172A]">Apr 15</p>
            </div>
            <div>
              <p className="text-xs text-[#475569] uppercase tracking-wide mb-1">
                Processing Hours
              </p>
              <p className="text-2xl font-semibold text-[#0F172A]">100/mo</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div>
              <div className="flex items-center justify-between text-xs text-[#475569] mb-1">
                <span>Processing hours used</span>
                <span>85 / 100 hours</span>
              </div>
              <div className="w-full h-2 bg-[#CBD5E1] rounded-full overflow-hidden">
                <div className="h-full bg-[#14B8A6] rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2.5 bg-[#D4AF37] text-white text-sm font-semibold rounded hover:bg-[#C49B2F] shadow-sm">
              Upgrade Plan
            </button>
            <button className="px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
              Manage Plan
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Payment Method</h2>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded flex items-center justify-center">
              <CreditCard size={20} className="text-[#475569]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#0F172A] font-medium">•••• 4242</p>
              <p className="text-xs text-[#475569] mt-0.5">Expires 12/27</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 border border-[#CBD5E1] text-[#0F172A] text-sm rounded hover:bg-[#F8FAFC]">
            Update Card
          </button>
        </div>
      </div>

      {/* Monthly Usage */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">Monthly Usage</h2>
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="p-4 bg-[#F8FAFC] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-[#475569] uppercase tracking-wide">
                Total Processing
              </p>
              <Clock size={16} className="text-[#475569]" />
            </div>
            <p className="text-xl font-semibold text-[#0F172A]">85 hrs</p>
            <p className="text-xs text-[#475569] mt-1">Base plan included</p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-[#475569] uppercase tracking-wide">Overage</p>
              <TrendingUp size={16} className="text-[#475569]" />
            </div>
            <p className="text-xl font-semibold text-[#0F172A]">0 hrs</p>
            <p className="text-xs text-[#475569] mt-1">$2.50 per additional hour</p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-[#475569] uppercase tracking-wide">
                Additional Cost
              </p>
              <DollarSign size={16} className="text-[#475569]" />
            </div>
            <p className="text-xl font-semibold text-[#0F172A]">$0.00</p>
            <p className="text-xs text-[#475569] mt-1">This billing period</p>
          </div>

          <div className="p-4 bg-[#F0FDFA] border border-[#14B8A6] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-[#0F766E] uppercase tracking-wide">
                Projected Total
              </p>
              <CreditCard size={16} className="text-[#0F766E]" />
            </div>
            <p className="text-xl font-semibold text-[#0F766E]">$199.00</p>
            <p className="text-xs text-[#0F766E] mt-1">Next invoice</p>
          </div>
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg">
        <div className="border-b border-[#CBD5E1] p-5 flex items-center justify-between">
          <h2 className="font-semibold text-[#0F172A]">Invoice History</h2>
          <button className="text-sm text-[#0F766E] hover:text-[#134E4A]">
            View all
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Invoice ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#475569] uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CBD5E1]">
              {invoices.map((invoice, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC]">
                  <td className="px-6 py-4 text-sm text-[#0F172A] font-mono">
                    {invoice.invoiceId}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475569]">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-[#0F172A] font-medium">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#CBD5E1] text-[#0F172A] text-xs rounded hover:bg-[#F8FAFC]">
                      <Download size={14} />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing Settings */}
      <div className="bg-white border border-[#CBD5E1] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-4">
          Billing Email & Reports
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#475569] mb-2">
              Billing email address
            </label>
            <input
              type="email"
              defaultValue="billing@organization.com"
              className="w-full max-w-md px-3 py-2 border border-[#CBD5E1] rounded text-sm focus:outline-none focus:border-[#0F766E]"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="monthly-reports"
              className="w-4 h-4 text-[#0F766E] rounded border-[#CBD5E1]"
              defaultChecked
            />
            <label htmlFor="monthly-reports" className="text-sm text-[#475569]">
              Send monthly usage reports
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="usage-alerts"
              className="w-4 h-4 text-[#0F766E] rounded border-[#CBD5E1]"
              defaultChecked
            />
            <label htmlFor="usage-alerts" className="text-sm text-[#475569]">
              Alert me when approaching usage limits
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}