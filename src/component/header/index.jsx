import React from 'react';

const ProjectHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>Dynamic Tree </h1>
        <p style={styles.subtitle}>
          A fully customizable, nested accordion built with React
        </p>
        
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>React</span>
          <span style={styles.badge}>Assignment</span>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    color: 'white',
    padding: '2rem 1rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    borderBottom: '4px solid #1e3a8a'
  },
  contentContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 0.5rem 0',
    fontWeight: '700',
    letterSpacing: '-0.025em',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: '0 auto 1.5rem',
    opacity: '0.9',
    maxWidth: '700px',
    lineHeight: '1.6',
    fontWeight: '300'
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginTop: '1.5rem'
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '0.5rem 1.25rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }
};

export default ProjectHeader;