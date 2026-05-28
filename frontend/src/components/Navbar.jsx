import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const repoUrl = "https://github.com/matthew-dev-21/bayanihanquest_v1";
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
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#47d16c] text-[#04100b]">BQ</span>
                    <span>Bayanihan Quest</span>
                </a>

                <ul className="hidden items-center gap-7 text-sm font-semibold text-slate-200 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a className="transition-colors hover:text-[#47d16c]" href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <a className="secondary-button hidden gap-2 md:inline-flex" href={repoUrl} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub Code
                </a>

                <div
                    className="relative cursor-pointer rounded-lg border border-white/15 p-2 text-2xl text-white md:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}

                    {isOpen && (
                        <ul className="panel absolute right-0 top-full z-50 mt-3 flex min-w-[220px] flex-col gap-3 rounded-lg px-5 py-4 text-base font-semibold text-white shadow-lg">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="transition-colors hover:text-[#47d16c]" onClick={toggleMenu}>{link.label}</a>
                                </li>
                            ))}
                            <li><a href={repoUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#47d16c]" onClick={toggleMenu}>GitHub Code</a></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}
