$(document).ready(
    function(){
        $("#portfolioDD a").click(function(){
            $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
            $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        });

        fillStockInfo(jsonData);
});

    var jsonData = [
        {
            "company" : "Google",
            "quantity" : 400,
            "value" : 20
        },
        {
            "company" : "Microsoft",
            "quantity" : 130,
            "value" : 30
        },
        {
            "company" : "Facebook",
            "quantity" : 60,
            "value" : 220
        }
    ];

    var fillStockInfo = function(jsonData){
        for(var i = 0; i < jsonData.length; i++){
            var $div = createDiv(jsonData[i]);
            $("#stockInfo").append($div);
        }
    };

    var createDiv = function(elementJson) {
        var $div =  $("<div></div>");
    };
