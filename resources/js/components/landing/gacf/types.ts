export type TrackCta = (location: string, text: string, destination: string) => void;

export type PricingAction = (
    location: "pricing_pay" | "pricing_whatsapp",
    text: string,
    destination: string,
) => void;
