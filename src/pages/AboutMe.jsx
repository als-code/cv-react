import React from 'react';
import { aboutMe } from '../data/about';
import { devCourses, otherCourses, devCoursesTitle, otherCoursesTitle } from '../data/courses';
import ResumeCard from '../components/ResumeCard';
import { useLanguage } from '../LanguageContext';

export function AboutMe() {
  const { language } = useLanguage();

  return (
    <section className="about-page">
      <div className="resume-section-card">
        <h2 className="resume-section-title">
          <span className="icon">👤</span> {aboutMe.title[language]}
        </h2>
        <div className="about-content" style={{ color: 'var(--text-dark)', fontSize: '16px', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '20px', fontWeight: '500' }}>
            {aboutMe.description[language]}
          </p>
          
          {aboutMe.bio[language].map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '15px' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="main-lower" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', background: 'transparent', padding: 0, marginTop: '20px' }}>
        <div className="resume-section-card" style={{ flex: '1 1 400px', margin: 0 }}>
          <h2 className="resume-section-title">
            <span className="icon">💻</span> {devCoursesTitle[language]}
          </h2>
          <div className="resume-list">
            {devCourses.map((course, index) => (
              <ResumeCard
                key={index}
                title={course.title[language]}
                subtitle={course.center[language]}
                date={course.extra}
              />
            ))}
          </div>
        </div>

        <div className="resume-section-card" style={{ flex: '1 1 400px', margin: 0 }}>
          <h2 className="resume-section-title">
            <span className="icon">📜</span> {otherCoursesTitle[language]}
          </h2>
          <div className="resume-list">
            {otherCourses.map((course, index) => (
              <ResumeCard
                key={index}
                title={course.title[language]}
                subtitle={course.center[language]}
                date={course.extra}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
    
  );
}

export default AboutMe;