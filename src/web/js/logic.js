$(document).ready(function(){
    $("button").click(function() {
        $("#frame").attr("src", $(this).attr("value"));
    })

    $("#list").click(function() {
        $(".dropdown-list").toggle();
    });
});

function SetValue() {
    //
}

function GetValue(n) {
    // var word = document.getElementsByClassName('ep');
    var word = $(".ep").text();

    if (word.search("1")) {
        var URL = 'https://mega.nz/embed/Th50WQ5Q#yKTVGui8_A0eDnHnwYdckJG4tfLrfPqSflF62DFt5bc';

    }
    
}
const url1 = '';
