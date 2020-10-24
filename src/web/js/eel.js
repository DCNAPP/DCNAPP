$(document).ready(function(){
    $("#list").click(function() {
        $(".dropdown-list").toggle();
    });
    
});

var version = "2020.1.1";


$(document).ready(function(){
    $.getJSON('https://senpai-10.github.io/DCNAPP/versions/version.json', function SetValue(data) {
            

        
        if (version == data['last-version']) {

            document.getElementById("update-button").style.backgroundColor = '#c5c5c5';
            document.getElementById("update-button").style.cursor = 'not-allowed';
            document.getElementById("update-a").href = 'none';
        }
        else {
            document.getElementById("update-button").style.backgroundColor = 'rgb(37, 221, 77)';
        }

    });
});

function SetValue(n) {
    var word = $(".ep").text();
    if (word.search(n)) {
        // https://senpai-10.github.io/DCNAPP/urls.json
        $.getJSON('https://senpai-10.github.io/DCNAPP/urls.json', function SetValue(data) {
            
            var element = document.querySelector('#frame');
            element.src = data[n];

        });
        
        document.getElementById("ep-title").innerHTML = "الحلقة رقم " + n;
    }
}


function GetValue(n) {
    SetValue(n);
}

