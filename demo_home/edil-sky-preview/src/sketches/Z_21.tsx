import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
const DETAIL_VIDEO_SRC = "/canvas_rope.mp4";
const LOGO_SRC = "/favicon.svg";
const DISPLAY_FONT =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif';

function HeroOne() {
  return (
    <section className="relative isolate h-screen min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#061018]">
      <motion.video
        initial={{ scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 0.92 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(148,191,221,0.28),transparent_24%),linear-gradient(90deg,rgba(6,16,24,0.96)_0%,rgba(6,16,24,0.68)_46%,rgba(6,16,24,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,24,0.12)_0%,rgba(6,16,24,0.16)_40%,rgba(6,16,24,0.9)_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(155,186,209,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(155,186,209,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative mx-auto grid h-full min-h-[100svh] max-w-7xl grid-rows-[auto_1fr_auto] px-6 pb-8 pt-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 backdrop-blur-md">
              <img src={LOGO_SRC} alt="EdilSky logo" className="h-8 w-8" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.42em] text-[#aac8de]">
                EDILSKY
              </div>
              <div className="mt-1 text-sm text-white/78">
                Specialisti in altezza
              </div>
            </div>
          </div>

          <a
            href="tel:800909224"
            className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-black/22 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white"
          >
            <PhoneCall className="h-4 w-4" />
            800 90 92 24
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a2c8e1]/24 bg-[#94bddb]/12 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d6e6f1]">
              Variante 1 • Cinematica
            </div>

            <h1
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-7 max-w-5xl text-[4rem] leading-[0.82] text-white sm:text-[5.2rem] lg:text-[7rem]"
            >
              Arriviamo dove
              <span className="block text-[#d6e7f2]">gli altri si fermano.</span>
              Senza ponteggi. Senza attrito.
            </h1>

            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#d4e0e8] md:text-[19px]">
              Quattro generazioni di esperienza edile, oggi trasformate in un
              metodo di lavoro rapido, pulito e verticale. Interventi su fune
              con meno costi, meno disagi e più controllo operativo.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#e3edf4] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#061018]"
              >
                Richiedi sopralluogo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/7 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white"
              >
                Guarda i servizi
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/6 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <video
                className="h-[25rem] w-full object-cover md:h-[29rem]"
                src={DETAIL_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,24,0.04)_0%,rgba(6,16,24,0.7)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.34em] text-[#a9c7dc]">
                  Metodo EdilSky
                </div>
                <div className="mt-3 text-[1.85rem] leading-tight text-white">
                  Più accesso. Più velocità.
                  <span className="block text-[#dce9f2]">
                    Meno struttura inutile.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["4 generazioni", "H24 / 7 giorni", "Operatori certificati"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-black/22 px-4 py-4 text-sm text-[#e2ebf1]"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
          {[
            "Riduciamo costi e tempi rispetto ai sistemi tradizionali.",
            "Interveniamo in modo rapido, sicuro ed efficiente.",
            "Sopralluoghi e preventivi chiari, senza perdere settimane.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-white/10 bg-black/18 p-4 text-sm leading-7 text-[#d6e0e8]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroTwo() {
  return (
    <section className="relative isolate h-screen min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#0b1016]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0b1016_0%,#0f1b26_52%,#172734_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[46%] border-l border-white/8 bg-[radial-gradient(circle_at_top,rgba(196,220,236,0.12),transparent_36%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(203,221,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(203,221,235,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl flex-col px-6 pb-8 pt-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-4">
            <img src={LOGO_SRC} alt="EdilSky logo" className="h-11 w-11" />
            <div className="text-[11px] uppercase tracking-[0.44em] text-[#b5cadb]">
              EDILSKY
            </div>
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.26em] text-white/72">
            Variante 2 • Editoriale luxury-tech
          </div>
        </div>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
          <div className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.38em] text-[#90aabd]">
              Impresa romana • Edilizia su fune
            </div>

            <h1
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-8 max-w-5xl text-[4.2rem] leading-[0.84] text-white sm:text-[5.3rem] lg:text-[7.1rem]"
            >
              Alta quota.
              <span className="block text-[#dfeaf1]">Bassa frizione.</span>
              Risultato netto.
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#b9cad6] md:text-[19px]">
              EdilSky porta in quota una cultura di lavoro precisa, trasparente
              e contemporanea. Niente ponteggi invasivi, niente tempi gonfiati:
              solo esecuzione rapida, sicurezza e qualità.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b1016]"
              >
                Prenota sopralluogo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:800909224"
                className="inline-flex items-center gap-3 rounded-full border border-white/14 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white"
              >
                <PhoneCall className="h-4 w-4" />
                800 90 92 24
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Approccio", "Quattro generazioni di esperienza edile, aggiornate a un metodo verticale e contemporaneo."],
              ["Vantaggio", "Meno costi, meno disagi e tempi di esecuzione più veloci rispetto alle strutture tradizionali."],
              ["Garanzia", "Operatori qualificati, procedure rigorose e massimo rispetto delle normative vigenti."],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
              >
                <div className="text-[10px] uppercase tracking-[0.34em] text-[#98b3c6]">
                  {label}
                </div>
                <p className="mt-4 text-[15px] leading-8 text-[#dde8ef]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
          {["Facciate", "Messe in sicurezza", "Impermeabilizzazioni", "Spazi confinati"].map(
            (item) => (
              <div
                key={item}
                className="text-sm uppercase tracking-[0.28em] text-white/74"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function HeroThree() {
  return (
    <section className="relative isolate h-screen min-h-[100svh] overflow-hidden bg-[#060b11]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-28 mix-blend-screen"
        src={DETAIL_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,17,0.45)_0%,rgba(6,11,17,0.2)_28%,rgba(6,11,17,0.95)_100%)]" />
      <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-[6%] top-[16%] h-24 w-[1px] bg-white/50" />
      <div className="absolute right-[8%] top-[18%] h-24 w-24 rounded-full border border-white/16" />

      <div className="relative mx-auto flex h-full min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-8 pt-6 md:px-10 lg:px-12">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={LOGO_SRC} alt="EdilSky logo" className="h-10 w-10" />
            <div className="text-[11px] uppercase tracking-[0.46em] text-white/82">
              EDILSKY
            </div>
          </div>
          <div className="max-w-[14rem] text-right text-[11px] uppercase tracking-[0.28em] text-white/60">
            Variante 3
            <span className="mt-2 block text-white/84">
              Brutale premium
            </span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="max-w-5xl">
            <div className="text-[11px] uppercase tracking-[0.36em] text-white/56">
              Nessun ponteggio. Nessun ingombro. Nessuna scenografia finta.
            </div>
            <h1 className="mt-7 max-w-6xl text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.05em] text-white sm:text-[5.4rem] lg:text-[8rem]">
              ROMPI IL
              <span className="block text-[#bdd5e5]">PROBLEMA</span>
              PRIMA CHE
              <span className="block">TI ROMPA IL PALAZZO</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-white/76 md:text-[19px]">
              EdilSky interviene in quota con operatori su fune qualificati,
              tempi rapidi e costi più contenuti. Messa in sicurezza,
              ripristini, facciate, coperture e lavori specializzati senza la
              lentezza dell'edilizia statica.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-between rounded-[1.4rem] border border-white/12 bg-white px-5 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#060b11]"
            >
              Sopralluogo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:800909224"
              className="inline-flex items-center justify-between rounded-[1.4rem] border border-white/12 px-5 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-white"
            >
              Chiama ora
              <PhoneCall className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
          {[
            "Interventi rapidi su edifici difficili da raggiungere.",
            "Operatori certificati e procedure di sicurezza rigorose.",
            "Preventivi gratuiti e risposta operativa H24 / 7 giorni su 7.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.15rem] border border-white/10 bg-white/4 p-4 text-sm leading-7 text-white/78"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroVariantsShowcase() {
  return (
    <main className="bg-[#061018] text-white">
      <HeroOne />
      <HeroTwo />
      <HeroThree />
    </main>
  );
}
