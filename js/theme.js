/**
 * Theme Toggle Functionality - No Flash Version
 * Applies theme before page renders using inline script
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'tana-bridge-theme';

    // Get stored theme or system preference
    function getPreferredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    // Get stored theme or system preference

    // Apply theme immediately (for inline execution)
    function applyThemeImmediately() {
        const theme = getPreferredTheme();
        document.documentElement.setAttribute('data-theme', theme);
        // Store the current theme for later use
        document.documentElement.setAttribute('data-initial-theme', theme);
        return theme;
    }

    // Apply theme (for toggle and subsequent changes)
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);

        // Update icon if it exists
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        // Update toggle button title
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        }

        // Dispatch event for any listeners
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    // Toggle theme
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
    }

    // Initialize toggle button after DOM is ready
    function initToggleButton() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', toggleTheme);
        }

        // Update icon based on current theme
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    // Listen for system theme changes
    function listenForSystemTheme() {
        if (window.matchMedia) {
            const media = window.matchMedia('(prefers-color-scheme: dark)');
            media.addEventListener('change', function(e) {
                // Only change if user hasn't manually set a preference
                if (!localStorage.getItem(STORAGE_KEY)) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // ============================================================
    // EXECUTE IMMEDIATELY - BEFORE PAGE RENDERS
    // ============================================================
    // This runs synchronously and applies the theme before any
    // CSS or content is rendered, preventing the flash.
    const initialTheme = applyThemeImmediately();

    // ============================================================
    // DOM READY - Initialize interactive elements
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initToggleButton();
            listenForSystemTheme();
        });
    } else {
        initToggleButton();
        listenForSystemTheme();
    }

    // Expose theme functions globally
    window.theme = {
        getPreferred: getPreferredTheme,
        set: setTheme,
        toggle: toggleTheme,
        current: () => document.documentElement.getAttribute('data-theme') || 'light'
    };

    console.log('🎨 Theme initialized:', initialTheme);

})();