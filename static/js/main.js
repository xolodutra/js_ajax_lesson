$( document ).ready(function() {

    $('h1').addClass('red');

    $(".load-result").bind("click", function( event ) {
        event.preventDefault();
        $("#result").css({"top": 150});
        $("#result").show();
        $.get("/get-result/", function (data) {
                $("#result").html(data);
        });
    });

        $(".move-result").bind("click", function ( event ) {
        event.preventDefault();
        $("#result").animate({"top": 2000}, "slow");
    });   

        $(".fade-result").bind("click", function ( event ) {
        event.preventDefault();
        $("#result").fadeOut("slow");
    });
});