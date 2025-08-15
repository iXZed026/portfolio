import ContactBox from '@/components/contact/contact-box/ContactBox'
import Container from '@/components/container/Container'
import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

function Contact() {
    return (
        <div className='bg-page center-screen py-20 overflow-x-hidden'>
            <Container>
                <div>
                    <div className='text-center mb-20 top-projects-animation'>
                        <h1 className='text-4xl font-bold mb-5'>راه‌های ارتباط با من</h1>
                        <h4 className='text-xl'>برای همکاری یا گفتگو می‌توانید از طریق روش‌های زیر با من در ارتباط باشید</h4>
                    </div>
                    <div className='xl:w-[75%] md:w-[90%] w-full p-10 mx-auto grid-12 rounded-lg bg-[var(--bg-gray-color)] border-1 border-gray-600/70'>
                        <div className='span-2'>
                            <h3 className='mb-8 text-xl font-semibold'>اطلاعات تماس</h3>
                            <ContactBox
                                title={"Email"}
                                Icon={MdEmail}
                                socialID={"danyal.titanka24@gmail.com"}
                                href={"mailto:danyal.titanka24@gmail.com"}
                                color={"orange"}
                            />
                            <ContactBox
                                title={"Phone"}
                                Icon={BsTelephone}
                                socialID={"09044296231"}
                                href={"tel:+989044296231"}
                                color={"#00C950"}
                            />
                            <ContactBox
                                title={"Telegram"}
                                Icon={FaTelegram}
                                socialID={"iXZed026@"}
                                href={"https://t.me/ixzed026/"}
                                color={"black"}
                            />
                        </div>

                        <div className='span-2'>
                            <h3 className='mb-8 text-xl font-semibold'>شبکه های اجتماعی</h3>
                            <div>
                                <ContactBox
                                    title={"Github"}
                                    Icon={FaGithub}
                                    socialID={"https://github.com/iXZed026"}
                                    href={"https://github.com/iXZed026"}
                                    color={"white"}
                                />
                                <ContactBox
                                    title={"Linkedin"}
                                    Icon={FaLinkedin}
                                    socialID={"Danyal Lotfi"}
                                    href={"https://www.linkedin.com/in/danyal-lotfi-831913354/"}
                                    color={"cyan"}
                                />
                                <a target='_blank' href="mailto:danyal.titanka24@gmail.com">
                                    <button className='contact-button center-screen gap-3 hover'>
                                        <MdEmail className='text-2xl'/>
                                        ارسال ایمیل سریع
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact