import { ArrowRight, Play } from 'lucide-react';
import Dither from './Dither';
import TextType from './TextType';
import BlurText from './BlurText';
import Counter from './Counter';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Dither
                    waveSpeed={0.03}
                    waveFrequency={3}
                    waveAmplitude={0.3}
                    waveColor={[0.27, 0.15, 0.55]}
                    colorNum={4}
                    pixelSize={2}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={1}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/40 via-[#050507]/20 to-[#050507] z-[1]" />

            <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto mt-20">
                <div className="inline-flex items-center gap-2 text-xs text-zinc-400 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse" />
                    МБОУ «Усть-Коксинская СОШ» им. В.И. Харитошкина
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
                    МедиаЦентр <br />
                    <span className="text-violet-400">
                        <TextType
                            text={["школы", "будущего", "твоих идей"]}
                            typingSpeed={100}
                            deletingSpeed={50}
                            pauseDuration={2000}
                            cursorCharacter="_"
                        />
                    </span>
                </h1>

                <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    Голос поколения в каждом формате: школьное ТВ, радиоэфиры и актуальные новости. Присоединяйся к команде создателей.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a href="#news" className="flex items-center gap-2 bg-violet-600 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-violet-500 transition-all hover:shadow-lg hover:shadow-violet-600/20">
                        Смотреть новости <Play className="w-4 h-4 fill-current" />
                    </a>
                    <a href="#team" className="flex items-center gap-2 text-zinc-400 border border-white/[0.06] px-8 py-4 rounded-xl text-sm hover:border-white/[0.12] hover:text-zinc-200 transition-all backdrop-blur-sm bg-white/[0.01]">
                        Наша команда <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.04] pt-10">
                    {[
                        { value: "50+", label: "Репортажей" },
                        { value: "100+", label: "Эфиров" },
                        { value: "15", label: "Наград" },
                        { value: "24/7", label: "Творчества" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="text-3xl font-bold mb-1 text-white">{s.value}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
