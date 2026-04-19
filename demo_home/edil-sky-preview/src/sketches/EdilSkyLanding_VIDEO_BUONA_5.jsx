import { motion, useScroll, useTransform } from "framer-motion";
const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";

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


          {/* WINDOWS COVER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.8,
              times: [0, 0.14, 0.72, 1],
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute inset-0 z-[6]"
          >
            {/* LEFT SIDE */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 0, "-22%"] }}
              transition={{
                duration: 2.2,
                times: [0, 0.58, 1],
                ease: [0.22, 1, 0.36, 1],
                delay: 1.35,
              }}
              className="absolute inset-y-0 left-0 w-1/2"
            >
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} className="flex h-1/5 gap-2 px-2 py-2">
                  {Array.from({ length: row % 2 === 0 ? 3 : 2 }).map((_, col) => (
                    <div
                      key={col}
                      className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    />
                  ))}
                </div>
              ))}
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 0, "22%"] }}
              transition={{
                duration: 2.2,
                times: [0, 0.58, 1],
                ease: [0.22, 1, 0.36, 1],
                delay: 1.35,
              }}
              className="absolute inset-y-0 right-0 w-1/2"
            >
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} className="flex h-1/5 gap-2 px-2 py-2">
                  {Array.from({ length: row % 2 === 0 ? 2 : 3 }).map((_, col) => (
                    <div
                      key={col}
                      className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    />
                  ))}
                </div>
              ))}
            </motion.div>
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

          {/* HERO VIDEO */}
          <motion.video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 0, 0, 0.18, 0.6, 1] }}
            transition={{
              duration: 3.6,
              times: [0, 0.45, 0.68, 0.78, 0.9, 1],
              ease: [0.22, 1, 0.36, 1],
              delay: 2.9,
            }}
          />

          {/* HERO TEXT */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(0,0,0,0.35)_100%)]" />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.28, delay: 2.95, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full border border-white/15 bg-black/25 px-6 py-4 backdrop-blur-md md:px-10 md:py-5"
            >
              <h1 className="text-5xl font-black uppercase tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
                EDIL <span className="sky-blue">SKY</span>
              </h1>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* IMPACT DROP */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 2.81 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
          >
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">
              Scorri per scendere
            </div>
          </motion.div>
    


    </div>
  );
}
