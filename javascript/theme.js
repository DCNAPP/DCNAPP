var r = document.querySelector(':root');

if (localStorage.getItem("theme") === null) {
    localStorage.setItem('theme', 'dark');
    location.reload();
}

// if (localStorage.getItem("theme")  == 'dark') {

// }

if (localStorage.getItem("theme") == 'light') {
    r.style.setProperty('--main-bg-color', 'white');
    r.style.setProperty('--ep-title', '#181818');
    var element = document.getElementById("frame");
    r.style.setProperty('--box-color', '#111010');
    element.classList.add("box");
}