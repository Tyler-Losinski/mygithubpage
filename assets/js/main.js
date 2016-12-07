jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
$( "button" ).click(function() {
    $(this).html("Disable float");
    if(!$( "#theImg" ).length){
        $('#image_text').prepend('<img id="theImg" src="assets/images/Me.gif" style="float: right; width: 100px; height:100px;" />');
    }
    else{
        $('#theImg').remove();
        $(this).html("Click here for image float");
    }
});

    

});