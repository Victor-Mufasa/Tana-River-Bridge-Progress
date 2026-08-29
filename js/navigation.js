/**
 * Navigation - highlights active page and updates footer
 */

(function() {
    'use strict';

    // Highlight active nav link
    function highlightActiveNav() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Update footer date from data
    function updateFooterDate() {
        const el = document.getElementById('footerDate');
        if (el && window.PROJECT_DATA) {
            el.textContent = window.PROJECT_DATA.project?.reportDate || '2026-08-07';
        }
    }

    // Run
    highlightActiveNav();
    updateFooterDate();

    // Listen for data updates
    document.addEventListener('dataUpdated', function(e) {
        const el = document.getElementById('footerDate');
        if (el && e.detail?.project?.reportDate) {
            el.textContent = e.detail.project.reportDate;
        }
    });

})();