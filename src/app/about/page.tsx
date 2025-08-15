"use client"
import { ChildrenProps } from '@/types/children'
import { usePathname } from 'next/navigation';
import path from 'path';
import React, { useEffect, useRef } from 'react'

function About({ children }: ChildrenProps) {

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()



    useEffect(() => {
        if (aboutRef.current && pathname === "/about") {
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname])

    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={aboutRef}>
            {children}
        </div>
    )
}

export default About