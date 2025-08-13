"use client"
import { ChildrenProps } from "@/types/children";
import { createContext, useContext, useState } from "react";

interface IShowMore {
    showMore: boolean,
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowMoreContext = createContext<IShowMore | null>(null);

export function useShowMoreContext(): IShowMore {
    const context = useContext(ShowMoreContext)
    if (!context) {
        throw new Error("show more context error")
    }
    return context
}

function ShowMoreProvider({ children }: ChildrenProps) {

    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <ShowMoreContext.Provider value={{ showMore, setShowMore }}>
            {children}
        </ShowMoreContext.Provider>
    )
}

export default ShowMoreProvider
