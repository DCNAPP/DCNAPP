var version = "v1.5.2";

$(document).ready(function () {
    $("#list").click(function () {
        $("#dropdown-list").toggle('fast');
    });

    $(".ep").click(function () {
        $("#dropdown-list").hide('fast');
    });

    $.getJSON('https://dcnapp.github.io/Config/version.json', data => {
        var UpdaterLink = document.querySelector('#updater-link');
        UpdaterLink.href = `https://github.com/DCNAPP/DCNAPP/releases/download/${data['latest-version']}/updater.exe`;
    });

});