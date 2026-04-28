import { useEffect, useMemo, useState, type CSSProperties } from "react";

type ThemeMode = "light" | "dark";

type ThemeTokens = {
  pageText: string;
  pageBackground: string;
  topGlow: string;
  centerGlow: string;
  pageOverlay: string;
  ropeOne: string;
  ropeTwo: string;
  ropeThree: string;
  bottomFade: string;
  pillBorder: string;
  pillBackground: string;
  pillText: string;
  cardBorder: string;
  cardBackground: string;
  cardShadow: string;
  logoRingBorder: string;
  logoRingBackground: string;
  logoRingShadow: string;
  titleAccent: string;
  bodyText: string;
  featureBorder: string;
  featureBackground: string;
  featureText: string;
  ghostBorder: string;
  ghostBackground: string;
  ghostText: string;
  footerText: string;
  badgeText: string;
  titleTop: string;
  titleBottom: string;
  description: string;
};

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

type FeatureItem = {
  title: string;
  description: string;
};

const EDILSKY_TIMEZONE = "Europe/Rome";

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Edilizia su fune",
    description: "Interventi rapidi senza ponteggi",
  },
  {
    title: "Operatività H24",
    description: "Presenza continua e risposta veloce",
  },
  {
    title: "Roma e dintorni",
    description: "Specialisti in altezza sul territorio",
  },
];

const CSS_VARIABLES: CssVars = {
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

const ROME_HOUR_FORMATTER = new Intl.DateTimeFormat("it-IT", {
  hour: "2-digit",
  hour12: false,
  timeZone: EDILSKY_TIMEZONE,
});

function getRomeHour(date: Date = new Date()): number {
  return Number(ROME_HOUR_FORMATTER.format(date));
}

function getThemeByRomeTime(date: Date = new Date()): ThemeMode {
  const hour = getRomeHour(date);
  return hour >= 7 && hour < 16 ? "light" : "dark";
}

function getThemeTokens(themeMode: ThemeMode): ThemeTokens {
  const isLight = themeMode === "light";

  return {
    pageText: isLight ? "text-slate-950" : "text-white",
    pageBackground: isLight
      ? "linear-gradient(180deg, #6e9ee8 0%, #8aaeea 44%, #9db9ee 100%)"
      : "linear-gradient(180deg, #041427 0%, #0b2444 34%, #123a67 64%, #0a2d4f 100%)",
    topGlow: isLight
      ? "radial-gradient(circle at 50% 10%, rgba(255,255,255,0.24), transparent 28%)"
      : "radial-gradient(circle at 50% 8%, rgba(96,165,250,0.16), transparent 30%)",
    centerGlow: isLight
      ? "radial-gradient(circle at 50% 55%, rgba(59,130,246,0.18), transparent 38%)"
      : "radial-gradient(circle at 50% 54%, rgba(59,130,246,0.22), transparent 42%)",
    pageOverlay: isLight
      ? "linear-gradient(180deg, rgba(255,255,255,0.06), transparent 34%, rgba(0,0,0,0.08) 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 24%, rgba(0,0,0,0.32) 100%)",
    ropeOne: isLight ? "rgba(7, 37, 73, 0.9)" : "rgba(146, 197, 255, 0.42)",
    ropeTwo: isLight ? "rgba(16, 52, 98, 0.75)" : "rgba(96, 165, 250, 0.34)",
    ropeThree: isLight ? "rgba(7, 37, 73, 0.7)" : "rgba(147, 197, 253, 0.24)",
    bottomFade: isLight
      ? "linear-gradient(180deg, rgba(10,66,112,0), rgba(10,66,112,0.08) 30%, rgba(10,66,112,0.94) 100%)"
      : "linear-gradient(180deg, rgba(3,14,28,0), rgba(3,14,28,0.2) 30%, rgba(3,14,28,0.96) 100%)",
    pillBorder: isLight ? "rgba(13,87,162,0.24)" : "rgba(96,165,250,0.28)",
    pillBackground: isLight ? "rgba(255,255,255,0.12)" : "rgba(4,20,39,0.34)",
    pillText: isLight ? "text-white/90" : "text-blue-100/90",
    cardBorder: isLight ? "rgba(255,255,255,0.16)" : "rgba(96,165,250,0.14)",
    cardBackground: isLight
      ? "linear-gradient(180deg, rgba(88,90,91,0.58) 0%, rgba(71,71,71,0.66) 100%)"
      : "linear-gradient(180deg, rgba(4,20,39,0.72) 0%, rgba(8,28,52,0.82) 100%)",
    cardShadow: isLight
      ? "0 30px 80px rgba(0,0,0,0.18)"
      : "0 30px 90px rgba(0,0,0,0.34)",
    logoRingBorder: isLight ? "rgba(13,87,162,0.34)" : "rgba(96,165,250,0.34)",
    logoRingBackground: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.04)",
    logoRingShadow: isLight
      ? "0 0 40px rgba(59,130,246,0.22)"
      : "0 0 54px rgba(59,130,246,0.3)",
    titleAccent: "var(--edil-blue-light)",
    bodyText: isLight ? "text-white/84" : "text-blue-50/84",
    featureBorder: isLight ? "rgba(255,255,255,0.14)" : "rgba(96,165,250,0.14)",
    featureBackground: isLight ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
    featureText: isLight ? "text-white/76" : "text-blue-50/72",
    ghostBorder: isLight ? "rgba(255,255,255,0.18)" : "rgba(96,165,250,0.16)",
    ghostBackground: isLight ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
    ghostText: isLight ? "text-white/92" : "text-blue-50/92",
    footerText: isLight ? "text-white/88" : "text-blue-100/82",
    badgeText: isLight ? "Edil Sky · Sito in arrivo" : "Edil Sky · Night Mode attiva",
    titleTop: isLight ? "Stiamo preparando" : "Stiamo salendo",
    titleBottom: isLight ? "qualcosa di verticale" : "verso il nuovo sito",
    description: isLight
      ? "Il nuovo spazio digitale di Edil Sky è in lavorazione . Interventi su fune , manutenzione in quota , messa in sicurezza e pronto intervento H24 stanno per arrivare con una presenza online più forte , più chiara , più nostra ."
      : "Edil Sky continua a lavorare anche dopo il tramonto . Il nuovo sito prende forma con una presenza più solida , più distintiva e più coerente con il nostro modo di stare in quota .",
  };
}

