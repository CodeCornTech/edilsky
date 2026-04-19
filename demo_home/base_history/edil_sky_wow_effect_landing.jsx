export default function EdilSkyLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_40%)]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-1 bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm tracking-[0.2em] uppercase text-blue-300">
              Edilizia su fune
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
              Arriviamo
              <span className="block text-blue-500">dove gli altri</span>
              <span className="block">si fermano</span>
            </h1>
            <p className="mt-6 max-w-xl text-zinc-300 text-lg md:text-xl leading-relaxed">
              Interventi verticali ad alto impatto visivo e operativo .
              Manutenzione , messa in sicurezza , ripristini e lavori in quota senza ponteggi .
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-500 transition">
                Richiedi sopralluogo
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-white/10 transition">
                Guarda i servizi
              </button>
            </div>
          </div>

          <div className="relative h-[70vh] rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-blue-500/80" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.35)]">
              <div className="h-12 w-12 rounded-full bg-blue-500" />
            </div>
            <div className="absolute inset-0 p-8">
              <div className="grid grid-cols-3 gap-4 h-full opacity-40">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5" />
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm uppercase tracking-[0.25em] text-zinc-300">
              <span>Vertical access</span>
              <span className="text-blue-400">Operational view</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-zinc-400 text-xs tracking-[0.35em] uppercase">
          Scroll per scendere
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-zinc-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              ["01", "Facciate", "Ripristini , manutenzione e messa in sicurezza ."],
              ["02", "Vetrate", "Pulizie e lavorazioni in quota ad alta precisione ."],
              ["03", "Coperture", "Controlli , riparazioni e interventi rapidi ."],
              ["04", "Urgenze", "Accesso veloce anche in punti critici ."],
            ].map(([n, title, text]) => (
              <div key={n} className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 hover:border-blue-500/40 hover:bg-blue-500/5 transition">
                <div className="text-blue-400 text-sm tracking-[0.3em] uppercase">{n}</div>
                <h3 className="mt-4 text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">{text}</p>
                <div className="mt-6 h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-[2rem] border border-red-500/20 bg-red-500/5 p-8">
            <div className="text-sm tracking-[0.3em] uppercase text-red-300">Metodo tradizionale</div>
            <h3 className="mt-4 text-4xl font-black uppercase">Ponteggi</h3>
            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>Lenti da installare</li>
              <li>Invasivi</li>
              <li>Costi più alti</li>
              <li>Maggiore impatto sul cantiere</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-blue-500/30 bg-blue-500/10 p-8 shadow-[0_0_60px_rgba(59,130,246,0.12)]">
            <div className="text-sm tracking-[0.3em] uppercase text-blue-300">Edil Sky</div>
            <h3 className="mt-4 text-4xl font-black uppercase">Su fune</h3>
            <ul className="mt-6 space-y-4 text-zinc-100">
              <li>Accesso diretto</li>
              <li>Tempi ridotti</li>
              <li>Meno ingombro</li>
              <li>Impatto visivo premium</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-zinc-950 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-sm tracking-[0.35em] uppercase text-blue-300">Chiusura forte</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.95]">
            Più velocità .
            <span className="block text-blue-500">Meno struttura .</span>
            <span className="block">Più controllo .</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Una landing pensata per sembrare più una presentazione cinematografica che un classico sito di edilizia .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-500 transition">
              Prenota sopralluogo
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-white/10 transition">
              Vedi realizzazioni
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
