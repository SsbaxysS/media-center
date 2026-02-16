import { MonitorPlay, Radio, Newspaper } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

const features = [
    {
        icon: MonitorPlay,
        title: 'Школьное ТВ',
        description: 'Мы снимаем репортажи, интервью и социальные ролики. Учимся монтажу и операторскому искусству на практике.',
        color: '#3b82f6' // Blue
    },
    {
        icon: Radio,
        title: 'Радиопередачи',
        description: 'Еженедельные эфиры, музыкальные подборки и обсуждение важных школьных тем на переменах.',
        color: '#8b5cf6' // Violet
    },
    {
        icon: Newspaper,
        title: 'Электронная газета',
        description: 'Статьи о школьной жизни, творчество учеников и фоторепортажи в удобном цифровом формате.',
        color: '#10b981' // Emerald
    }
];

export function Features() {
    return (
        <section id="about" className="py-24 px-6 bg-[#050507]">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Направления работы</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        В нашем медиацентре каждый найдет занятие по душе. Мы развиваем навыки, которые пригодятся в будущем.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <ElectricBorder key={i} color={f.color} speed={0.5}>
                            <div className="h-full bg-[#050507] p-8 rounded-[24px]">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-${f.color === '#3b82f6' ? 'blue' : f.color === '#8b5cf6' ? 'violet' : 'emerald'}-500/10`}>
                                    <f.icon className="w-6 h-6" style={{ color: f.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        </ElectricBorder>
                    ))}
                </div>
            </div>
        </section>
    );
}
