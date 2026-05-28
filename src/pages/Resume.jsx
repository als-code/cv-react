import React from 'react';
import { devEducation, prevEducation, devEducationTitle, prevEducationTitle } from '../data/education';
import { devExperience, prevExperience, devExperienceTitle, prevExperienceTitle } from '../data/experience';
import { devCourses, devCoursesTitle } from '../data/courses';
import ResumeCard from '../components/ResumeCard';
import { useLanguage } from '../LanguageContext';

export function Resume() {
  const { language } = useLanguage();

  return (
    <section className="resume-page">
      {/* Educación IT */}
      <div className="resume-section-card">
        <h2 className="resume-section-title">
          <span className="icon">🖥️</span> {devEducationTitle[language]}
        </h2>
        <div className="resume-list">
          {devEducation.map((edu, index) => (
            <ResumeCard
              key={index}
              title={edu.title[language]}
              subtitle={edu.center[language]}
              date={edu.extra}
              bullets={edu.bullets?.[language]}
            />
          ))}
        </div>
      </div>
      {/* Experiencia IT */}
      <div className="resume-section-card">
        <h2 className="resume-section-title">
          <span className="icon">💻</span> {devExperienceTitle[language]}
        </h2>
        <div className="resume-list">
          {devExperience.map((exp, index) => (
            <ResumeCard
              key={index}
              title={exp.role[language]}
              subtitle={exp.org}
              date={exp.period}
              location={exp.location[language]}
              bullets={exp.bullets[language]}
              challenges={exp.challenges?.[language]}
            />
          ))}
        </div>
      </div>

      {/* Experiencia y Educación Previa */}
      <div className="main-lower" style={{ background: 'transparent', padding: 0, gap: '18px' }}>
        <div className="resume-section-card">
          <h2 className="resume-section-title" style={{ fontSize: '20px' }}>
            <span className="icon">🪛</span> {prevExperienceTitle[language]}
          </h2>
          <div className="resume-list">
            {prevExperience.map((exp, index) => (
              <ResumeCard 
                key={index} 
                title={exp.role[language]} 
                subtitle={exp.org} 
                date={exp.period}
                location={exp.location?.[language]}
                bullets={exp.bullets?.[language]}
                challenges={exp.challenges?.[language]}
              />
            ))}
          </div>
        </div>
        <div className="resume-section-card">
          
          <h2 className="resume-section-title" style={{ fontSize: '20px' }}><span className="icon">🔧</span> {prevEducationTitle[language]}</h2>
          <div className="resume-list">
            {prevEducation.map((edu, index) => (
              <ResumeCard 
                key={index} 
                title={edu.title[language]} 
                subtitle={edu.center[language]} 
                date={edu.extra} 
                bullets={edu.bullets?.[language]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;