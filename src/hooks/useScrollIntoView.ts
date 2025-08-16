import { usePathname } from "next/navigation";

export function useScrollIntoView<T extends HTMLDivElement>() {

    const pathname = usePathname()

    function scrollCallback(node: T | null, href: string) {
        if (node && pathname === href) {
            node.scrollIntoView({ behavior: "smooth" })
        }
    }
    return { pathname, scrollCallback }
}

