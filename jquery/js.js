/*( function( $ ) {
    $( document ).ready(function() {

        $("p").hide();

    });

} )( jQuery );

*/

function spausti() {
    $('#press').animate({width: '150px', marginLeft: '45%'});
}
function nespausti() {
    $('#press').animate({width: '100%', marginLeft: '0'});
}


//21.2

function scrollUp() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}


//21.3

function limitLetters() {
    var maxLetters = 50;
    var letterCount = $("textarea").val().length;
    if(letterCount > maxLetters) {
        var short = $("textarea").val().substr(0, maxLetters);
        $("textarea").val(short);
    }
}

//21.4

function moveButton(elem) {
    if ($(elem).parent().attr("id") == "firstDiv") {
        $(elem).detach().appendTo('#SecDiv');
    }
    else if ($(elem).parent().attr("id") == "SecDiv") {
        $(elem).detach().appendTo('#thirdDiv');
    }
    else if($(elem).parent().attr("id") == "thirdDiv") {
        $(elem).detach().appendTo('#firstDiv');
    }
}


//21.5

    $("#c3").attr( "Productname","Apple" );


//21.6

    $('.disabledCheckboxes').removeAttr("disabled");


 /*   $(document).ready(function(){
        $('#button1').click(function(){
            $('.disabledCheckboxes').prop("disabled", false);

        });
    });

 */


    function append() {
    $('#parag').append('labas labas labas');
    }

    function prepend() {
        $('#parag').prepend('labas labas labas');
    }

    function after() {
        $('#parag').after('labas labas labas');
    }

    function before() {
        $('#parag').before('labas labas labas');
    }

    function remove() {
        $('#parag').remove('#parag');
    }

    function empty() {
        $('#parag').empty();
    }



    function blue() {
        $(".red").toggleClass("blue");
    }