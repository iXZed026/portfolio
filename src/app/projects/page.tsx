"use client"
import { ChildrenProps } from '@/types/children';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

function Projects({ children }: ChildrenProps) {

    const projectsRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()

    const [isVisable, setIsVisable] = useState<boolean>(false);

    useEffect(() => {
        if (projectsRef.current && pathname === "/projects") {
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname])

    useEffect(() => {
        if (projectsRef.current) {
            function sectionObserverHandler(entries: any) {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    return setIsVisable(true)
                }

            }
            new IntersectionObserver(sectionObserverHandler, { rootMargin: "-300px" }).observe(projectsRef.current)
        }

    }, [])

    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={projectsRef}>
            {
                isVisable && children
            }
        </div>
    )
}

export default Projects