export default function EdilSkyComingSoonPage() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getThemeByRomeTime);

  useEffect(() => {
    const syncTheme = (): void => {
      setThemeMode(getThemeByRomeTime());
    };

    syncTheme();

    const intervalId = window.setInterval(syncTheme, 60_000);

    return (): void => {
      window.clearInterval(intervalId);
    };
  }, []);

  const theme = useMemo<ThemeTokens>(() => getThemeTokens(themeMode), [themeMode]);

  return (
    <div
      className={`min-h-screen overflow-hidden ${theme.pageText}`}
      style={{
        ...CSS_VARIABLES,
        background: theme.pageBackground,
      }}
    >
      <div className="relative min-h-screen">
        <div className="absolute inset-0" style={{ background: theme.topGlow }} />
        <div className="absolute inset-0" style={{ background: theme.centerGlow }} />
        <div className="absolute inset-0" style={{ background: theme.pageOverlay }} />

        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div
            className="absolute -left-[8%] top-[-4%] h-0.5 w-[44%] rotate-38"
            style={{
              backgroundColor: theme.ropeOne,
              boxShadow: `0 0 18px ${theme.ropeOne}`,
            }}
          />
          <div
            className="absolute -left-[4%] top-[8%] h-0.5 w-[48%] rotate-28"
            style={{
              backgroundColor: theme.ropeTwo,
              boxShadow: `0 0 18px ${theme.ropeTwo}`,
            }}
          />
          <div
            className="absolute right-[-10%] top-[10%] h-0.5 w-[52%] rotate-[-42deg]"
            style={{
              backgroundColor: theme.ropeTwo,
              boxShadow: `0 0 18px ${theme.ropeTwo}`,
            }}
          />
          <div
            className="absolute right-[-6%] top-[22%] h-0.5 w-[46%] rotate-[-28deg]"
            style={{
              backgroundColor: theme.ropeThree,
              boxShadow: `0 0 18px ${theme.ropeThree}`,
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
          style={{ background: theme.bottomFade }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-10 text-center">
          <div
            className={`mb-6 inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] backdrop-blur-md md:text-sm ${theme.pillText}`}
            style={{
              borderColor: theme.pillBorder,
              backgroundColor: theme.pillBackground,
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            {theme.badgeText}
          </div>

          <div
            className="w-full max-w-4xl rounded-[2.4rem] border px-6 py-10 backdrop-blur-xl md:px-12 md:py-14"
            style={{
              borderColor: theme.cardBorder,
              background: theme.cardBackground,
              boxShadow: theme.cardShadow,
            }}
          >
            <div
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border md:h-28 md:w-28"
              style={{
                borderColor: theme.logoRingBorder,
                background: theme.logoRingBackground,
                boxShadow: theme.logoRingShadow,
              }}
            >
              <div className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                <span className={themeMode === "light" ? "text-white" : "text-blue-50"}>E</span>
                <span style={{ color: theme.titleAccent }}>S</span>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-[0.04em] md:text-6xl lg:text-7xl">
                {theme.titleTop}
                <span className="mt-2 block" style={{ color: theme.titleAccent }}>
                  {theme.titleBottom}
                </span>
              </h1>

              <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-xl ${theme.bodyText}`}>
                {theme.description}
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {FEATURE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border px-5 py-5 text-left backdrop-blur-md"
                  style={{
                    borderColor: theme.featureBorder,
                    backgroundColor: theme.featureBackground,
                  }}
                >
                  <div
                    className="text-sm font-extrabold uppercase tracking-[0.16em]"
                    style={{ color: theme.titleAccent }}
                  >
                    {item.title}
                  </div>
                  <div className={`mt-2 text-sm leading-relaxed md:text-[15px] ${theme.featureText}`}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
              <a
                href="tel:+39800909224"
                className="inline-flex min-w-55 items-center justify-center rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-[0.08em] text-white transition duration-200 hover:-translate-y-px"
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
                className={`inline-flex min-w-55 items-center justify-center rounded-2xl border px-6 py-4 text-base font-bold uppercase tracking-[0.08em] transition duration-200 hover:-translate-y-px ${theme.ghostText}`}
                style={{
                  borderColor: theme.ghostBorder,
                  backgroundColor: theme.ghostBackground,
                }}
              >
                info@edilsky.com
              </a>
            </div>
          </div>

          <div className={`mt-10 text-center text-sm font-semibold tracking-[0.04em] ${theme.footerText}`}>
            © 2026 Edil Sky · Specialisti in altezza · TZ Roma
          </div>
        </div>
      </div>
    </div>
  );
}
