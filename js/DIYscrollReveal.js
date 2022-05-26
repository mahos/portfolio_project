$(document).ready(function() {
    $('#uxuiWorkCard2').css({'opacity': '0', "transform": "translateX(-90%)"});
    $('#uxuiWorkCard3').css({'opacity': '0', "transform": "translateX(90%)"});
    $('#uxuiWorkCard4').css({'opacity': '0', "transform": "translateX(-90%)"});
    $('#uxuiWorkCard5').css({'opacity': '0', "transform": "translateX(90%)"});
})
$(document).scroll(function() {
    // console.log('screenheight: ', $(document).height(), ' / scrollTop: ', $(document).scrollTop(), ' /testcard offset top: ', $('#uxuiWorkCard2').offset().top, ' /testcard outer height ', $('#uxuiWorkCard2').outerHeight());
    // scroll == offsettop - card 2/3 height ? animate　(this felt a bit too delayed so adjust to 0.9 instead)
    if (!$('#uxuiWorkCard2').hasClass('scrolled-in')) {
        if ($(document).scrollTop() >=  $('#uxuiWorkCard2').offset().top - ($('#uxuiWorkCard2').outerHeight() * 1.3)) {
            $('#uxuiWorkCard2').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
            $('#uxuiWorkCard2').addClass('scrolled-in')
           
        } else {
            $('#uxuiWorkCard2').css({'opacity': '0', 'transform': 'translateX(-90%)', 'transition': 'all 0.5s ease-in'});
        }
    }

    if (!$('#uxuiWorkCard3').hasClass('scrolled-in')) {
        if ($(document).scrollTop() >=  $('#uxuiWorkCard3').offset().top - ($('#uxuiWorkCard3').outerHeight() * 1.3)) {
            $('#uxuiWorkCard3').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
            $('#uxuiWorkCard3').addClass('scrolled-in')
        } else {
            $('#uxuiWorkCard3').css({'opacity': '0', 'transform': 'translateX(90%)', 'transition': 'all 0.5s ease-in'});
        }
    }
    
    if (!$('#uxuiWorkCard4').hasClass('scrolled-in')) {
        if ($(document).scrollTop() >=  $('#uxuiWorkCard4').offset().top - ($('#uxuiWorkCard4').outerHeight() * 1.3)) {
            $('#uxuiWorkCard4').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
            $('#uxuiWorkCard4').addClass('scrolled-in')
        } else {
            $('#uxuiWorkCard4').css({'opacity': '0', 'transform': 'translateX(-90%)', 'transition': 'all 0.5s ease-in'});
        }
    }

    if (!$('#uxuiWorkCard5').hasClass('scrolled-in')) {
      if ($(document).scrollTop() >=  $('#uxuiWorkCard5').offset().top - ($('#uxuiWorkCard5').outerHeight() * 1.3)) {
          $('#uxuiWorkCard5').css({'opacity': '1', 'transform': 'translateX(0%)', 'transition': 'all 0.5s linear'});
          $('#uxuiWorkCard5').addClass('scrolled-in')
      } else {
          $('#uxuiWorkCard5').css({'opacity': '0', 'transform': 'translateX(90%)', 'transition': 'all 0.5s ease-in'});
      }
    }
    

    if ($(document).scrollTop() < $('#uxuiWorkCard1').outerHeight()) {
        // console.log('removing class')
        $('#uxuiWorkCard2').removeClass('scrolled-in')
        $('#uxuiWorkCard3').removeClass('scrolled-in')
        $('#uxuiWorkCard4').removeClass('scrolled-in')
        $('#uxuiWorkCard5').removeClass('scrolled-in')
    }
}) 