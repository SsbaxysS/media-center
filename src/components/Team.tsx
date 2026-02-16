import ChromaGrid, { ChromaItem } from './ChromaGrid';

const teamData: ChromaItem[] = [
    { title: 'Анна И.', subtitle: 'Главный редактор', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', borderColor: '#8b5cf6' },
    { title: 'Дмитрий П.', subtitle: 'Видеооператор', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', borderColor: '#3b82f6' },
    { title: 'Мария С.', subtitle: 'Телеведущая', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400', borderColor: '#10b981' },
    { title: 'Алексей В.', subtitle: 'Фотограф', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', borderColor: '#f59e0b' },
];

export function Team() {
    return (
        <section id="team" className="py-24 px-6 bg-[#050507]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-2 text-white">Наша команда</h2>
                    <p className="text-zinc-500 text-sm">Создатели лучшего контента</p>
                </div>

                <div className="flex justify-center">
                    <ChromaGrid
                        items={teamData}
                        radius={200}
                    />
                </div>
            </div>
        </section>
    );
}
