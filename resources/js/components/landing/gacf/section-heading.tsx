interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
        >
            {eyebrow ? (
                <div
                    className={`mb-4 flex max-w-full items-center gap-2 sm:gap-3 ${
                        align === "center" ? "justify-center" : "justify-start"
                    }`}
                >
                    <span className="h-px w-5 shrink-0 bg-amber-300/70 sm:w-8" />
                    <p className="min-w-0 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-amber-300 sm:tracking-[0.18em]">
                        {eyebrow}
                    </p>
                    {align === "center" ? (
                        <span className="h-px w-5 shrink-0 bg-amber-300/70 sm:w-8" />
                    ) : null}
                </div>
            ) : null}
            <h2 className="text-balance text-2xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {title}
            </h2>
            {subtitle ? (
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
                    {subtitle}
                </p>
            ) : null}
        </div>
    );
}
