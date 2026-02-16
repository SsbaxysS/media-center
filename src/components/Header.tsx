import React from 'react';
import { Menu, X, Youtube, Radio, Newspaper } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
              <Newspaper className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">МедиаЦентр</h1>
              <p className="text-xs text-slate-500">МБОУ «Усть-Коксинская СОШ»</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Главная</a>
            <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">О нас</a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Проекты</a>
            <a href="#news" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Новости</a>
            <a href="#team" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Команда</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Главная</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">О нас</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Проекты</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Новости</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Команда</a>
          </div>
        </div>
      )}
    </header>
  );
}
