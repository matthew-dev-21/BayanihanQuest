import { FaAward, FaBullseye, FaHandshake, FaLightbulb, FaMapMarkedAlt, FaTasks } from "react-icons/fa";
import barangayMap from "../game-assets/barangay-map.png";
import roadMap from "../game-assets/road-map.png";
import chicken from "../game-assets/chicken.png";
import coconut from "../game-assets/coconut.png";
import FallbackImage from "./FallbackImage";

export default function About() {
    const quests = [
        {
            title: "Clean Sweep",
            tag: "Map 1",
            text: "Accept the Barangay Captain's first quest, collect 10 trash items around the barangay, then return to claim P250 and 15 reputation.",
            progress: "10 trash",
        },
        {
            title: "Community Pantry Drive",
            tag: "CWTS",
            text: "After Clean Sweep, gather 5 chicken and 5 coconut for relief meal packs. Completing the drive rewards P300 and 30 reputation.",
            progress: "5 + 5",
        },
        {
            title: "Road Cleanup",
            tag: "Map 2",
            text: "Travel to the road map, collect 8 trash items, and complete a repeatable cleanup mission for P180 and 10 reputation.",
            progress: "8 trash",
        },
    ];

    return (
        <section id="quests" className="page-shell">
            <div className="section-wrap">
                <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
                    <span className="badge"><FaHandshake /> Bayanihan in action</span>
                    <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">A game concept that turns bayanihan into a rewarding loop.</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Bayanihan Quest is designed to make community service feel as satisfying as leveling up: clear quests, instant rewards, visible progress, and upgrades that make the barangay better.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {[
                        {
                            icon: <FaLightbulb />,
                            title: "Vision",
                            text: "A modern community-service RPG where every small action adds up to real change — and leadership is something you earn through consistency.",
                        },
                        {
                            icon: <FaTasks />,
                            title: "Mission",
                            text: "Guide players from simple cleanup tasks to pantry drives and community projects with missions that teach teamwork, responsibility, and follow-through.",
                        },
                        {
                            icon: <FaBullseye />,
                            title: "Goal",
                            text: "Persuade and encourage gamers to join real-world community action by making volunteering feel approachable, measurable, and genuinely fun.",
                        },
                    ].map((item, index) => (
                        <article
                            key={item.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 90}
                            className="panel rounded-lg p-6"
                        >
                            <div className="flex items-start gap-4">
                                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10 text-xl text-[var(--green)]">
                                    {item.icon}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                                    <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div data-aos="fade-up" className="mx-auto mt-10 max-w-4xl rounded-lg border border-white/10 bg-white/[0.04] p-6">
                    <p className="text-sm font-bold uppercase tracking-wide text-[var(--gold)]">Why it works</p>
                    <h3 className="mt-2 text-2xl font-black text-white">From “play” to “participate” — without guilt-tripping.</h3>
                    <p className="mt-3 leading-7 text-slate-300">
                        The game rewards helpful behavior the same way great games reward progress: you see your impact, you earn trust, and you unlock bigger responsibilities. It’s an invitation to try community service — not a lecture.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {quests.map((quest, index) => (
                        <article key={quest.title} data-aos="fade-up" data-aos-delay={index * 100} className="panel rounded-lg p-5 transition-transform duration-200 hover:-translate-y-1">
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <span className="rounded-lg bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-[#f8c846]">{quest.tag}</span>
                                <span className="text-sm font-bold text-slate-400">{quest.progress}</span>
                            </div>
                            <h3 className="text-2xl font-black">{quest.title}</h3>
                            <p className="mt-3 min-h-24 leading-7 text-slate-300">{quest.text}</p>
                            <div className="mt-5 progress-track"><div className="progress-fill" style={{ width: index === 0 ? "100%" : index === 1 ? "55%" : "80%" }}></div></div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div data-aos="fade-right" className="grid gap-4">
                        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                            <FallbackImage src={barangayMap} alt="Barangay map from the game" className="h-56 w-full object-cover opacity-90" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="grid h-24 place-items-center rounded-lg border border-white/10 bg-white/[0.04]"><FallbackImage src={roadMap} alt="Road map" className="h-full w-full object-cover" /></div>
                            <div className="grid h-24 place-items-center rounded-lg border border-white/10 bg-white/[0.04]"><FallbackImage src={chicken} alt="Chicken ingredient" className="max-h-20 object-contain" /></div>
                            <div className="grid h-24 place-items-center rounded-lg border border-white/10 bg-white/[0.04]"><FallbackImage src={coconut} alt="Coconut ingredient" className="max-h-20 object-contain" /></div>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="grid gap-4">
                        {[
                            [<FaTasks />, "Mission Board", "Choose Barangay Cleanup, Community Pantry Drive, or Road Cleanup from the captain once missions are unlocked."],
                            [<FaMapMarkedAlt />, "Two Playable Maps", "Map 1 contains the barangay hall, sari-sari store, plaza, homes, and trash zones. Map 2 is focused on road cleanup."],
                            [<FaAward />, "Money, Fund, and Rank", "Earn pesos and reputation, fill the P2000 barangay fund, and climb from Volunteer to Team Leader to Community Officer."],
                        ].map(([icon, title, text]) => (
                            <div key={title} className="panel rounded-lg p-5">
                                <div className="flex gap-4">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[#37b7ff]/15 text-xl text-[#37b7ff]">{icon}</span>
                                    <div>
                                        <h3 className="text-xl font-black">{title}</h3>
                                        <p className="mt-2 leading-7 text-slate-300">{text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
