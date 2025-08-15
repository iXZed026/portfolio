"use client"
import { ChildrenProps } from '@/types/children'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react'


function Home({ children }: ChildrenProps) {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname()



  useEffect(() => {
    if (homeRef.current && pathname === "/") {
      homeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [pathname])

  return (
    <div className='center-screen bg-page' ref={homeRef}>
      {children}
    </div>

  )
}

export default Home