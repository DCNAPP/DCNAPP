// $(document).ready(function(){
//     $("button").click(function() {
//         $("#frame").attr("src", $(this).attr("value"));
// })
// });

$(document).ready(function(){
    $("#list").click(function() {
        $(".dropdown-list").toggle();
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
    }
}


function GetValue(n) {
    // var word = document.getElementsByClassName('ep');
    SetValue(n);
    
    
}
