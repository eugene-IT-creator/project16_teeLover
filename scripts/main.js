$(document).ready(function () {

    // WOW JS
    new WOW({
        animateClass: 'animate__animated'
    }).init();


    // MAGNIFIC POPUP
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.product-image').magnificPopup({
        type: 'image',
    });


    // SLICK SLIDER
    $('.slick-fade').slick({
        // dots: true,
        responsive: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
    });


    // ACCORDION
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        icons: {"header": "ui-icon-caret-1-w", "activeHeader": "ui-icon-caret-1-s"}
        // active: false

    });


    //INPUTS
    let inputSurname = $('#inputSurname');
    let inputName = $('#inputName');
    let inputPhone = $('#inputPhone');
    let inputCountry = $('#inputCountry');
    let inputIndex = $('#inputIndex');
    let inputAddress = $('#inputAddress');


//    No letters in index
    inputIndex.on('keydown', function (e) {
        let key = e.key;
        return key >= 0 || key.toLowerCase() === 'backspace' || key.toLowerCase() === 'tab';
    });


    // VALIDATE FORM
    $('#btn').click(function () {
        if (!inputSurname.val()) {
            alert("Surname is missing");
            return;
        }
        if (!inputName.val()) {
            alert("Name is missing");
            return;
        }
        if (!inputPhone.val()) {
            alert("Phone number is missing");
            return;
        }
        if (!inputCountry.val()) {
            alert("Country is missing");
            return;
        }
        if (!inputIndex.val()) {
            alert("Index is missing");
            return;
        }
        if (!inputAddress.val()) {
            alert("Address is missing");
            return;
        }


        // CLEAR THE FORM AFTER POPUP
        $('#main-form').remove();
        $('#orderSuccessful').css('visibility', 'visible');
    });
})



