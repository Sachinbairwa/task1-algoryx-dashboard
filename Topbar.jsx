import { useState } from 'react'
import { Menu, Search, Bell } from 'lucide-react'
import { notifications } from './data'
export default function Topbar({ onMenu, query, setQuery }) {
  const [show, setShow] = useState(false)
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
      <button onClick={onMenu} className="lg:hidden" aria-label="Open menu"><Menu size={22} /></button>
      <div className="relative flex-1 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search orders or customers"
          className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-brand-light" />
      </div>
      <div className="relative ml-auto">
        <button onClick={() => setShow(!show)} className="relative rounded-lg p-2 hover:bg-slate-100" aria-label="Notifications">
          <Bell size={20} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>
        {show && (
          <div className="rise absolute right-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {notifications.map((n) => (
              <div key={n.id} className="rounded-lg p-2 text-sm hover:bg-slate-50">
                <p>{n.text}</p><p className="text-xs text-slate-400">{n.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
