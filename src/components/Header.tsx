import React, { useState, useEffect } from 'react';
import { Menu, X, Newspaper, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from './ShinyText';

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-600/20">
                        <Newspaper className="text-white w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm tracking-tight text-white">МедиаЦентр</span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-[13px] text-zinc-400">
                    <a href="#hero" className="hover:text-white transition-colors">Главная</a>
                    <a href="#about" className="hover:text-white transition-colors">О нас</a>
                    <a href="#news" className="hover:text-white transition-colors">Новости</a>
                    <a href="#team" className="hover:text-white transition-colors">Команда</a>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <a href="#news" className="flex items-center gap-2 text-[13px] font-medium bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/20">
                        Смотреть новости <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/[0.04] bg-[#050507]"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {['Главная', 'О нас', 'Новости', 'Команда'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item === 'Главная' ? 'hero' : item === 'О нас' ? 'about' : item === 'Новости' ? 'news' : 'team'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
