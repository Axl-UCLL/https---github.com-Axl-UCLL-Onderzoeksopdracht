// ---------- OUD: Klassieke tooltip met JS ----------
const oldBtn = document.getElementById('old-btn');
const oldTooltip = document.getElementById('old-tooltip');

oldBtn.addEventListener('mouseenter', () => {
    const rect = oldBtn.getBoundingClientRect();
    oldTooltip.style.display = 'block';
    oldTooltip.style.top = `${rect.bottom + window.scrollY + 8}px`; // 8px afstand
    oldTooltip.style.left = `${rect.left + rect.width / 2 - oldTooltip.offsetWidth / 2}px`;
});

oldBtn.addEventListener('mouseleave', () => {
    oldTooltip.style.display = 'none';
});