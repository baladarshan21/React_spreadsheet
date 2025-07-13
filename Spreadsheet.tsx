import React from "react";

const getStatusStyle = (status) => {
  switch (status) {
    case "In-process":
      return "bg-yellow-100 text-yellow-800";
    case "Need to start":
      return "bg-blue-100 text-blue-800";
    case "Complete":
    case "Completed":
      return "bg-green-100 text-green-800";
    case "Blocked":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPriorityStyle = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const data = [
  {
    job: "Launch social media campaign for product X",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanportfolio.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Finalize user testing feedback for app update",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsondev.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenart.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrowncpa.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

const emptyRows = 9;

const Spreadsheet = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="text-sm text-gray-600 mb-2">
        <span className="font-medium text-gray-700">📂 Workspace</span> &gt; Folder 2 &gt;{" "}
        <span className="font-medium text-gray-700">Spreadsheet 3</span>
      </div>

      {/* Toolbar with icons */}
      <div className="flex gap-5 mb-4 items-center text-sm text-gray-800">
        <button className="flex items-center gap-1 text-blue-700 font-medium">
          Tool bar <span className="text-xs">»</span>
        </button>
        <button className="flex items-center gap-1">
          <span>🙈</span> Hide fields
        </button>
        <button className="flex items-center gap-1">
          <span>↕️</span> Sort
        </button>
        <button className="flex items-center gap-1">
          <span>🔽</span> Filter
        </button>
        <button className="flex items-center gap-1 text-red-600 font-medium">
          <span>🔳</span> Cell view
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-3">
        <div></div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded bg-white hover:bg-gray-100">⬇ Import</button>
          <button className="px-3 py-1 text-sm border rounded bg-white hover:bg-gray-100">⬆ Export</button>
          <button className="px-3 py-1 text-sm border rounded bg-white hover:bg-gray-100">🔗 Share</button>
          <button className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700">➕ New Action</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-3 text-sm">
        <button className="px-3 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">📁 Q3 Financial Overview</button>
        <button className="px-3 py-1 rounded bg-green-100 text-green-800 border border-green-200">🔤 ABC</button>
        <button className="px-3 py-1 rounded bg-purple-100 text-purple-800 border border-purple-200">💬 Answer a question</button>
        <button className="px-3 py-1 rounded bg-orange-100 text-orange-800 border border-orange-200">📤 Extract</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded shadow">
        <table className="min-w-full text-sm border border-collapse border-gray-300">
          <thead className="bg-gray-100 text-gray-800 font-semibold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Job Request</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Submitted</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Submitter</th>
              <th className="border border-gray-300 px-4 py-2 text-left">URL</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Assigned</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Priority</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Due Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{i + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{row.job}</td>
                <td className="border border-gray-300 px-4 py-2">{row.submitted}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusStyle(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.submitter}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 underline">
                  <a href={`https://${row.url}`} target="_blank" rel="noreferrer">{row.url}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.assigned}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getPriorityStyle(row.priority)}`}>
                    {row.priority}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.dueDate}</td>
                <td className="border border-gray-300 px-4 py-2">{row.value}</td>
              </tr>
            ))}

            {/* Extra Empty Rows */}
            {Array.from({ length: emptyRows }).map((_, i) => (
              <tr key={`empty-${i}`} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">{data.length + i + 1}</td>
                {[...Array(9)].map((_, j) => (
                  <td key={j} className="border border-gray-300 px-4 py-2">&nbsp;</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Tab Bar */}
      <div className="flex border-t border-gray-300 mt-1 pt-2 px-1 text-sm text-gray-600 bg-white">
        <button className="px-4 py-1 font-semibold text-gray-800 border-b-2 border-green-700 bg-green-50 rounded-t">All Orders</button>
        <button className="px-4 py-1 ml-2 hover:text-gray-800">Pending</button>
        <button className="px-4 py-1 ml-2 hover:text-gray-800">Reviewed</button>
        <button className="px-4 py-1 ml-2 hover:text-gray-800">Arrived</button>
        <button className="px-4 py-1 ml-3 text-lg text-gray-500 hover:text-gray-800">+</button>
      </div>
    </div>
  );
};

export default Spreadsheet;
