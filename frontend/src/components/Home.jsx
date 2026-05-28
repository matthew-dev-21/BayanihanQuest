import { useEffect, useState } from "react";
import { FaBolt, FaHeart, FaMedal, FaUsers } from "react-icons/fa";
import menuBackground from "../game-assets/background-menu.png";
import captain from "../game-assets/captain.png";
import coconut from "../game-assets/coconut.png";
import trash from "../game-assets/trash.png";
import FallbackImage from "./FallbackImage";

const words = ["Clean the barangay", "Help the pantry", "Build reputation"];

export default function Home() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? 60 : 230;
        let timeout;

        if (!isDeleting && charIndex === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setText(
                    currentWord.substring(0, charIndex + (isDeleting ? -1 : 1))
                );
                setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <main id="home" className="page-shell relative min-h-screen pt-24">
            <section className="section-wrap section-wrap--hero grid min-h-[calc(100svh-6.5rem)] items-center gap-8 lg:grid-cols-[1.08fr_1fr]">
                <div data-aos="fade-right">
                    <span className="badge"><FaBolt /> Level up community action</span>
                    <p className="mt-5 text-[clamp(1.05rem,1.2vw,1.25rem)] font-semibold text-[var(--green)]">
                        Build {text}<span className="inline-block animate-blink">_</span>
                    </p>
                    <h1 className="mt-3 max-w-4xl text-[clamp(3.1rem,5.8vw,5.3rem)] font-black leading-[1.01] text-white">
                        Bayanihan <span className="bg-gradient-to-r from-[var(--green)] to-[var(--blue)] bg-clip-text text-transparent">Quest</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.85] text-slate-300">
                        A web showcase for the Bayanihan Quest game: clean the barangay, help the captain, collect relief ingredients, earn money and reputation, and upgrade community projects.
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a className="primary-button" href="#quests">View Game Quests</a>
                        <a className="secondary-button" href="#dashboard">Open HUD Preview</a>
                    </div>
                    <div className="mt-6 grid max-w-2xl grid-cols-3 gap-3">
                        {[
                            ["P100", "starting money"],
                            ["100", "stamina"],
                            ["25", "trash capacity"],
                        ].map(([value, label]) => (
                            <div key={label} className="panel rounded-lg p-4">
                                <strong className="block text-[1.65rem] leading-none text-white">{value}</strong>
                                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="dashboard" data-aos="fade-left" className="panel rounded-lg p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-[var(--gold)]">In-Game HUD</p>
                            <h2 className="text-[clamp(1.75rem,2.4vw,2.35rem)] font-black leading-tight">Barangay Volunteer</h2>
                        </div>
                        <span className="rounded-lg bg-[color:rgba(71,209,108,0.16)] px-3 py-2 text-sm font-bold text-[color:rgba(139,245,165,1)]">Volunteer</span>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
                        <div className="relative aspect-[16/7] w-full">
                            <FallbackImage
                                src={menuBackground}
                                alt="Bayanihan Quest main menu background"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {[
                            { icon: <FaUsers />, title: "Barangay Captain", value: "Accept missions and claim rewards", width: "70%" },
                            { icon: <FaHeart />, title: "Stamina System", value: "Clean, recover, or buy energy drinks", width: "100%" },
                            { icon: <FaMedal />, title: "Reputation Rank", value: "Volunteer to Team Leader to Community Officer", width: "35%" },
                        ].map((item) => (
                            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-[var(--green)]">{item.icon}</span>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-black leading-5 text-white">{item.title}</h3>
                                        <p className="mt-1 text-xs leading-5 text-slate-400">{item.value}</p>
                                    </div>
                                </div>
                                <div className="mt-3 progress-track"><div className="progress-fill" style={{ width: item.width }}></div></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {[captain, coconut, trash].map((image, index) => (
                            <div key={index} className="grid h-16 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                                <FallbackImage src={image} alt="Game asset" className="max-h-14 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
