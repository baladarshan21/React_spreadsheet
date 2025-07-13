import Spreadsheet from "./components/Spreadsheet";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Spreadsheet Style</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search within sheet"
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
            JD
          </div>
        </div>
      </div>

     

      <Spreadsheet />

      <div className="flex gap-4 mt-6 border-t pt-4">
        <button className="text-sm text-blue-600 font-semibold">All Orders</button>
        <button className="text-sm text-gray-500">Pending</button>
        <button className="text-sm text-gray-500">Reviewed</button>
        <button className="text-sm text-gray-500">Arrived</button>
        <button className="text-sm text-gray-500">+</button>
      </div>
    </div>
  );
}

export default App;