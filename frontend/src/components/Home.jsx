import { useEffect, useState } from "react";
import { FaBolt, FaHeart, FaMedal, FaUsers } from "react-icons/fa";
import menuBackground from "../game-assets/background-menu.png";
import captain from "../game-assets/captain.png";
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
        <main id="home" className="page-shell relative min-h-screen pt-28">
            <section className="section-wrap grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div data-aos="fade-right">
                    <span className="badge"><FaBolt /> Level up community action</span>
                    <p className="mt-7 text-lg font-semibold text-[#47d16c]">
                        {text}<span className="inline-block animate-blink">_</span>
                    </p>
                    <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                        Bayanihan Quest
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        A web showcase for the Bayanihan Quest game: clean the barangay, help the captain, collect relief ingredients, earn money and reputation, and upgrade community projects.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a className="primary-button" href="#quests">View Game Quests</a>
                        <a className="secondary-button" href="#dashboard">Open HUD Preview</a>
                    </div>
                    <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                        {[
                            ["P100", "starting money"],
                            ["100", "stamina"],
                            ["25", "trash capacity"],
                        ].map(([value, label]) => (
                            <div key={label} className="panel rounded-lg p-4">
                                <strong className="block text-2xl text-white">{value}</strong>
                                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="dashboard" data-aos="fade-left" className="panel rounded-lg p-5">
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-[#f8c846]">In-Game HUD</p>
                            <h2 className="text-2xl font-black">Barangay Volunteer</h2>
                        </div>
                        <span className="rounded-lg bg-[#47d16c]/15 px-3 py-2 text-sm font-bold text-[#8bf5a5]">Volunteer</span>
                    </div>

                    <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
                        <FallbackImage src={menuBackground} alt="Bayanihan Quest main menu background" className="h-44 w-full object-cover" />
                    </div>

                    <div className="mt-5 grid gap-4">
                        {[
                            { icon: <FaUsers />, title: "Barangay Captain", value: "Accept missions and claim rewards", width: "70%" },
                            { icon: <FaHeart />, title: "Stamina System", value: "Clean, recover, or buy energy drinks", width: "100%" },
                            { icon: <FaMedal />, title: "Reputation Rank", value: "Volunteer to Team Leader to Community Officer", width: "35%" },
                        ].map((item) => (
                            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-[#47d16c]">{item.icon}</span>
                                        <div>
                                            <h3 className="font-bold">{item.title}</h3>
                                            <p className="text-sm text-slate-400">{item.value}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-track"><div className="progress-fill" style={{ width: item.width }}></div></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        {[captain, trash, captain].map((image, index) => (
                            <div key={index} className="grid h-20 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                                <FallbackImage src={index === 1 ? trash : image} alt="Game asset" className="max-h-16 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
