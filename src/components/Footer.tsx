import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/[0.04] px-6 py-10 bg-[#050507]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">МЦ</span>
                    </div>
                    <span className="text-sm text-zinc-600">© {new Date().getFullYear()} МедиаЦентр</span>
                </div>

                <div className="flex items-center gap-6 text-[13px] text-zinc-600">
                    <a href="#" className="hover:text-zinc-300 transition-colors">Правила</a>
                    <a href="#" className="hover:text-zinc-300 transition-colors">Контакты</a>
                    <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-2">
                        <Mail size={14} /> support@school-media.ru
                    </a>
                </div>

                <div className="flex gap-4">
                    <a href="#" className="text-zinc-600 hover:text-violet-400 transition-colors"><Youtube size={18} /></a>
                    <a href="#" className="text-zinc-600 hover:text-violet-400 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="text-zinc-600 hover:text-violet-400 transition-colors"><Facebook size={18} /></a>
                </div>
            </div>
        </footer>
    );
}
