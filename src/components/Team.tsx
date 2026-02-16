import { motion } from 'framer-motion';

const team = [
    { name: 'Анна И.', role: 'Editor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
    { name: 'Дмитрий П.', role: 'Camera', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Мария С.', role: 'Voice', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400' },
    { name: 'Алексей В.', role: 'Photo', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
];

export function Team() {
    return (
        <section id="team" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-4 font-display"
                    >
                        Команда
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="relative mb-4 w-32 h-32 mx-auto">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="relative w-full h-full rounded-full object-cover border-4 border-slate-800 group-hover:border-slate-700 transition-colors z-10"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <p className="text-blue-400 text-sm font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
