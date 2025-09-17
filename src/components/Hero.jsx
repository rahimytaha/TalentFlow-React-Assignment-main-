import { motion } from "framer-motion";
import hero_tick from "../assets/images/hero_tick.png";
import ActiveJob from "./ActiveJob";


export default function Hero() {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 md:grid-cols-2 md:py-20 min-h-[min(900px,calc(100vh-4rem))]">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold leading-relaxed tracking-tight text-slate-900 sm:text-5xl"
                >
                    Simplify Your Hiring
                    <br />
                    Process With
                    <br />
                    TalentFLOW
                </motion.h1>


                <p className="mt-5 max-w-xl text-slate-600 leading-loose">
                    Say goodbye to clunky hiring tools. With TalentFLOW, <br /> you can manage jobs,
                    track candidates, and build <br /> custom assessments — all in a lightning-fast
                    speed.
                </p>


                <div className="mt-7 flex flex-wrap gap-3">
                    <button className="rounded-xl bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
                        Find Talent
                    </button>
                    <button className="rounded-xl border border-slate-200 bg-white px-10 py-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                        Find Jobs
                    </button>
                </div>
            </div>{/* Right Panel */}
            <div className="relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="relative rounded-2xl border border-slate-200 bg-white p-4"
                >
                    <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-3">
                        <p className="text-sm font-semibold text-slate-800">Active Jobs</p>
                        <span className="inline-flex items-center gap-2 rounded-full bg-green-300 px-2.5 py-1 text-xs font-semibold text-white">
                            28 Open
                        </span>
                    </div>


                    <div className="mt-4 grid gap-3">
                        <ActiveJob title="Senior UX Designer" applications={24} faces={4} />
                        <ActiveJob title="Frontend Developer" applications={18} faces={3} />
                        <ActiveJob title="Product Manager" applications={31} faces={4} />
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="absolute -bottom-6 left-0 flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg"
                >
                    <div className="flex h-12 w-12 items-center justify-center text-white shadow-sm">
                        <img src={hero_tick} alt="TalentFlow Logo" className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-800">Job Match Found!</p>
                        <p className="text-[11px] text-slate-500">95% compatibility</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}