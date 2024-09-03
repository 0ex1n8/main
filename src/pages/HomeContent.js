import HomeStyle from "../styles/HomeStyle.module.css";
import pfp from "../assets/PFP.jpg";

export default function HomeContent() {
    return (
        <div className={HomeStyle.HomeContent}>
            <div className={HomeStyle.upper_texts}>
                <h1>Hi & Hello!</h1>
                <p>
                    This is Karl and it's just about me, myself, and I. Nothing
                    else.
                </p>
            </div>

            <div className={HomeStyle.lower_part}>
                <div className={HomeStyle.hiLow_body}>
                    <img src={pfp} />
                    <p>
                        A simple guy to a very creative and passionate man. In
                        my years developing many important projects, I can say
                        that I will enjoy the thrill of working with you. So,
                        let's explore this vast field and improve our ability to
                        create and build something that will makes us proud. Ems
                    </p>
                </div>
            </div>
        </div>
    );
}
