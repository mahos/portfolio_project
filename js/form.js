function validateForm() {
    var topicList = [];
    var name = $("#name").val();
    var email = $("#email").val();
    var formValidated = [];
    // console.log('validate form function running')
    $("#getConnected input[type=checkbox]:checked").each(function() {
        topicList.push($(this).val());
    })
    // check for empty fields
    if (topicList.length == 0 ) {
        console.log('no topic selected!');
        $(".help-text.topic > .default").removeClass('show');
        $(".help-text.topic > .error-message").addClass('show');
        formValidated.push(false);
    } else {
        $(".help-text.topic > .error-message").removeClass('show');
        $(".help-text.topic > .default").addClass('show');
        formValidated.push(true);
    }

    if (!name || name == '') {
        console.log('name missing');
        $(".help-text.name > .default").removeClass('show');
        $(".help-text.name > .error-message").addClass('show');
        formValidated.push(false);
    } else {
        $(".help-text.name > .error-message").removeClass('show');
        $(".help-text.name > .default").addClass('show');
        formValidated.push(true);
    }

    if (!email || email == '') {
        console.log('email missing');
        $(".help-text.email > .default").removeClass('show');
        $(".help-text.email > .error-message").addClass('show');
        formValidated.push(false);
    } else {
        $(".help-text.email > .error-message").removeClass('show');
        $(".help-text.email > .default").addClass('show');
        formValidated.push(true);
    }
    console.log('formValidated list: ', formValidated)

    // check if there is any invalid field on the form
    if (formValidated.includes(false)) {
        // console.log('returning false')

        return false;
    } else {
        // form cleared validation
        return true;
    }
    
}


// looking for change/focus on form fields, so if user is
// fixing the warning message, the red message goes away.
$(".topic-item > input[type='checkbox']").change(function() {
    if ($(".help-text.topic > .error-message").hasClass('show')) {
        $(".help-text.topic > .error-message").removeClass('show');
        $(".help-text.topic > .default").addClass('show');
    }
})

$("input#name").focus(function() {
    if ($(".help-text.name > .error-message").hasClass('show')) {
        $(".help-text.name > .error-message").removeClass('show');
        $(".help-text.name > .default").addClass('show');
    }
})

$("input#email").focus(function() {
    if ($(".help-text.email> .error-message").hasClass('show')) {
        $(".help-text.email > .error-message").removeClass('show');
        $(".help-text.email > .default").addClass('show');
    }
})


