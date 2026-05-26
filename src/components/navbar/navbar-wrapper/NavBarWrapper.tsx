import Container from '@/components/container/Container'
import Image from 'next/image'
import HumbMenu from '../humb-menu/HumbMenu'
import Link from 'next/link'

function NavBarWrapper() {

    return (
        <Container>
            <div className='flex justify-between items-center relative'>
                <div className="logo z-3">
                    <Link href="/">
                        <Image
                            className='
                                rounded-full 
                                bg-[var(--blue-color)] 
                                border-2 
                                border-[var(--blue-color2)]
                            '
                            src="/images/me-logo-og.png"
                            width={45}
                            height={45}
                            alt='danyal profile'
                            // priority={true}
                        />
                    </Link>
                </div>
                <HumbMenu />
            </div>
        </Container>
    )
}

export default NavBarWrapper