import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
const CARD_VIDEO_SRC = "/canvas_rope.mp4";

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement | null>(null);

 // const operatorY = useTransform(scrollYProgress, [0, 1], ["-10%", "160%"]);
 // const buildingsY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const zoom = useTransform(scrollYProgress, [0, 0.4], [1, 1.25]);
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 17) % 100}%`,
    duration: 2 + (i % 3),
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 8500);  // tempo totale intro (tune questo)


    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={scrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white overflow-x-hidden">

      {/* OPENING VOID */}
      <section className="relative h-[100vh] h-screen snap-start">

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
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 40, 0] }}
                transition={{ duration: particle.duration, repeat: Infinity }}
                className="absolute w-[2px] h-[2px] bg-white/50"
                style={{
                  left: particle.left,
                  top: particle.top,
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
                EDIL <span className="text-blue-500">SKY</span>
              </h1>
            </motion.div>
          </div>

        </motion.div>
      {/* IMPACT DROP */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 2.81 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm tracking-[0.35em] uppercase text-white/75 backdrop-blur-md"
            >
            <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">
              Scorri per scendere
            </div>
          </motion.div>
      </section>
        {/* PRIMA SEZIONE */}
        <section className="relative h-screen snap-start flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_40%)]" />
                
                <div className="absolute inset-y-0 w-0.5 bg-blue-500/40" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-1 bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm tracking-[0.2em] uppercase text-blue-300">Edilizia su fune</div>
                        <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                            Arriviamo
                            <span className="block text-blue-500">dove gli altri</span>
                            <span className="block">si fermano</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-zinc-300 text-lg md:text-xl leading-relaxed">Interventi verticali ad alto impatto visivo e operativo . Manutenzione , messa in sicurezza , ripristini e lavori in quota senza ponteggi .</p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-500 transition">Richiedi sopralluogo</button>
                            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold hover:bg-white/10 transition">Guarda i servizi</button>
                        </div>
                    </div>



                    <div className="relative h-[70vh] rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-sm overflow-hidden shadow-2xl">


                      {/* VIDEO */}
                      <motion.video
                        className="absolute inset-0 h-full w-full object-cover"
                        src={CARD_VIDEO_SRC}
                        autoPlay
                        muted
                        loop
                        playsInline
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-md">
                        <span>SIAMO SOLO DEI</span>
                        <span className="text-blue-400">GRANDI GABBIANI</span>
                      </div>
                    </div>
                </div>

          {/* SNAP TO SCROLL */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 2.81 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm tracking-[0.35em] uppercase text-white/75 backdrop-blur-md"
            >
             <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">Scroll per scendere</div>
          </motion.div>
        
        </section>
        
    </div>
  );
}
