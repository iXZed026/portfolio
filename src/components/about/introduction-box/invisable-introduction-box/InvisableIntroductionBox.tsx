"use client"
import { useShowMoreContext } from '@/context/ShowMoreProvider'
import React from 'react'

function InvisableIntroductionBox() {

    const { showMore } = useShowMoreContext();

    return (
        <div className={`${showMore ? "visable-box" : "hidden-box"}`}> 
            <p className='mb-5'>
                از آنجایی که دنیای تکنولوژی همیشه در حال پیشرفت است، تلاش کرده‌ام خودم را با جدیدترین ابزارها و روش‌های توسعه همگام نگه دارم. مطالعه‌ی مستندات رسمی، دنبال کردن منابع آموزشی آنلاین و شرکت در پروژه‌های مختلف باعث شده همیشه در مسیر رشد و یادگیری باقی بمانم.
            </p>

            <p className='mb-5'>
                هدف من به عنوان یک توسعه‌دهنده فرانت‌اند، خلق تجربه‌های کاربری جذاب و کاربردی است. من دوست دارم در پروژه‌هایی فعالیت کنم که هم چالش‌های فنی داشته باشند و هم امکان خلاقیت در طراحی و پیاده‌سازی رابط کاربری را فراهم کنند. آینده شغلی‌ام را در این مسیر روشن می‌بینم و همواره آماده یادگیری و رشد بیشتر هستم.
            </p>
        </div>
    )
}

export default InvisableIntroductionBox