import { ChildrenProps } from '@/types/children'
import React from 'react'
import NavBar from '../navbar/NavBar'
import ActiveHumbProvider from '@/context/ActiveHumbProvider'
import NavBarWrapper from '../navbar/navbar-wrapper/NavBarWrapper'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            <ActiveHumbProvider>
                <NavBar>
                    <NavBarWrapper />
                </NavBar>
            </ActiveHumbProvider>
            {children}
        </>
    )
}

export default Layout