$( document ).ready(function() {

$('h1').addClass('red');

$(".load-result").bind("click", function( event ) {
    event.preventDefault();
    $("#result").css({"top": 150});
    $("#result").show();
    $.getJSON("/get-result-json/", function (data) {
        var html = '<table class="table"><tr><th>№</th>\
                    <th>Сотрудник</th><th>Заказы</th>\
                    <th>Деньги</th></tr>';
        for (i=0; i< data['sales'].length; i++) {
            html += '<tr><td>' + (i+1) + '</td><td>' 
                + data['sales'][i][0] + '</td><td>' 
                + data['sales'][i][1] + '</td><td>' 
                + data['sales'][i][2] + '</td></tr>';
        };
        html += '</table>';
        console.log(html);
        $("#result").html(html);
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