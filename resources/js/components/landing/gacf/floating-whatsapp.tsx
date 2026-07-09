import type { TrackCta } from "./types";

interface FloatingWhatsappProps {
    onCtaClick: TrackCta;
}

const whatsappUrl = import.meta.env.VITE_GACF_WHATSAPP_URL || "#pricing";
const isExternalWhatsapp = whatsappUrl.startsWith("http");

export function FloatingWhatsapp({ onCtaClick }: FloatingWhatsappProps) {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <a
                aria-label="Chat tim GACF via WhatsApp"
                className="peer grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition duration-200 hover:-translate-y-1 hover:bg-[#1fc45c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080b]"
                href={whatsappUrl}
                onClick={() =>
                    onCtaClick("floating_whatsapp", "WhatsApp Floating", whatsappUrl)
                }
                rel={isExternalWhatsapp ? "noreferrer" : undefined}
                target={isExternalWhatsapp ? "_blank" : undefined}
            >
                <WhatsappIcon />
            </a>
            <div className="pointer-events-none absolute bottom-16 right-8 hidden w-max max-w-[250px] origin-bottom-right translate-y-3 scale-95 rounded-[18px] bg-[#DCF8C6] px-4 py-3 text-sm leading-6 text-[#123524] opacity-0 shadow-2xl shadow-black/40 transition duration-200 peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100 peer-focus-visible:translate-y-0 peer-focus-visible:scale-100 peer-focus-visible:opacity-100 sm:block">
                <span className="font-black text-[#075E54]">Butuh tanya dulu?</span>
                <br />
                Chat tim GACF via WhatsApp.
                <span className="absolute -bottom-1.5 right-4 h-4 w-4 rotate-45 rounded-br-sm bg-[#DCF8C6]" />
            </div>
        </div>
    );
}

function WhatsappIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 32 32"
        >
            <path d="M16.04 4C9.41 4 4.02 9.29 4.02 15.8c0 2.07.55 4.09 1.6 5.87L4 28l6.48-1.67a12.18 12.18 0 0 0 5.56 1.39c6.63 0 12.02-5.29 12.02-11.8S22.67 4 16.04 4Zm0 21.72c-1.78 0-3.52-.47-5.05-1.37l-.36-.21-3.85.99.99-3.65-.24-.38a9.64 9.64 0 0 1-1.5-5.3c0-5.41 4.49-9.8 10.01-9.8s10.01 4.39 10.01 9.8-4.49 9.92-10.01 9.92Zm5.5-7.43c-.3-.15-1.78-.86-2.06-.96-.28-.1-.48-.15-.68.15-.2.3-.78.96-.96 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.45-2.4-1.45-.89-.78-1.49-1.74-1.66-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.6-.93-2.19-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.43s1.07 2.82 1.22 3.02c.15.2 2.1 3.14 5.1 4.4.71.3 1.27.48 1.7.62.72.22 1.37.19 1.88.12.57-.08 1.78-.71 2.03-1.39.25-.68.25-1.27.18-1.39-.07-.12-.27-.2-.57-.35Z" />
        </svg>
    );
}
