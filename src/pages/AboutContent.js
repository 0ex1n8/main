import AboutStyle from "../styles/AboutStyle.module.css";

export default function About() {
    return (
        <div className={AboutStyle.AboutContent}>
            <div class={AboutStyle.title_part}>
                <h1>About 0ex1n8</h1>
            </div>
            <div class={AboutStyle.detail_part}>
                <p className={AboutStyle.p1}>
                    As you can see, this portfolio is very simple and minimal.
                    This is because of what I believe in life, Confucius ones
                    said “Life is really simple but we insist on making it
                    complicated.”
                </p>
                <p className={AboutStyle.p2}>
                    My name is Karl Brendan B. Dumagtoy and there is something I
                    want to achieve. In the future, I want to finish my study,
                    expand my knowledge, and enjoy the flow of life.
                </p>
                <p className={AboutStyle.p3}>
                    This web-folio is not finished yet, the site was very
                    unstable and the code's syntax can still be improved. Maybe
                    in the next stage of my life I can do it better.
                </p>
            </div>
        </div>
    );
}
