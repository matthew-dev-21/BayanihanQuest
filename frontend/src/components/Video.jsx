export default function Video() {
    const systems = [
        { label: "Move", value: "WASD", text: "Explore the barangay map, road area, hall, plaza, homes, and store." },
        { label: "Interact", value: "E", text: "Talk to the Barangay Captain, open the store, and claim mission rewards." },
        { label: "Community", value: "P / N / M", text: "Open projects, resident requests, and CWTS mini-games." },
    ];

    const roadmap = [
        "Add a web dashboard that reads the saved game file and displays money, stamina, reputation, fund, day, and current quest.",
        "Connect the site to downloadable builds, screenshots, and controls for WASD movement, E interaction, P projects, N requests, and M mini-games.",
        "Create detailed pages for Clean Sweep, Community Pantry Drive, Road Cleanup, daily missions, and community events.",
        "Add a changelog for store items, map updates, save/load improvements, and new CWTS mini-games.",
    ];

    return (
        <section id="roadmap" className="page-shell">
            <div className="section-wrap grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div data-aos="fade-right">
                    <span className="badge">Player Guide</span>
                    <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">Start as a volunteer. Grow into a barangay leader.</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Every action supports the community: collect trash, gather pantry supplies, answer resident requests, improve public projects, and build a reputation through consistent service.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {systems.map((system) => (
                            <div key={system.label} className="panel rounded-lg p-5">
                                <p className="text-xs font-black uppercase tracking-wide text-[#f8c846]">{system.label}</p>
                                <strong className="mt-2 block text-3xl font-black text-white">{system.value}</strong>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{system.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-aos="fade-left" className="panel rounded-lg p-5">
                    <p className="text-sm font-black uppercase tracking-wide text-[#f8c846]">Website Next Steps</p>
                    <h3 className="mt-3 text-2xl font-black">Useful additions for the game site</h3>
                    <div className="mt-6 grid gap-4">
                        {roadmap.map((item, index) => (
                            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <div className="flex items-start gap-4">
                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#47d16c]/15 text-sm font-black text-[#8bf5a5]">{index + 1}</span>
                                    <p className="leading-7 text-slate-300">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
