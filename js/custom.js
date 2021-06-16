var menuDisplay = false;

//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function () {

    // random payoff

    var payoffArray = [
        'Se il telefono si surriscalda è colpa di NOODLES',
        'Basta nudes, solo NOODLES',
        'Sexting piccante o agrodolce, decidete voi'
    ];
    var randomNumber = Math.floor(Math.random() * payoffArray.length);

    $('#payoff').text(payoffArray[randomNumber]);

    //header

    $('#bottonePrincipale').on('scrollSpy:exit', function () {
        $('#header').css('top', '0');
        if (window.matchMedia('(min-width: 768px)').matches) {
            $("#header_GP").css("transform", 'translateY(0)');
            $("#header_AS").css("transform", 'translateY(0)');
            $("#header-logo").css("border-bottom", 'none');
        } else {
            $("#header_GP").css("transform", 'translateY(-200%)');
            $("#header_AS").css("transform", 'translateY(-200%)');
            $("#menuToggle input:checked ~ span:nth-last-child(3)").css("transform", "");
            $("#menuToggle input:checked ~ span:nth-last-child(2)").css("transform", "");
            $("#menuToggle input:checked ~ span:nth-last-child(1)").css("transform", "");
            $("#menuToggle input").prop("checked", false);
            $("#header-logo").css("border-bottom", 'none');
            menuDisplay = false;
        }
    });

    $('#bottonePrincipale').on('scrollSpy:enter', function () {
        $('#header').css('top', '-100%');
    });

    $('#bottonePrincipale').scrollSpy();

    if ($('#bottonePrincipale').visible(true)) {
        $('#header').css('top', '-100%');
    } else {
        $('#header').css('top', '0');
    };


    //mobile menu

    if (window.matchMedia('(min-width: 768px)').matches) {
        $("#menuToggle").addClass('noDisplay');
        $("#header_GP").css("transform", 'translateY(0)');
        $("#header_AS").css("transform", 'translateY(0)');
        $("#header-logo").css("border-bottom", 'none');
    } else {
        $("#menuToggle").removeClass('noDisplay');
        $("#header_GP").css("transform", 'translateY(-200%)');
        $("#header_AS").css("transform", 'translateY(-200%)');
    }

    $(function () {
        $('#menuButton').click(menuClick);
    });

    function menuClick() {

        if (menuDisplay == false) {
            $("#header_GP").css("transform", 'translateY(0)');
            $("#header_AS").css("transform", 'translateY(-20px)');
            $("#header-logo").css("border-bottom", '2px solid white');
        } else {
            $("#header_GP").css("transform", 'translateY(-200%)');
            $("#header_AS").css("transform", 'translateY(-200%)');
            $("#header-logo").css("border-bottom", 'none');
        }

        menuDisplay = !menuDisplay;

    }

    //carousel swipe

    $(document).ready(function () {
        $("#carouselDivertimento, #carouselSperimentazione, #carouselSicurezza").swiperight(function () {
            $(this).carousel('prev');
        });
        $("#carouselDivertimento, #carouselSperimentazione, #carouselSicurezza").swipeleft(function () {
            $(this).carousel('next');
        });
    });

});


// header on window resize

$(window).resize(function () {
    $("#menuToggle input:checked ~ span:nth-last-child(3)").css("transform", "");
    $("#menuToggle input:checked ~ span:nth-last-child(2)").css("transform", "");
    $("#menuToggle input:checked ~ span:nth-last-child(1)").css("transform", "");
    $("#menuToggle input").prop("checked", false);
    menuDisplay = false;
    if (window.matchMedia('(min-width: 768px)').matches) {
        $("#menuToggle").addClass('noDisplay');
        $("#header_GP").css("transform", 'translateY(0)');
        $("#header_AS").css("transform", 'translateY(0)');
        $("#header-logo").css("border-bottom", 'none');
    } else {
        $("#menuToggle").removeClass('noDisplay');
        $("#header_GP").css("transform", 'translateY(-200%)');
        $("#header_AS").css("transform", 'translateY(-200%)');
    }
});