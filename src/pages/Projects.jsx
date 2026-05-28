import { ProjectCard } from "../components/ProjectCard";
import React from "react";
import { proyects, proyectsPageInfo, SHOW_PROJECT_IMAGES } from "../data/projects";
import { useLanguage } from "../LanguageContext";

function Projects(){
    const { language } = useLanguage();

    const texts = {
        es: { projectsTitle: "Proyectos" },
        en: { projectsTitle: "Projects" }
    };
    const t = texts[language];

    return (
        <section className="resume-page">
            <div className="resume-section-card" style={{ marginBottom: '10px' }}>
                <h2 className="resume-section-title" style={{ margin: 0 }}>
                    <span className="icon">🚀</span> {t.projectsTitle}
                </h2>
                <p className="lower-left-sub" style={{ fontWeight: 'normal', maxWidth: 'none' }}>
                    {proyectsPageInfo[0]?.info[language]}
                </p>
            </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr', 
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    {proyects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            title={project.title[language]}
                            stack={project.stack[language]}
                            description={project.description[language]}
                            image={SHOW_PROJECT_IMAGES ? project.image : undefined}
                            challenges={project.challenges?.[language]}
                            url={project.url}
                        />
                    ))}
                </div>
        </section>
    )
}


export default Projects;