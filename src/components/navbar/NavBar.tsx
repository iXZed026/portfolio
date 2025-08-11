"use client"
import { ChildrenProps } from '@/types/children'
import React, { useEffect, useRef } from 'react'

function NavBar({ children }: ChildrenProps) {

    const headerRef = useRef<HTMLDivElement | null>(null)

    const headerStyle = "w-full fixed py-4 z-50"

    useEffect(() => {

        function calculateScrollY() {
            if (headerRef.current) {
                if (window.scrollY > 5) {
                    headerRef.current.className = `${headerStyle} backdrop-blur-md bg-gray-900/50 shadow-lg`
                } else {
                    headerRef.current.className = headerStyle
                }
            }
        }

        window.addEventListener("scroll", calculateScrollY)

        return () => {
            window.removeEventListener("scroll", calculateScrollY)
        }

    }, [])

    return (
        <header className={headerStyle} ref={headerRef}>
            {children}
        </header>
    )
}

export default NavBar