import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Layers3,
  Sparkles,
  Thermometer,
  Truck,
  Waves,
  type LucideIcon,
} from "lucide-react";

/**
 * Parallel concept inspired by the attached video:
 * - full-screen product showcase
 * - oversized curved ribbons running diagonally
 * - left contextual navigation card
 * - right product headline/specs block
 * - autonomous slide rotation
 *
 * Built for Vite + React.
 * Tailwind is used for styling.
 */

type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  accent: string;
  glow: string;
  panel: string;
  stats: StatItem[];
  categories: string[];
  blurb: string;
};

type MeshRibbonProps = {
  className?: string;
  gradient?: string;
  delay?: number;
};

type RibbonSceneProps = {
  accent: string;
  glow: string;
};

type LeftPanelProps = {
  slide: Slide;
  activeIndex: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

type SpecsProps = {
  stats: StatItem[];
};

const slides: Slide[] = [
  {
    id: 1,
    title: "PLAS8 NA",
    subtitle: "Engineered polymer compound for heavy-duty motion systems.",
    accent: "from-orange-500 via-amber-400 to-orange-300",
    glow: "bg-orange-500/25",
    panel: "from-zinc-100 via-zinc-50 to-orange-50",
    stats: [
      { label: "Operating range", value: "-40°C → +150°C", icon: Thermometer },
      { label: "Supply", value: "Global logistics", icon: Truck },
      { label: "Application", value: "Tracked vehicles", icon: Layers3 },
    ],
    categories: [
      "Construction machines",
      "Hybrid & electric",
      "Buses & trucks",
      "Railway",
      "Agriculture machines",
    ],
    blurb:
      "A cinematic landing concept focused on materials, performance and strong product identity.",
  },
  {
    id: 2,
    title: "Veritex VHG10 Purple",
    subtitle: "Low-friction composite designed for silent and resilient motion.",
    accent: "from-fuchsia-500 via-violet-400 to-pink-300",
    glow: "bg-fuchsia-500/25",
    panel: "from-zinc-100 via-zinc-50 to-fuchsia-50",
    stats: [
      { label: "Noise profile", value: "Ultra-low resonance", icon: Waves },
      { label: "Finish", value: "Textured mesh shell", icon: Sparkles },
      { label: "Usage", value: "Compact drive units", icon: Layers3 },
    ],
    categories: [
      "Precision parts",
      "Automation",
      "Micro mobility",
      "Packaging lines",
      "Robotics",
    ],
    blurb:
      "Same visual language, different product story: rich color field, cleaner copy hierarchy and strong contrast.",
  },
  {
    id: 3,
    title: "Perflex PS",
    subtitle: "High-cycle elastomer system for continuous industrial stress.",
    accent: "from-lime-500 via-yellow-400 to-orange-400",
    glow: "bg-lime-500/25",
    panel: "from-zinc-100 via-zinc-50 to-lime-50",
    stats: [
      { label: "Duty cycle", value: "24 / 7 capable", icon: Layers3 },
      { label: "Resilience", value: "Impact-ready", icon: Sparkles },
      { label: "Field use", value: "Mixed environments", icon: Truck },
    ],
    categories: [
      "Mining",
      "Material handling",
      "Ports",
      "Forestry",
      "Heavy equipment",
    ],
    blurb:
      "A parallel interpretation that keeps the bold diagonal movement without copying the original layout 1:1.",
  },
];

function useAutoSlide(
  total: number,
  delay: number = 2500,
): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, delay);

    return () => window.clearInterval(timer);
  }, [total, delay]);

  return [index, setIndex];
}

function MeshRibbon({
  className = "",
  gradient = "from-orange-500 via-amber-400 to-orange-200",
  delay = 0,
}: MeshRibbonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotate: 10, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-[999px] ${className}`}
    >
      <div className={`absolute inset-0 rounded-[999px] bg-gradient-to-b ${gradient}`} />
      <div
        className="absolute inset-[10%] rounded-[999px] opacity-70 mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.32) 0px, rgba(255,255,255,0.32) 2px, transparent 2px, transparent 7px)",
        }}
      />
      <div className="absolute inset-[16%] rounded-[999px] border border-white/20" />
      <div className="absolute inset-[24%] rounded-[999px] bg-black/20" />
      <div className="absolute inset-[26%] rounded-[999px] shadow-[inset_0_0_40px_rgba(255,255,255,0.12)]" />
    </motion.div>
  );
}

function RibbonScene({ accent, glow }: RibbonSceneProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute right-[10%] top-[12%] h-72 w-72 rounded-full blur-3xl ${glow}`}
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <MeshRibbon
        className="right-[-5%] top-[-8%] h-[150%] w-[18rem] rotate-[28deg]"
        gradient={accent}
        delay={0.05}
      />
      <MeshRibbon
        className="right-[6%] top-[-18%] h-[160%] w-[8.5rem] rotate-[28deg]"
        gradient="from-zinc-900 via-zinc-700 to-zinc-500"
        delay={0.12}
      />
      <MeshRibbon
        className="right-[16%] top-[-2%] h-[120%] w-[6rem] rotate-[28deg]"
        gradient={accent}
        delay={0.2}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.28),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.66)_35%,rgba(255,255,255,0.2)_55%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12),transparent_18%,transparent_80%,rgba(0,0,0,0.06))]" />
    </div>
  );
}

