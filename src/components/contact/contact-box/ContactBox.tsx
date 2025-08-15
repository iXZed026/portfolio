import React from 'react';
import { IconType } from 'react-icons';

interface IContactBox {
    title: string
    Icon: IconType
    socialID: string
    href: string
    color: string
}

function ContactBox({ title, Icon, socialID, href, color }: IContactBox) {
    return (
        <a
            href={href}
            target='_blank'
            className='start-screen gap-5 transition-all hover:bg-gray-700/70 py-3 rounded-lg mb-5 contact-top-animation'>
            <div className='bg-gray-500/60 rounded-lg p-3'>
                <Icon style={{ color: color }} className="text-3xl" />
            </div>
            <div>
                <h5 className='text-gray-300 text-lg'>{title}</h5>
                <h5 className='text-gray-400 text-md'>{socialID}</h5>
            </div>
        </a>
    )
}

export default ContactBox