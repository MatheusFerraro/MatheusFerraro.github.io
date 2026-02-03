<section id="projects">
  <h2>{t('projects')}</h2>
  <div className="grid">
    {projects.map((p) => (
      <a key={p.url} className="card" href={p.url} target="_blank" rel="noreferrer">
        <strong>{p.name}</strong>
        <p className="muted">{p.description}</p>
        <div className="tech">{p.technologies?.map((tech) => 
          <span key={tech}> {tech}</span>
        )}</div>
      </a>
    ))}
  </div>
</section>