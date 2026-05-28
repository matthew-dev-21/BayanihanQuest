import { useEffect, useState, useRef } from 'react';
import FallbackImage from './FallbackImage';

export default function Members() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    const members = [
        { id: 1, name: "Matthew Manalang", desc: "Project lead focused on product flow, content direction, and community-first experience design.", image: "/team-assets/3.png" },
        { id: 2, name: "Juan Marco Aguilar", desc: "Frontend developer building responsive screens, quest cards, and polished interactions.", image: "/team-assets/5.png" },
        { id: 3, name: "Edrian Manalo Guno", desc: "Backend and data support for quest progress, profiles, and platform reliability.", image: "/team-assets/4.jpg" },
        { id: 4, name: "Dave Lorenz Ignacio", desc: "UI/UX contributor shaping badges, navigation, and clear user journeys.", image: "/team-assets/2.png" },
        { id: 5, name: "Prince Russel Araneta", desc: "Quality and feature support for testing, documentation, and future community tools.", image: "/team-assets/1.png" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how far the container is scrolled into view (0 to 1)
                // Start tracking when top of container hits middle of screen
                // End tracking when bottom of container hits middle of screen
                const scrollableDistance = rect.height;
                const scrolled = (windowHeight / 2) - rect.top;

                let progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="developers" className="page-shell">
            <div className="section-wrap max-w-5xl">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <span className="badge">Developers Guild</span>
                    <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">The team behind Bayanihan Quest</h2>
                    <p className="mt-5 text-slate-300">Built by students who want technology to make helping easier, more visible, and more rewarding.</p>
                </div>

                <div className="relative pl-6 sm:pl-8 md:pl-16" ref={containerRef}>
                    <div className="absolute left-[11px] sm:left-[15px] md:left-[31px] top-6 bottom-6 w-1 bg-white/10 rounded-full"></div>

                    <div
                        className="absolute left-[11px] sm:left-[15px] md:left-[31px] top-6 w-1 bg-[#47d16c] rounded-full shadow-[0_0_15px_rgba(71,209,108,0.6)] transition-all duration-300 ease-out"
                        style={{ height: `calc(${scrollProgress * 100}% - 48px)` }}
                    ></div>

                    <div className="flex flex-col gap-16 md:gap-24">
                        {members.map((member, index) => {
                            const itemProgressThreshold = (index / (members.length - 1)) * 0.9;
                            const isActive = scrollProgress >= itemProgressThreshold;

                            return (
                                <div key={member.id} className="relative flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-12 group">
                                    {/* Timeline Node dot */}
                                    <div
                                        className={`absolute -left-[21px] sm:-left-[25px] md:-left-[41px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 w-5 h-5 rounded-full border-4 border-[#000A00] z-10 transition-colors duration-500
                                        ${isActive ? 'bg-[#47d16c] shadow-[0_0_10px_rgba(71,209,108,0.8)]' : 'bg-gray-600'}`}
                                    ></div>

                                    <div className="w-full sm:w-2/5 shrink-0 flex justify-center">
                                        <div className={`w-full max-w-[280px] sm:max-w-none aspect-[4/3] rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-700
                                            ${isActive ? 'bg-white/10 border-[#47d16c]/50 shadow-[0_0_20px_rgba(71,209,108,0.15)] transform translate-y-0 opacity-100' : 'bg-white/5 opacity-50 translate-y-8'}`}
                                        >
                                            <FallbackImage src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    <div className={`w-full sm:w-3/5 text-center sm:text-left transition-all duration-700 delay-100
                                                ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                    >
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-200 mb-2 sm:mb-3">{member.name}</h3>
                                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                            {member.desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
