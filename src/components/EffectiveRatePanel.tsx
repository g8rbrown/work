interface StatTileProps {
  value: string
  label: string
}

function StatTile({ value, label }: StatTileProps) {
  return (
    <div
      className="rounded p-2 text-center"
      style={{ backgroundColor: '#0d3d3d' }}
    >
      <div className="text-white text-sm font-bold">{value}</div>
      <div className="text-xs mt-0.5" style={{ color: '#00b8b8' }}>
        {label}
      </div>
    </div>
  )
}

interface ProgressBarProps {
  label: string
  pct: number
  color: string
}

function ProgressBar({ label, pct, color }: ProgressBarProps) {
  return (
    <div className="mb-1">
      <div className="flex justify-between text-xs text-gray-600 mb-0.5">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function EffectiveRatePanel() {
  return (
    <div className="p-3">
      <p className="text-xs font-bold mb-2" style={{ color: '#00b8b8' }}>
        Effective Rate/Monthly Revenue
      </p>
      <div className="grid grid-cols-2 gap-1 mb-3">
        <StatTile value="$1,012.99" label="$ Bgt Eff Rate" />
        <StatTile value="$994.59" label="$ YTD Eff Rate" />
        <StatTile value="-1.8%" label="% Actual v Bgt" />
        <StatTile value="$996.12" label="$ Fcst Eff Rate" />
        <StatTile value="-1.7%" label="$ Fcst v Bgt" />
        <StatTile value="0.2%" label="% Fcst YoY" />
        <StatTile value="($0.00)" label="$ Actual YoY" />
        <StatTile value="-0.00%" label="% Actual YoY" />
      </div>

      <ProgressBar label="Budget" pct={100} color="#00b8b8" />
      <ProgressBar label="Achieved" pct={99.3} color="#00b8b8" />
      <ProgressBar label="Forecast" pct={99.3} color="#00b8b8" />

      <div className="mt-3 mb-1 text-xs font-bold" style={{ color: '#00b8b8' }}>
        Concessions
      </div>
      <div className="grid grid-cols-2 gap-1 mb-2">
        <StatTile value="$2,600,141" label="$ Budgeted" />
        <StatTile value="104.1%" label="% Budget Used" />
      </div>
      <div
        className="rounded p-2 text-center mb-2"
        style={{ backgroundColor: '#0d3d3d' }}
      >
        <div className="text-white text-lg font-bold">$6.2M</div>
        <div className="text-xs" style={{ color: '#00b8b8' }}>
          Total Concessions
        </div>
      </div>

      <p className="text-xs font-semibold mb-1" style={{ color: '#00b8b8' }}>
        Concessions by Type
      </p>
      <div className="mb-1">
        <div className="flex justify-between text-xs text-gray-600 mb-0.5">
          <span>Recurring</span>
          <span>$4,277,853</span>
        </div>
        <div className="bg-gray-200 rounded h-3">
          <div className="h-3 rounded" style={{ width: '72%', backgroundColor: '#00b8b8' }} />
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-600 mb-0.5">
          <span>One Time</span>
          <span>$1,624,248</span>
        </div>
        <div className="bg-gray-200 rounded h-3">
          <div className="h-3 rounded" style={{ width: '28%', backgroundColor: '#f59e0b' }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="rounded p-2 text-xs"
          style={{ backgroundColor: '#0d3d3d' }}
        >
          <div className="font-bold text-white mb-1">Total Market</div>
          <div className="flex justify-between text-gray-300">
            <span>% Mkt PL</span>
            <span>71.7%</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>% PL vs CW</span>
            <span>8.1%</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>% Mkt Mvmt</span>
            <span>1.7%</span>
          </div>
        </div>
        <div
          className="rounded p-2 text-xs"
          style={{ backgroundColor: '#0d3d3d' }}
        >
          <div className="font-bold text-white mb-1">Direct Comp</div>
          <div className="flex justify-between text-gray-300">
            <span>% Mkt PL</span>
            <span>74.6%</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>% PL vs Mkt</span>
            <span>5.2%</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>% Mkt Mvmt</span>
            <span>1.7%</span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <label className="text-xs text-gray-500 block mb-1"># Bedrooms</label>
        <select
          className="text-xs border-2 rounded px-2 py-1 w-full bg-white focus:outline-none"
          style={{ borderColor: '#00b8b8' }}
        >
          <option>All</option>
        </select>
      </div>
    </div>
  )
}
