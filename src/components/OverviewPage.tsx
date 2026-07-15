import GoalGauge from './GoalGauge'
import PreleaseBars from './PreleaseBars'
import PropertyBars from './PropertyBars'
import EffectiveRatePanel from './EffectiveRatePanel'

interface KpiTileProps {
  label: string
  value: string
}

function KpiTile({ label, value }: KpiTileProps) {
  return (
    <div
      className="rounded-lg p-3 text-center flex-1"
      style={{ backgroundColor: '#0d3d3d' }}
    >
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs mt-1" style={{ color: '#00b8b8' }}>
        {label}
      </div>
    </div>
  )
}

interface StatBoxProps {
  label: string
  value: string
  negative?: boolean
}

function StatBox({ label, value, negative = false }: StatBoxProps) {
  return (
    <div
      className="rounded p-2 text-center"
      style={{ backgroundColor: '#0d3d3d' }}
    >
      <div
        className={`text-sm font-bold ${negative ? 'text-red-400' : 'text-white'}`}
      >
        {value}
      </div>
      <div className="text-xs mt-0.5" style={{ color: '#00b8b8' }}>
        {label}
      </div>
    </div>
  )
}

const filterLabels = [
  'Owner/Fund',
  'Property Name',
  'Category/Attribute',
  'VP/RM/RLS',
  'Market Name',
  'Region',
]

export default function OverviewPage() {
  return (
    <div className="p-4">
      <h2 className="text-center font-bold mb-3 text-sm" style={{ color: '#00b8b8' }}>
        2026-2027 Prelease Performance Overview
      </h2>
      <div className="flex gap-4">
        <div className="w-48 flex-shrink-0">
          <div className="flex flex-col gap-2 mb-3">
            {filterLabels.map((f) => (
              <select
                key={f}
                className="text-xs border-2 rounded px-2 py-1 bg-white focus:outline-none w-full"
                style={{ borderColor: '#00b8b8' }}
              >
                <option>{f}: All</option>
              </select>
            ))}
          </div>
          <div className="flex gap-2 mb-3">
            <KpiTile label="Current Occupancy" value="88.0%" />
            <KpiTile label="YTD Prelease" value="79.8%" />
          </div>
          <div
            className="rounded-lg p-3 mb-3"
            style={{ backgroundColor: '#0d3d3d' }}
          >
            <GoalGauge />
            <div className="grid grid-cols-1 gap-1 mt-2">
              <StatBox label="% Prelease Var - Prior Yr" value="4.6%" />
              <StatBox label="YTD vs Goal: # Leases" value="-2,292.00 ▼" negative />
              <StatBox label="YTD vs Goal: % Prelease" value="-10.7% ▼" negative />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <PreleaseBars />
          </div>
          <div>
            <PropertyBars />
          </div>
        </div>

        <div
          className="w-52 flex-shrink-0 rounded-lg"
          style={{ backgroundColor: '#f8f9fa' }}
        >
          <EffectiveRatePanel />
        </div>
      </div>
    </div>
  )
}
