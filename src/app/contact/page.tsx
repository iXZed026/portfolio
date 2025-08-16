"use client"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { ChildrenProps } from '@/types/children';
import { useEffect, useRef, useState } from 'react';

function Contact({ children }: ChildrenProps) {

    const { isVisible, refCallback } = useIntersectionObserver();
    const { pathname, scrollCallback } = useScrollIntoView()

    const contactRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        refCallback(contactRef.current)
        scrollCallback(contactRef.current,"/contact")
    }, [pathname]);



    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={contactRef}>
            {
                isVisible && children
            }
        </div>
    )
}

export default Contact