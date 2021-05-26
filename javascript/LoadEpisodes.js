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
}

const UpdateTitle = (title) => {
    document.getElementById("report-title-div").innerHTML += `<button id="report-button" onclick="episode_not_working('${title}')">not working?</button>`
    document.getElementById("report-title-div").innerHTML += `<h1 id="ep-title">${title}</h1>`
}

const CheckForUpdates = () => {
    GET_JSON(version_config)
        .then(data => {
            if (version != data['latest-version']) {
                alert('يوجد تحديث جديد لتحميل التحديث قم بتشغيل \nupdater.exe')
            }
        })
}