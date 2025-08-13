import { NextResponse } from "next/server";

export interface ISkills {
    id: number,
    name: string,
    mastery: number,
}

const skills: ISkills[] = [
    { id: 1, name: "HTML", mastery: 90 },
    { id: 2, name: "CSS", mastery: 70 },
    { id: 3, name: "Javascript", mastery: 70 },
    { id: 4, name: "Reactjs", mastery: 70 },
    { id: 5, name: "Nextjs", mastery: 50 },
    { id: 6, name: "TailwindCSS", mastery: 70 },
    { id: 7, name: "Bootstrap", mastery: 60 },
    { id: 8, name: "Git", mastery: 65 },
    { id: 9, name: "Github", mastery: 65 },
    { id: 10, name: "Redux", mastery: 60 },
]

export async function GET() {
    try {
        return NextResponse.json(skills, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ message: err }, { status: 500 });
    }
}