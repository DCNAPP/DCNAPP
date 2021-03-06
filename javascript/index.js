var package_json = require('./package.json')
var version = package_json.version
var version_config = "https://dcnapp.github.io/Config/version.json"
var episodes_data = "https://dcnapp.github.io/Config/EpisodesData.json"

const GET_JSON = async url => {
    try {
      const response = await fetch(url);
      if(!response.ok) 
        throw new Error(response.statusText);
  
      const data = await response.json();
      return data; 
    } catch(error) {
      return error;
    }
}

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(() => {
    document.getElementById("list").addEventListener("click", () => {
        document.getElementById("caret-icon").classList.toggle("up")
        display.toggle("#dropdown-list")
    })
    
    GET_JSON(version_config)
        .then(data => {
            var UpdaterLink = document.querySelector('#updater-link');
            UpdaterLink.href = `https://github.com/DCNAPP/DCNAPP/releases/download/${data['latest-version']}/updater.exe`;
        })

    if (localStorage.getItem("filter") == "true") {
        document.getElementById("filter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#376cdf"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>`
    } else {
        document.getElementById("filter").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>`
    }
})