function LeftPanel({ slide, activeIndex, setIndex }: LeftPanelProps) {
  return (
    <div className="relative z-20 w-full max-w-xs rounded-[2rem] border border-white/45 bg-white/18 p-4 shadow-2xl backdrop-blur-xl">
      <div className={`mb-4 h-36 overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${slide.panel} p-3`}>
        <div className="flex h-full items-end rounded-[1.1rem] border border-black/5 bg-white/50 p-3 shadow-inner">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Preview</p>
            <p className="mt-2 max-w-[10rem] text-sm font-medium leading-snug text-zinc-800">
              Parallel product storytelling with strong motion identity.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {slide.categories.map((item: string, idx: number) => (
          <button
            key={item}
            className={`group flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-left text-sm transition ${
              idx === 0
                ? "border-white/60 bg-white/70 text-zinc-900 shadow-sm"
                : "border-white/20 bg-white/10 text-zinc-700 hover:bg-white/20"
            }`}
          >
            <span>{item}</span>
            <ChevronRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5" />
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {slides.map((item: Slide, idx: number) => (
          <button
            key={item.id}
            onClick={() => setIndex(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === activeIndex ? "w-8 bg-zinc-900" : "w-2.5 bg-zinc-900/25"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

function Specs({ stats }: SpecsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map(({ label, value, icon: Icon }: StatItem) => (
        <div
          key={label}
          className="rounded-[1.35rem] border border-white/45 bg-white/35 p-4 shadow-lg backdrop-blur-md"
        >
          <Icon className="mb-3 h-5 w-5 text-zinc-800" />
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default function ViteReactParallelShowcase() {
  const [activeIndex, setActiveIndex] = useAutoSlide(slides.length, 2600);
  const activeSlide = useMemo<Slide>(() => slides[activeIndex], [activeIndex]);

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(247,247,247,0.92)_32%,rgba(228,232,238,1)_100%)] text-zinc-900">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.65),transparent_35%,rgba(0,0,0,0.03)_100%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6 lg:px-10">
        <header className="relative z-30 flex items-center justify-between rounded-[2rem] border border-white/40 bg-black/75 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">relats</p>
              <p className="text-xs text-white/55">Parallel concept / Vite + React</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85" type="button">
              Full view
            </button>
            <button
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30"
              type="button"
            >
              Redeem your material
            </button>
          </div>
        </header>

        <main className="relative mt-4 flex flex-1 overflow-hidden rounded-[2.4rem] border border-white/40 bg-white/30 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <RibbonScene accent={activeSlide.accent} glow={activeSlide.glow} />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-20 grid w-full grid-cols-1 gap-8 p-5 md:p-8 xl:grid-cols-[320px_1fr] xl:gap-10 xl:p-10">
            <div className="flex items-start xl:items-center">
              <LeftPanel slide={activeSlide} activeIndex={activeIndex} setIndex={setActiveIndex} />
            </div>

            <div className="flex min-h-[65vh] flex-col justify-between gap-10 xl:pl-4">
              <div className="max-w-3xl pt-2 sm:pt-10">
                <motion.div
                  key={`${activeSlide.id}-copy`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-zinc-600 backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5" /> Material system showcase
                  </div>

                  <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl xl:text-7xl">
                    {activeSlide.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
                    {activeSlide.subtitle}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
                    {activeSlide.blurb}
                  </p>
                </motion.div>
              </div>

              <div className="grid items-end gap-6 xl:grid-cols-[1fr_auto]">
                <div className="max-w-3xl">
                  <Specs stats={activeSlide.stats} />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-xl shadow-black/20"
                  type="button"
                >
                  More about {activeSlide.title}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
