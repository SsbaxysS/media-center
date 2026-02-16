import { MonitorPlay, Radio, Newspaper, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
    return (
        <section id="about" className="py-24 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 font-display"
                    >
                        Создаем контент<br />
                        <span className="text-slate-500">в любом формате</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Card 1: TV - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <div className="bg-blue-500/20 p-3 rounded-2xl w-fit">
                                    <MonitorPlay className="h-8 w-8 text-blue-400" />
                                </div>
                                <ArrowUpRight className="h-6 w-6 text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Школьное ТВ</h3>
                                <p className="text-slate-400 max-w-md">Профессиональная съемка, монтаж и спецэффекты. Мы делаем репортажи, которые хочется пересматривать.</p>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
                    </motion.div>

                    {/* Card 2: Radio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-violet-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="bg-violet-500/20 p-3 rounded-2xl w-fit">
                                <Radio className="h-8 w-8 text-violet-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Радио</h3>
                                <p className="text-slate-400">Подкасты и эфиры на переменах.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Newspaper */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-emerald-500/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="bg-emerald-500/20 p-3 rounded-2xl w-fit">
                                <Newspaper className="h-8 w-8 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Газета</h3>
                                <p className="text-slate-400">Печатное слово о важном.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Stats/More */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center text-center p-8"
                    >
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-display mb-2">50+</h3>
                            <p className="text-slate-400 font-medium">Репортажей за год</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
