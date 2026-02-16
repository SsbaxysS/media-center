import { Play, Mic, FileText } from 'lucide-react';

export function Hero() {
    return (
        <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Школьный пресс-центр
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
                        Голос школы <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            в каждом формате
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                        Мы рассказываем о жизни МБОУ «Усть-Коксинская СОШ» им. В.И. Харитошкина через видеорепортажи, радиоэфиры и школьную газету.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#news" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300">
                            Смотреть новости
                            <Play className="h-4 w-4 fill-current" />
                        </a>
                        <a href="#team" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition-all hover:border-slate-300">
                            Стать частью команды
                        </a>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
                <div className="absolute top-0 right-0 translate-x-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />
            </div>
        </section>
    );
}
