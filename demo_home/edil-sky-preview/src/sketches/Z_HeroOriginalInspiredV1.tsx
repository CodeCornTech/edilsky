import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
const DETAIL_VIDEO_SRC = "/canvas_rope.mp4";
const LOGO_SRC = "/favicon.svg";
const OMINO_SRC = "/edil-sky-logo.png";

const panels = [
  { width: "18%", height: "18%", top: "0%", left: "0%" },
  { width: "20%", height: "18%", top: "0%", left: "18%" },
  { width: "22%", height: "18%", top: "0%", left: "38%" },
  { width: "30%", height: "18%", top: "0%", left: "60%" },
  { width: "10%", height: "18%", top: "0%", left: "90%" },
  { width: "18%", height: "22%", top: "18%", left: "0%" },
  { width: "30%", height: "22%", top: "18%", left: "18%" },
  { width: "21%", height: "22%", top: "18%", left: "48%" },
  { width: "18%", height: "22%", top: "18%", left: "69%" },
  { width: "13%", height: "22%", top: "18%", left: "87%" },
  { width: "10%", height: "22%", top: "40%", left: "0%" },
  { width: "20%", height: "22%", top: "40%", left: "10%" },
  { width: "20%", height: "22%", top: "40%", left: "30%" },
  { width: "31%", height: "22%", top: "40%", left: "50%" },
  { width: "19%", height: "22%", top: "40%", left: "81%" },
  { width: "18%", height: "24%", top: "62%", left: "0%" },
  { width: "30%", height: "24%", top: "62%", left: "18%" },
  { width: "21%", height: "24%", top: "62%", left: "48%" },
  { width: "18%", height: "24%", top: "62%", left: "69%" },
  { width: "13%", height: "24%", top: "62%", left: "87%" },
  { width: "10%", height: "14%", top: "86%", left: "0%" },
  { width: "20%", height: "14%", top: "86%", left: "10%" },
  { width: "20%", height: "14%", top: "86%", left: "30%" },
  { width: "31%", height: "14%", top: "86%", left: "50%" },
  { width: "19%", height: "14%", top: "86%", left: "81%" },
];

function OpeningGrid({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 1.02 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_48%,rgba(15,27,40,0.78),transparent_35%),linear-gradient(180deg,#020406_0%,#071018_100%)]" />
      {panels.map((panel, index) => (
        <motion.div
          key={`${panel.top}-${panel.left}`}
          initial={false}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.96,
            filter: visible ? "blur(0px)" : "blur(6px)",
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.015,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute rounded-[1.7rem] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(17,20,24,0.78),rgba(10,14,19,0.94))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
          style={panel}
        />
      ))}
      <motion.div
        initial={false}
        animate={{ opacity: visible ? 1 : 0, scaleY: visible ? 1 : 0.7 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(87,148,255,0),rgba(87,148,255,0.88)_14%,rgba(87,148,255,0.32)_50%,rgba(87,148,255,0)_100%)]"
      />
    </motion.div>
  );
}

