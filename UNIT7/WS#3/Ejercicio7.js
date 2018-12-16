$(document).ready(function(){
   /* $("#animacion").click(function(){
        $("div").animate({
            left: '450px',
            opacity: '0.3',
            height: '350px',
            width: '250px'
        },"slow");
    });
    */
    $("#animacion").click(function(){
        $("div").animate({height: '200px', color: 'blue'}, "slow").animate({height: '300px', background: 'green'}, "slow").animate({height: '400px', background: 'pink'}, "slow").animate({height: '500px', background: 'yellow'}, "slow");
    });
    $("#parar").click(function(){
        $("div").stop(true);
    });
});