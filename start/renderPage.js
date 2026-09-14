function renderPage(page, id) {
  const isUnlocked = unlocked.has(id);
  const hasImage = page.image || page.img;
  const imgHtml = hasImage 
    ? `<img src="${hasImage}" style="width:100%; aspect-ratio:4/3; object-fit:cover; display:block;" />`
    : `<div class="placeholder-img" style="--accent1: ${page.accent1}; --accent2: ${page.accent2};"></div>`;
  return `
    <div class="page ${isUnlocked ? 'unlocked' : 'locked'}" id="page-${id}">
      ${imgHtml}
      <div class="lock-overlay">
        <div class="lock-icon">🔒</div>
        <div class="lock-text">Unlock this memory</div>
        <div class="lock-hint">Answer a question about us</div>
        <button class="unlock-btn" onclick="openTrivia('${id}')">Unlock Memory</button>
      </div>
      ${isUnlocked ? `
        <div class="page-info">
          <h3>${page.title}</h3>
          <p>${page.description}</p>
          <span class="page-date">${page.date}</span>
          ${page.tag ? `<span style="background:${page.accent1}22; color:${page.accent1}; padding:3px 10px; border-radius:10px; font-size:0.7rem; margin-left:6px; font-weight:600;">${page.tag}</span>` : ''}
        </div>
      ` : ''}
    </div>
  `;
}