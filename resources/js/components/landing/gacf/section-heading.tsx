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
                    className={`mb-4 flex items-center gap-3 ${
                        align === "center" ? "justify-center" : "justify-start"
                    }`}
                >
                    <span className="h-px w-8 bg-amber-300/70" />
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                        {eyebrow}
                    </p>
                    {align === "center" ? (
                        <span className="h-px w-8 bg-amber-300/70" />
                    ) : null}
                </div>
            ) : null}
            <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
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
