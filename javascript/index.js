var version = "v1.5.1";

$(document).ready(function () {
    $("#list").click(function () {
        $("#dropdown-list").toggle('fast');
    });

    $(".ep").click(function () {
        $("#dropdown-list").hide('fast');
    });

    $.getJSON('https://dcnapp.github.io/Config/version.json', function SetValue(data) {
        var UpdaterLink = document.querySelector('#updater-link');
        UpdaterLink.href = `https://github.com/DCNAPP/DCNAPP/releases/download/${data['latest-version']}/updater.exe`;
    });


});




function SetValue(n) {
    var word = $(".ep").text();
    if (word.search(n)) {
        $.getJSON('https://dcnapp.github.io/Config/urls.json', function SetValue(data) {

            var element = document.querySelector('#frame');
            element.src = data[n];

        });

        document.getElementById("ep-title").innerHTML = "الحلقة رقم " + n;
    }
}


function GetValue(n) {
    SetValue(n);

    $.getJSON('https://dcnapp.github.io/Config/version.json', function SetValue(data) {

        if (version == data['latest-version']) {

            console.log('You are in the latest version');

        }
        else {
            alert('يوجد تحديث جديد لتحميل التحديث قم بتشغيل \nupdater.exe')
            console.log('there\'s a new update (open updater.exe)');
        }

    });
}

