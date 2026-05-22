// UI
const themeBtn = document.getElementById('toggle-btn'), 
    themeText = document.getElementById('theme-text'),
    rootElement = document.documentElement;

themeBtn.addEventListener ('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        rootElement.removeAttribute('data-theme');
        themeText.textContent = 'Theme: Light Mode';
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        themeText.textContent = 'Theme: Dark Mode';
    }
});
