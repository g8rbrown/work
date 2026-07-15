import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const properties = [
  { name: '12B Lofts', y2024: 85, y2025: 92, y2026: 100 },
  { name: 'Apex CS', y2024: 78, y2025: 87, y2026: 72 },
  { name: 'Arbors/Cotta', y2024: 90, y2025: 95, y2026: 100 },
  { name: 'Buckeye Village', y2024: 55, y2025: 40, y2026: 38 },
  { name: 'Burnham 310', y2024: 82, y2025: 89, y2026: 78 },
  { name: 'Crestline', y2024: 70, y2025: 77, y2026: 82 },
  { name: 'Ducks Village', y2024: 88, y2025: 93, y2026: 70 },
  { name: 'Easton Corvallis', y2024: 84, y2025: 91, y2026: 85 },
  { name: 'Echelon SC', y2024: 91, y2025: 96, y2026: 87 },
  { name: 'Echo 1055', y2024: 72, y2025: 76, y2026: 76 },
  { name: 'Forum Denton', y2024: 79, y2025: 84, y2026: 48 },
  { name: 'Founders Hall', y2024: 68, y2025: 73, y2026: 50 },
  { name: 'Highbranch', y2024: 80, y2025: 86, y2026: 98 },
  { name: 'Launch', y2024: 60, y2025: 66, y2026: 62 },
  { name: 'Maxwell Raleigh', y2024: 82, y2025: 88, y2026: 70 },
  { name: 'Nolan', y2024: 72, y2025: 77, y2026: 81 },
  { name: 'Nora', y2024: 68, y2025: 74, y2026: 71 },
  { name: 'Northgate Lakes', y2024: 65, y2025: 72, y2026: 81 },
  { name: 'Pavilion Ken.', y2024: 70, y2025: 76, y2026: 58 },
  { name: 'Pinnacle SC', y2024: 85, y2025: 90, y2026: 97 },
  { name: 'Prado SL', y2024: 68, y2025: 73, y2026: 74 },
]

export default function PropertyBars() {
  return (
    <div>
      <p className="text-xs font-semibold mb-2" style={{ color: '#00b8b8' }}>
        % YTD Prelease and # of Leases by Property Name and Year
      </p>
      <ResponsiveContainer width="100%" height={520}>
        <BarChart
          data={properties}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 60, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v: number) => `${v}%`}
            tick={{ fontSize: 8 }}
          />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 8 }} width={60} />
          <Tooltip formatter={(v: number) => `${v}%`} />
          <Legend wrapperStyle={{ fontSize: 9 }} />
          <Bar dataKey="y2024" name="2024" fill="#00b8b8" barSize={5} />
          <Bar dataKey="y2025" name="2025" fill="#1a1a4e" barSize={5} />
          <Bar dataKey="y2026" name="2026" fill="#e05050" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
