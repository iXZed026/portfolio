import AboutBox from '@/components/about/about-box/AboutBox'
import IntroductionBox from '@/components/about/introduction-box/IntroductionBox'
import RecordsBox from '@/components/about/records-box/RecordsBox'
import SkillBox from '@/components/about/skill-box/SkillBox'
import Container from '@/components/container/Container'
import ShowMore from '@/components/show-more/ShowMore'
import React from 'react'

function About() {
    return (
        <div className='bg-page center-screen py-20'>
            <Container>
                <div>
                    <div className='text-center mb-20'>
                        <h1 className='text-4xl font-bold mb-5'>درباره من</h1>
                        <h4 className='text-xl'>توسعه دهنده فرانت اند با ۳ سال تجربه به صورت خود اموز</h4>
                    </div>
                    <div className="grid grid-cols-12 gap-10">

                        <AboutBox title="معرفی حرفه ای">
                            <IntroductionBox />
                            <ShowMore />

                        </AboutBox>

                        <AboutBox title="مهارت های تخصصی">
                            <>
                                <SkillBox />
                                <ShowMore />
                            </>
                        </AboutBox>

                        <AboutBox title={"سوابق شغلی"}>
                            <RecordsBox />

                        </AboutBox>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About