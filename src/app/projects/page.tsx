"use client"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { ChildrenProps } from '@/types/children';
import React, { useEffect, useRef } from 'react'

function Projects({ children }: ChildrenProps) {

    const { isVisible, refCallback } = useIntersectionObserver()
    const { pathname, scrollCallback } = useScrollIntoView()

    const projectsRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        refCallback(projectsRef.current)
        scrollCallback(projectsRef.current,"/projects")
    }, [pathname])


    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={projectsRef}>
            {
                isVisible && children
            }
        </div>
    )
}

export default Projects