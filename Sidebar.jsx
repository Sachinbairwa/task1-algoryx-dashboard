import { LayoutDashboard, ShoppingCart, Users, BarChart3, Settings, X } from 'lucide-react'
const links = [
  { icon: LayoutDashboard, label: 'Dashboard' }, { icon: ShoppingCart, label: 'Orders' },
  { icon: Users, label: 'Customers' }, { icon: BarChart3, label: 'Analytics' }, { icon: Settings, label: 'Settings' },
]
export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-brand text-white p-5 transition-transform lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold tracking-widest">ALGORYX</span>
          <button onClick={onClose} className="lg:hidden" aria-label="Close menu"><X size={20} /></button>
        </div>
        <nav className="space-y-1">
          {links.map(({ icon: Icon, label }, i) => (
            <a key={label} href="#" className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-white/10 ${i === 0 ? 'bg-white/15 font-semibold' : 'text-blue-100'}`}>
              <Icon size={18} /> {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
