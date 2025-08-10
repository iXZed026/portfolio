"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActiveHumb } from "@/context/ActiveHumbProvider";

interface NavLinkProps {
  active: boolean;
  humbRef: React.MutableRefObject<HTMLDivElement | null>;
}

function NavLink({ active, humbRef }: NavLinkProps) {
  const pathname = usePathname();
  const { activeHumb, setActiveHumb } = useActiveHumb();
  const navRef = useRef<HTMLDivElement | null>(null);


  const links = [
    { id: 1, title: "خانه", href: "/" },
    { id: 2, title: "درباره من", href: "/about" },
    { id: 3, title: "پروژه‌ها", href: "/projects" },
    { id: 4, title: "تماس با من", href: "/contact" },
  ];

  useEffect(() => {
    function clearActiveHumb() {
      if (window.innerWidth > 768) {
        if (navRef.current) navRef.current.className = "";
        setActiveHumb(false);
      }
    }
    window.addEventListener("resize", clearActiveHumb);
    return () => {
      window.removeEventListener("resize", clearActiveHumb);
    };
  }, [setActiveHumb]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        humbRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !humbRef.current.contains(event.target as Node)
      ) {
        setActiveHumb(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [humbRef, setActiveHumb]);

  return (
    <nav
      className={`${active ? "active-nav" : "inactive-nav"}`}
      ref={navRef}
    >
      <ul className="flex md:flex-row md:gap-1 gap-[50px] flex-col items-center text-sm">
        {links.map((link) => (
          <li key={link.id} className="list-item">
            <Link
              className={`py-2 px-4 ${
                link.href === pathname ? "active-link" : ""
              }`}
              href={link.href}
              onClick={() => activeHumb && setActiveHumb(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLink;
