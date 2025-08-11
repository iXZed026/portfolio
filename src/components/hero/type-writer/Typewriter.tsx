"use client";
import React, { useState, useEffect } from "react";

const texts: string[] = [
    "توسعه دهنده فرانت اند",
    "برنامه نویس NextJs",
    "علاقه مند به کار تیمی",
];

function Typewriter() {
    const [currentText, setCurrentText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [subIndex, setSubIndex] = useState<number>(0);
    const [deleting, setDeleting] = useState<boolean>(false);

    useEffect(() => {

        setCurrentText(texts[index].substring(0, subIndex))

        if (!deleting && subIndex === texts[index].length) {
            setTimeout(() => {
                setDeleting(true)
            }, 2000)
            return;
        }

        if (deleting && subIndex === 0) {
            setDeleting(false)
            setIndex(prev => (prev + 1) % texts.length)
            return
        }

        setTimeout(() => {
            setSubIndex(prev => {
                return prev + (deleting ? -1 : 1)
            })
        }, !deleting ? 100 : 50)

    }, [subIndex, deleting, index])

    return (
        <div className="flex justify-start items-center min-h-12">
            <span className="text-white text-xl border-white pr-2 typewriter">
                {currentText}
            </span>
        </div>
    );
}

export default Typewriter;
