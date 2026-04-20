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
    text: "Gli operatori possono entrare in azione subito, senza lunghe fasi di allestimento preliminare.",
    icon: Clock3,
  },
  {
    title: "Sicurezza garantita",
    text: "Ogni lavorazione segue procedure rigorose, attrezzature certificate e pieno rispetto delle normative vigenti.",
    icon: ShieldCheck,
  },
  {
    title: "Professionalità reale",
    text: "Personale qualificato, formato e aggiornato per affrontare facciate, coperture e scenari complessi con precisione.",
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
    text: "Analizziamo il contesto, individuiamo i punti critici e definiamo la soluzione più efficace.",
  },
  {
    step: "02",
    title: "Piano operativo pulito",
    text: "Costruiamo un intervento su misura, con tempi chiari, sicurezza integrata e minimo impatto sull'edificio.",
  },
  {
    step: "03",
    title: "Esecuzione in quota",
    text: "Entriamo in azione con operatori specializzati su fune, riducendo disagi e accelerando la consegna.",
  },
  {
    step: "04",
    title: "Chiusura trasparente",
    text: "Consegniamo un lavoro ordinato, documentato e coerente con quanto concordato in fase iniziale.",
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
      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.32em] text-[#a9c5df]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2
        style={{ fontFamily: DISPLAY_FONT }}
        className="mt-6 text-4xl leading-none text-white md:text-6xl"
      >
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#b6c3ce] md:text-lg">
        {text}
      </p>
    </div>
  );
}

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.12]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], ["0%", "12%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#071019] text-white">
      <section className="relative isolate min-h-screen overflow-hidden border-b border-white/8">
        <motion.div
          style={{ y: gridY }}
          className="pointer-events-none absolute inset-0 opacity-35"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,163,195,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(124,163,195,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(72,138,194,0.3),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(7,16,25,0.25),rgba(7,16,25,0.82)_70%,#071019)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent" />

        <motion.video
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,25,0.92)_0%,rgba(7,16,25,0.72)_42%,rgba(7,16,25,0.5)_100%)]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 pb-8 pt-6 md:px-10 lg:px-12">
          <header className="flex items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.38em] text-[#9fb5c8]">
                EDILSKY
              </div>
              <div className="mt-2 text-sm text-[#d8e3eb]">
                Specialisti in altezza
              </div>
            </div>
            <a
              href="tel:800909224"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/14"
            >
              <PhoneCall className="h-4 w-4" />
              Numero verde 800 90 92 24
            </a>
          </header>

          <div className="grid items-end gap-12 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:py-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#7ba0be]/30 bg-[#88b4d4]/12 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#c6dae9]">
                Roma • Operativi H24 / 7 giorni su 7
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: DISPLAY_FONT }}
                className="mt-8 max-w-5xl text-[3.5rem] leading-[0.9] text-white sm:text-[4.7rem] lg:text-[6.4rem]"
              >
                Interventi in quota
                <span className="block text-[#8cb7d8]">
                  senza l'estetica mediocre
                </span>
                dei siti che promettono tutto e non dicono nulla.
              </motion.h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c2d0db] md:text-xl">
                EdilSky unisce quattro generazioni di esperienza edile a un
                metodo contemporaneo: lavori su fune rapidi, puliti e
                rigorosi, con meno costi, meno disagi e più controllo
                operativo.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contatti"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d7e6f2] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#071019] transition hover:bg-white"
                >
                  Richiedi sopralluogo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servizi"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/14"
                >
                  Esplora i servizi
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,183,216,0.22),transparent_45%)]" />
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
                <video
                  className="h-[420px] w-full object-cover"
                  src={DETAIL_VIDEO_SRC}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(7,16,25,0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-[#98b8d1]">
                    Metodo operativo
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    Niente ponteggi inutili.
                    <span className="block text-[#c5d9e8]">
                      Più velocità, più precisione, meno attrito.
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  "Quattro generazioni",
                  "Preventivi gratuiti",
                  "Operatori qualificati",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-black/18 px-4 py-4 text-sm text-[#dce7ee]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-6 text-sm text-[#dbe7ee] md:grid-cols-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8db2d0]">
                Promessa
              </div>
              <p className="mt-3 leading-7 text-[#dce6ed]">
                Interveniamo in modo rapido, sicuro ed efficiente, riducendo
                costi e tempi rispetto ai sistemi tradizionali.
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8db2d0]">
                Metodo
              </div>
              <p className="mt-3 leading-7 text-[#dce6ed]">
                Soluzioni su misura, studiate sulle esigenze reali del cliente,
                con procedure pulite e massima adattabilità.
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[#8db2d0]">
                Risultato
              </div>
              <p className="mt-3 leading-7 text-[#dce6ed]">
                Qualità del lavoro, tempi rispettati e meno disagi per chi vive
                o lavora nell'edificio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#0a141d] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Perché EdilSky"
            title="Tradizione edile, taglio operativo contemporaneo."
            text="EdilSky nasce da quattro generazioni nel settore edile e ha scelto di evolvere quel patrimonio con un approccio più rapido, più pulito e più adatto ai contesti complessi: i lavori su fune."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valuePillars.map(({ title, text, icon: Icon }) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="group rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 transition hover:-translate-y-1 hover:border-[#87b0cf]/35 hover:bg-[linear-gradient(180deg,rgba(135,176,207,0.16),rgba(255,255,255,0.05))]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#d8e8f3]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl text-white">{title}</h3>
                <p className="mt-4 text-base leading-8 text-[#b6c3ce]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#071019] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(140,183,216,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8">
            <SectionHeading
              eyebrow="Chi siamo"
              title="Una realtà dinamica, affidabile e costruita per durare."
              text="Conosciamo questo settore a fondo e lo affrontiamo con una promessa semplice: rapporto trasparente dall'inizio alla fine, attenzione ai dettagli e crescita fondata sulla qualità reale del lavoro."
            />

            <div className="mt-10 space-y-5 text-base leading-8 text-[#c0ced8]">
              <p>
                I lavori su fune rappresentano un vantaggio concreto: riducono
                costi, velocizzano l'esecuzione ed evitano ponteggi invasivi che
                possono restare sulle facciate per mesi.
              </p>
              <p>
                Per mantenere standard elevati ci affidiamo a operatori
                qualificati e costantemente aggiornati, con certificazioni
                specifiche conseguite presso scuole riconosciute e accreditate
                dalla Regione Lazio.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 md:p-7"
              >
                <div className="text-[11px] uppercase tracking-[0.32em] text-[#8cb7d8]">
                  Step {item.step}
                </div>
                <div className="mt-3 text-2xl text-white">{item.title}</div>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#b7c4cf]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servizi"
        className="border-b border-white/8 bg-[#0b151f] px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servizi"
            title="Interventi classici e lavorazioni specializzate, con la stessa disciplina."
            text="EdilSky offre un servizio completo a 360 gradi: dai lavori più comuni a quelli ad alta complessità tecnica, sempre con tempi rapidi, organizzazione rigorosa e attenzione ai dettagli."
          />

          <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 md:p-8">
              <div className="flex items-center gap-3 text-[#dce8f0]">
                <BadgeCheck className="h-5 w-5 text-[#93bad9]" />
                <h3 className="text-2xl text-white">Interventi classici</h3>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {classicServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.2rem] border border-white/10 bg-black/18 p-4 text-sm leading-7 text-[#c7d3dc]"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(140,183,216,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 md:p-8">
              <div className="flex items-center gap-3 text-[#dce8f0]">
                <BadgeCheck className="h-5 w-5 text-[#93bad9]" />
                <h3 className="text-2xl text-white">Interventi specializzati</h3>
              </div>
              <div className="mt-8 space-y-4">
                {specialistServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.3rem] border border-white/10 bg-black/18 p-5 text-sm leading-7 text-[#c7d3dc]"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.3rem] border border-[#86b0cf]/25 bg-[#85b0cf]/10 p-5 text-sm leading-7 text-[#e5eef5]">
                Offriamo anche sopralluoghi e preventivi gratuiti, chiari e
                dettagliati, per permettere al cliente di conoscere fin da
                subito costi, tempi e modalità dell'intervento.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#071019] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8ab6d6]">
              Pronto intervento
            </div>
            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-5 text-4xl leading-none text-white md:text-5xl"
            >
              Operativi H24, 7 giorni su 7, per urgenze e messe in sicurezza.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#b7c5cf] md:text-lg">
              Se serve intervenire rapidamente, EdilSky è pronta ad assistere
              con professionalità e tempi di risposta rapidi, valutando insieme
              la soluzione più adatta al contesto.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/16 p-8">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#8ab6d6]">
              Ci scelgono perché
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#d7e3ea]">
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                Interventi rapidi anche in situazioni difficili da raggiungere
                con i metodi tradizionali.
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                Nessun costo e nessun ritardo legato al montaggio di ponteggi
                invasivi.
              </div>
              <div className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                Preventivi trasparenti e senza impegno, costruiti sul caso
                reale e non su formule standard.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="relative overflow-hidden bg-[#d9e7f1] px-6 py-24 text-[#071019] md:px-10 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(7,16,25,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0))]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[#466885]">
              Contatti
            </div>
            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-5 max-w-4xl text-4xl leading-none md:text-6xl"
            >
              Se devi intervenire in quota, fallo con una squadra che sa già
              dove mettere le mani.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#223a4e]">
              Siamo disponibili per informazioni, sopralluoghi e preventivi.
              Valutiamo ogni richiesta con attenzione e rispondiamo con una
              proposta chiara, concreta e veloce.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#6e93af]/25 bg-white/65 p-8 shadow-[0_24px_80px_rgba(7,16,25,0.12)] backdrop-blur-sm">
            <div className="text-sm uppercase tracking-[0.32em] text-[#5a7f9b]">
              Contatto diretto
            </div>
            <a
              href="tel:800909224"
              className="mt-5 block text-3xl font-semibold text-[#071019]"
            >
              800 90 92 24
            </a>
            <p className="mt-4 text-base leading-8 text-[#2f485d]">
              Numero verde attivo per richieste, urgenze, sopralluoghi e
              preventivi senza impegno.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:800909224"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#071019] px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#132434]"
              >
                Chiama ora
                <PhoneCall className="h-4 w-4" />
              </a>
              <a
                href="#servizi"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#071019]/12 px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#071019] transition hover:bg-white/60"
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
