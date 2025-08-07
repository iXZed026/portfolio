import { ChildrenProps } from '@/types/children'
import React from 'react'

function Container({ children }: ChildrenProps) {
    return (
        <div className='w-[90%] xl:w-[65%] mx-auto'>
            {children}
        </div>
    )
}

export default Container