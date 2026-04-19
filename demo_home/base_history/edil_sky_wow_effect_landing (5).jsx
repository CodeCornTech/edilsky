import { motion, useScroll, useTransform } from "framer-motion";

function OperatorSilhouette() {
  return (
    <div className="relative flex flex-col items-center">
      {/* corda sopra */}
      <div className="h-28 w-[2px] bg-blue-500/95" />

      {/* omino reale (SVG fornito) */}
      <img
        src="/mnt/data/41712d9c-8152-4cdc-9d3a-595a99489ea3.svg"
        alt="operatore su fune"
        className="w-16 md:w-20 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
      />

      {/* corda sotto */}
      <div className="h-28 w-[2px] bg-blue-500/95" />
    </div>
  );
}

function BuildingSide({ side }: { side: "left" | "right" }) {
  const align = side === "left" ? "left-0" : "right-0";

  return (
    <div className={`absolute top-0 ${align} h-[300%] w-[28%]`}>
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="flex h-44 gap-3 border-b border-white/[0.035] px-3">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="m-2 flex-1 rounded-md bg-white/[0.04]" />
          ))}
        </div>
      ))}
    </div>
  );
}

function WindParticles() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 17) % 100}%`,
    duration: 2 + (i % 3),
  }));

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 40, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity }}
          className="absolute h-[2px] w-[2px] bg-white/50"
          style={{ left: particle.left, top: particle.top }}
        />
      ))}
    </div>
  );
}

/**
 * EDIL SKY — FINAL BOSS VERSION
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
  const buildingsY = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);
  const sideFade = useTransform(scrollYProgress, [0, 0.35, 1], [0.18, 0.28, 0.12]);
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const zoom = useTransform(scrollYProgress, [0, 0.4], [1, 1.25]);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <section className="relative h-[240vh]">
        <motion.div
          style={{ scale: zoom, rotateX: tilt }}
          className="sticky top-0 h-screen overflow-hidden [perspective:1200px]"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

          <motion.div
            style={{ y: buildingsY, opacity: sideFade, filter: "blur(0.5px)" }}
          >
            <BuildingSide side="left" />
          </motion.div>

          <motion.div
            style={{ y: buildingsY, opacity: sideFade, filter: "blur(0.5px)" }}
          >
            <BuildingSide side="right" />
          </motion.div>

          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />

          <motion.div
            style={{ y: operatorY }}
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
          >
            <OperatorSilhouette />
          </motion.div>

          <WindParticles />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <h1 className="text-6xl font-black uppercase tracking-[0.02em] text-white/95 drop-shadow-[0_0_24px_rgba(0,0,0,0.55)] md:text-8xl lg:text-9xl">
              EDIL SKY
            </h1>
          </div>
        </motion.div>
      </section>

      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">Non stai scrollando</h2>
        <h2 className="mt-4 text-5xl font-black uppercase text-blue-500">Stai scendendo</h2>
      </section>

      <section className="bg-zinc-950 py-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {["Facciate", "Ispezioni", "Riparazioni", "Urgenze"].map((service, i) => (
            <div key={service} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-blue-400">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-bold uppercase">{service}</h3>
              <p className="mt-1 text-xs text-zinc-400">Operatività verticale</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">Questo non è un template</h2>
      </section>
    </div>
  );
}
