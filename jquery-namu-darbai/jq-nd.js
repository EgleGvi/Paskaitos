/*
function moveButton(elem) {
    if ($(elem).parent().attr("id") !== "firstDiv") {
        $(elem).detach().appendTo('p:nth-child(2)');
    }
}
*/

$('#btn-move').click(function (){
    $('#image1').remove();
    $("#firstDiv > p:nth-child(2)").after("<img src=\"img/birds11.jpg\">");
});


$('#btn-delete').click(function (){
    $('.hwh-items-wrapper *').removeAttr('class');
    $(".hwh-items-wrapper").attr( "class","items-wrapper" );
    $('div').removeClass('.hwh-items-wrapper');
});


