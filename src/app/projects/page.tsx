"use client"
import { ChildrenProps } from '@/types/children';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react'

function Projects({ children }: ChildrenProps) {

    const projectsRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()



    useEffect(() => {
        if (projectsRef.current && pathname === "/projects") {
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname])

    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={projectsRef}>
            {children}
        </div>
    )
}

export default Projects