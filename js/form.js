function validateForm() {
    var topicList = [];
    var name = $("#name").val();
    var email = $("#email").val();
    var formValidated = [];
    // console.log('validate form function running')
    var formData = {
        name: name,
        email: email,
        topic: topicList
    }
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
    // console.log('formValidated list: ', formValidated)

    // check if there is any invalid field on the form
    if (formValidated.includes(false)) {
        // console.log('form not validated - returning false')
        return false;
    } else {
        // form cleared validation
        console.log('validation cleared - submitting form');
        postForm(formData);
        // return true;
        return false; // still returning false, because form has been submitted by above function already.
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
    if ($(".help-text.email > .error-message").hasClass('show')) {
        $(".help-text.email > .error-message").removeClass('show');
        $(".help-text.email > .default").addClass('show');
    }
})


// function fakeSuccess() {
//     $('.form-response-overlay').addClass('showModal'); // make sure to show the modal
//     $('.error-response').css('display', 'none') // remove the error message
//     $('.success-response').css('display', 'block').parent().css('border-color', '#5A51C7');   
//     $('.message-card').removeClass('collapsed').css({'transition': 'all 0.4s'});
// }

// function fakeError() {
//     $('.form-response-overlay').addClass('showModal'); // make sure to show the modal
//     $('.success-response').css('display', 'none') // remove the success message
//     $('.error-response').css('display', 'block').parent().css('border-color', 'rgb(148, 3, 3)');; // show error message instead, and also style the border to be red for error
//     $('.message-card').removeClass('collapsed').css({'transition': 'all 0.4s'});
// }

function postForm(formData) {
    console.log('attempting to post formData: ', formData);
    $.ajax({
        url: 'https://formspree.io/f/mayljvop',
        method: 'POST',
        dataType: 'json',
        data: {
            name: formData['name'],
            email: formData['email'],
            topic: formData['topic']
        },
        success: function(result) {
            console.log('succes: ', result);
            $('.form-response-overlay').addClass('showModal'); // make sure to show the modal
            $('.error-response').css('display', 'none') // remove the error message
            $('.success-response').css('display', 'block').parent().css('border-color', '#5A51C7'); //add original color border replaced
            $('.message-card').removeClass('collapsed').css({'transition': 'all 0.4s'});
            var topicDict = {
                'uxui': 'UX/UI design',
                'MT': 'music therapy',
                'other': 'something else',
                'web dev': 'web development',
                'piano lesson': 'piano instruction'
            }
            var topicListing = formData['topic'].map(function(item) {
                return topicDict[item]
            }) // here the topicData items that are not in user friendly terms are converted to more appropriate terms using the topicDict

            var listOfTopics;
            if (topicListing.length > 1) { // clean output of list of topics message for multiple topics
                var topicListingString = topicListing.join(', '); // this gives somthing like "music therapy, piano instruction, something else"
                // replace the last comma with the word 'and'
                var replaceInd = topicListingString.lastIndexOf(',');
                var first = topicListingString.substring(0, replaceInd); // before the comma
                var second = topicListingString.substring(replaceInd + 1); // after the comma
                listOfTopics = first + ' and' + second; // final version to spit back - format: 'music therapy, piano instruction and something else'
            } else {
                listOfTopics = topicListing[0];
            }
            
            $('#formSuccessTopics').text(listOfTopics); // insert the topics inquired in the message card

            // clear form values
            $("#name").val(''); 
            $("#email").val('');
            $("#getConnected input[type=checkbox]:checked").each(function() {
                if ($(this).val() != 'uxui') { // keep the uxui checked by default here
                    $(this).prop('checked', false);
                }
            })
        },
        error: function(result) {
             $('.form-response-overlay').addClass('showModal'); // make sure to show the modal
             $('.success-response').css('display', 'none') // remove the success message
             $('.error-response').css('display', 'block').parent().css('border-color', 'rgb(148, 3, 3)');; // show error message instead, and also style the border to be red for error
             $('.message-card').removeClass('collapsed').css({'transition': 'all 0.4s'});

        }
    });
}


$('button.close-overlay').click(function() {

    $('.message-card').addClass('collapsed').css({'transition': 'all 0.4s'});
    $('.form-response-overlay').removeClass('showModal').css('transition', 'all 0.4s');
})