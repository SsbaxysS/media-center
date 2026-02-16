import { Calendar, ArrowRight } from 'lucide-react';

const news = [
    {
        id: 1,
        title: 'День знаний в нашей школе',
        excerpt: 'Торжественная линейка, первый звонок и счастливые первоклассники. Смотрите наш фотоотчет.',
        date: '1 Сентября 2023',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
        category: 'Мероприятия'
    },
    {
        id: 2,
        title: 'Интервью с директором',
        excerpt: 'Планы на учебный год, новые кружки и капитальный ремонт спортзала. Эксклюзивное интервью.',
        date: '15 Сентября 2023',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800',
        category: 'Видео'
    },
    {
        id: 3,
        title: 'Осенний бал: как это было',
        excerpt: 'Самое яркое событие осени. Конкурс костюмов, танцы и выбор короля и королевы бала.',
        date: '25 Октября 2023',
        image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d03?auto=format&fit=crop&q=80&w=800',
        category: 'Репортаж'
    }
];

export function News() {
    return (
        <section id="news" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Последние новости</h2>
                        <p className="text-slate-600">Будьте в курсе школьной жизни</p>
                    </div>
                    <a href="#" className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Все новости <ArrowRight size={20} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                                    <Calendar size={16} />
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-3 flex-1">
                                    {item.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all">
                                    Читать далее <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Все новости <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
