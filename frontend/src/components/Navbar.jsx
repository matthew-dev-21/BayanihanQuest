import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import logo from "./logo_bayanihan.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const repoUrl = "https://github.com/matthew-dev-21/bayanihanquest_v1";
    const canvaUrl = "https://www.canva.com/design/DAHK9qZTOZ4/98hy4uDfSh9g641xZw_n9w/edit";
    const links = [
        { label: "Quests", href: "#quests" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Developers", href: "#developers" },
        { label: "Guide", href: "#roadmap" },
    ];

    return (
        <header className="fixed top-0 z-50 left-0 w-full px-4 py-3">
            <nav className="panel mx-auto flex max-w-6xl items-center justify-between rounded-lg px-4 py-3">
                <a href="#home" className="flex items-center gap-3 font-black tracking-tight">
                    <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-white/15 bg-transparent">
                        <img src={logo} alt="Bayanihan Quest logo" className="h-10 w-10 object-contain" />
                    </span>
                    <span>Bayanihan Quest</span>
                </a>

                <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-200 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                className="transition-colors hover:text-[#47d16c]"
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noreferrer" : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 md:flex">
                    <a className="secondary-button gap-2" href={canvaUrl} target="_blank" rel="noreferrer">
                        <SiCanva /> Canva PPT
                    </a>
                    <a className="secondary-button gap-2" href={repoUrl} target="_blank" rel="noreferrer">
                        <FaGithub /> GitHub Code
                    </a>
                </div>

                <div
                    className="relative cursor-pointer rounded-lg border border-white/15 p-2 text-2xl text-white md:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}

                    {isOpen && (
                        <ul className="panel absolute right-0 top-full z-50 mt-3 flex min-w-[220px] flex-col gap-3 rounded-lg px-5 py-4 text-base font-semibold text-white shadow-lg">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="transition-colors hover:text-[#47d16c]"
                                        onClick={toggleMenu}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noreferrer" : undefined}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={canvaUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#47d16c]" onClick={toggleMenu}>
                                    <SiCanva /> Canva PPT
                                </a>
                            </li>
                            <li><a href={repoUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#47d16c]" onClick={toggleMenu}>GitHub Code</a></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}
