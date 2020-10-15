const themePrevious = window.localStorage.getItem('theme');
const themePreferred = getComputedStyle(document.documentElement).getPropertyValue('content');	

const THEME_DARK = "dark";
const THEME_LIGHT = "light";

if (themePreferred === THEME_DARK) {
	setTheme(THEME_DARK);
} else if (themePrevious != null) {
	setTheme(themePrevious);
}

function toggleTheme() {
	let themeNow = document.documentElement.getAttribute('data-theme') === THEME_DARK ? THEME_LIGHT : THEME_DARK;
	setTheme(themeNow);
	saveTheme(themeNow);
}

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
}

function saveTheme(theme) {
	window.localStorage.setItem('theme', theme);
}