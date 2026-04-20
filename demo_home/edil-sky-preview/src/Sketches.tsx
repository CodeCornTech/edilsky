import React, { useEffect, useMemo, useState } from "react";

/**
 * Sketch Viewer for Vite + React
 *
 * Uso:
 * 1. Metti tutti gli sketch in src/sketches/
 * 2. Ogni file deve fare export default
 * 3. Questo file può stare in src/App.tsx oppure essere importato da App.tsx
 */


// type SketchModule = {
//   default?: React.ComponentType<any>;
// };
// type SketchModule = {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   default?: React.ComponentType<any>;
// };

type SketchModule = {
  default?: React.ComponentType<unknown>;
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
  
  // Nuovo stato per gestire la visibilità dell'UI
  const [showUI, setShowUI] = useState(true);

  const current = useMemo(() => sketches[index] ?? null, [index]);

  useEffect(() => {
    if (!autoPlay || sketches.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % sketches.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [autoPlay, intervalMs]);

  const goPrev = () => setIndex((prev) => (prev - 1 + sketches.length) % sketches.length);
  const goNext = () => setIndex((prev) => (prev + 1) % sketches.length);

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
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden flex flex-col">
      
      {/* 1. AREA DELLO SKETCH (Sempre in background) */}
      <div className="flex-1 w-full h-full relative z-0">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>

      {/* 2. PULSANTE TOGGLE FLUTTUANTE (Visibile sempre) */}
      <button
        onClick={() => setShowUI((v) => !v)}
        className="fixed bottom-6 right-6 z-[60] flex items-center justify-center rounded-full border border-white/20 bg-black/70 px-5 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
      >
        {showUI ? "Nascondi UI" : "⚙️ Menu"}
      </button>

      {/* 3. INTERFACCIA UTENTE (Modal / Pannello) */}
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center pointer-events-none transition-opacity duration-300 sm:items-start sm:p-6 ${
          showUI ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Sfondo scuro semitrasparente (cliccabile per chiudere su mobile) */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto sm:hidden transition-opacity duration-300 ${showUI ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setShowUI(false)}
        />

        {/* Contenitore Principale (Bottom Sheet su Mobile, Floating Panel su Desktop) */}
        <div 
          className={`relative w-full max-h-[85vh] sm:w-auto sm:max-w-4xl bg-neutral-900/90 sm:bg-black/70 sm:backdrop-blur-2xl border-t sm:border border-white/10 sm:rounded-3xl pointer-events-auto flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out ${
            showUI ? "translate-y-0" : "translate-y-12 sm:-translate-y-4"
          }`}
        >
          
          {/* HEADER: Controlli e Info */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            
            {/* Info Sketch Corrente */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/45">In riproduzione</span>
              <h2 className="text-lg font-bold truncate max-w-[200px] sm:max-w-[300px]">{current?.name}</h2>
            </div>

            {/* Pulsanti di Controllo */}
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={goPrev} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">
                Prev
              </button>
              <button onClick={goNext} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">
                Next
              </button>
              <button onClick={() => setAutoPlay((v) => !v)} className={`rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold transition-colors ${autoPlay ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10'}`}>
                {autoPlay ? "Stop loop" : "Loop all"}
              </button>
              
              <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                <span className="text-white/65">ms</span>
                <input
                  type="number"
                  min={1000}
                  step={500}
                  value={intervalMs}
                  onChange={(e) => setIntervalMs(Number(e.target.value) || 5000)}
                  className="w-16 bg-transparent outline-none text-center font-mono"
                />
              </label>
            </div>
          </div>

          {/* LISTA SKETCH: Griglia scrollabile (La soluzione definitiva al tuo problema) */}
          <div className="overflow-y-auto p-4 flex-1">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sketches.map((item, i) => (
                <button
                  key={item.path}
                  onClick={() => setIndex(i)}
                  className={`flex w-full items-center justify-start rounded-xl px-4 py-3 text-left text-sm transition-all truncate ${
                    i === index 
                    ? "bg-white text-black font-semibold shadow-md" 
                    : "bg-white/5 text-white/75 hover:bg-white/15 hover:text-white"
                  }`}
                  title={item.name} // Mostra il nome completo al passaggio del mouse
                >
                  <span className="truncate w-full">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}