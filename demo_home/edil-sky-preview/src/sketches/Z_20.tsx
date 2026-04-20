import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  HardHat,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
const DETAIL_VIDEO_SRC = "/canvas_rope.mp4";
const LOGO_SRC = "/favicon.svg";
const DISPLAY_FONT =
  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif';

const valuePillars = [
  {
    title: "Costi più contenuti",
    text: "La tecnica su fune elimina ponteggi e piattaforme, abbattendo costi, ingombri e tempi morti.",
    icon: Building2,
  },
  {
    title: "Interventi rapidi",
    text: "Gli operatori entrano in azione subito, senza le attese dei sistemi tradizionali.",
    icon: Clock3,
  },
  {
    title: "Sicurezza garantita",
    text: "Procedure rigorose, attrezzature certificate e pieno rispetto delle normative vigenti.",
    icon: ShieldCheck,
  },
  {
    title: "Professionalità reale",
    text: "Operatori qualificati e costantemente aggiornati per lavorazioni complesse e contesti sensibili.",
    icon: HardHat,
  },
];

const classicServices = [
  "Ristrutturazione di facciate",
  "Messe in sicurezza generali e d'emergenza",
  "Ripristino intonaco, frontalini e cornicioni",
  "Rivestimenti esterni in ceramica o pietra",
  "Canne fumarie, gronde e pluviali",
  "Impermeabilizzazioni di coperture piane e inclinate",
  "Tinteggiature e installazione linee vita",
  "Dissuasori per volatili e potature controllate",
];

const specialistServices = [
  "Spazi confinati: pulizia e manutenzione di cisterne, acquedotti e ambienti tecnici",
  "Termografia per rilevare infiltrazioni e criticità nascoste",
  "Droni, videocamere e GoPro per verifiche e documentazione",
  "Pratiche edilizie, OSP, consulenze tecniche e computi metrici",
];

