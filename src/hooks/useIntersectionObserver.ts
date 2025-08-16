import { useEffect, useState } from "react";

export function useIntersectionObserver<T extends HTMLElement>(
    rootMargin = "-300px"
) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const refCallback = (node: T | null) => {
        if (node) {
            function sectionObserverHandler(entries: IntersectionObserverEntry[]) {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    return setIsVisible(true)
                }

            }
            new IntersectionObserver(sectionObserverHandler, { rootMargin }).observe(node)
        }
    };

    return { isVisible, refCallback };
}
