import { Reveal } from "./reveal";

export function ProofVideoSection() {
    return (
        <section className="relative overflow-hidden bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <h2 className="text-center text-3xl font-black uppercase leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
                        HASIL BISA DI CEK
                    </h2>
                </Reveal>

                <div className="mt-12 flex flex-col items-center">
                    {/* Max width is smaller here to simulate a mobile screen for a vertical video */}
                    <Reveal delay={100} className="w-full max-w-[320px] sm:max-w-[400px]">
                        <div className="overflow-hidden rounded-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                            <video
                                src="https://hariyantochung.com/wp-content/uploads/2026/06/Testimoni-MCI.mp4"
                                controls
                                preload="metadata"
                                playsInline
                                className="w-full aspect-[9/16] object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}