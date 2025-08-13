import React from 'react';
import SkillBoxWraper from './skill-box-wraper/SkillBoxWraper';

async function SkillBox() {

    const res = await fetch("http://localhost:3000/api/skills");
    let skills;

    if (res.ok) {
        skills = await res.json();

    } else {
        skills = [];
    }




    return (
        <>
            <SkillBoxWraper skills={skills} />
        </>
    )
}

export default SkillBox