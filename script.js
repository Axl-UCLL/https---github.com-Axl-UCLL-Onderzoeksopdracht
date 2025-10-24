// ========== TOOLTIP (OUDE MANIER MET JS) ==========

const oldBtn = document.getElementById('old-btn');
const oldTooltip = document.getElementById('old-tooltip');

if (oldBtn && oldTooltip) {
    oldBtn.addEventListener('mouseenter', () => {
        // positie van de knop op het scherm
        const rect = oldBtn.getBoundingClientRect();

        // tooltip tonen
        oldTooltip.style.display = 'block';

        // top positie = onderkant knop + scrollY (zodat het klopt bij scrollen) + marge
        oldTooltip.style.top = `${rect.bottom + window.scrollY + 8}px`;

        // horizontaal centreren tov de knop
        const leftPos = rect.left + rect.width / 2 - oldTooltip.offsetWidth / 2;
        oldTooltip.style.left = `${leftPos}px`;
    });

    oldBtn.addEventListener('mouseleave', () => {
        oldTooltip.style.display = 'none';
    });
}

// ========== DROPDOWN (OUDE MANIER MET JS) ==========

const oldDropdownBtn = document.getElementById('old-dropdown-btn');
const oldDropdownMenu = document.getElementById('old-dropdown-menu');

if (oldDropdownBtn && oldDropdownMenu) {
    // toggle bij klik
    oldDropdownBtn.addEventListener('click', () => {
        const isVisible = oldDropdownMenu.style.display === 'block';

        if (!isVisible) {
            // positie van de knop
            const rect = oldDropdownBtn.getBoundingClientRect();

            // menu positioneren onder de knop
            oldDropdownMenu.style.top = `${rect.bottom + window.scrollY + 8}px`;
            oldDropdownMenu.style.left = `${rect.left + window.scrollX}px`;

            // tonen
            oldDropdownMenu.style.display = 'block';
        } else {
            oldDropdownMenu.style.display = 'none';
        }
    });

    // klik buiten menu -> sluiten
    document.addEventListener('click', (e) => {
        if (
            e.target !== oldDropdownBtn &&
            !oldDropdownMenu.contains(e.target)
        ) {
            oldDropdownMenu.style.display = 'none';
        }
    });
}
