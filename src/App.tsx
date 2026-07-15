import { useState } from 'react'
import YTDHeader from './components/YTDHeader'
import OverviewPage from './components/OverviewPage'
import PropertyTable from './components/PropertyTable'

export default function App() {
  const [page, setPage] = useState<1 | 4>(1)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1e1040' }}>
      <div className="p-4">
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          YTD Preleasing Summary and Floorplan Dashboard
        </h1>
        <div className="bg-white rounded-lg overflow-hidden">
          <YTDHeader />
          <div className="flex gap-2 px-4 pt-3 pb-1 border-b border-gray-200">
            <button
              onClick={() => setPage(1)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                page === 1
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={page === 1 ? { backgroundColor: '#00a0a0' } : {}}
            >
              Page 1
            </button>
            <button
              onClick={() => setPage(4)}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                page === 4
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={page === 4 ? { backgroundColor: '#00a0a0' } : {}}
            >
              Page 4
            </button>
          </div>
          {page === 1 ? <OverviewPage /> : <PropertyTable />}
        </div>
      </div>
    </div>
  )
}
