import { motion, useScroll, useTransform } from "framer-motion";

/**
 * EDIL SKY — V3 "SPACCA TUTTO"
 *
 * OBIETTIVO:
 * - Esperienza NON template
 * - Scroll = DISCESA REALE
 * - Sensazione vuoto + altezza
 * - Elementi che "passano" accanto
 *
 * ZERO compromessi estetici
 */

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();

  // discesa operatore
  const operatorY = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);

  // parallasse edifici
  const buildingY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const buildingY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO SKY EXPERIENCE */}
      <section className="relative h-[220vh]">

        <div className="sticky top-0 h-screen overflow-hidden">

          {/* SKY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

          {/* BUILDINGS PARALLAX */}
          <motion.div
            style={{ y: buildingY1 }}
            className="absolute left-0 top-0 h-[200%] w-1/3 bg-gradient-to-b from-zinc-800/40 to-transparent blur-xl"
          />

          <motion.div
            style={{ y: buildingY2 }}
            className="absolute right-0 top-0 h-[200%] w-1/3 bg-gradient-to-b from-zinc-800/40 to-transparent blur-xl"
          />

          {/* FUNE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

          {/* OPERATORE (STILIZZATO MA LEGGIBILE) */}
          <motion.div
            style={{ y: operatorY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
          >
            <div className="flex flex-col items-center">

              {/* corda sopra */}
              <div className="h-24 w-[2px] bg-blue-500" />

              {/* corpo */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
                <div className="w-[2px] h-6 bg-blue-500" />
                <div className="flex gap-2">
                  <div className="w-[2px] h-4 bg-blue-500 rotate-12" />
                  <div className="w-[2px] h-4 bg-blue-500 -rotate-12" />
                </div>
                <div className="flex gap-2">
                  <div className="w-[2px] h-5 bg-blue-500 rotate-6" />
                  <div className="w-[2px] h-5 bg-blue-500 -rotate-6" />
                </div>
              </div>

              {/* corda sotto */}
              <div className="h-24 w-[2px] bg-blue-500" />

            </div>
          </motion.div>

          {/* PARTICLES / VENTO */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 20, 0] }}
                transition={{ duration: 3 + i % 3, repeat: Infinity }}
                className="absolute w-[2px] h-[2px] bg-white/40"
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>

          {/* HERO TEXT */}
          <div className="absolute inset-0 flex items-center justify-center text-center z-10 px-6">
            <div>
              <h1 className="text-6xl md:text-8xl font-black uppercase">
                EDIL SKY
              </h1>
            </div>
          </div>

        </div>
      </section>

      {/* SEZIONE IMPATTO */}
      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">
          Verticale . Diretto . Reale
        </h2>
      </section>

      {/* SERVIZI — PULITI */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {["Facciate", "Ispezioni", "Riparazioni", "Urgenze"].map((s, i) => (
            <div key={i} className="p-5 border border-white/10 rounded-xl bg-white/5">
              <div className="text-xs text-blue-400 tracking-widest">0{i + 1}</div>
              <h3 className="mt-3 text-lg font-bold uppercase">{s}</h3>
              <p className="mt-2 text-xs text-zinc-400">
                Intervento verticale rapido e mirato
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold uppercase">
          Questo non è un sito template
        </h2>
      </section>

    </div>
  );
}
