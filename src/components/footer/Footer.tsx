import React from 'react'
import Container from '../container/Container'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='bg-[var(--bg-gray-color)] py-5 border-t-1 border-gray-500/60'>
            <Container>
                <div className='grid-12 py-8 border-b-1 border-gray-600/75'>
                    <div className='span-3 '>
                        <h3 className='mb-7 text-xl font-semibold'>درباره من</h3>
                        <p className='text-[var(--desc-color)] text-lg'>یک توسعه‌دهنده فرانت‌اند علاقه‌مند به ساخت تجربیات وب زیبا و کاربردی با فناوری‌های مدرن.</p>
                    </div>
                    <div className='span-3'>
                        <h3 className='mb-7 text-xl font-semibold'>لینک‌های سریع</h3>
                        <ul className='flex flex-col gap-3 text-[var(--desc-color)] text-lg'>
                            <li>
                                <Link className='hover:text-[var(--blue-color2)] transition-all' href={"/"} >خانه</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[var(--blue-color2)] transition-all' href={"/about"} >درباره من</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[var(--blue-color2)] transition-all' href={"/projects"} >پروژه‌ها</Link>
                            </li>
                            <li>
                                <Link className='hover:text-[var(--blue-color2)] transition-all' href={"/contact"} >ارتباط با من</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='span-3'>
                        <h3 className='mb-7 text-xl font-semibold'>شبکه‌های اجتماعی</h3>
                        <div className="start-screen gap-5">
                            <a className='bg-gray-600/80 rounded-full p-3 hover' target='_blank' href="https://github.com/iXZed026">
                                <FaGithub className='text-2xl opacity-80' />
                            </a>
                            <a className='bg-gray-600/80 rounded-full p-3 hover' target='_blank' href="https://www.linkedin.com/in/danyal-lotfi-831913354/">
                                <FaLinkedinIn className='text-2xl opacity-80' />
                            </a>
                            <a className='bg-gray-600/80 rounded-full p-3 hover' href="mailto:danyal.titanka24@gmail.com">
                                <MdEmail className='text-2xl opacity-80' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='text-center text-[var(--desc-color)] text-lg py-8'>
                    <h2 className='bg-[var(--bg-gray-color)]'>© 2025 تمامی حقوق محفوظ است | طراحی و توسعه توسط دانیال</h2>
                </div>
            </Container>
        </div>
    )
}

export default Footer