import { useEffect, useState } from "react";

import Navigation from "../Navigation";
import HomeContent from "../pages/HomeContent";

import HomeStyle from "../styles/HomeStyle.module.css";
import pfp from "../assets/PFP.jpg";

export default function Home() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 0);
    }, []);

    return (
        <div className={HomeStyle.Home}>
            <div className={HomeStyle.home_body}>
                <div className={HomeStyle.upper_part}>
                    <Navigation />
                    {!isLoading && (
                        <div className={HomeStyle.loading}>Loading...</div>
                    )}
                    {isLoading && <HomeContent />}
                </div>
            </div>
        </div>
    );
}
