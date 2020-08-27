$(document).ready(function(){
    $("button").click(function() {
        console.log('button has been clicked');
        $("#frame").attr("src", $(this).attr("value"));
    })
});