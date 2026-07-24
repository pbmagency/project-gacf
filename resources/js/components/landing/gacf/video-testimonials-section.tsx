import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";


import videoBuYulie from "../../../../../storage/app/public/testi-video/TestimoniVol.mp4";
import videoPakAgus from "../../../../../storage/app/public/testi-video/TestimoniVol1.mp4";

export function VideoTestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="LIHAT BUKTINYA SENDIRI"
                        title="TESTIMONI VIDEO MEMBER GACF"
                    />
                </Reveal>

                <div className="mt-12 flex flex-col items-center gap-10">
                    <Reveal delay={100} className="w-full max-w-3xl">
                        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                            <video
                                src={videoBuYulie}
                                controls
                                preload="metadata"
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </Reveal>
                    
                    <Reveal delay={200} className="w-full max-w-3xl">
                        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                            <video
                                src={videoPakAgus}
                                controls
                                preload="metadata"
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}