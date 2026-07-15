export default function GoalGauge() {
  const value = 27250
  const max = 34141
  const mid = 17805

  const cx = 100
  const cy = 100
  const r = 80
  const circumference = Math.PI * r
  const pct = Math.min(value / max, 1)
  const filledLen = pct * circumference
  const gapLen = circumference - filledLen

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs font-semibold mb-1" style={{ color: '#00b8b8' }}>
        YTD Leases vs. Overall Goal
      </p>
      <svg width={200} height={110} viewBox="0 0 200 110">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2d2d4e" strokeWidth={18}
          strokeDasharray={`${circumference} ${circumference}`}
          transform={`rotate(-180 ${cx} ${cy})`} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c0392b" strokeWidth={18}
          strokeDasharray={`${filledLen} ${gapLen}`}
          transform={`rotate(-180 ${cx} ${cy})`} strokeLinecap="round" />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize={20} fontWeight="bold" fill="#1e1040">
          {value.toLocaleString()}
        </text>
        <text x={18} y={108} fontSize={9} fill="#9ca3af">0</text>
        <text x={75} y={22} fontSize={9} fill="#9ca3af">{mid.toLocaleString()}</text>
        <text x={155} y={108} fontSize={9} fill="#9ca3af">{max.toLocaleString()}</text>
      </svg>
    </div>
  )
}
