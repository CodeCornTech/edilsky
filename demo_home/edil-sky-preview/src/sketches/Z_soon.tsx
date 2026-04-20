import type { CSSProperties } from "react";

type CssVarName =
  | "--edil-blue-main"
  | "--edil-gray-main"
  | "--edil-blue-light"
  | "--edil-gray-dark"
  | "--edil-blue-dark"
  | "--edil-blue-main-rgb"
  | "--edil-blue-light-rgb"
  | "--edil-gray-main-rgb"
  | "--edil-gray-dark-rgb";

type CssVars = CSSProperties & Record<CssVarName, string>;

const rootStyle: CssVars = {
  background: "linear-gradient(180deg, #6e9ee8 0%, #8aaeea 44%, #9db9ee 100%)",
  "--edil-blue-main": "#0d57a2",
  "--edil-gray-main": "#585a5b",
  "--edil-blue-light": "#3b82f6",
  "--edil-gray-dark": "#474747",
  "--edil-blue-dark": "#0a4270",
  "--edil-blue-main-rgb": "13, 87, 162",
  "--edil-blue-light-rgb": "59, 130, 246",
  "--edil-gray-main-rgb": "88, 90, 91",
  "--edil-gray-dark-rgb": "71, 71, 71",
};

export default function EdilSkyComingSoonPage() {
  return (
    <div className="min-h-screen overflow-hidden text-white" style={rootStyle}>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.24),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(59,130,246,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_34%,rgba(0,0,0,0.08)_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute -left-[8%] top-[-4%] h-[2px] w-[44%] rotate-[38deg] bg-[#072549]/90 shadow-[0_0_18px_rgba(7,37,73,0.28)]" />
          <div className="absolute -left-[4%] top-[8%] h-[2px] w-[48%] rotate-[28deg] bg-[#103462]/75 shadow-[0_0_18px_rgba(7,37,73,0.22)]" />
          <div className="absolute right-[-10%] top-[10%] h-[2px] w-[52%] rotate-[-42deg] bg-[#103462]/90 shadow-[0_0_18px_rgba(7,37,73,0.22)]" />
          <div className="absolute right-[-6%] top-[22%] h-[2px] w-[46%] rotate-[-28deg] bg-[#072549]/70 shadow-[0_0_18px_rgba(7,37,73,0.2)]" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(10,66,112,0),rgba(10,66,112,0.08)_30%,rgba(10,66,112,0.94)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-10 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-white/90 backdrop-blur-md md:text-sm"
            style={{
              borderColor: "rgba(var(--edil-blue-main-rgb), 0.24)",
              backgroundColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            Edil Sky · Sito in arrivo
          </div>

          <div
            className="w-full max-w-4xl rounded-[2.4rem] border px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-12 md:py-14"
            style={{
              borderColor: "rgba(255,255,255,0.16)",
              background:
                "linear-gradient(180deg, rgba(88,90,91,0.58) 0%, rgba(71,71,71,0.66) 100%)",
            }}
          >
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border bg-black/10 shadow-[0_0_40px_rgba(59,130,246,0.22)] md:h-28 md:w-28"
              style={{
                borderColor: "rgba(var(--edil-blue-main-rgb), 0.34)",
              }}
            >
              <div className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                <span className="text-white">E</span>
                <span style={{ color: "var(--edil-blue-light)" }}>S</span>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-[0.04em] md:text-6xl lg:text-7xl">
                Stiamo preparando
                <span className="mt-2 block" style={{ color: "var(--edil-blue-light)" }}>
                  qualcosa di verticale
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/84 md:text-xl">
                Il nuovo spazio digitale di Edil Sky è in lavorazione .
                Interventi su fune , manutenzione in quota , messa in sicurezza e pronto intervento H24 stanno per arrivare con una presenza online più forte , più chiara , più nostra .
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {[
                ["Edilizia su fune", "Interventi rapidi senza ponteggi"],
                ["Operatività H24", "Presenza continua e risposta veloce"],
                ["Roma e dintorni", "Specialisti in altezza sul territorio"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border px-5 py-5 text-left backdrop-blur-md"
                  style={{
                    borderColor: "rgba(255,255,255,0.14)",
                    backgroundColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="text-sm font-extrabold uppercase tracking-[0.16em]" style={{ color: "var(--edil-blue-light)" }}>
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/76 md:text-[15px]">
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="tel:+390000000000"
                className="inline-flex min-w-[220px] items-center justify-center rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-[0.08em] text-white transition duration-200 hover:-translate-y-[1px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--edil-blue-main) 0%, var(--edil-blue-dark) 100%)",
                  boxShadow: "0 16px 34px rgba(var(--edil-blue-main-rgb), 0.28)",
                }}
              >
                Contattaci
              </a>

              <a
                href="mailto:info@edilsky.com"
                className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border px-6 py-4 text-base font-bold uppercase tracking-[0.08em] text-white/92 transition duration-200 hover:-translate-y-[1px] hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              >
                info@edilsky.com
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-sm font-semibold tracking-[0.04em] text-white/88">
            © 2026 Edil Sky · Specialisti in altezza
          </div>
        </div>
      </div>
    </div>
  );
}
