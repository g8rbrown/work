import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Oct-25', Leases: 9.3, Pending: 13.1, Renewal: 0 },
  { month: 'Nov-25', Leases: 13.3, Pending: 17.5, Renewal: 0 },
  { month: 'Dec-25', Leases: 18.6, Pending: 21.0, Renewal: 0 },
  { month: 'Jan-26', Leases: 21.0, Pending: 25.0, Renewal: 0 },
  { month: 'Feb-26', Leases: 26.8, Pending: 27.8, Renewal: 0 },
  { month: 'Mar-26', Leases: 31.9, Pending: 29.6, Renewal: 0 },
  { month: 'Apr-26', Leases: 38.8, Pending: 31.4, Renewal: 0 },
  { month: 'May-26', Leases: 43.5, Pending: 32.8, Renewal: 0 },
  { month: 'Jun-26', Leases: 46.0, Pending: 33.7, Renewal: 0 },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TopLabel(props: any) {
  const x = props.x as number ?? 0
  const y = props.y as number ?? 0
  const width = props.width as number ?? 0
  const index = props.index as number ?? 0
  const row = data[index]
  if (!row) return null
  const total = row.Leases + row.Pending + row.Renewal
  return (
    <text x={x + width / 2} y={y - 3} textAnchor="middle" fontSize={8} fill="#374151">
      {total.toFixed(1)}%
    </text>
  )
}

export default function PreleaseBars() {
  return (
    <div>
      <p className="text-xs font-semibold mb-2" style={{ color: '#00b8b8' }}>
        Prelease Composition by Month and Status
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 16, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 9 }} />
          <YAxis tickFormatter={(v: number) => `${v}%`} tick={{ fontSize: 9 }} domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v}%`} />
          <Legend wrapperStyle={{ fontSize: 9 }} />
          <Bar dataKey="Leases" stackId="a" fill="#e05050" />
          <Bar dataKey="Pending" stackId="a" fill="#00b8b8" />
          <Bar dataKey="Renewal" stackId="a" fill="#1a1a4e">
            <LabelList content={TopLabel} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
