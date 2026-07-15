const filters = [
  'Owner/Fund',
  'Property Name',
  'Category/Attribute',
  'VP/RM/RLS',
  'Market Name',
  'Region',
]

export default function YTDHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-2 flex-shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, #00b8b8, #7c3aed, #f59e0b)' }}
        >
          yugo
        </div>
      </div>
      <div className="flex flex-wrap gap-2 flex-1 justify-center mx-4">
        {filters.map((f) => (
          <select
            key={f}
            className="text-xs border-2 rounded px-2 py-1 bg-white focus:outline-none"
            style={{ borderColor: '#00b8b8' }}
          >
            <option>{f}: All</option>
          </select>
        ))}
      </div>
      <div className="text-gray-400 text-xs text-right flex-shrink-0">
        Market Data as of WE 06/14/26
        <br />
        Leasing Data as of 06/16/26
      </div>
    </div>
  )
}
