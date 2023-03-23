(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.menu-burger').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'https://lh3.googleusercontent.com/oQ5V3GHxzQBzATLXT4GZQDshdWXkyn11QkvAB0g7GFekrC06KGJvAzvxAfgYm7blGO-aqHlllvnPCDF8YTbDG7dq6QTWTDBx9Yo6PNqq7i-8sA=s750' },
            { src: 'https://cdn.24.co.za/files/Cms/General/d/4334/93d1c8e68cc6483eb226d13ce2792ffc.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
