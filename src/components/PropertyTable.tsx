interface PropertyRow {
  name: string
  manager: string
  group: string
  beds: number
  bo: string
  leasesToBO: string
  leasesWkReq: string
  wk5Avg: number
  pyRemLeases: string
  pyRemPerWk: string
  ytdPrelease: string
  ytdPY: string
  boStatus: 'green' | 'yellow' | 'none'
  wkStatus: 'green' | 'yellow' | 'none'
}

const rows: PropertyRow[] = [
  { name: '12B Lofts/Avenue M', manager: 'Tionna Williams', group: 'Other Private', beds: 346, bo: '98.6%', leasesToBO: '-8', boStatus: 'green', leasesWkReq: '0', wkStatus: 'none', wk5Avg: 0, pyRemLeases: '-2', pyRemPerWk: '0', ytdPrelease: '100.9%', ytdPY: '100.0%' },
  { name: 'Apex College Station', manager: 'Hannah Folk', group: 'Morgan Stanley', beds: 938, bo: '97.0%', leasesToBO: '234', boStatus: 'none', leasesWkReq: '29', wkStatus: 'yellow', wk5Avg: 13, pyRemLeases: '54', pyRemPerWk: '4', ytdPrelease: '72.1%', ytdPY: '87.4%' },
  { name: 'Arbors at the Park/Cottages at Hooper Hollow', manager: 'Tionna Williams', group: 'Other Private', beds: 620, bo: '100.0%', leasesToBO: '0', boStatus: 'green', leasesWkReq: '0', wkStatus: 'none', wk5Avg: 0, pyRemLeases: '0', pyRemPerWk: '0', ytdPrelease: '100.0%', ytdPY: '100.0%' },
  { name: 'Buckeye Village Apartments', manager: 'Tionna Williams', group: 'Other Private', beds: 242, bo: '95.9%', leasesToBO: '139', boStatus: 'none', leasesWkReq: '15', wkStatus: 'yellow', wk5Avg: 3, pyRemLeases: '124', pyRemPerWk: '8', ytdPrelease: '38.4%', ytdPY: '40.1%' },
  { name: 'Burnham 310', manager: 'Stormy Hofmann', group: 'SBAF', beds: 470, bo: '96.4%', leasesToBO: '85', boStatus: 'none', leasesWkReq: '9', wkStatus: 'yellow', wk5Avg: 7, pyRemLeases: '48', pyRemPerWk: '3', ytdPrelease: '78.3%', ytdPY: '89.1%' },
  { name: 'Crestline Charlottesville', manager: 'Micah Howell', group: 'Morgan Stanley', beds: 655, bo: '97.1%', leasesToBO: '101', boStatus: 'none', leasesWkReq: '11', wkStatus: 'yellow', wk5Avg: 11, pyRemLeases: '107', pyRemPerWk: '7', ytdPrelease: '81.7%', ytdPY: '76.5%' },
  { name: 'Ducks Village', manager: 'Gretchen Bracey', group: 'Other Private', beds: 650, bo: '143.9%', leasesToBO: '328', boStatus: 'none', leasesWkReq: '23', wkStatus: 'yellow', wk5Avg: 21, pyRemLeases: '23', pyRemPerWk: '2', ytdPrelease: '70.2%', ytdPY: '92.5%' },
  { name: 'Easton Corvallis', manager: 'Devan Reiss', group: 'Morgan Stanley', beds: 1016, bo: '97.5%', leasesToBO: '124', boStatus: 'none', leasesWkReq: '10', wkStatus: 'none', wk5Avg: 10, pyRemLeases: '82', pyRemPerWk: '5', ytdPrelease: '85.3%', ytdPY: '91.1%' },
  { name: 'Echelon State College', manager: 'Micah Howell', group: 'Morgan Stanley', beds: 939, bo: '97.9%', leasesToBO: '98', boStatus: 'none', leasesWkReq: '11', wkStatus: 'yellow', wk5Avg: 11, pyRemLeases: '31', pyRemPerWk: '2', ytdPrelease: '87.4%', ytdPY: '95.8%' },
  { name: 'Echo 1055', manager: 'Gretchen Bracey', group: 'Other Private', beds: 601, bo: '', leasesToBO: '', boStatus: 'none', leasesWkReq: '', wkStatus: 'none', wk5Avg: 6, pyRemLeases: '99', pyRemPerWk: '7', ytdPrelease: '75.5%', ytdPY: '75.5%' },
  { name: 'Forum at Denton', manager: 'Hannah Folk', group: 'Arrimus', beds: 1044, bo: '98.4%', leasesToBO: '522', boStatus: 'none', leasesWkReq: '65', wkStatus: 'yellow', wk5Avg: 10, pyRemLeases: '55', pyRemPerWk: '4', ytdPrelease: '48.0%', ytdPY: '83.8%' },
  { name: 'Founders Hall', manager: 'Gretchen Bracey', group: 'Other Private', beds: 260, bo: '97.6%', leasesToBO: '76', boStatus: 'none', leasesWkReq: '7', wkStatus: 'yellow', wk5Avg: 1, pyRemLeases: '-14', pyRemPerWk: '-1', ytdPrelease: '50.4%', ytdPY: '73.1%' },
  { name: 'Highbranch Gainesville', manager: 'Micah Howell', group: 'Morgan Stanley', beds: 787, bo: '96.8%', leasesToBO: '-8', boStatus: 'green', leasesWkReq: '0', wkStatus: 'none', wk5Avg: 7, pyRemLeases: '95', pyRemPerWk: '6', ytdPrelease: '97.8%', ytdPY: '86.1%' },
  { name: 'Launch', manager: 'Tionna Williams', group: 'Other Private', beds: 729, bo: '96.2%', leasesToBO: '252', boStatus: 'none', leasesWkReq: '28', wkStatus: 'yellow', wk5Avg: 12, pyRemLeases: '151', pyRemPerWk: '10', ytdPrelease: '61.6%', ytdPY: '66.1%' },
  { name: 'Maxwell Raleigh', manager: 'Hannah Folk', group: 'Morgan Stanley', beds: 694, bo: '95.2%', leasesToBO: '175', boStatus: 'none', leasesWkReq: '22', wkStatus: 'yellow', wk5Avg: 21, pyRemLeases: '51', pyRemPerWk: '3', ytdPrelease: '70.0%', ytdPY: '88.2%' },
  { name: 'Nolan', manager: 'Stormy Hofmann', group: 'SBAF', beds: 199, bo: '93.0%', leasesToBO: '23', boStatus: 'none', leasesWkReq: '2', wkStatus: 'none', wk5Avg: 6, pyRemLeases: '22', pyRemPerWk: '1', ytdPrelease: '81.4%', ytdPY: '77.4%' },
  { name: 'Nora', manager: 'Stormy Hofmann', group: 'SBAF', beds: 206, bo: '94.2%', leasesToBO: '47', boStatus: 'none', leasesWkReq: '3', wkStatus: 'yellow', wk5Avg: 3, pyRemLeases: '52', pyRemPerWk: '3', ytdPrelease: '71.4%', ytdPY: '73.8%' },
  { name: 'Northgate Lakes', manager: 'Hannah Folk', group: 'SBAF', beds: 710, bo: '88.5%', leasesToBO: '53', boStatus: 'none', leasesWkReq: '7', wkStatus: 'yellow', wk5Avg: 8, pyRemLeases: '76', pyRemPerWk: '5', ytdPrelease: '81.0%', ytdPY: '71.8%' },
  { name: 'Pavilion Kennesaw', manager: 'Micah Howell', group: 'Morgan Stanley', beds: 681, bo: '97.1%', leasesToBO: '266', boStatus: 'none', leasesWkReq: '38', wkStatus: 'yellow', wk5Avg: 11, pyRemLeases: '152', pyRemPerWk: '10', ytdPrelease: '58.0%', ytdPY: '75.8%' },
  { name: 'Pinnacle State College', manager: 'Micah Howell', group: 'Morgan Stanley', beds: 494, bo: '95.7%', leasesToBO: '-8', boStatus: 'green', leasesWkReq: '0', wkStatus: 'none', wk5Avg: 2, pyRemLeases: '42', pyRemPerWk: '3', ytdPrelease: '97.4%', ytdPY: '90.1%' },
  { name: 'Prado Student Living', manager: 'Hannah Folk', group: 'Arrimus', beds: 472, bo: '80.2%', leasesToBO: '102', boStatus: 'none', leasesWkReq: '11', wkStatus: 'yellow', wk5Avg: 15, pyRemLeases: '110', pyRemPerWk: '8', ytdPrelease: '74.0%', ytdPY: '73.1%' },
  { name: 'Remerton Mill Apartments', manager: 'Stormy Hofmann', group: 'Other Private', beds: 194, bo: '96.4%', leasesToBO: '44', boStatus: 'none', leasesWkReq: '6', wkStatus: 'yellow', wk5Avg: 2, pyRemLeases: '-4', pyRemPerWk: '0', ytdPrelease: '73.7%', ytdPY: '98.5%' },
  { name: 'Republic at Sam Houston', manager: 'Stormy Hofmann', group: 'SBAF', beds: 687, bo: '90.2%', leasesToBO: '158', boStatus: 'none', leasesWkReq: '18', wkStatus: 'yellow', wk5Avg: 15, pyRemLeases: '46', pyRemPerWk: '3', ytdPrelease: '67.2%', ytdPY: '74.1%' },
  { name: 'ROAM Student Living', manager: 'Gretchen Bracey', group: 'Other Private', beds: 468, bo: '94.7%', leasesToBO: '86', boStatus: 'none', leasesWkReq: '10', wkStatus: 'none', wk5Avg: 14, pyRemLeases: '91', pyRemPerWk: '6', ytdPrelease: '76.3%', ytdPY: '75.4%' },
  { name: 'Slate at 901', manager: 'Stormy Hofmann', group: 'SBAF', beds: 223, bo: '95.5%', leasesToBO: '23', boStatus: 'none', leasesWkReq: '3', wkStatus: 'yellow', wk5Avg: 0, pyRemLeases: '2', pyRemPerWk: '0', ytdPrelease: '85.2%', ytdPY: '98.9%' },
  { name: 'Stateside Apartments', manager: 'Tionna Williams', group: 'Other Private', beds: 513, bo: '93.0%', leasesToBO: '60', boStatus: 'none', leasesWkReq: '5', wkStatus: 'none', wk5Avg: 5, pyRemLeases: '66', pyRemPerWk: '4', ytdPrelease: '81.3%', ytdPY: '70.6%' },
  { name: 'The Cottages at Hooper Hill', manager: 'Tionna Williams', group: 'Other Private', beds: 123, bo: '100.0%', leasesToBO: '0', boStatus: 'green', leasesWkReq: '0', wkStatus: 'none', wk5Avg: 0, pyRemLeases: '0', pyRemPerWk: '0', ytdPrelease: '100.0%', ytdPY: '100.0%' },
  { name: 'The Enclave', manager: 'Pamela West', group: 'Other Private', beds: 194, bo: '97.8%', leasesToBO: '21', boStatus: 'none', leasesWkReq: '3', wkStatus: 'yellow', wk5Avg: 0, pyRemLeases: '27', pyRemPerWk: '2', ytdPrelease: '87.1%', ytdPY: '85.1%' },
  { name: 'The Flats at Ridgeview', manager: 'Gretchen Bracey', group: 'Other Private', beds: 252, bo: '94.8%', leasesToBO: '53', boStatus: 'none', leasesWkReq: '18', wkStatus: 'yellow', wk5Avg: 8, pyRemLeases: '25', pyRemPerWk: '2', ytdPrelease: '73.8%', ytdPY: '63.5%' },
]

