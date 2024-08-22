import { useState, useEffect } from "react";

import AboutContent from "../pages/AboutContent";
import Navigation from "../Navigation";

import AboutStyle from "../styles/AboutStyle.module.css";

export default function About() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 0);
    }, []);

    return (
        <div className={AboutStyle.About}>
            <div class={AboutStyle.about_body}>
                <Navigation />
                {!isLoading && <div class={AboutStyle.loading}>Loading...</div>}
                {isLoading && <AboutContent />}
            </div>
        </div>
    );
}
