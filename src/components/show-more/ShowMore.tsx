"use client"
import { useShowMoreContext } from '@/context/ShowMoreProvider';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";


function ShowMore() {

    const { showMore, setShowMore } = useShowMoreContext()

    function showMoreHandler() {
        setShowMore(!showMore)
    }

    return (
        <span
            className='start-screen gap-1 text-[var(--blue-color2)] cursor-pointer hover'
            onClick={showMoreHandler}
        >
            نمایش بیشتر
            <IoIosArrowDown className={`text-xl ${showMore && "rotate-[180deg]"} transition-all`} />
        </span>
    )
}

export default ShowMore