function StatusDot({ status }: { status: 'green' | 'yellow' | 'none' }) {
  if (status === 'none') return null
  return (
    <span
      className="inline-block w-2 h-2 rounded-full ml-1"
      style={{ backgroundColor: status === 'green' ? '#22c55e' : '#eab308' }}
    />
  )
}

const columns = [
  'Property Name',
  'Regional Manager',
  'Property Group',
  '# of Beds',
  '% B/O',
  '# Leases to B/O',
  '# Leases/Wk Req to B/O',
  '# 5 Wk Avg Leases',
  '# PY Rem Leases',
  '# PY Rem Leases/Week',
  '% YTD Prelease',
  '% YTD Prelease - PY',
]

export default function PropertyTable() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <select
          className="text-xs border-2 rounded px-2 py-1 bg-white focus:outline-none"
          style={{ borderColor: '#00b8b8' }}
        >
          <option>Category/Attribute: All</option>
        </select>
      </div>
      <h2 className="text-center font-bold mb-1 text-sm" style={{ color: '#00b8b8' }}>
        2026-2027 Prelease Performance by Property
      </h2>
      <p className="text-center text-gray-400 text-xs mb-3">
        3rd Party, Arrimus, Conventional, Existing, etc.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse min-w-max">
          <thead>
            <tr style={{ backgroundColor: '#00a0a0' }}>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-2 py-2 text-white text-left font-semibold whitespace-nowrap border border-teal-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.name}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-2 py-1.5 border border-gray-200 whitespace-nowrap">{row.name}</td>
                <td className="px-2 py-1.5 border border-gray-200 whitespace-nowrap">{row.manager}</td>
                <td className="px-2 py-1.5 border border-gray-200 whitespace-nowrap">{row.group}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.beds}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.bo}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">
                  {row.leasesToBO}
                  <StatusDot status={row.boStatus} />
                </td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">
                  {row.leasesWkReq}
                  <StatusDot status={row.wkStatus} />
                </td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.wk5Avg}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.pyRemLeases}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.pyRemPerWk}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right font-semibold">{row.ytdPrelease}</td>
                <td className="px-2 py-1.5 border border-gray-200 text-right">{row.ytdPY}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
