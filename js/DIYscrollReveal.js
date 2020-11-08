​console.log('scroll reveal DIY version loaded...');
$(document).ready(function() {
    console.log('hi');
    $('#uxuiWorkCard2').css({'opacity': '0', "transform": "translateX(-90%)"});
    $('#uxuiWorkCard3').css({'opacity': '0', "transform": "translateX(90%)"});
    $('#uxuiWorkCard4').css({'opacity': '0', "transform": "translateX(-90%)"});
})
$(document).scroll(function() {
    console.log('screenheight: ', $(document).height());
    console.log('scrollTop: ', $(document).scrollTop());
    console.log('testcard offset top: ', $('#uxuiWorkCard2').offset().top)
    console.log('testcard outer height ', $('#uxuiWorkCard2').outerHeight())
    // scroll == offsettop - card 2/3 height ? animate　(this felt a bit too delayed so adjust to 0.9 instead)
    if ($(document).scrollTop() >=  $('#uxuiWorkCard2').offset().top - $('#uxuiWorkCard2').outerHeight() * 0.9) {
        $('#uxuiWorkCard2').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
    } else {
        $('#uxuiWorkCard2').css({'opacity': '0', 'transform': 'translateX(-90%)', 'transition': 'all 0.5s ease-in'});
    }
    if ($(document).scrollTop() >=  $('#uxuiWorkCard3').offset().top - $('#uxuiWorkCard3').outerHeight() * 0.9) {
        $('#uxuiWorkCard3').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
    } else {
        $('#uxuiWorkCard3').css({'opacity': '0', 'transform': 'translateX(90%)', 'transition': 'all 0.5s ease-in'});
    }
    if ($(document).scrollTop() >=  $('#uxuiWorkCard4').offset().top - $('#uxuiWorkCard4').outerHeight() * 0.9) {
        $('#uxuiWorkCard4').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
    } else {
        $('#uxuiWorkCard4').css({'opacity': '0', 'transform': 'translateX(-90%)', 'transition': 'all 0.5s ease-in'});
    }
}) 