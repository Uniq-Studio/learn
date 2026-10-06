let darkThemeEnabled = 0

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (darkThemeEnabled === 0) setTheme();
});

document.addEventListener("DOMContentLoaded", e => {setTheme()})

function setTheme(){
    if (localStorage.getItem("userAccepted"))loadThemePreference();

    if(darkThemeEnabled === 2){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.getElementById("theme_icon").src = "public/img/ui/dark_mode.webp";
        document.getElementById("theme_icon").alt = "Dark Mode";
        document.getElementById("theme_icon").title = "Dark Mode";
    } else if (darkThemeEnabled === 1) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("theme_icon").src = "public/img/ui/light_mode.webp";
        document.getElementById("theme_icon").alt = "Light Mode";
        document.getElementById("theme_icon").title = "Light Mode";
    }
    else if (darkThemeEnabled === 0){
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            document.getElementById("theme_icon").src = "public/img/ui/auto_mode.webp";
            document.getElementById("theme_icon").alt = "System Default Theme";
            document.getElementById("theme_icon").title = "System Default";
        } else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            document.getElementById("theme_icon").src = "public/img/ui/auto_mode.webp";
            document.getElementById("theme_icon").alt = "System Default Theme";
            document.getElementById("theme_icon").title = "System Default";
        }
    }
    saveThemePreference();
}

function toggleTheme() {
    if (localStorage.getItem("userAccepted")) {
        if (darkThemeEnabled === 2){
            darkThemeEnabled = 0
        } else {
            darkThemeEnabled += 1
        }
        saveThemePreference();
        setTheme();
    }
}

function saveThemePreference() {
    if (localStorage.getItem("userAccepted")) localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
}

function loadThemePreference() {
    const storedTheme = localStorage.getItem("darkThemeEnabled");
    if (storedTheme !== null) {
        darkThemeEnabled = Number(storedTheme);
    }
}