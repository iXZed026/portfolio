"use client"
import { ChildrenProps } from '@/types/children';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

function Contact({ children }: ChildrenProps) {

    const contactRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname()

    useEffect(() => {
        if (contactRef.current && pathname === "/contact") {
            contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [pathname])

    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden' ref={contactRef}>
            {children}
        </div>
    )
}

export default Contact