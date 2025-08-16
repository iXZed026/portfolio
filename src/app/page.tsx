"use client"
import { ChildrenProps } from '@/types/children'
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'


function Home({ children }: ChildrenProps) {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname()

  const [isVisable, setIsVisable] = useState<boolean>(false);

  useEffect(() => {
    if (homeRef.current && pathname === "/") {
      homeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [pathname])

  useEffect(() => {
    if (homeRef.current) {
      function sectionObserverHandler(entries: any) {
        const entry = entries[0];

        if (entry.isIntersecting) {
          return setIsVisable(true)
        }

      }
      new IntersectionObserver(sectionObserverHandler, { rootMargin: "-300px" }).observe(homeRef.current)
    }

  }, [])

  return (
    <div className='center-screen bg-page' ref={homeRef}>
      {isVisable && children}
    </div>

  )
}

export default Home