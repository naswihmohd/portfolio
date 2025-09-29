'use client';

import { usePathname } from "next/navigation";

interface Props {
    title: string;
    href: string;
}

const NavLink: React.FC<Props> = ({ title, href }) => {
    const currentPath = usePathname();
    const isActive = href === "/" ? currentPath === "/" : currentPath.startsWith(href);
    return (
        <a
            href={href}
            className={`relative inline-block font-light uppercase text-xs duration-300 ${isActive ? "text-gray-300" : "text-white hover:text-white/60"} after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-white/60 after:transition-[width] after:duration-300 hover:after:w-full`}
        >
            {title}
        </a>
    );
};

export default NavLink;
