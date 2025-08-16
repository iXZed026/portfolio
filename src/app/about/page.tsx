"use client"
import { ChildrenProps } from '@/types/children'
import { usePathname } from 'next/navigation';
import path from 'path';
import React, { useEffect, useRef, useState } from 'react'

function About({ children }: ChildrenProps) {

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()

    const [isVisable, setIsVisable] = useState<boolean>(false);


    useEffect(() => {
        if (aboutRef.current && pathname === "/about") {
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname])

    useEffect(() => {
        if (aboutRef.current) {
            function sectionObserverHandler(entries: any) {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    return setIsVisable(true)
                }

            }
            new IntersectionObserver(sectionObserverHandler, { rootMargin: "-300px" }).observe(aboutRef.current)
        }

    }, [])


    return (
        <div className='bg-page py-20 overflow-x-hidden' ref={aboutRef}>
            {isVisable && children}
        </div>
    )
}

export default About