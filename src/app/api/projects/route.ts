import { NextResponse } from "next/server"

export interface IProjects {
    id: number,
    image: string,
    projectName: string,
    describtion: string,
    technologies: string[],
    hrefs: string[],
}

const projects: IProjects[] = [
    {
        id: 1,
        image: "/images/next-mart-demo.png",
        projectName: "NextMart",
        describtion: "اولین سایت فروشگاهی ساده برای تمرین با NextJs 15 که به زودی قراره redesign بشه.",
        technologies: [
            "NextJs",
            "Tailwind"

        ],
        hrefs: [
            "https://github.com/iXZed026/nextMart",
            "https://next-mart-shop.vercel.app/",
        ]
    },
    
]

export async function GET() {
    try {
        return NextResponse.json(projects, { status: 200 })
    }
    catch (err) {
        return NextResponse.json(err, { status: 500 })
    }
}