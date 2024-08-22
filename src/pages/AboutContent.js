import AboutStyle from "../styles/AboutStyle.module.css";

export default function About() {
    return (
        <div className={AboutStyle.AboutContent}>
            <div class={AboutStyle.title_part}>
                <h1>About 0ex1n8</h1>
            </div>
            <div class={AboutStyle.detail_part}>
                <p className={AboutStyle.p1}>
                    0ex1n8 is like a code name of mine, it's like a pen name but
                    worst, and I use it because it looks very bad. I did not
                    invent or create this name, I got it on a 6ch. captcha
                    generator in a random website.
                </p>
                <p className={AboutStyle.p2}>
                    My real name is Karl Brendan B. Dumagtoy and there is
                    something I want to achieve. Mark my words, I will become
                    the King of the Pirates.
                </p>
                <p className={AboutStyle.p3}>
                    This web-folio is not finished yet, the site was very
                    unstable and the code's syntax can still be improved. Maybe
                    in the future I can do it better.
                </p>
            </div>
        </div>
    );
}
