import { ChildrenProps } from '@/types/children'
import React from 'react'

function Layout({ children }: ChildrenProps) {
    return (
        <>
            {children}
        </>
    )
}

export default Layout