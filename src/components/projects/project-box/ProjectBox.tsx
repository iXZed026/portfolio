import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from "react-icons/cg";
import { IProjects } from '@/app/api/projects/route';

async function ProjectBox() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
        cache: 'force-cache',
    });
    let projects;

    res.ok ? projects = await res.json() : projects = [];

    return (
        <>
            {
                projects.map((project: IProjects) => (
                    <div key={project.id} className='projects-left-animation span-3 border-[0.5px] border-gray-600/50 bg-[var(--bg-gray-color)] rounded-lg project-box'>
                        <div className='mb-4 h-[220px]'>
                            <Image
                                className='w-full rounded-lg'
                                src={project.image}
                                width={390}
                                height={390}
                                priority={true}
                                quality={60}
                                alt='demo image'
                            />
                        </div>
                        <div className='p-3 mb-2'>
                            <h5 className='text-xl font-semibold mb-3'>{project.projectName}</h5>
                            <h6 className='text-[var(--desc-color)] mb-3 text-md'>{project.describtion}</h6>
                            <div className='start-screen gap-5'>
                                {project.technologies.map((tech, key) => <span key={key} className='project-skill'>{tech}</span>)}

                            </div>
                            <div className='center-screen gap-10 mt-7'>
                                <a
                                    className='bg-gray-600/70 px-5 py-2 rounded-md between-screen gap-1 hover'
                                    target='_blankZ'
                                    href={project.hrefs[0]}
                                >
                                    <FaGithub className='text-xl' />
                                    منبع
                                </a>
                                <a
                                    className='bg-transparent border-1 border-gray-500/60 px-5 py-2 between-screen gap-1 rounded-md hover'
                                    target='_blankZ'
                                    href={project.hrefs[1]}
                                >
                                    <CgWebsite className='text-xl' />
                                    دیدن
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProjectBox