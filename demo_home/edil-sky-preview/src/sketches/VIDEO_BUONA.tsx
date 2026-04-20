import { motion } from "framer-motion";

//const HERO_VIDEO_SRC = "/task_01kpc4cf5afe6vrbpb06vhsb78_task_01kpc4cf5afe6vrbpb06vhsb78_genid_765b710e-eb20-4041-ae03-1d43d987e5e1_26_04_16_21_51_450951_videos_00000_713781048_source.mp4";
const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
//const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd_nomos8k_30.0fps_2880x4320.mp4";

export default function EdilSkyLanding() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <section className="relative h-screen w-full overflow-hidden">
        <motion.video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.06, opacity: 0.92 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(0,0,0,0.35)_100%)]" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-white/15 bg-black/25 px-6 py-4 backdrop-blur-md md:px-10 md:py-5"
          >
            <h1 className="text-5xl font-black uppercase tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
              EDIL SKY
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">
            Scroll
          </div>
        </motion.div>
      </section>
    </div>
  );
}
