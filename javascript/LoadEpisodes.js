// <div class="dropdown-list__item"><button class="ep" onclick="GetValue('1')">   1 الحلقة  </button></div>

$.getJSON('https://dcnapp.github.io/Config/EpisodesData.json', data => {
    console.log(data);
    var count = data.length;
    var container = document.getElementById("dropdown-list");

    for (var i = 0; i < count; i++) {
        var item = data[i];

        const EpisodeElement = `<div class="dropdown-list_item"><button class="ep" onclick="LoadEpisodes(${item['url']})">${item['title']}</button></div>`
        console.log(EpisodeElement);
        container.innerHTML += EpisodeElement
    }
})



function LoadEpisodes(url) {
    console.log(url);
}