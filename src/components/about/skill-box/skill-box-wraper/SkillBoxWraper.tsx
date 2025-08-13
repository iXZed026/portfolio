"use client"
import { ISkills } from '@/app/api/skills/route';
import { useShowMoreContext } from '@/context/ShowMoreProvider';
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGit, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from 'react-icons/si';


function SkillBoxWraper({ skills }: { skills: ISkills[] }) {

    const { showMore } = useShowMoreContext();
    const [visableSkills, setVisableSkills] = useState<ISkills[]>([])

    function showSkill(Counter: number) {

        const icons: IconType[] = [
            FaHtml5,
            FaCss3,
            FaJs,
            FaReact,
            RiNextjsFill,
            RiTailwindCssFill,
            FaBootstrap,
            FaGit,
            FaGithub,
            SiRedux,
        ]

        let Icon = icons[Counter];
        return <Icon className="text-[#50A2FF] text-xl" />
    }

    useEffect(() => {

        if (showMore) {
            setVisableSkills(skills)
        } else {
            setVisableSkills(skills.slice(0, 5))
        }

    }, [showMore]);


    return (

        visableSkills.map((item: ISkills, i: number) => (
            <div className='my-5' key={item.id}>
                <div className='start-screen mb-3 gap-4'>
                    <div className='p-2 rounded-md bg-[#1D3063]'>
                        {
                            showSkill(i)
                        }
                    </div>
                    <span className='opacity-70 text-sm'>{item.name}</span>
                    <span className='opacity-70 text-sm'>{item.mastery}%</span>
                </div>
                <div>
                    <div className='bg-gray-600 w-full h-[10px] rounded-xl'>
                        <div style={{ width: `${item.mastery}%` }} className={` h-[10px] skill-color rounded-xl`}></div>
                    </div>
                </div>
            </div>
        ))

    )
}

export default SkillBoxWraper