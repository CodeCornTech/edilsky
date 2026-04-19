import { motion, useScroll, useTransform } from "framer-motion";
// (9)
// const OPERATOR_SRC = "https://i.ibb.co/xSnnQBd8/omino.png";
const OPERATOR_SRC = "public/omino.png";

function OperatorSilhouette() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="h-20 md:h-24 w-[2px] bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.85)]" />
      <img
        src={OPERATOR_SRC}
        alt="operatore su fune edil sky"
        className="w-20 md:w-24 lg:w-28 object-contain drop-shadow-[0_0_26px_rgba(59,130,246,0.85)]"
      />
      <div className="h-20 md:h-24 w-[2px] bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.85)]" />
    </div>
  );
}

function BuildingSide({ side }: { side: "left" | "right" }) {
  const align = side === "left" ? "left-0 items-end" : "right-0 items-start";

  return (
    <div className={`absolute top-[-10vh] ${align} flex h-[180vh] w-[26vw] min-w-[220px] max-w-[340px] flex-col gap-3 px-3`}>
      {Array.from({ length: 11 }).map((_, i) => (
        <div
          key={i}
          className="relative h-[12vh] min-h-[74px] overflow-hidden rounded-2xl border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]"
        >
          <div className="absolute inset-y-[16%] left-[12%] right-[12%] grid grid-cols-2 gap-3">
            <div className="rounded-md bg-white/[0.07]" />
            <div className="rounded-md bg-white/[0.04]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function WindParticles() {
  const particles = Array.from({ length: 34 }, (_, i) => ({
    id: i,
    left: `${(i * 23) % 100}%`,
    top: `${(i * 13) % 100}%`,
    duration: 2.6 + (i % 4) * 0.35,
    drift: i % 2 === 0 ? 14 : -14,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.1, y: 0, x: 0, scale: 1 }}
          animate={{
            opacity: [0.1, 0.42, 0.1],
            y: [0, 24, 0],
            x: [0, particle.drift, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/60"
          style={{ left: particle.left, top: particle.top }}
        />
      ))}
    </div>
  );
}

function BrandBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 18, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-full border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-md md:px-10 md:py-5"
    >
      <h1 className="text-5xl font-black uppercase tracking-[0.06em] text-white/95 md:text-7xl lg:text-8xl">
        EDIL SKY
      </h1>
    </motion.div>
  );
}

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();

  const operatorY = useTransform(scrollYProgress, [0, 0.58], ["2vh", "84vh"]);
  const operatorX = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.58], [0, -8, 7, 0]);
  const operatorRotate = useTransform(scrollYProgress, [0, 0.18, 0.36, 0.58], [0, -4, 3, 0]);
  const operatorScale = useTransform(scrollYProgress, [0, 0.5, 0.62], [1, 1.06, 1.45]);
  const operatorOpacity = useTransform(scrollYProgress, [0, 0.52, 0.6], [1, 1, 0]);

  const buildingsY = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const leftX = useTransform(scrollYProgress, [0, 0.45, 0.7], [0, -8, -16]);
  const rightX = useTransform(scrollYProgress, [0, 0.45, 0.7], [0, 8, 16]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.28, 0.2, 0.12]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);

  const badgeOpacity = useTransform(scrollYProgress, [0, 0.53, 0.63, 1], [0, 0, 1, 1]);
  const badgeScale = useTransform(scrollYProgress, [0, 0.55, 0.68], [0.88, 0.88, 1]);
  const badgeY = useTransform(scrollYProgress, [0, 0.55, 0.68], [28, 28, 0]);

  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.38, 0.55, 0.78]);

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <section className="relative h-[240vh]">
        <motion.div style={{ scale: sceneScale }} className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_58%)]" />

          <motion.div style={{ y: buildingsY, x: leftX, opacity: sideOpacity }} className="absolute inset-y-0 left-0 w-[30vw]">
            <BuildingSide side="left" />
          </motion.div>

          <motion.div style={{ y: buildingsY, x: rightX, opacity: sideOpacity }} className="absolute inset-y-0 right-0 w-[30vw]">
            <BuildingSide side="right" />
          </motion.div>

          <div className="absolute left-1/2 top-0 bottom-0 z-10 w-[2px] -translate-x-1/2 bg-blue-500 shadow-[0_0_28px_rgba(59,130,246,0.82)]" />

          <motion.div
            style={{ opacity: operatorOpacity, scale: operatorScale, x: operatorX, rotate: operatorRotate, y: operatorY }}
            className="absolute left-1/2 top-0 z-30 -translate-x-1/2 origin-center"
          >
            <div className="absolute left-1/2 top-1/2 -z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/12 blur-3xl" />
            <OperatorSilhouette />
          </motion.div>

          <WindParticles />

          <motion.div
            style={{ opacity: badgeOpacity, scale: badgeScale, y: badgeY }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          >
            <BrandBadge />
          </motion.div>

          <motion.div
            style={{ opacity: vignetteOpacity }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.58)_100%)]"
          />
        </motion.div>
      </section>

      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">Non stai scrollando</h2>
        <h2 className="mt-4 text-5xl font-black uppercase text-blue-500">Stai scendendo</h2>
      </section>

      <section className="bg-zinc-950 py-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {["Facciate", "Ispezioni", "Riparazioni", "Urgenze"].map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-xs text-blue-400">0{i + 1}</div>
              <h3 className="mt-2 text-lg font-bold uppercase">{service}</h3>
              <p className="mt-1 text-xs text-zinc-400">Operatività verticale</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 text-center">
        <h2 className="text-5xl font-black uppercase">Questo non è un template</h2>
      </section>
    </div>
  );
}
