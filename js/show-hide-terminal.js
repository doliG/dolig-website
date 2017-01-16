$(function() {

    $('body').keyup(function(e) {
        if (e.keyCode == 32) {
            if (!$('#command').is(':focus')) {
                e.preventDefault();
                if ($('#terminal').hasClass('hidden')) {
                    terminalShow();
                }
            }
        } else if ($("#terminal").hasClass('hidden')) {
            console.log("You should press space.");
        }
    });

    $('body').keyup(function(e) {
        if (e.keyCode == 27) {
            e.preventDefault();
            terminalHide();
        }
    });

    $('#terminal').bind('onanimationend animationend Wbekitanimatioend', function() {
        $('#command').focus();
    });

    function terminalShow() {
        $('#content').addClass('hidden');
        if ($('#terminal').hasClass('animated')) {
            $('#terminal').removeClass('bounceInUp');
        } else {
            $("#terminal").addClass("animated bounceInUp");
        }
        $('#terminal').removeClass('hidden');
        if ($('#terminal').hasClass('animated') && !$('#terminal').hasClass('bounceInUp')) {
            $('#command').focus();
        }
        console.log('terminalShow()');
    }
    function terminalHide() {
        $('#content').removeClass('hidden');
        $('#content').addClass('animated fadeIn')
        $('#terminal').addClass('hidden');
        console.log('terminalHide()');
    }

    //////////////
    // Terminal //
    /////////////
    $('#command-form').on('submit', function(e) {
        e.preventDefault();
        if (!$('#command').val() == '') {
            console.log("Envoie formulaire...");
            $.post("terminal.php", $(this).serialize(), function(data) {
                terminalRefresh(data);
            });
            console.log("Envoie ok.");
        } else {
            // Erreur log.
        }
    });

    function terminalRefresh(data) {
        console.log('terminalRefresh()');
        $('.terminal-history').append('<span>user@dolig.xyz $ ' + $('#command').val() + '</span><br>');
        $('.terminal-history').append(data);
        $('#command').val('');
        $('#command').focus();
    }

});
