import '../index_z.css';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Camera,
  Clock3,
  FileText,
  HardHat,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/hero-edilsky-reverse_hd.mp4";
const CARD_VIDEO_SRC = "/canvas_rope.mp4";

const classicServices = [
  "Ristrutturazione di facciate",
  "Messe in sicurezza generali ed emergenze",
  "Ripristino intonaco",
  "Ripristino di frontalini e cornicioni",
  "Rivestimenti esterni in materiale ceramico o pietra",
  "Ripristino o sostituzione di canne fumarie, gronde e pluviali",
  "Impermeabilizzazione di coperture piane e inclinate",
  "Installazione linee vita, tinteggiatura e dissuasori per volatili",
];

const specialistServices = [
  "Spazi confinati: pulizia e manutenzione di cisterne, acquedotti e ambienti tecnici",
  "Termografia per rilevare infiltrazioni e criticità nascoste",
  "Utilizzo di droni, videocamere e GoPro per la verifica del lavoro svolto",
  "Pratiche edilizie e OSP, consulenze tecniche, capitolati, computi metrici, rilievi e sopralluoghi",
];

const diagnosisChecklist = [
  {
    icon: ScanSearch,
    title: "Leggiamo il problema reale",
    text: "Partiamo dal danno che avete notato, ma verifichiamo anche ciò che può averlo generato o aggravato.",
  },
  {
    icon: AlertTriangle,
    title: "Valutiamo il livello di urgenza",
    text: "Una situazione può sembrare innocua, trascurabile o non impellente e invece nascondere criticità più serie.",
  },
  {
    icon: Camera,
    title: "Servizio fotografico incluso",
    text: "Documentiamo il sopralluogo con immagini chiare, utili a capire stato del danno, estensione e rischi collegati.",
  },
  {
    icon: FileText,
    title: "Relazione approfondita",
    text: "Vi consegniamo una lettura più ordinata e completa dell'intervento, così la decisione non nasce da impressioni superficiali.",
  },
];

const hiddenRiskCards = [
  {
    title: "Segnalate una crepa",
    text: "Noi controlliamo se dietro ci sono infiltrazioni, distacchi, punti di cedimento o un degrado che sta lavorando in profondità.",
  },
  {
    title: "Segnalate un frontalino o un cornicione",
    text: "Noi verifichiamo se il danno è localizzato oppure se esiste una condizione di pericolo più estesa per passanti, balconi o facciata.",
  },
  {
    title: "Segnalate qualcosa che sembra lieve",
    text: "Noi capiamo se è davvero programmabile o se sta solo dando un'idea ingannevole di innocuità.",
  },
];

const advantages = [
  {
    icon: Clock3,
    title: "Interventi rapidi",
    text: "Gli operatori su fune possono iniziare a lavorare immediatamente, senza i lunghi tempi di montaggio delle strutture tradizionali.",
  },
  {
    icon: HardHat,
    title: "Professionalità e competenza",
    text: "Personale altamente qualificato, formato per eseguire lavori su corda con precisione, attenzione e cura del dettaglio.",
  },
  {
    icon: ShieldCheck,
    title: "Sicurezza garantita",
    text: "Ogni lavorazione viene eseguita nel pieno rispetto delle normative vigenti, con attrezzature certificate e procedure rigorose.",
  },
  {
    icon: Wrench,
    title: "Massima adattabilità",
    text: "La tecnica su fune permette di intervenire anche dove ponteggi e piattaforme sarebbero complessi, invasivi o impossibili da installare.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Segnalazione iniziale",
    text: "Il cliente o l'amministratore ci indica il danno o l'area che merita attenzione.",
  },
  {
    step: "02",
    title: "Sopralluogo gratuito",
    text: "Entriamo noi nella lettura tecnica: controlliamo il problema visibile, le sue possibili cause e le criticità connesse.",
  },
  {
    step: "03",
    title: "Relazione e soluzione",
    text: "Restituiamo un quadro più chiaro, con documentazione fotografica e una proposta di intervento coerente con urgenza, tempi e costi.",
  },
  {
    step: "04",
    title: "Intervento su misura",
    text: "Eseguiamo il lavoro con tempi rapidi, meno disagi e qualità costante dall'inizio alla fine.",
  },
];

const contactReasons = [
  "Siamo operativi H24, 7 giorni su 7, per interventi urgenti e operazioni di messa in sicurezza.",
  "Valutiamo ogni richiesta con attenzione e forniamo un preventivo trasparente, chiaro e senza impegno.",
  "Organizziamo il sopralluogo nel minor tempo possibile e vi aiutiamo a capire che cosa va fatto davvero.",
];

