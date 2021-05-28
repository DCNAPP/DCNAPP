if (localStorage.getItem("filter") == "true") {
    GET_JSON(episodes_data)
        .then(data => {
            var count = data.length;
            var container = document.getElementById("dropdown-list");
            var EpisodeElement;

            for (var i = 0; i < count; i++) {
                var item = data[i];
                
                if (item.isfiller == false) {
                    EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}</button></div>`
                    container.innerHTML += EpisodeElement;
                }
            }
        })
} else {
    GET_JSON(episodes_data)
        .then(data => {
            var count = data.length;
            var container = document.getElementById("dropdown-list");
            var EpisodeElement;

            for (var i = 0; i < count; i++) {
                var item = data[i];
                if (item.isfiller === true) {
                    EpisodeElement = `<div class="dropdown-list_item"><button class="ep filler-ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}</button></div>`
                } else {
                    EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}</button></div>`
                }
                container.innerHTML += EpisodeElement;
            }
        })
}

function toggle_filter()
{
    if (localStorage.getItem("filter") == "true") {
        localStorage.setItem("filter", "false")
    } else {
        localStorage.setItem("filter", "true")
    }
    location.reload()
}

function LoadEpisodes(url, title) {
    CheckForUpdates()
    UpdateTitle(title)
    document.querySelector('#frame').src = url
    display.hide("#dropdown-list")
    document.getElementById("caret-icon").classList.toggle("up")
}

const UpdateTitle = (title) => {
    document.getElementById("report-title-div").innerHTML += `<button id="report-button" title="episode not working!" onclick="episode_not_working('${title}')"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg></button>`
    document.getElementById("report-title-div").innerHTML += `<h1 id="ep-title">${title}</h1>`
}

const CheckForUpdates = () => {
    GET_JSON(version_config)
        .then(data => {
            if (`v${version}` != data['latest-version']) {
                alert('يوجد تحديث جديد لتحميل التحديث قم بتشغيل \nupdater.exe')
            }
        })
}