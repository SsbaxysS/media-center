import { Facebook, Instagram, Youtube, Mail, Send, MapPin, Phone } from 'lucide-react';


export function Footer() {
    return (
        <footer className="border-t border-white/[0.04] bg-[#020203] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-600/20">
                                <span className="text-white font-bold text-xs">МЦ</span>
                            </div>
                            <span className="font-bold text-lg text-white tracking-tight">МедиаЦентр</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                            Создаем будущее медиа вместе. Уникальное пространство для творчества, обучения и реализации ваших смелых идей.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={Youtube} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                            <SocialLink icon={Facebook} href="#" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6">Навигация</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#hero">Главная</FooterLink>
                            <FooterLink href="#news">Новости</FooterLink>
                            <FooterLink href="#team">Команда</FooterLink>
                            <FooterLink href="#about">О нас</FooterLink>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-6">Контакты</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-zinc-500 text-sm">
                                <MapPin className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                                <span>ул. Школьная, 1, с. Усть-Кокса</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 text-sm">
                                <Phone className="w-4 h-4 text-violet-500 shrink-0" />
                                <span>+7 (388) 482-24-01</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 text-sm">
                                <Mail className="w-4 h-4 text-violet-500 shrink-0" />
                                <span>info@school-media.ru</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-6">Подписаться</h4>
                        <p className="text-zinc-500 text-sm mb-4">Будьте в курсе последних школьных новостей.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Ваш Email"
                                className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-colors placeholder:text-zinc-600"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-violet-600 rounded-lg text-white hover:bg-violet-500 transition-colors">
                                <Send className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-zinc-600 text-xs">
                        © {new Date().getFullYear()} МБОУ «Усть-Коксинская СОШ». Все права защищены.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 hover:border-violet-600 transition-all duration-300"
        >
            <Icon size={18} />
        </a>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <a href={href} className="text-zinc-500 hover:text-violet-400 text-sm transition-colors block">
                {children}
            </a>
        </li>
    );
}
