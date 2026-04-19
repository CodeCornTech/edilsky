import { motion, useScroll, useTransform } from 'framer-motion';

// const OPERATOR_SRC = "data:image/png;base64,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";

const OPERATOR_SRC = 'public/omino.png';

function OperatorSilhouette() {
    return (
        <div className="relative flex flex-col items-center">
            <div className="h-24 md:h-28 w-[2px] bg-blue-500/95 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
            <img src={OPERATOR_SRC} alt="operatore su fune edil sky" className="w-20 md:w-24 lg:w-28 object-contain drop-shadow-[0_0_26px_rgba(59,130,246,0.75)]" />
            <div className="h-24 md:h-28 w-[2px] bg-blue-500/95 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
        </div>
    );
}

function BuildingSide({ side }) {
    const sideClass = side === 'left' ? 'left-0 items-end' : 'right-0 items-start';

    return (
        <div className={`absolute top-[-20vh] ${sideClass} flex h-[170vh] w-[26vw] min-w-[220px] max-w-[360px] flex-col gap-4 px-3 opacity-95`}>
            {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="relative h-[13vh] min-h-[74px] rounded-2xl border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <div className="absolute inset-y-[18%] left-[14%] right-[14%] grid grid-cols-2 gap-3">
                        <div className="rounded-md bg-white/[0.05]" />
                        <div className="rounded-md bg-white/[0.04]" />
                    </div>
                </div>
            ))}
        </div>
    );
}

function WindParticles() {
    const particles = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: `${(i * 19) % 100}%`,
        top: `${(i * 11) % 100}%`,
        duration: 2.8 + (i % 4) * 0.4,
        drift: i % 2 === 0 ? 18 : -18,
    }));

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div key={p.id} initial={{ opacity: 0.12, y: 0, x: 0 }} animate={{ opacity: [0.12, 0.45, 0.12], y: [0, 26, 0], x: [0, p.drift, 0] }} transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut' }} className="absolute h-[2px] w-[2px] rounded-full bg-white/60" style={{ left: p.left, top: p.top }} />
            ))}
        </div>
    );
}

function Hud() {
    return (
        <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
            <div className="text-[10px] uppercase tracking-[0.35em] text-blue-300">Edil Sky</div>
            <div className="mt-2 space-y-1 text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                <div>Altitude : Active</div>
                <div>Access : Vertical</div>
                <div>Status : Operative</div>
            </div>
        </div>
    );
}

export default function EdilSkyLanding() {
    const { scrollYProgress } = useScroll();

    const operatorY = useTransform(scrollYProgress, [0, 1], ['-18vh', '122vh']);
    const operatorX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -10, 8, -6, 0]);
    const operatorRotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -4, 3, -2, 0]);
    const leftY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    const rightY = useTransform(scrollYProgress, [0, 1], ['0%', '-48%']);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.16, 0.3], [1, 1, 0.18]);
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.45, 0.62, 0.82]);

    return (
        <div className="overflow-x-hidden bg-black text-white">
            <section className="relative h-[230vh] bg-black">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.18),transparent_28%),linear-gradient(180deg,#020202_0%,#05070b_52%,#000_100%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_100%] opacity-20" />

                    <motion.div style={{ y: leftY }} className="absolute inset-y-0 left-0 w-[30vw]">
                        <BuildingSide side="left" />
                    </motion.div>
                    <motion.div style={{ y: rightY }} className="absolute inset-y-0 right-0 w-[30vw]">
                        <BuildingSide side="right" />
                    </motion.div>

                    <div className="absolute left-1/2 top-0 bottom-0 z-10 w-[2px] -translate-x-1/2 bg-blue-500/90 shadow-[0_0_28px_rgba(59,130,246,0.9)]" />

                    <motion.div style={{ y: operatorY, x: operatorX, rotate: operatorRotate }} className="absolute left-1/2 top-0 z-20 -translate-x-1/2 origin-top">
                        <OperatorSilhouette />
                    </motion.div>

                    <WindParticles />
                    <Hud />

                    <motion.div style={{ opacity: titleOpacity }} className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center">
                        <h1 className="text-6xl font-black uppercase tracking-[0.04em] text-white/95 md:text-8xl lg:text-9xl">EDIL SKY</h1>
                    </motion.div>

                    <motion.div style={{ opacity: vignetteOpacity }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.2)_72%,rgba(0,0,0,0.82)_100%)]" />
                </div>
            </section>

            <section className="py-28 text-center">
                <h2 className="text-4xl font-black uppercase md:text-6xl">Verticale . Diretto . Diverso</h2>
            </section>

            <section className="bg-zinc-950 py-24">
                <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-4">
                    {['Facciate', 'Ispezioni', 'Riparazioni', 'Urgenze'].map((service, i) => (
                        <div key={service} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <div className="text-[11px] uppercase tracking-[0.28em] text-blue-400">0{i + 1}</div>
                            <h3 className="mt-3 text-base font-bold uppercase md:text-lg">{service}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-zinc-400 md:text-sm">Operatività verticale rapida e mirata</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
