import { Calendar, ArrowRight } from 'lucide-react';
import GlareHover from './GlareHover';

const news = [
    {
        id: 1,
        title: 'День знаний: Начало пути',
        date: '1 Сентября 2023',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
        category: 'Событие'
    },
    {
        id: 2,
        title: 'Интервью с директором школы',
        date: '15 Сентября 2023',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800',
        category: 'Эксклюзив'
    },
    {
        id: 3,
        title: 'Осенний бал: Фотоотчет',
        date: '25 Октября 2023',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d03?auto=format&fit=crop&q=80&w=800',
        category: 'Фото'
    }
];

export function News() {
    return (
        <section id="news" className="pb-24 px-6 bg-[#050507]">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-white">Последние новости</h2>
                        <p className="text-zinc-500 text-sm">Главные события школьной жизни</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                        Архив новостей <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} onClick={() => { }} className="group rounded-2xl cursor-pointer">
                            <GlareHover
                                width="100%"
                                height="100%"
                                borderRadius="16px"
                                glareColor="#8b5cf6"
                                className="bg-[#0a0a0c] border border-white/[0.04] group-hover:border-violet-500/30 transition-colors"
                            >
                                <div className="relative h-48 overflow-hidden w-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="text-[10px] text-white bg-violet-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium shadow-lg">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5 w-full">
                                    <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                                        <Calendar size={12} />
                                        {item.date}
                                    </div>
                                    <h3 className="font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-violet-500 text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                        Читать полностью <ArrowRight size={12} />
                                    </div>
                                </div>
                            </GlareHover>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
