"use client"
import { ChildrenProps } from '@/types/children';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function Contact({ children }: ChildrenProps) {

    const contactRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();

    const [isVisable, setIsVisable] = useState<boolean>(false);


    useEffect(() => {
        if (contactRef.current && pathname === "/contact") {
            contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname]);

    useEffect(() => {
        if (contactRef.current) {
            function sectionObserverHandler(entries: any) {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    return setIsVisable(true)
                } else {
                    return setIsVisable(false)
                }

            }
            new IntersectionObserver(sectionObserverHandler, { rootMargin: "-300px" }).observe(contactRef.current)
        }

    }, [])

    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={contactRef}>
            {
                isVisable && children
            }
        </div>
    )
}

export default Contact