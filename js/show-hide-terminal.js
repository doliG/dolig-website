$(function() {
    $('body').keypress(function(e) {
        if (e.keyCode == 32) {
            if (!$('#command').is(':focus')) {
                e.preventDefault();
                // console.log('click');
                if ($('#terminal').hasClass('hidden')) {
                    terminalShow();
                } else {
                    terminalHide();
                }
            }
        } else if (!$('#command').is(':focus')) {
            console.log("You should press space.");
        }
    })

    $('#command').keyup(function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            terminalHide();
        }
    });

    function terminalShow() {
        if ($("#terminal").hasClass("animated bounceInUp")) {
            $("#terminal").removeClass("bounceInUp");
            $("#terminal").addClass("fadeIn");
        } else {
            $("#terminal").addClass("animated bounceInUp");
        }
        $('#terminal').removeClass('hidden');
        $('#content').addClass('hidden');
        $("#terminal").bind('oanimationend animationend webkitAnimationEnd', function() {
            $("#command").focus();
        });
        console.log('Terminal: show');
    }
    function terminalHide() {
        $('#content').removeClass('hidden');
        $('#content').addClass('animated fadeIn')
        $('#terminal').addClass('hidden');
        console.log('Terminal: hide');
    }
});