const workflowSteps = [
  {
    step: "01",
    title: "Sopralluogo rapido",
    text: "Analizziamo il contesto, leggiamo le criticità e impostiamo la soluzione più efficace.",
  },
  {
    step: "02",
    title: "Piano operativo chiaro",
    text: "Definiamo tempi, approccio tecnico e impatto sull'edificio con un perimetro preciso.",
  },
  {
    step: "03",
    title: "Esecuzione in quota",
    text: "Interveniamo con operatori specializzati su fune, riducendo costi, ingombri e attriti.",
  },
  {
    step: "04",
    title: "Consegna trasparente",
    text: "Chiudiamo il lavoro in modo ordinato, documentato e coerente con quanto promesso.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#a5c3d9]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2
        style={{ fontFamily: DISPLAY_FONT }}
        className="mt-6 text-4xl leading-[0.94] text-white md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#aebfcc] md:text-lg">
        {text}
      </p>
    </div>
  );
}

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 1.08]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "8%"]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#061018] text-white">
      <section className="relative isolate h-screen min-h-[100svh] overflow-hidden border-b border-white/8">
        <motion.video
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(140,186,219,0.28),transparent_28%),linear-gradient(90deg,rgba(6,16,24,0.9)_0%,rgba(6,16,24,0.7)_40%,rgba(6,16,24,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,24,0.18)_0%,rgba(6,16,24,0.1)_38%,rgba(6,16,24,0.88)_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(149,181,204,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(149,181,204,0.08)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="absolute right-[-5rem] top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            src={LOGO_SRC}
            alt=""
            className="h-[26rem] w-[26rem] rotate-[-8deg] opacity-[0.14] brightness-[1.2] saturate-0"
          />
        </div>

        <div className="relative mx-auto grid h-full min-h-[100svh] w-full max-w-7xl grid-rows-[auto_1fr_auto] px-6 pb-8 pt-6 md:px-10 lg:px-12">
          <header className="flex items-center justify-between gap-5">
            <a href="#top" className="inline-flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
                <img src={LOGO_SRC} alt="EdilSky logo" className="h-8 w-8" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.42em] text-[#a8c4d9]">
                  EDILSKY
                </div>
                <div className="mt-1 text-sm text-white/78">
                  Specialisti in altezza
                </div>
              </div>
            </a>

            <a
              href="tel:800909224"
              className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-black/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12"
            >
              <PhoneCall className="h-4 w-4" />
              800 90 92 24
            </a>
          </header>

          <div className="grid items-center gap-10 py-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#9bc0dc]/22 bg-[#89b7d5]/12 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d1e3f0]">
                Roma • Operativi H24 / 7 giorni su 7
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: DISPLAY_FONT }}
                className="mt-7 max-w-5xl text-[3.9rem] leading-[0.84] text-white sm:text-[5.1rem] lg:text-[6.8rem]"
              >
                Lavori in quota
                <span className="block text-[#cfe3f0]">
                  con impatto visivo forte,
                </span>
                disciplina operativa vera.
              </motion.h1>

              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#d4e0e8] md:text-[19px]">
                EdilSky unisce quattro generazioni di esperienza edile a un
                metodo contemporaneo: interventi su fune rapidi, sicuri ed
                efficienti, con meno costi, meno disagi e zero impianto
                statico inutile.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contatti"
                  className="inline-flex items-center gap-3 rounded-full bg-[#e3edf4] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#061018] transition hover:bg-white"
                >
                  Richiedi sopralluogo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servizi"
                  className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/7 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12"
                >
                  Guarda i servizi
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95, delay: 0.18 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(5,13,20,0.4),rgba(5,13,20,0.16))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(150,188,214,0.16),transparent_42%)]" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <video
                  className="h-[25rem] w-full object-cover md:h-[29rem]"
                  src={DETAIL_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,24,0.05)_0%,rgba(6,16,24,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.34em] text-[#a8c7dc]">
                    Metodo EdilSky
                  </div>
                  <div className="mt-3 text-[1.8rem] leading-tight text-white">
                    Niente ponteggi ingombranti.
                    <span className="block text-[#d9e8f2]">
                      Più accesso, più velocità, più pulizia.
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  "4 generazioni",
                  "Preventivi gratuiti",
                  "Operatori certificati",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-white/10 bg-black/22 px-4 py-4 text-sm text-[#e2ebf1]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
            {[
              {
                label: "Promessa",
                text: "Interventi rapidi, sicuri ed efficienti con un impatto minimo sull'edificio e sui suoi occupanti.",
              },
              {
                label: "Vantaggio",
                text: "La tecnica su fune riduce costi, tempi di allestimento e attrito operativo rispetto ai sistemi tradizionali.",
              },
              {
                label: "Risposta",
                text: "Sopralluoghi e preventivi chiari, senza perdere settimane in attese inutili o soluzioni sbagliate.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.3rem] border border-white/10 bg-black/18 p-4"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#9fc0d7]">
                  {item.label}
                </div>
                <p className="mt-3 text-sm leading-7 text-[#d6e0e8]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#08121a] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Perché EdilSky"
            title="Tradizione edile solida, esecuzione contemporanea."
            text="EdilSky nasce da quattro generazioni nel settore edile e ha scelto di evolvere quell'esperienza con un approccio più rapido, più pulito e più adatto ai contesti complessi: i lavori su fune."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valuePillars.map(({ title, text, icon: Icon }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition hover:-translate-y-1 hover:border-[#8eb6d4]/28"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[#d9e7f1]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-[1.65rem] leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-8 text-[#aebfcc]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#061018] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8">
            <SectionHeading
              eyebrow="Chi siamo"
              title="Una realtà affidabile, trasparente e costruita per crescere."
              text="Conosciamo questo settore a fondo e lo affrontiamo con una promessa semplice: rapporto chiaro dall'inizio alla fine, attenzione ai dettagli e standard elevati sostenuti da formazione continua."
            />

            <div className="mt-10 space-y-5 text-[15px] leading-8 text-[#b9c8d2]">
              <p>
                I lavori su fune riducono costi, velocizzano l'esecuzione ed
                evitano ponteggi invasivi che possono restare sulle facciate per
                mesi, con meno disagi per chi vive o lavora nell'edificio.
              </p>
              <p>
                Ci affidiamo a operatori qualificati e costantemente aggiornati,
                con certificazioni specifiche conseguite presso scuole
                riconosciute e accreditate dalla Regione Lazio.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 md:p-7"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#9fc0d7]">
                  Step {item.step}
                </div>
                <div className="mt-3 text-[1.9rem] leading-tight text-white">
                  {item.title}
                </div>
                <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#b2c3cf]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servizi"
        className="border-b border-white/8 bg-[#08121a] px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servizi"
            title="Interventi classici e lavorazioni specializzate, con la stessa precisione."
            text="EdilSky offre un servizio completo a 360 gradi: dai lavori più comuni a quelli ad alta complessità tecnica, sempre con organizzazione rigorosa, tempi rapidi e massima cura dell'esecuzione."
          />

          <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 md:p-8">
              <div className="flex items-center gap-3 text-[#dce8f0]">
                <BadgeCheck className="h-5 w-5 text-[#9abfd9]" />
                <h3 className="text-[1.85rem] leading-tight text-white">
                  Interventi classici
                </h3>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {classicServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.2rem] border border-white/10 bg-black/16 p-4 text-[15px] leading-7 text-[#c6d3dc]"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 md:p-8">
              <div className="flex items-center gap-3 text-[#dce8f0]">
                <BadgeCheck className="h-5 w-5 text-[#9abfd9]" />
                <h3 className="text-[1.85rem] leading-tight text-white">
                  Interventi specializzati
                </h3>
              </div>
              <div className="mt-8 space-y-4">
                {specialistServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.25rem] border border-white/10 bg-black/16 p-5 text-[15px] leading-7 text-[#c6d3dc]"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/6 p-5 text-[15px] leading-7 text-[#e2ebf1]">
                Offriamo anche sopralluoghi e preventivi gratuiti, chiari e
                dettagliati, per permettere al cliente di conoscere fin da
                subito costi, tempi e modalità dell'intervento.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#061018] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#9fc0d7]">
              Pronto intervento
            </div>
            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-5 text-4xl leading-[0.94] text-white md:text-5xl"
            >
              Operativi H24, 7 giorni su 7, per urgenze e messe in sicurezza.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#b7c5cf] md:text-lg">
              Se serve intervenire rapidamente, EdilSky è pronta ad assistere
              con professionalità e tempi di risposta rapidi, valutando insieme
              la soluzione più adatta al contesto.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#9fc0d7]">
              Ci scelgono perché
            </div>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#d7e3ea]">
              <div className="rounded-[1.1rem] border border-white/10 bg-black/16 p-4">
                Interventi rapidi anche in situazioni difficili da raggiungere
                con i metodi tradizionali.
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-black/16 p-4">
                Nessun costo e nessun ritardo legato al montaggio di ponteggi
                invasivi.
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-black/16 p-4">
                Preventivi trasparenti e senza impegno, costruiti sul caso
                reale e non su formule standard.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="relative overflow-hidden bg-[#dce8f0] px-6 py-24 text-[#061018] md:px-10 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,16,24,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#50738d]">
              Contatti
            </div>
            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-5 max-w-4xl text-4xl leading-[0.94] md:text-6xl"
            >
              Se devi intervenire in quota, fallo con una squadra che sa già
              dove mettere le mani.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#284154]">
              Siamo disponibili per informazioni, sopralluoghi e preventivi.
              Valutiamo ogni richiesta con attenzione e rispondiamo con una
              proposta chiara, concreta e veloce.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#6e93af]/22 bg-white/66 p-8 shadow-[0_24px_80px_rgba(7,16,25,0.12)] backdrop-blur-sm">
            <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#5a7f9b]">
              Contatto diretto
            </div>
            <a
              href="tel:800909224"
              className="mt-5 block text-3xl font-semibold text-[#061018]"
            >
              800 90 92 24
            </a>
            <p className="mt-4 text-[15px] leading-8 text-[#2f485d]">
              Numero verde attivo per richieste, urgenze, sopralluoghi e
              preventivi senza impegno.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:800909224"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#061018] px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#102130]"
              >
                Chiama ora
                <PhoneCall className="h-4 w-4" />
              </a>
              <a
                href="#servizi"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#061018]/10 px-5 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#061018] transition hover:bg-white/60"
              >
                Rivedi i servizi
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
