import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Школьный пресс-центр
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 font-display leading-[1.1]">
                            Голос<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Поколения
                            </span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                            Мы создаем контент, который вдохновляет. Репортажи, подкасты, интервью и прямые эфиры МБОУ «Усть-Коксинская СОШ».
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#news"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25"
                            >
                                Смотреть новости
                                <Play className="h-4 w-4 fill-current" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#team"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 text-white border border-slate-700 font-semibold hover:bg-slate-700 transition-all hover:border-slate-600"
                            >
                                Наша команда
                                <ArrowRight className="h-4 w-4" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-700/50 glass p-2">
                            <img
                                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800"
                                alt="Students recording"
                                className="rounded-xl w-full object-cover h-[500px]"
                            />

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3 z-20"
                            >
                                <div className="bg-red-500/20 p-2 rounded-lg">
                                    <Play className="h-6 w-6 text-red-500 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Прямой эфир</p>
                                    <p className="text-white font-bold">Школьные новости</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
