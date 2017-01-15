$(function() {
    $('body').keypress(function(e) {
        if (e.keyCode == 32) {
            if (!$('#command').is(':focus')) {
                e.preventDefault();
                // console.log('click');
                if ($('#terminal').hasClass('hidden')) {
                    $('#terminal').removeClass('hidden');
                    $('#terminal').addClass('animated bounceInUp')
                    $('#content').addClass('hidden');
                    $('#command').is(':focus');
                    console.log('Terminal: show');
                } else {
                    $('#content').removeClass('hidden');
                    $('#content').addClass('animated fadeIn')
                    $('#terminal').addClass('hidden');
                    console.log('Terminal: hide');
                }
            }
        } else if ( !$('#command').is(':focus') ) {
            console.log("You should press space.");
        }
    })
})
