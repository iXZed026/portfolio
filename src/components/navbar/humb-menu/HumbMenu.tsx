"use client";

import { useActiveHumb } from "@/context/ActiveHumbProvider";
import NavLink from "../nav-link/NavLink";
import { useRef } from "react";

function HumbMenu() {
    const { activeHumb, setActiveHumb } = useActiveHumb();
    const humbRef = useRef<HTMLDivElement | null>(null);

    function activeHumbHandle() {
        setActiveHumb(!activeHumb);
    }

    return (
        <>
            <div
                className="flex flex-col justify-center items-center w-5 z-3 cursor-pointer md:hidden relative"
                onClick={activeHumbHandle}
                ref={humbRef}
            >
                <div
                    className={`${activeHumb && "humburger-line"} bg-white w-full h-[2px] mb-1`}
                ></div>
                <div
                    className={`${activeHumb && "hidden"} bg-white w-full h-[2px] mb-1`}
                ></div>
                <div
                    className={`${activeHumb && "humburger-line"} bg-white w-full h-[2px] mb-1`}
                ></div>
            </div>
            <NavLink active={activeHumb} humbRef={humbRef} />
        </>
    );
}

export default HumbMenu;
