

const team = [
    {
        name: 'Анна Иванова',
        role: 'Главный редактор',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
        bio: 'Отвечает за выпуск школьной газеты и координирует работу пресс-центра.'
    },
    {
        name: 'Дмитрий Петров',
        role: 'Видеооператор',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
        bio: 'Снимает и монтирует все школьные мероприятия. Любит динамичный монтаж.'
    },
    {
        name: 'Мария Сидорова',
        role: 'Ведущая',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
        bio: 'Голос школьного радио и лицо новостных выпусков. Мечтает стать телеведущей.'
    },
    {
        name: 'Алексей Волков',
        role: 'Фотограф',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        bio: 'Ловит лучшие моменты школьной жизни. Его фото украшают стенды школы.'
    }
];

export function Team() {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Наша команда</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ученики и наставники, которые делают жизнь школы ярче и заметнее.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-0 group-hover:saturate-100"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>
                            <p className="text-slate-500 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
