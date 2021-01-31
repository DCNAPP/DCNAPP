// <div class="dropdown-list__item"><button class="ep" onclick="GetValue('1')">   1 الحلقة  </button></div>

$.getJSON('https://dcnapp.github.io/Config/EpisodesData.json', data => {
    console.log(data);
    var count = data.length;
    var container = document.getElementById("dropdown-list");

    for (var i = 0; i < count; i++) {
        var item = data[i];
        var EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(\'${item.url}\', \'${item.title}\')">${item.title}</button></div>`
        container.innerHTML += EpisodeElement;
    }
});



function LoadEpisodes(url, title) {
    UpdateTitle(title)
}

const UpdateTitle = title => document.getElementById("ep-title").innerHTML = title
