import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const news = [
    {
        id: 1,
        title: 'День знаний: Начало пути',
        date: '1 Сентября',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
        category: 'Событие'
    },
    {
        id: 2,
        title: 'Интервью с директором',
        date: '15 Сентября',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800',
        category: 'Эксклюзив'
    },
    {
        id: 3,
        title: 'Осенний бал 2023',
        date: '25 Октября',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d03?auto=format&fit=crop&q=80&w=800',
        category: 'Фотоотчет'
    }
];

export function News() {
    return (
        <section id="news" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-2 font-display">Лента событий</h2>
                        <p className="text-slate-400">Самое важное за неделю</p>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                        href="#"
                        className="hidden sm:inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                        Все новости <ArrowRight size={20} />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                                    {item.category}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-slate-400 text-sm mb-2 flex items-center gap-2">
                                    <Calendar size={14} /> {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    Читать <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
