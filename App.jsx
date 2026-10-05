import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatCard from './components/StatCard'
import OrdersTable from './components/OrdersTable'
import ProfileCard from './components/ProfileCard'
import { stats, orders } from './data'

export default function App() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rows = useMemo(() => orders.filter((o) => (o.customer + o.item + o.id).toLowerCase().includes(query.toLowerCase())), [query])
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenu={() => setOpen(true)} query={query} setQuery={setQuery} />
        <main className="space-y-6 p-4 md:p-6">
          <h1 className="text-2xl font-semibold text-ink">Dashboard</h1>
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map((s) => <StatCard key={s.label} {...s} />)}</section>
          <section className="grid gap-4 xl:grid-cols-[1fr_280px]">
            <OrdersTable rows={rows} /><ProfileCard />
          </section>
        </main>
      </div>
    </div>
  )
}
