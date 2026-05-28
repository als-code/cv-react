import React from 'react';
import { useLanguage } from '../LanguageContext';

export function ProjectCard({ title, stack, url, description, image, challenges }) {
  const { language } = useLanguage();
  
  const labels = {
    es: "Reto",
    en: "Challenge"
  };

  return (
    <div className="resume-section-card project-item-card" style={{ margin: 0, height: '100%' }}>
      <div className="resume-card-content" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '10px 0' }}>
        <div style={{ flex: 1 }}>
          <span className="resume-card-date">{stack}</span>
          <h3 className="resume-card-title">{title}</h3>
          <p className="resume-card-subtitle">
            {description}
          </p>
          {challenges && (
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              <strong>💡 {labels[language]}:</strong> {challenges}
            </div>
          )}
          {url && (
            <div className="resume-card-location" style={{ marginTop: '10px' }}>
              • <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>
                  Ver proyecto
                </a>
            </div>
          )}
        </div>
        {image && (
          <img 
            src={image} 
            alt={title} 
            style={{ width: '555px',  borderRadius: '12px', objectFit: 'cover', border: '1px solid var(--border-color)', flexShrink: 0 }} 
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;