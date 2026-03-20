import React from 'react';
import { FileText, CheckCircle, Clock, XCircle, ChevronRight, IndianRupee } from 'lucide-react';

const Claims = () => {
  const claims = [
    {
      id: 'CLM-9092',
      date: 'Oct 12, 2024',
      event: 'Heavy Rainfall (Koramangala)',
      type: 'Auto-Triggered',
      amount: 1200,
      status: 'Paid',
      statusColor: 'green'
    },
    {
      id: 'CLM-9104',
      date: 'Nov 05, 2024',
      event: 'Platform Outage (>4h)',
      type: 'Auto-Triggered',
      amount: 850,
      status: 'Approved',
      statusColor: 'blue'
    },
    {
      id: 'CLM-9250',
      date: 'Nov 20, 2024',
      event: 'Medical Emergency',
      type: 'Manual',
      amount: 5000,
      status: 'Pending',
      statusColor: 'amber'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Claims History</h1>
        <p className="text-slate-500">Track and manage your insurance claims.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-semibold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Claim ID</th>
                <th className="px-6 py-4">Date & Event</th>
                <th className="px-6 py-4">Claim Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{claim.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{claim.event}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{claim.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-1.5 text-slate-400" />
                      {claim.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-900 flex items-center h-full pt-[22px]">
                    <IndianRupee className="w-3.5 h-3.5 mr-0.5 text-slate-400" />
                    {claim.amount}
                  </td>
                  <td className="px-6 py-4">
                    {claim.status === 'Paid' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" /> Paid
                      </span>
                    )}
                    {claim.status === 'Approved' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <CheckCircle className="w-3 h-3 mr-1" /> Approved
                      </span>
                    )}
                    {claim.status === 'Pending' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        <Clock className="w-3 h-3 mr-1" /> Pending
                      </span>
                    )}
                    {claim.status === 'Rejected' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <XCircle className="w-3 h-3 mr-1" /> Rejected
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-end w-full">
                      View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {claims.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No claims found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Claims;
