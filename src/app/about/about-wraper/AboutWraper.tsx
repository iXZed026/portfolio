import React from 'react';
import AboutBox from '@/components/about/about-box/AboutBox'
import IntroductionBox from '@/components/about/introduction-box/IntroductionBox'
import RecordsBox from '@/components/about/records-box/RecordsBox'
import SkillBox from '@/components/about/skill-box/SkillBox'
import Container from '@/components/container/Container'
import ShowMore from '@/components/show-more/ShowMore'

function AboutWraper() {
    return (
        <Container>
            <div>
                <div className='text-center mb-20 about-top-animation '>
                    <h1 className='text-4xl font-bold mb-5'>درباره من</h1>
                    <h4 className='text-xl'>توسعه دهنده فرانت اند با ۳ سال تجربه به صورت خود اموز</h4>
                </div>
                <div className="grid grid-cols-12 gap-y-15 md:gap-x-10 md:gap-y-20">

                    <div className='about-box-style about-right-animation' >
                        <AboutBox title="معرفی حرفه ای">
                            <IntroductionBox />
                            <ShowMore />

                        </AboutBox>
                    </div>

                    <div className='about-box-style about-left-animation'>
                        <AboutBox title="مهارت های تخصصی">
                            <SkillBox />
                            <ShowMore />
                        </AboutBox>
                    </div>

                    <div className='about-box-style about-right-animation'>
                        <AboutBox title={"سوابق شغلی"}>
                            <RecordsBox />

                        </AboutBox>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default AboutWraper