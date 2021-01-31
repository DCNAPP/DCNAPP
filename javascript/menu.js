$(document).ready(function () {

    // toggle expand arrow
    $("#expand").click(function () {
        $("#menu-body").slideToggle('slow');
    });



    // open settings
    $("#elm-body-settings").click(function () {
        $("#elm-body-settings").hide();
        $("#elm-body-info").hide();
        $("#elm-body-issue").hide();
        $("#settings-inside").show('slow');

        $("#expand").click(function () {
            $("#elm-body-settings").show('slow');
            $("#elm-body-info").show();
            $("#elm-body-issue").show();
            $("#settings-inside").hide();
        });
    });
    // open [settings][theme]
    $("#elm-body-settings-theme").click(function () {
        $("#settings-inside").hide();
        $("#settings-inside-theme").show('slow');

        $("#expand").click(function () {
            $("#elm-body-settings").show('slow');
            $("#settings-inside-theme").hide();
        });

    });




    $("#elm-body-info").click(function () {
        $('#version').text('version: ' + version)
        $("#elm-body-settings").hide();
        $("#elm-body-info").hide();
        $("#elm-body-issue").hide();
        $("#info-inside").show('slow');

        $("#expand").click(function () {
            $("#elm-body-settings").show('slow');
            $("#elm-body-info").show();
            $("#elm-body-issue").show();
            $("#info-inside").hide();
        });
    });

    $("#elm-body-settings-theme-in-dark").click(function () {
        localStorage.setItem('theme', 'dark');
        $("#menu-body").hide('slow');
        location.reload();
    });
    $("#elm-body-settings-theme-in-light").click(function () {
        localStorage.setItem('theme', 'light');
        $("#menu-body").hide('slow');
        location.reload();
    });


});
