import Layout from '../components/Layout'

export default function Page() {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-semibold">Dressing</h1>
          <p className="mt-3 text-slate-600">Contenu à personnaliser.</p>
          <a href="/contact" className="inline-block mt-6 rounded-2xl bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white">Prendre rendez-vous</a>
        </div>
      </section>
    </Layout>
  )
}