function SectionHeader({
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
      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--edil-blue-light)]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="mt-6 text-4xl font-black uppercase leading-[0.94] tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
        {text}
      </p>
    </div>
  );
}

export default function EdilSkyLanding() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // const operatorY = useTransform(scrollYProgress, [0, 1], ["-10%", "160%"]);
  // const buildingsY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const zoom = useTransform(scrollYProgress, [0, 0.4], [1, 1.25]);
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 17) % 100}%`,
    duration: 2 + (i % 3),
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 8500); // tempo totale intro (tune questo)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory bg-black text-white"
    >
      {/* OPENING VOID */}
      <section className="relative h-[100vh] h-screen snap-start">
        <motion.div
          style={{ scale: zoom, rotateX: tilt }}
          className="sticky top-0 h-screen overflow-hidden perspective-[1200px]"
        >
          {/* VOID */}
          <div className="absolute inset-0 bg-black" />

          {/* LIGHT CENTER */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(var(--edil-blue-light-rgb), 0.15), transparent 60%)",
            }}
          />

          {/* WINDOWS COVER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.8,
              times: [0, 0.14, 0.72, 1],
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute inset-0 z-[6]"
          >
            {/* LEFT SIDE */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 0, "-22%"] }}
              transition={{
                duration: 2.2,
                times: [0, 0.58, 1],
                ease: [0.22, 1, 0.36, 1],
                delay: 1.35,
              }}
              className="absolute inset-y-0 left-0 w-1/2"
            >
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} className="flex h-1/5 gap-2 px-2 py-2">
                  {Array.from({ length: row % 2 === 0 ? 3 : 2 }).map(
                    (_, col) => (
                      <div
                        key={col}
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                      />
                    ),
                  )}
                </div>
              ))}
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 0, "22%"] }}
              transition={{
                duration: 2.2,
                times: [0, 0.58, 1],
                ease: [0.22, 1, 0.36, 1],
                delay: 1.35,
              }}
              className="absolute inset-y-0 right-0 w-1/2"
            >
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} className="flex h-1/5 gap-2 px-2 py-2">
                  {Array.from({ length: row % 2 === 0 ? 2 : 3 }).map(
                    (_, col) => (
                      <div
                        key={col}
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                      />
                    ),
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PARTICLES WIND */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 40, 0] }}
                transition={{ duration: particle.duration, repeat: Infinity }}
                className="absolute h-[2px] w-[2px] bg-white/50"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
              />
            ))}
          </div>

          {/* HERO VIDEO */}
          <motion.video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: [0, 0, 0, 0.18, 0.6, 1] }}
            transition={{
              duration: 3.6,
              times: [0, 0.45, 0.68, 0.78, 0.9, 1],
              ease: [0.22, 1, 0.36, 1],
              delay: 2.9,
            }}
          />

          {/* HERO TEXT */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(0,0,0,0.35)_100%)]" />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.28,
                delay: 2.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-full border border-white/15 bg-black/25 px-6 py-4 backdrop-blur-md md:px-10 md:py-5"
            >
              <h1 className="text-5xl font-black uppercase tracking-[0.08em] text-white md:text-7xl lg:text-8xl">
                EDIL <span className="text-[var(--edil-blue-light)]">SKY</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* IMPACT DROP */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, delay: 2.81 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-center text-sm uppercase tracking-[0.35em] text-white/75 backdrop-blur-md"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">
            Scorri per scendere
          </div>
        </motion.div>
      </section>

      {/* PRIMA SEZIONE */}
      <section className="relative flex h-screen snap-start items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at top, rgba(var(--edil-blue-light-rgb), 0.35), transparent 40%)",
          }}
        />

        <div
          className="absolute inset-y-0 w-0.5"
          style={{ backgroundColor: "rgba(var(--edil-blue-main-rgb), 0.4)" }}
        />
        <div
          className="absolute left-1/2 top-0 h-40 w-1 -translate-x-1/2 bg-[var(--edil-blue-light)]"
          style={{
            boxShadow: "0 0 30px rgba(var(--edil-blue-light-rgb), 0.6)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
          <div>
            <div
              className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm uppercase tracking-[0.2em] text-[var(--edil-blue-light)]"
              style={{
                borderColor: "rgba(var(--edil-blue-main-rgb), 0.3)",
                backgroundColor: "rgba(var(--edil-blue-main-rgb), 0.1)",
              }}
            >
              Edilizia su fune
            </div>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
              Arriviamo
              <span className="block text-[var(--edil-blue-light)]">
                dove gli altri
              </span>
              <span className="block">si fermano</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Interventi verticali ad alto impatto visivo e operativo.
              Manutenzione, messa in sicurezza, ripristini e lavori in quota
              senza ponteggi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#diagnosi"
                className="rounded-2xl bg-[var(--edil-blue-main)] px-6 py-4 font-semibold transition hover:bg-[var(--edil-blue-dark)]"
              >
                Richiedi sopralluogo
              </a>

              <a
                href="#servizi"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                Guarda i servizi
              </a>
            </div>
          </div>

          <div className="relative h-[70vh] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-2xl backdrop-blur-sm">
            <motion.video
              className="absolute inset-0 h-full w-full object-cover"
              src={CARD_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-sm uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-md">
              <span>SIAMO SOLO DEI</span>
              <span className="text-[var(--edil-blue-light)]">
                GRANDI GABBIANI
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, delay: 2.81 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-center text-sm uppercase tracking-[0.35em] text-white/75 backdrop-blur-md"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-white/75">
            Scroll per scendere
          </div>
        </motion.div>
      </section>

      {/* IDENTITA */}
      <section className="relative min-h-screen snap-start overflow-hidden bg-[linear-gradient(180deg,#050608_0%,#0a1018_52%,#081019_100%)] px-6 py-24 md:px-10 lg:px-12">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div>
            <SectionHeader
              eyebrow="EdilSky Specialisti In Altezza"
              title="Tradizione edile e tecnica su fune, insieme."
              text="EdilSky è un'impresa romana che unisce tradizione e innovazione. Nasce da quattro generazioni nel settore edile e ha scelto di portare questa esperienza dentro un metodo più moderno, rapido e funzionale."
            />

            <div className="mt-10 grid gap-6 text-base leading-8 text-zinc-300 md:grid-cols-2">
              <p>
                Grazie a un team di operatori qualificati e specializzati nei
                lavori su fune, interveniamo sugli edifici in modo rapido,
                sicuro ed efficiente, eliminando nella maggior parte dei casi la
                necessità di ponteggi e piattaforme.
              </p>
              <p>
                Per il cliente questo significa tempi di esecuzione più veloci,
                minori disagi e un notevole risparmio sui costi, senza rinunciare
                alla qualità e alla sicurezza degli interventi.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-lg leading-8 text-zinc-200">
                Abbiamo deciso di creare una realtà dinamica e affidabile, con
                un obiettivo chiaro: offrire interventi di qualità e un rapporto
                semplice e trasparente con il cliente, dall'inizio alla fine.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {[
              "4 generazioni di esperienza nel settore edile",
              "Operatori qualificati e costantemente aggiornati",
              "Interventi rapidi, efficaci e duraturi",
              "Soluzioni su misura sulle reali esigenze del cliente",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 text-lg leading-8 text-white"
              >
                {item}
              </motion.div>
            ))}

            <div className="rounded-[1.7rem] border border-[rgba(var(--edil-blue-light-rgb),0.25)] bg-[rgba(var(--edil-blue-main-rgb),0.1)] p-6">
              <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--edil-blue-light)]">
                Perché scegliere EdilSky
              </div>
              <p className="mt-4 text-base leading-8 text-zinc-200">
                Costi più contenuti, interventi rapidi, massima adattabilità e
                sopralluoghi gratuiti per capire davvero che cosa serve fare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSI */}
      <section
        id="diagnosi"
        className="relative min-h-screen snap-start overflow-hidden bg-[linear-gradient(180deg,#050608_0%,#06080c_42%,#0a1320_100%)] px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--edil-blue-light-rgb),0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Sopralluogo Gratuito"
            title="Il danno visibile lo segnalate voi. La lettura vera la facciamo noi."
            text="Spesso amministratori condominiali o clienti notano un danno preciso e lo segnalano. È giusto partire da lì, ma fermarsi lì è un errore. Il punto che si vede può essere solo il sintomo di un problema più esteso, della sua causa o di una situazione di rischio trattata con superficialità."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
                <div className="relative h-[24rem] overflow-hidden border-b border-white/10">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={CARD_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.72))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--edil-blue-light)] backdrop-blur-md">
                      <BadgeCheck className="h-4 w-4" />
                      Relazione approfondita + foto incluse
                    </div>
                    <p className="mt-4 text-lg leading-8 text-white">
                      Il sopralluogo non è un passaggio formale: è il momento in
                      cui si capisce se il danno è localizzato, se c'è altro
                      dietro e se esiste una priorità reale di intervento.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <a
                    href="tel:800909224"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--edil-blue-main)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--edil-blue-dark)]"
                  >
                    Chiama il numero verde
                    <PhoneCall className="h-4 w-4" />
                  </a>
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-300">
                    Segnalateci ciò che avete visto. Il nostro compito è capire
                    se dietro c'è altro, se il danno sta evolvendo e quale sia
                    la risposta tecnica più corretta.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {diagnosisChecklist.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(var(--edil-blue-light-rgb),0.18)] bg-[rgba(var(--edil-blue-main-rgb),0.16)] text-[var(--edil-blue-light)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-zinc-300">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="grid gap-5 md:grid-cols-3">
                {hiddenRiskCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
                  >
                    <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--edil-blue-light)]">
                      Caso tipico
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section
        id="servizi"
        className="relative min-h-screen snap-start bg-[linear-gradient(180deg,#070b10_0%,#0b121a_100%)] px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Servizi"
            title="Un servizio completo a 360 gradi."
            text="EdilSky offre un'ampia gamma di interventi di edilizia su fune, dai lavori più comuni a quelli più specializzati. Investiamo continuamente in formazione, attrezzature tecnologiche e organizzazione per garantire qualità, rapidità e cura del lavoro svolto."
          />

          <div className="mt-14 grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-8">
              <div className="flex items-center gap-3 text-white">
                <BadgeCheck className="h-5 w-5 text-[var(--edil-blue-light)]" />
                <h3 className="text-2xl font-semibold uppercase tracking-[0.08em]">
                  Interventi classici
                </h3>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {classicServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-zinc-300"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-8">
              <div className="flex items-center gap-3 text-white">
                <BadgeCheck className="h-5 w-5 text-[var(--edil-blue-light)]" />
                <h3 className="text-2xl font-semibold uppercase tracking-[0.08em]">
                  Interventi specializzati
                </h3>
              </div>
              <div className="mt-8 space-y-4">
                {specialistServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-[1.2rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-300"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.3rem] border border-[rgba(var(--edil-blue-light-rgb),0.22)] bg-[rgba(var(--edil-blue-main-rgb),0.12)] p-5 text-sm leading-7 text-zinc-200">
                Lavorare su corda significa scegliere un metodo moderno, più
                pratico dell'edilizia tradizionale e molto meno invasivo per chi
                vive o lavora nell'edificio.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGGI E METODO */}
      <section className="relative min-h-screen snap-start bg-[linear-gradient(180deg,#050608_0%,#0a0f15_100%)] px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <SectionHeader
              eyebrow="Perché Sceglierci"
              title="Soluzioni rapide, sicure e vantaggiose."
              text="La qualità degli interventi e la preparazione del team sono il centro della nostra reputazione sul territorio. Ogni lavoro viene eseguito con attenzione, precisione, professionalità e rispetto dei tempi concordati."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {advantages.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(var(--edil-blue-light-rgb),0.18)] bg-[rgba(var(--edil-blue-main-rgb),0.16)] text-[var(--edil-blue-light)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-300">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Metodo"
              title="Un percorso chiaro dall'inizio alla fine."
              text="Conoscere a fondo le esigenze del settore ci ha permesso di costruire un processo semplice, trasparente e concreto: meno confusione, più lettura tecnica, più velocità decisionale."
            />

            <div className="mt-12 space-y-5">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6"
                >
                  <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--edil-blue-light)]">
                    Step {item.step}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-zinc-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section
        id="contatti"
        className="relative min-h-screen snap-start overflow-hidden bg-[linear-gradient(180deg,#0a1119_0%,#101f31_100%)] px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--edil-blue-light-rgb),0.14),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeader
              eyebrow="Contatti"
              title="Segnalateci il danno che vedete. Al resto pensiamo noi."
              text="Siamo operativi H24, 7 giorni su 7, per interventi urgenti e operazioni di messa in sicurezza. Se hai bisogno di informazioni, di un sopralluogo o di un preventivo, il nostro team è pronto ad assisterti con professionalità e rapidità."
            />

            <div className="mt-12 grid gap-5">
              {contactReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-base leading-8 text-zinc-200"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--edil-blue-light)]">
              Contatto diretto
            </div>
            <a
              href="tel:800909224"
              className="mt-5 block text-4xl font-black uppercase tracking-tight text-white"
            >
              800 90 92 24
            </a>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              Preventivi chiari e senza impegno. Sopralluogo gratuito, relazione
              approfondita e servizio fotografico incluso per leggere la
              situazione con più lucidità.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:800909224"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--edil-blue-main)] px-6 py-4 font-semibold text-white transition hover:bg-[var(--edil-blue-dark)]"
              >
                Richiedi sopralluogo gratuito
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#diagnosi"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Rivedi come lavoriamo
                <ScanSearch className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
