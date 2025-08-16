"use client"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { ChildrenProps } from '@/types/children'
import React, { useEffect, useRef } from 'react'

function About({ children }: ChildrenProps) {

    const { isVisible, refCallback } = useIntersectionObserver();
    const { pathname, scrollCallback } = useScrollIntoView()

    const aboutRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        refCallback(aboutRef.current)
        scrollCallback(aboutRef.current,"/about")
    }, [pathname])


    return (
        <div className='bg-page py-20 overflow-x-hidden' ref={aboutRef}>
            {isVisible && children}
        </div>
    )
}

export default About