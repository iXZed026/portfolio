"use client"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { ChildrenProps } from '@/types/children'
import React, { useEffect, useRef, useState } from 'react'


function Home({ children }: ChildrenProps) {

  const { isVisible, refCallback } = useIntersectionObserver()
  const { pathname, scrollCallback } = useScrollIntoView()

  const homeRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    refCallback(homeRef.current)
    scrollCallback(homeRef.current,"/")
  }, [pathname])


  return (
    <div className='center-screen bg-page' ref={homeRef}>
      {isVisible && children}
    </div>

  )
}

export default Home