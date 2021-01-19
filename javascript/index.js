var version = "v1.4.3";


$(document).ready(function () {
    $("#list").click(function () {
        $(".dropdown-list").toggle('fast');
    });

    $(".ep").click(function () {
        $(".dropdown-list").hide('fast');
    });

    $.getJSON('https://senpai-10.github.io/DCNAPP/config/version.json', function SetValue(data) {
        var UpdaterLink = document.querySelector('#updater-link');
        UpdaterLink.href = `https://github.com/Senpai-10/DCNAPP/releases/download/${data['latest-version']}/updater.exe`;
    });


});




function SetValue(n) {
    var word = $(".ep").text();
    if (word.search(n)) {
        $.getJSON('https://senpai-10.github.io/DCNAPP/urls.json', function SetValue(data) {

            var element = document.querySelector('#frame');
            element.src = data[n];

        });

        document.getElementById("ep-title").innerHTML = "الحلقة رقم " + n;
    }
}


function GetValue(n) {
    SetValue(n);

    $.getJSON('https://senpai-10.github.io/DCNAPP/config/version.json', function SetValue(data) {

        if (version == data['latest-version']) {

            console.log('You are in the latest version');

        }
        else {
            alert('يوجد تحديث جديد لتحميل التحديث قم بتشغيل \nupdater.exe')
            console.log('there\'s a new update (open updater.exe)');
        }

    });
}

