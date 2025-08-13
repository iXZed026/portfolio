import { ChildrenProps } from '@/types/children'
import React from 'react'

function AboutBox({ children, title }: ChildrenProps & { title: string }) {
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-5'>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AboutBox