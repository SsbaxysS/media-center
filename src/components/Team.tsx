const team = [
    { name: 'Анна И.', role: 'Главред', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Дмитрий П.', role: 'Оператор', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Мария С.', role: 'Ведущая', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400' },
    { name: 'Алексей В.', role: 'Фотограф', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
];

export function Team() {
    return (
        <section id="team" className="py-24 px-6 bg-[#050507]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-2 text-white">Наша команда</h2>
                    <p className="text-zinc-500 text-sm">Создатели лучшего контента</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative mb-4 mx-auto w-32 h-32 rounded-full p-1 border border-white/[0.08] group-hover:border-violet-500/50 transition-colors">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="font-semibold text-white text-sm">{member.name}</h3>
                            <p className="text-violet-400 text-xs">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
