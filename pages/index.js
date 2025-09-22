import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'

const SLIDES = [
  { src: '/photos/IMG-20250919-WA0003.jpg', alt: 'Projet cuisine 1', caption: 'Cuisines équipées sur mesure' },
  { src: '/photos/IMG-20250919-WA0002.jpg', alt: 'Projet cuisine 2', caption: 'Dressings et rangements intelligents' }
]

const SERVICES = [
  { id: 'cuisines', title: 'Cuisines équipées', desc: 'Conception et fabrication sur mesure.', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200&auto=format&fit=crop', href:'/cuisines' },
  { id: 'dressing', title: 'Dressing', desc: 'Dressings optimisés, finitions premium.', img: 'https://images.unsplash.com/photo-1593032457860-9c0b2abb4d61?q=80&w=1200&auto=format&fit=crop', href:'/dressing' },
  { id: 'meubles', title: 'Meubles TV & habillage mural', desc: 'Solutions murales personnalisées.', img: 'https://images.unsplash.com/photo-1622002573131-63aa7f7a5001?q=80&w=1200&auto=format&fit=crop', href:'/meubles' },
  { id: 'sdb', title: 'Salles de bains', desc: "Meubles résistants à l'humidité.", img: 'https://images.unsplash.com/photo-1616597511280-9dfe1e9d8a14?q=80&w=1200&auto=format&fit=crop', href:'/sdb' },
  { id: 'decoupe', title: 'Découpe de bois', desc: 'Service de découpe précis.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop', href:'/contact' },
]

export default function Home() {
  const [active, setActive] = useState(0)
  useEffect(() => { const t = setInterval(() => setActive(i => (i + 1) % SLIDES.length), 5000); return () => clearInterval(t) }, [])
  const current = useMemo(() => SLIDES[active], [active])

  return (
    <Layout>
      <section id="accueil" className="relative">
        <div className="relative h-[60vh] w-full overflow-hidden md:h-[70vh]">
          <img key={current.src} src={current.src} alt={current.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto mb-10 max-w-7xl px-4 text-white">
            <h1 className="max-w-3xl text-3xl font-semibold md:text-5xl">{current.caption}</h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-100">Conception & fabrication de cuisines, dressings, meubles TV, habillages muraux et salles de bains.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-2xl bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white shadow">Prendre rendez‑vous</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-3 flex max-w-7xl items-center justify-center gap-2 px-4">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-2 w-2 rounded-full transition ${i === active ? 'bg-[var(--secondary)] w-6' : 'bg-slate-300'}`} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--section)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <header className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Nos services</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                  <div className="flex gap-3 pt-1">
                    <a href={s.href} className="rounded-xl bg-[var(--secondary)] px-4 py-2 text-sm font-semibold text-white">Voir la page</a>
                    <a href="/contact" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">Prendre rendez‑vous</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
