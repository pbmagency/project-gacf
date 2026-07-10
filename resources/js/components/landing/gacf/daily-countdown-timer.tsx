import { useEffect, useState } from "react";

function getSecondsUntilDailyReset() {
    const now = new Date();
    const resetAt = new Date(now);

    resetAt.setHours(24, 0, 0, 0);

    return Math.max(0, Math.floor((resetAt.getTime() - now.getTime()) / 1000));
}

function formatUnit(value: number | null) {
    if (value === null) {
        return "--";
    }

    return String(value).padStart(2, "0");
}

export function DailyCountdownTimer() {
    const [remainingSeconds, setRemainingSeconds] = useState<number | null>(
        null,
    );

    useEffect(() => {
        const update = () => setRemainingSeconds(getSecondsUntilDailyReset());

        update();
        const timerId = window.setInterval(update, 1000);

        return () => window.clearInterval(timerId);
    }, []);

    const hours =
        remainingSeconds === null ? null : Math.floor(remainingSeconds / 3600);
    const minutes =
        remainingSeconds === null
            ? null
            : Math.floor((remainingSeconds % 3600) / 60);
    const seconds =
        remainingSeconds === null ? null : Math.floor(remainingSeconds % 60);

    const units = [
        ["Jam", hours],
        ["Menit", minutes],
        ["Detik", seconds],
    ] as const;

    return (
        <div className="mt-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-200">
                Ambil promo sebelum berakhir
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
                {units.map(([label, value]) => (
                    <div
                        className="rounded-lg border border-amber-300/20 bg-amber-300/[0.08] px-2 py-3 text-center"
                        key={label}
                    >
                        <p className="font-mono text-2xl font-black leading-none text-amber-300 sm:text-3xl">
                            {formatUnit(value)}
                        </p>
                        <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-zinc-400">
                            {label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
