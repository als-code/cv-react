import React from 'react';
import { useLanguage } from '../LanguageContext';

export function ResumeCard({ title, subtitle, date, location, bullets, challenges }) {
  const { language } = useLanguage();

  const labels = {
    es: "Desafío técnico",
    en: "Technical challenge"
  };

  return (
    <div className="resume-card">
      <div className="resume-card-dot" />
      <div className="resume-card-content">
        <div className="resume-card-header">
          <span className="resume-card-date">{date}</span>
          <h3 className="resume-card-title">{title}</h3>
          <p className="resume-card-subtitle">
            {subtitle} {location && <span className="resume-card-location">• {location}</span>}
          </p>
        </div>
        {bullets && bullets.length > 0 && bullets[0] !== "" && (
          <ul className="resume-card-bullets">
            {bullets.map((bullet, idx) => (
              bullet && <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
        {challenges && (
          <div style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>💡 {labels[language]}:</strong> {challenges}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeCard;