var version = "v1.4.0";

$(document).ready(function(){
    $("#list").click(function() {
        $(".dropdown-list").toggle();
    });
    
    $(".dropdown-list__item").click(function() {
        $(".dropdown-list").hide();
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

