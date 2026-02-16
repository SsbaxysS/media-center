import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">МедиаЦентр</h3>
                        <p className="text-slate-400 mb-4 max-w-xs">
                            Освещаем жизнь школы, рассказываем о важных событиях и развиваем таланты учеников.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Навигация</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:text-white transition-colors">Главная</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                            <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Команда</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <MapPin size={16} className="text-blue-500" />
                                <span>с. Усть-Кокса, ул. Харитошкина</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-blue-500" />
                                <span>+7 (XXX) XXX-XX-XX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-500" />
                                <span>media@ust-koksa-school.ru</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} МБОУ «Усть-Коксинская СОШ» им. В.И. Харитошкина. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
