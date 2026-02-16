import { MonitorPlay, Radio, Newspaper } from 'lucide-react';

const features = [
    {
        icon: MonitorPlay,
        title: 'Школьное ТВ',
        description: 'Репортажи с места событий, интервью с учителями и учениками, видеообзоры мероприятий.',
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-100'
    },
    {
        icon: Radio,
        title: 'Радиопередачи',
        description: 'Музыкальные перемены, подкасты на актуальные темы и важные объявления.',
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100'
    },
    {
        icon: Newspaper,
        title: 'Газета',
        description: 'Статьи, эссе, творчество учеников и фотоотчеты в печатном и электронном формате.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100'
    }
];

export function Features() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Наши направления</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Медиацентр объединяет талантливых ребят, которые пробуют себя в разных ролях: от журналиста до монтажера.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className={`p-8 rounded-2xl border ${feature.border} hover:shadow-xl transition-shadow duration-300 bg-white group`}>
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`h-7 w-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
