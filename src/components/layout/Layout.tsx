import { ChildrenProps } from '@/types/children'
import React from 'react'
import NavBar from '../navbar/NavBar'
import ActiveHumbProvider from '@/context/ActiveHumbProvider'
import NavBarWrapper from '../navbar/navbar-wrapper/NavBarWrapper'
import Home from '@/app/page'
import About from '@/app/about/page'
import ShowMoreProvider from '@/context/ShowMoreProvider'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <ActiveHumbProvider>
                <NavBar>
                    <NavBarWrapper />
                </NavBar>
            </ActiveHumbProvider>
            <ShowMoreProvider>
                <Home />
                <About />
            </ShowMoreProvider>
        </>
    )
}

export default Layout