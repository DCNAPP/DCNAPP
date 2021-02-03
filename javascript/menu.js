class Menu {

    constructor(ContainerID) {
        this.ContainerID = ContainerID
        this.MenuOptions = []

    }

    Options(options) {
        var count = options.length;
        var container = document.getElementById(this.ContainerID);
        var MenuElement;

        for (var i = 0; i < count; i++) {
            var item = options[i];
            this.MenuOptions.push(item.Name)

            if (item.icon == null) {
                MenuElement = `
                <div class="elm-body" id=${item.Name}>
                    <span class="non-icon-span">${item.Name}</span>
                    <img class="chevron_right-icon" src="asset/chevron_right.svg">
                </div>
                `
            } else {
                MenuElement = `
                <div class="elm-body" id=${item.Name}>
                    <img class="icon" src=${item.icon}><span class="icon-span">${item.Name}</span>
                    <img class="chevron_right-icon" src="asset/chevron_right.svg">
                </div>
                `
            }

            container.innerHTML += MenuElement;
        }
    }

    

    childOption(Name, menuOption, icon = null) {
        let childElement

        if (icon == null) {
            childElement = `
            <div class="elm-body" id=${Name} style="display: none">
                <span class="non-icon-span">${Name}</span>
            </div>
            `
        } else {    
            childElement = `
            <div class="elm-body" id=${Name} style="display: none">
                <img class="icon" src=${icon}><span class="icon-span">${Name}</span>
            </div>
            `
        }

        document.getElementById('MenuContainerID').insertAdjacentHTML("beforeend", childElement); 
        
        document.getElementById(menuOption).addEventListener('click', event => {

            for (var i = 0; i < this.MenuOptions.length; i++) {
                let item = this.MenuOptions[i]
                document.getElementById(item).style.display = 'none'
            }

            document.getElementById(Name).style.display = "block"
        });
    }
}

const menu = new Menu('MenuContainerID')



menu.Options([
    {
        "Name": "test1",
        "icon": null
    },
    {
        "Name": "test2",
        "icon": 'asset/settings.svg'
    },
    {
        "Name": "test3",
        "icon": null
    },
    {
        "Name": "test4",
        "icon": null
    },
    {
        "Name": "test5",
        "icon": null
    }
])

menu.childOption("theme", "test1", 'asset/settings.svg')
menu.childOption("theme2", "test1")








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