function LogoInterlude({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.55 }}
      className="absolute inset-0"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        src={DETAIL_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,14,0.58),rgba(6,10,14,0.7))]" />
      <motion.div
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.92,
          y: visible ? 0 : 20,
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 z-10 w-[min(58rem,82vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-[linear-gradient(90deg,rgba(0,0,0,0.54),rgba(255,255,255,0.1),rgba(0,0,0,0.54))] px-10 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
      >
        <div className="flex items-center justify-center gap-5">
          <span className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-none tracking-[-0.05em] text-white">
            EDIL
          </span>
          <img src={LOGO_SRC} alt="" className="h-[clamp(2.8rem,6vw,5rem)] w-[clamp(2.8rem,6vw,5rem)]" />
          <span className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-none tracking-[-0.05em] text-[#4a81ff]">
            SKY
          </span>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/12 bg-black/28 px-5 py-3 text-[11px] uppercase tracking-[0.4em] text-white/72 backdrop-blur-md">
        Scorri per scendere
      </div>
    </motion.div>
  );
}

function FinalHero({ visible }: { visible: boolean }) {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 1.01 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(9,18,29,0.6),transparent_24%),linear-gradient(180deg,#030507_0%,#071019_46%,#171418_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(115,143,175,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(115,143,175,0.06)_1px,transparent_1px)] [background-size:112px_112px]" />
      <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(83,143,255,0),rgba(83,143,255,0.9)_8%,rgba(83,143,255,0.26)_44%,rgba(83,143,255,0)_100%)] lg:block" />

      <div className="relative mx-auto grid h-full min-h-[100svh] max-w-7xl grid-rows-[1fr_auto] px-6 pb-8 pt-10 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)]">
          <div className="max-w-[34rem] lg:pl-6">
            <div className="inline-flex items-center rounded-full border border-[#17355e] bg-[#091523] px-5 py-3 text-[11px] uppercase tracking-[0.34em] text-[#4f8cf5]">
              Edilizia su fune
            </div>

            <h1 className="mt-8 text-[clamp(3.8rem,7vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.05em] text-white">
              Arriviamo
              <span className="block text-[#4b82f7]">dove gli altri</span>
              si fermano
            </h1>

            <p className="mt-8 max-w-[31rem] text-[clamp(1.15rem,1.35vw,1.55rem)] leading-[1.65] text-[#e0e5ea]">
              Interventi verticali ad alto impatto visivo e operativo.
              Manutenzione, messa in sicurezza, ripristini e lavori in quota
              senza ponteggi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-[1.1rem] bg-[#1459b4] px-7 py-5 text-[1.05rem] font-semibold text-white shadow-[0_14px_30px_rgba(20,89,180,0.22)] transition hover:bg-[#1967d3]"
              >
                Richiedi sopralluogo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-7 py-5 text-[1.05rem] font-semibold text-white/92 transition hover:bg-white/[0.08]"
              >
                Guarda i servizi
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pr-4">
            <div className="relative w-full max-w-[33rem] overflow-hidden rounded-[2.1rem] border border-white/10 bg-[#26292c] shadow-[0_26px_80px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))]" />
              <img
                src={OMINO_SRC}
                alt="Operatore su fune EdilSky"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,18,0)_12%,rgba(15,17,18,0.08)_55%,rgba(15,17,18,0.2)_100%)]" />
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-[1.05rem] border border-white/10 bg-[linear-gradient(90deg,rgba(26,28,31,0.9),rgba(52,57,62,0.72),rgba(26,28,31,0.9))] px-6 py-4 text-[0.95rem] uppercase tracking-[0.34em] text-white/78 backdrop-blur-sm">
                <span className="whitespace-nowrap">Siamo solo dei</span>
                <span className="whitespace-nowrap text-[#4f89f7]">
                  Grandi gabbiani
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center pb-6">
          <div className="rounded-full border border-white/10 bg-black/22 px-5 py-3 text-[11px] uppercase tracking-[0.42em] text-white/72 backdrop-blur-md">
            Scroll per scendere
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function HeroOriginalInspired() {
  const [phase, setPhase] = useState<"grid" | "logo" | "hero">("grid");

  useEffect(() => {
    const logoTimer = window.setTimeout(() => setPhase("logo"), 1700);
    const heroTimer = window.setTimeout(() => setPhase("hero"), 3550);

    return () => {
      window.clearTimeout(logoTimer);
      window.clearTimeout(heroTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#030507] text-white">
      <section className="relative isolate h-screen min-h-[100svh] overflow-hidden">
        <OpeningGrid visible={phase === "grid"} />
        <LogoInterlude visible={phase === "logo"} />
        <FinalHero visible={phase === "hero"} />

        <div className="pointer-events-none absolute bottom-8 left-8 hidden items-center gap-4 lg:flex">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md">
            <img src={LOGO_SRC} alt="" className="h-7 w-7" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.42em] text-[#aac8de]">
              EDILSKY
            </div>
            <div className="mt-1 text-sm text-white/72">
              Specialisti in altezza
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 hidden lg:block">
          <div className="rounded-full border border-white/10 bg-black/22 px-5 py-3 text-[11px] uppercase tracking-[0.34em] text-white/74 backdrop-blur-md">
            Operativi H24 / 7 giorni su 7
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0a1119] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Rapidità",
              text: "Gli operatori su fune possono iniziare a lavorare subito, senza lunghe attese di allestimento.",
            },
            {
              title: "Costi più contenuti",
              text: "L'assenza di ponteggi e piattaforme riduce sensibilmente il costo complessivo dell'intervento.",
            },
            {
              title: "Sicurezza",
              text: "Ogni lavorazione viene eseguita nel pieno rispetto delle normative e con personale qualificato.",
            },
          ].map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
            >
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#5a8ef2]">
                {item.title}
              </div>
              <p className="mt-4 text-[15px] leading-8 text-[#c9d2da]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
