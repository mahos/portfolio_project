$(".top-ux-hero-area").mouseover(function(e) {
    console.log('mouse over detected!', $(this));
    console.log('e: ', e)
    var x = e.clientX;
    var y = e.clientY;
    console.log('x and y: ', x, y)
    $("#hero-cursor").css({'left': `${x}px`, 'top': `${y}px`, 'opacity': 1});

    
}).mouseout(function(e) {
    $("#hero-cursor").css({'opacity': 0});
})


$(".animated-text").mouseenter(function() {
    $("#hero-cursor")
        .css({
            'width': '100px', 
            'height': '100px',
            'border': '2px dashed rgba(34, 34, 182, 0.4)',
            'animation': 'spinner 6s linear infinite'
        });
}).mouseleave(function() {
    $("#hero-cursor")
        .css({
            'width': '20px', 
            'height': '20px',
            'border': '2px solid rgba(34, 34, 182, 0.4)',
            'animation': 'none'
        });
})
