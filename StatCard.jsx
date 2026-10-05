import { TrendingUp, TrendingDown } from 'lucide-react'
export default function StatCard({ label, value, change, up }) {
  const Icon = up ? TrendingUp : TrendingDown
  return (
    <div className="rise rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-ink">{value}</p>
      <p className={`mt-2 flex items-center gap-1 text-sm ${up ? 'text-emerald-600' : 'text-red-600'}`}><Icon size={14} />{change} this month</p>
    </div>
  )
}
