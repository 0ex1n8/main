import ProjectStyle from "../styles/ProjectStyle.module.css";

import visit from "../assets/open.svg";

export default function ProjectContent({ datas }) {
    return (
        <div className={ProjectStyle.ProjectContent}>
            {datas.map(data => (
                <div className={ProjectStyle.card}>
                    <img
                        className={ProjectStyle.img}
                        src={data.img}
                        alt="image.jpg"
                    />
                    <div className={ProjectStyle.right_side}>
                        <div className={ProjectStyle.details}>
                            <h1>{data.name}</h1>
                            <p>{data.desc}</p>
                        </div>
                        <button className={ProjectStyle.btn}>
                            <a href={data.url}>Visit</a>
                            <img src={visit} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
