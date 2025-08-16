import React from 'react';

interface ICareerRecord {
    id: number,
    position: string,
    company: string,
    location: string,
    date: string,
}

function RecordsBox() {

    const careerRecords: ICareerRecord[] = [
        {
            id: 1,
            position: " کاراموز توسعه دهنده فرانت اند",
            company: "نو اندیشان",
            location: "میدان ارژانتین",
            date: " 1402/8 تا 1402/11"
        },
    ]

    return (
        careerRecords.map((record) => (
            <div key={record.id} className='border-l-[3px] border-blue-500 py-2 mb-4'>
                <div>
                    <h3 className='text-lg text-[var(--desc-color)] mb-1'>{record.position} - {record.company}</h3>
                    <h4 className='opacity-70 text-sm'>{record.location} | {record.date}</h4>
                </div>
            </div>
        ))
    )
}

export default RecordsBox