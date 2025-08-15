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
import AboutWraper from '@/app/about/about-wraper/AboutWraper'
import HomeWraper from '../home-wraper/HomeWraper'

function Layout() {

    return (
        <>
            <ActiveHumbProvider>
                <NavBar>
                    <NavBarWrapper />
                </NavBar>
            </ActiveHumbProvider>
            <Home>
                <HomeWraper />
            </Home>
            <ShowMoreProvider>
                <About >
                    <AboutWraper />
                </About>
            </ShowMoreProvider>
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout