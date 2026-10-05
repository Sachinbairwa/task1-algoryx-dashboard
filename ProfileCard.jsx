export default function ProfileCard() {
  return (
    <div className="rise rounded-xl border border-slate-200 bg-white p-5 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">AD</div>
      <p className="mt-3 font-semibold text-ink">Admin User</p>
      <p className="text-sm text-slate-500">admin@algoryx.in</p>
      <button className="mt-4 w-full rounded-lg bg-brand py-2 text-sm font-medium text-white hover:bg-brand-light">Edit profile</button>
    </div>
  )
}
