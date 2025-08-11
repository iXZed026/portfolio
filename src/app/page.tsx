import React from 'react'
import Container from '@/components/container/Container'
import Image from 'next/image'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Typewriter from '@/components/hero/type-writer/Typewriter';

function Home() {
  return (
    <div className='center-screen bg-page'>
      <Container>
        <div className="md:flex-row center-screen flex flex-col-reverse items-center justify-center gap-y-10">

          <div className='w-full start-screen hero-right-section '>
            <div className='w-full flex flex-col items-start gap-7'>
              <h6 className='text-md text-[var(--blue-color2)]'>سلام, من</h6>
              <h1 className='text-4xl md:text-6xl font-bold'>دانیال لطفی <span className='text-[var(--blue-color2)]'>هستم</span></h1>
              <Typewriter />
              <div className='w-full center-screen gap-5 mb-5'>
                <button
                  className='button bg-[var(--blue-color)] w-[160px] h-[52px] hover hover:shadow-md shadow-blue-800'
                >
                  تماس با من
                </button>
                <a
                  className='button border-2 border-gray-400/60 w-[160px] h-[52px] hover hover:shadow-md shadow-gray-600 center-screen'
                  href='/downloads/frontend.pdf'
                  download
                >
                  دانلود رزومه
                </a>
              </div>

              <div className='w-full center-screen gap-5'>
                <a
                  href='https://github.com/iXZed026'
                  className='icon rounded-full bg-gray-700 p-3'>
                  <IoLogoGithub className='text-2xl' />
                </a>
                <a
                  href='https://www.linkedin.com/in/danyal-lotfi-831913354'
                  className='icon rounded-full bg-[var(--blue-color)] p-3'>
                  <FaLinkedin className='text-2xl' />
                </a>
              </div>
            </div>
          </div>

          <div className='w-full center-screen'>
            <div className="relative">
              <Image
                className='rounded-full md:w-[300px] w-[230px] hero-image'
                src="/images/me.jpg"
                width={300}
                height={300}
                alt='image not found'
                priority={true}
              />
              <span
                className='hero-image-baner md:py-1.5 md:px-5 px-3 md:text-lg py-1 text-sm'
              >
                جویای کار !
              </span>
            </div>
          </div>

        </div>
      </Container>
    </div>

  )
}

export default Home