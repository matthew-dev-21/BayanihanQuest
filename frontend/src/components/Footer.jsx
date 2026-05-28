export default function Footer() {
    return (
        <footer className="page-shell is-footer border-t border-white/10">
            <section className="section-wrap py-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-xl font-black text-[#47d16c]">Bayanihan Quest</h2>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                            A modern website for the Bayanihan Quest desktop game: clean, help, earn, upgrade, and serve the barangay.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
                        <a href="#home" className="hover:text-[#47d16c]">Home</a>
                        <a href="#quests" className="hover:text-[#47d16c]">Quests</a>
                        <a href="#developers" className="hover:text-[#47d16c]">Developers</a>
                        <a href="https://github.com/jhnlvnndrnl/SMART" target="_blank" rel="noreferrer" className="hover:text-[#47d16c]">GitHub Code</a>
                    </div>
                </div>
            </section>
        </footer>
    );
}
