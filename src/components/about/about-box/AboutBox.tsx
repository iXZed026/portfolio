import { ChildrenProps } from '@/types/children'
import React from 'react'

function AboutBox({ children, title }: ChildrenProps & { title: string }) {
    return (
        <div
            className='bg-[var(--bg-gray-color)] p-10 rounded-xl col-span-6 border-[1px] border-gray-500/50'
        >
            <h2 className='text-2xl font-semibold mb-5'>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AboutBox