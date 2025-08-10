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
                            className='rounded-full border-2 '
                            src="/images/me-logo.png"
                            width={45}
                            height={45}
                            alt='danyal profile'
                            priority={true}
                        />
                    </Link>
                </div>
                <HumbMenu />
            </div>
        </Container>
    )
}

export default NavBarWrapper