import { NextResponse } from "next/server";

export interface ISkills {
    id: number,
    name: string,
    mastery: number,
}

const skills: ISkills[] = [
    { id: 1, name: "HTML", mastery: 100 },
    { id: 2, name: "CSS", mastery: 100 },
    { id: 3, name: "Javascript", mastery: 100 },
    { id: 4, name: "Typescript", mastery: 90 },
    { id: 5, name: "Reactjs", mastery: 90 },
    { id: 6, name: "Nextjs", mastery: 90 },
    { id: 7, name: "TailwindCSS", mastery: 90 },
    { id: 8, name: "Bootstrap", mastery: 80 },
    { id: 9, name: "Git", mastery: 100 },
    { id: 10, name: "Github", mastery: 80 },
    { id: 11, name: "Redux", mastery: 70 },
    { id: 12, name: "Linux", mastery: 70 },
]

export async function GET() {
    try {
        return NextResponse.json(skills, { status: 200 });
    }
    catch (err) {
        return NextResponse.json({ message: err }, { status: 500 });
    }
}