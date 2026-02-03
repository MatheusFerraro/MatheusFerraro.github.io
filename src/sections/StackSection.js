<section id="stack">
  <h2>{t('stack.title')}</h2>
  <div className="grid">
    {stackItems.map((item) => (
      <div key={item.name} className="card">
        <img src={item.icon} alt={item.name} className="stack-icon" />
        <strong>{item.name}</strong>
      </div>
    ))}
  </div>
</section>