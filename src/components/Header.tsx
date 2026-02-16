import React, { useState, useEffect } from 'react';
import { Menu, X, Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`
          relative flex justify-between items-center h-16 px-6 rounded-2xl transition-all duration-300
          ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg' : 'bg-transparent'}
        `}>
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
                            <Newspaper className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white leading-tight font-display tracking-wide">МедиаЦентр</h1>
                        </div>
                    </div>

                    <nav className="hidden md:flex gap-8">
                        {['Главная', 'О нас', 'Проекты', 'Новости', 'Команда'].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item === 'Главная' ? 'hero' : item === 'О нас' ? 'about' : item === 'Проекты' ? 'about' : item === 'Новости' ? 'news' : 'team'}`}
                                className="text-slate-300 hover:text-white font-medium transition-colors text-sm hover:scale-105 transform duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-24 left-4 right-4 md:hidden rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-slate-700 shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 space-y-2">
                            {['Главная', 'О нас', 'Проекты', 'Новости', 'Команда'].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item === 'Главная' ? 'hero' : item === 'О нас' ? 'about' : item === 'Проекты' ? 'about' : item === 'Новости' ? 'news' : 'team'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl font-medium transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
