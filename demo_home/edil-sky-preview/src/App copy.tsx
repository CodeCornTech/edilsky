import React, { useEffect, useMemo, useState } from "react";

/**
 * Sketch Viewer for Vite + React
 *
 * Uso:
 * 1. Metti tutti gli sketch in src/sketches/
 * 2. Ogni file deve fare export default
 * 3. Questo file può stare in src/App.tsx oppure essere importato da App.tsx
 */

type SketchModule = {
  default?: React.ComponentType<any>;
};

const modules = import.meta.glob("./sketches/*.{tsx,jsx}", {
  eager: true,
}) as Record<string, SketchModule>;

const sketches = Object.entries(modules)
  .map(([path, mod]) => {
    const name = path
      .split("/")
      .pop()
      ?.replace(/\.(tsx|jsx)$/i, "") ?? path;

    return {
      path,
      name,
      Component: mod.default ?? null,
    };
  })
  .filter((item) => item.Component)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function SketchViewerApp() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [intervalMs, setIntervalMs] = useState(5000);

  const current = useMemo(() => sketches[index] ?? null, [index]);

  useEffect(() => {
    if (!autoPlay || sketches.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % sketches.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [autoPlay, intervalMs]);

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + sketches.length) % sketches.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % sketches.length);
  };

  if (sketches.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h1 className="text-3xl font-black uppercase">Nessuno sketch trovato</h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            Crea una cartella <code className="text-white">src/sketches/</code> e mettici dentro file
            <code className="text-white"> .tsx </code> o <code className="text-white"> .jsx </code>
            con <code className="text-white">export default</code>.
          </p>
        </div>
      </div>
    );
  }

  const ActiveComponent = current?.Component ?? null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-100vw flex-wrap items-center gap-3 px-4 py-3">
          <div className="mr-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/45">Sketch</div>
            <div className="text-sm font-bold">{current?.name}</div>
          </div>

          <button
            onClick={goPrev}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            Prev
          </button>

          <button
            onClick={goNext}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            Next
          </button>

          <button
            onClick={() => setAutoPlay((v) => !v)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            {autoPlay ? "Stop loop" : "Loop all"}
          </button>

          <label className="ml-1 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <span className="text-white/65">ms</span>
            <input
              type="number"
              min={1000}
              step={500}
              value={intervalMs}
              onChange={(e) => setIntervalMs(Number(e.target.value) || 5000)}
              className="w-24 bg-transparent outline-none"
            />
          </label>

          <div className="min-w-0 flex-1" />

          <div className="max-w-full overflow-x-auto whitespace-nowrap rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
            {sketches.map((item, i) => (
              <button
                key={item.path}
                onClick={() => setIndex(i)}
                className={`mx-1 rounded-xl px-3 py-2 text-sm transition ${
                  i === index ? "bg-white text-black" : "bg-transparent text-white/75 hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    </div>
  );
}
