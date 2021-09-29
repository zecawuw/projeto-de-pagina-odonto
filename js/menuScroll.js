$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(herf).offSet().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
})