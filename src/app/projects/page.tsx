import Container from '@/components/container/Container'
import ProjectBox from '@/components/projects/project-box/ProjectBox'
import React from 'react'

function Projects() {
    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden'>
            <Container>
                <div>
                    <div className='text-center mb-20 top-projects-animation '>
                        <h1 className='text-4xl font-bold mb-5'>پروژه‌های من</h1>
                        <h4 className='text-xl'>برخی از کارهای اخیر من که با عشق و دقت ساخته شده‌اند</h4>
                    </div>
                    <div className='grid-12'>
                        <ProjectBox />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects