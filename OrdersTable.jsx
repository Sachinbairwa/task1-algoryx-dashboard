const badge = { Completed: 'bg-emerald-50 text-emerald-700', Pending: 'bg-amber-50 text-amber-700', Failed: 'bg-red-50 text-red-700' }
export default function OrdersTable({ rows }) {
  return (
    <div className="rise rounded-xl border border-slate-200 bg-white">
      <h2 className="p-5 pb-3 font-semibold text-ink">Recent orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-500"><tr>{['Order', 'Customer', 'Item', 'Amount', 'Status'].map((h) => <th key={h} className="px-5 py-2 font-medium">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-5 py-3">{o.id}</td><td className="px-5 py-3">{o.customer}</td><td className="px-5 py-3">{o.item}</td>
                <td className="px-5 py-3">${o.amount.toLocaleString()}</td>
                <td className="px-5 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${badge[o.status]}`}>{o.status}</span></td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan="5" className="px-5 py-8 text-center text-slate-400">No orders match your search.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
