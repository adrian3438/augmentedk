'use client';

import {useEffect, useState} from "react";

export default function Section1() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="section-01">
            <div style={{padding: "56.25% 0 0 0", position: "relative", backgroundColor: "rgba(0,0,0,0.05)"}}>
                <iframe src="https://player.vimeo.com/video/1024314173??autoplay=1&loop=1&title=0&background=1&muted=1" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: "-1"}}></iframe>
            </div>
            <div className={`first-text ${!isScrolled ? 'on' : ''}`}>
                <p className="text-01">Augment Knowledge</p>
                <p className="text-02">Innovating MRO with<br/>AI-based Digital Twin Technology</p>
            </div>
            <div className={`change-text ${isScrolled ? 'on' : ''}`}>
            <p>Augmented Knowledge specializes in developing and supplying<br/> aircraft MRO simulators through AI-based Digital Twin technology for<br/> commercial and military aircraft maintenance.</p>
            </div>
        </section>
    )
}
