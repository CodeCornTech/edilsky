import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ShieldCheck, Building2, Zap, Phone, Eye, Wrench, TimerReset } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Facciate",
    text: "Ripristini , sigillature , manutenzioni e messa in sicurezza in quota .",
    icon: Building2,
  },
  {
    number: "02",
    title: "Ispezioni",
    text: "Controlli visivi e tecnici rapidi anche in punti difficili da raggiungere .",
    icon: Eye,
  },
  {
    number: "03",
    title: "Interventi rapidi",
    text: "Urgenze operative senza installazioni pesanti e senza perdere tempo .",
    icon: Zap,
  },
  {
    number: "04",
    title: "Riparazioni",
    text: "Coperture , frontalini , vetrate , linee vita e lavori puntuali ad alta precisione .",
    icon: Wrench,
  },
];

const stats = [
  ["-70%", "Ingombro operativo"],
  ["+Velocità", "Accesso diretto"],
  ["0 Ponteggi", "Quando non servono"],
  ["100%", "Focus sull intervento"],
];

function GridGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.22),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/30" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs md:text-sm uppercase tracking-[0.38em] text-blue-300">{eyebrow}</div>
      <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.92] tracking-tight">{title}</h2>
      <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">{text}</p>
    </div>
  );
}

function RopeMarker({ label }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <div className="h-12 w-[2px] bg-blue-500/80 shadow-[0_0_16px_rgba(59,130,246,0.65)]" />
      <div className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-blue-200 backdrop-blur-xl">
        {label}
      </div>
    </div>
  );
}

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08]);
  const ropeGlow = useTransform(scrollYProgress, [0, 1], [0.35, 1]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-blue-500/30">
      <style>{`
        html { scroll-behavior: smooth; }
        body { background: #000; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-black">
        <GridGlow />

        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 opacity-80"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(29,78,216,0.28),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%,rgba(255,255,255,0.015)_70%,rgba(0,0,0,0.4))]" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/5" />
        </motion.div>

        <motion.div
          style={{ opacity: ropeGlow }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-blue-500 shadow-[0_0_28px_rgba(59,130,246,0.8)]"
        />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20 lg:pt-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.34em] text-blue-200 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" />
              Edilizia su fune ad alto impatto
            </div>

            <h1 className="mt-7 text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.88] tracking-[-0.04em]">
              Arriviamo
              <span className="block text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">dove gli altri</span>
              <span className="block">si fermano</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-zinc-300 leading-relaxed">
              Interventi verticali pensati per stupire visivamente e funzionare davvero .
              Più accesso , meno struttura , più velocità operativa .
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.35)]"
              >
                Richiedi sopralluogo
              </a>
              <a
                href="#servizi"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-100 transition hover:bg-white/10"
              >
                Scendi nei servizi
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="text-2xl md:text-3xl font-black uppercase text-blue-400">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-400">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative h-[72vh] min-h-[560px] rounded-[2.25rem] border border-white/10 bg-zinc-950/70 backdrop-blur-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_42%)]" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-blue-500/90 shadow-[0_0_35px_rgba(59,130,246,0.7)]" />

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-14 left-1/2 -translate-x-1/2 z-20"
            >
              <div className="flex flex-col items-center">
                <div className="h-16 w-[2px] bg-blue-500" />
                <div className="rounded-full border border-blue-400/40 bg-blue-500/12 p-3 shadow-[0_0_40px_rgba(59,130,246,0.45)] backdrop-blur-xl">
                  <div className="h-12 w-12 rounded-full bg-blue-500/90" />
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 p-5 md:p-7">
              <div className="grid h-full grid-cols-3 gap-3 opacity-55">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.35, y: 0 }}
                    animate={{ opacity: [0.35, 0.6, 0.35], y: [0, i % 2 === 0 ? -4 : 4, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + (i % 5), delay: i * 0.08 }}
                    className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:grid-cols-3">
              {[
                ["ACCESS", "Diretto"],
                ["SETUP", "Ridotto"],
                ["IMPACT", "Massimo"],
              ].map(([a, b]) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.34em] text-zinc-500">{a}</div>
                  <div className="mt-1 text-lg font-bold uppercase text-zinc-100">{b}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#story"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.7 }}
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-[10px] uppercase tracking-[0.38em]">Scroll per scendere</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </section>

      <section id="story" className="relative border-t border-white/10 bg-zinc-950 py-24 md:py-32">
        <GridGlow />
        <RopeMarker label="Vertical narrative" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Impatto"
            title={<>Una home che sembra <span className="text-blue-500">un esperienza</span></>}
            text="Il visitatore non deve percepire il solito sito da impresa edile . Deve sentire altezza , controllo , velocità e precisione fin dal primo scroll ."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Verticalità", "Il layout segue l idea della discesa su fune e guida tutto il ritmo visivo ."],
              ["Contrasto", "Nero profondo , blu tecnico e bagliori controllati per un effetto premium ."],
              ["Presenza", "Blocchi massicci , titoli forti e transizioni lente per dare autorevolezza ."],
            ].map(([title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-blue-300">0{i + 1}</div>
                <h3 className="mt-4 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="servizi" className="relative bg-black py-24 md:py-32">
        <GridGlow />
        <RopeMarker label="Services" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Servizi"
            title={<>Operatività verticale <span className="text-blue-500">senza ponteggi</span></>}
            text="Ogni sezione deve sembrare una scheda operativa evoluta . Pulita , netta , intensa ."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="text-xs uppercase tracking-[0.32em] text-blue-300">{service.number}</div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-10 text-3xl font-black uppercase leading-none">{service.title}</h3>
                    <p className="mt-4 text-zinc-400 leading-relaxed">{service.text}</p>
                    <div className="mt-8 h-[2px] w-10 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-zinc-950 py-24 md:py-32 overflow-hidden">
        <GridGlow />
        <RopeMarker label="Comparison" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Differenza"
            title={<>Meno struttura . <span className="text-blue-500">Più risultato</span></>}
            text="Questa è la sezione che trasforma la percezione . Non spiega solo il servizio : fa capire perché conviene davvero ."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-red-500/15 bg-red-500/5 p-8"
            >
              <div className="text-xs uppercase tracking-[0.34em] text-red-300">Metodo tradizionale</div>
              <h3 className="mt-4 text-4xl md:text-5xl font-black uppercase">Ponteggi</h3>
              <div className="mt-8 space-y-4 text-zinc-300">
                <div className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4">Tempi di montaggio e smontaggio più lunghi</div>
                <div className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4">Maggiore ingombro visivo e operativo</div>
                <div className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4">Costi indiretti più pesanti sul cantiere</div>
                <div className="rounded-2xl border border-white/8 bg-black/20 px-5 py-4">Minor flessibilità sui punti critici</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-blue-500/25 bg-blue-500/10 p-8 shadow-[0_0_80px_rgba(37,99,235,0.12)]"
            >
              <div className="text-xs uppercase tracking-[0.34em] text-blue-300">Edil Sky</div>
              <h3 className="mt-4 text-4xl md:text-5xl font-black uppercase">Su fune</h3>
              <div className="mt-8 space-y-4 text-zinc-100">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Accesso rapido e diretto alla zona di intervento</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Minore impatto su facciata , ingressi e spazi comuni</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Esperienza percepita più tecnologica e specializzata</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">Ideale per lavori mirati e scenari complessi</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 md:py-32">
        <GridGlow />
        <RopeMarker label="Trust" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <SectionTitle
            eyebrow="Affidabilità"
            title={<>Sicurezza , metodo e <span className="text-blue-500">controllo</span></>}
            text="Qui il tono si fa più pulito . Dopo il wow iniziale , il sito deve consolidare fiducia e far capire che dietro l impatto c è sostanza ."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [ShieldCheck, "Procedure", "Operatività pianificata con attenzione al contesto e al punto di accesso ."],
              [TimerReset, "Rapidità", "Riduzione dei tempi morti e maggiore continuità dell intervento ."],
              [Building2, "Contesti complessi", "Facciate alte , cortili interni , punti difficili e accessi stretti ."],
              [Zap, "Impatto", "Immagine aziendale moderna e immediatamente differenziante ."],
            ].map(([Icon, title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="rounded-2xl border border-blue-500/25 bg-blue-500/10 p-3 w-fit text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="relative border-t border-white/10 bg-zinc-950 py-24 md:py-32">
        <GridGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-12 md:px-10 md:py-14 shadow-[0_20px_90px_rgba(0,0,0,0.4)]"
          >
            <div className="text-xs uppercase tracking-[0.36em] text-blue-300">Final call</div>
            <h2 className="mt-5 text-4xl md:text-6xl font-black uppercase leading-[0.92] tracking-tight">
              Più velocità .
              <span className="block text-blue-500">Meno struttura .</span>
              <span className="block">Più controllo .</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
              Una chiusura pensata per lasciare il segno e trasformare la percezione del brand in qualcosa di più tecnico , moderno e memorabile .
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.35)]"
              >
                <Phone className="h-4 w-4" />
                Prenota sopralluogo
              </a>
              <a
                href="#servizi"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-white/10"
              >
                Rivedi i servizi
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
