import Navigation from "../Navigation";

import useFetch from "../useFetch";
import ProjectContent from "../pages/ProjectContent";

import ProjectStyle from "../styles/ProjectStyle.module.css";

export default function Project() {
    const {
        data: projects,
        isLoading,
        error
    } = useFetch("https://0ex1n8.github.io/webfolio-json/");
    return (
        <div className={ProjectStyle.Project}>
            <div class={ProjectStyle.project_body}>
                <Navigation />
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {projects && <ProjectContent datas={projects} />}
            </div>
        </div>
    );
}
