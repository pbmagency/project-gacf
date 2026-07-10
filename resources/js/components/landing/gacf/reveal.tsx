import {
    type CSSProperties,
    type HTMLAttributes,
    type LiHTMLAttributes,
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

interface RevealBaseProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    style?: CSSProperties;
}

type RevealProps = RevealBaseProps & HTMLAttributes<HTMLDivElement>;
type RevealArticleProps = RevealBaseProps & HTMLAttributes<HTMLElement>;
type RevealListItemProps = RevealBaseProps & LiHTMLAttributes<HTMLLIElement>;

function getInitialRevealState() {
    if (typeof window === "undefined") {
        return true;
    }

    return (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
    );
}

function useReveal<TElement extends HTMLElement>() {
    const ref = useRef<TElement>(null);
    const [isVisible, setIsVisible] = useState(getInitialRevealState);

    useEffect(() => {
        const node = ref.current;

        if (!node || typeof window === "undefined" || isVisible) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.12,
            },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [isVisible]);

    return { isVisible, ref };
}

function getRevealClassName(isVisible: boolean, className = "") {
    return ["gacf-reveal", isVisible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ");
}

function getRevealStyle(delay: number, style?: CSSProperties) {
    return {
        ...style,
        "--reveal-delay": `${delay}ms`,
    } as CSSProperties;
}

export function Reveal({
    children,
    className,
    delay = 0,
    style,
    ...props
}: RevealProps) {
    const { isVisible, ref } = useReveal<HTMLDivElement>();

    return (
        <div
            className={getRevealClassName(isVisible, className)}
            ref={ref}
            style={getRevealStyle(delay, style)}
            {...props}
        >
            {children}
        </div>
    );
}

export function RevealArticle({
    children,
    className,
    delay = 0,
    style,
    ...props
}: RevealArticleProps) {
    const { isVisible, ref } = useReveal<HTMLElement>();

    return (
        <article
            className={getRevealClassName(isVisible, className)}
            ref={ref}
            style={getRevealStyle(delay, style)}
            {...props}
        >
            {children}
        </article>
    );
}

export function RevealListItem({
    children,
    className,
    delay = 0,
    style,
    ...props
}: RevealListItemProps) {
    const { isVisible, ref } = useReveal<HTMLLIElement>();

    return (
        <li
            className={getRevealClassName(isVisible, className)}
            ref={ref}
            style={getRevealStyle(delay, style)}
            {...props}
        >
            {children}
        </li>
    );
}
