import Link from 'next/link'

export default function Layout({ children }) {
  const menu = [
    ['Accueil','/'],
    ['Cuisines équipées','/cuisines'],
    ['Dressing','/dressing'],
    ['Meubles TV & habillage mural','/meubles'],
    ['Salles de bains','/sdb'],
    ['Réalisations','/realisations'],
    ['Contact','/contact'],
  ]
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="H.Cuisine" className="h-10 w-10 rounded-xl object-contain" />
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide">H.Cuisine</div>
              <div className="text-xs text-[var(--muted)]">Sur‑mesure • Moderne • Qualité</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {menu.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-medium text-slate-800 transition hover:text-[var(--secondary)]">
                {label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-2xl bg-[var(--secondary)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
              Prendre rendez‑vous
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 py-8 mt-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} H.Cuisine — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-slate-600 hover:text-[var(--secondary)]">Accueil</Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-[var(--secondary)]">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
