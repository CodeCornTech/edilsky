import { motion, useScroll, useTransform } from "framer-motion";

/**
 * EDIL SKY — FINAL BOSS VERSION 💣
 *
 * - POV apertura nel vuoto
 * - operatore realistico stilizzato
 * - edifici con finestre che scorrono
 * - camera tilt
 * - effetto "sto cadendo nel sito"
 */

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();

  const operatorY = useTransform(scrollYProgress, [0, 1], ["-10%", "160%"]);
  const buildingsY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const zoom = useTransform(scrollYProgress, [0, 0.4], [1, 1.25]);

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* OPENING VOID */}
      <section className="relative h-[240vh]">

        <motion.div
          style={{ scale: zoom, rotateX: tilt }}
          className="sticky top-0 h-screen overflow-hidden perspective-[1200px]"
        >

          {/* VOID */}
          <div className="absolute inset-0 bg-black" />

          {/* LIGHT CENTER */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

          {/* BUILDINGS LEFT */}
          <motion.div
            style={{ y: buildingsY }}
            className="absolute left-0 top-0 w-1/3 h-[300%] opacity-60"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-40 border-b border-white/5 flex gap-2 px-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex-1 bg-white/5 m-1 rounded" />
                ))}
              </div>
            ))}
          </motion.div>

          {/* BUILDINGS RIGHT */}
          <motion.div
            style={{ y: buildingsY }}
            className="absolute right-0 top-0 w-1/3 h-[300%] opacity-60"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-40 border-b border-white/5 flex gap-2 px-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex-1 bg-white/5 m-1 rounded" />
                ))}
              </div>
            ))}
          </motion.div>

          {/* ROPE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />

          {/* OPERATOR REALISTIC */}
          <motion.div
            style={{ y: operatorY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
          >
            <div className="flex flex-col items-center">

              <div className="h-28 w-[2px] bg-blue-500" />

              {/* BODY */}
              <div className="relative flex flex-col items-center">

                {/* head */}
                <div className="w-5 h-5 rounded-full bg-blue-500" />

                {/* torso */}
                <div className="w-[3px] h-8 bg-blue-500 mt-1" />

                {/* arms */}
                <div className="absolute top-6 flex gap-6">
                  <div className="w-[2px] h-6 bg-blue-500 rotate-45 origin-top" />
                  <div className="w-[2px] h-6 bg-blue-500 -rotate-45 origin-top" />
                </div>

                {/* legs */}
                <div className="flex gap-3 mt-1">
                  <div className="w-[2px] h-8 bg-blue-500 rotate-12" />
                  <div className="w-[2px] h-8 bg-blue-500 -rotate-12" />
                </div>
              </div>

              <div className="h-28 w-[2px] bg-blue-500" />

            </div>
          </motion.div>

          {/* PARTICLES WIND */}
          <div className="absolute inset-0">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 40, 0] }}
                transition={{ duration: 2 + (i % 3), repeat: Infinity }}
                className="absolute w-[2px] h-[2px] bg-white/50"
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>

          {/* HERO TEXT */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tight">
              EDIL SKY
            </h1>
          </div>

        </motion.div>
      </section>

      {/* IMPACT DROP */}
      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">
          Non stai scrollando
        </h2>
        <h2 className="text-5xl font-black uppercase text-blue-500 mt-4">
          Stai scendendo
        </h2>
      </section>

      {/* CLEAN SERVICES */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Facciate", "Ispezioni", "Riparazioni", "Urgenze"].map((s, i) => (
            <div key={i} className="p-5 border border-white/10 rounded-xl bg-white/5">
              <div className="text-xs text-blue-400">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-bold uppercase">{s}</h3>
              <p className="mt-1 text-xs text-zinc-400">Operatività verticale</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL HIT */}
      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">
          Questo non è un template
        </h2>
      </section>

    </div>
  );
}
