import { ChildrenProps } from '@/types/children'
import React from 'react'
import NavBar from '../navbar/NavBar'
import ActiveHumbProvider from '@/context/ActiveHumbProvider'
import NavBarWrapper from '../navbar/navbar-wrapper/NavBarWrapper'
import Home from '@/app/page'
import About from '@/app/about/page'
import ShowMoreProvider from '@/context/ShowMoreProvider'
import Projects from '@/app/projects/page'
import Footer from '../footer/Footer'
import Contact from '@/app/contact/page'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <ActiveHumbProvider>
                <NavBar>
                    <NavBarWrapper />
                </NavBar>
            </ActiveHumbProvider>
            <Home />
            <ShowMoreProvider>
                <About />
            </ShowMoreProvider>
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout