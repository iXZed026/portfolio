"use client"

import React, { createContext, SetStateAction, useContext, useState } from 'react'
import { ChildrenProps } from '@/types/children'

interface ActiveHumbContextType {
    activeHumb: boolean,
    setActiveHumb: React.Dispatch<SetStateAction<boolean>>
}

const ActiveHumbContext = createContext<ActiveHumbContextType | null>(null)

export function useActiveHumb() {
    const context = useContext(ActiveHumbContext);
    if (!context) {
        throw new Error("To use useContext, you must first affect the relevant provider.");
    }
    return context;
}

function ActiveHumbProvider({ children }: ChildrenProps) {

    const [activeHumb, setActiveHumb] = useState<boolean>(false)

    return (
        <ActiveHumbContext.Provider value={{ activeHumb, setActiveHumb }}>
            {children}
        </ActiveHumbContext.Provider>
    )
}

export default ActiveHumbProvider