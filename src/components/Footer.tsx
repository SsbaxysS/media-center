import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white font-display mb-1">МедиаЦентр</h3>
                    <p className="text-slate-500 text-sm">Усть-Коксинская СОШ</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Youtube size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Instagram size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Facebook size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Mail size={20} /></a>
                </div>

                <div className="text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} School Media
                </div>
            </div>
        </footer>
    );
}
