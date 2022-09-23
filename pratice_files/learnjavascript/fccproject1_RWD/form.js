'use strict';

let $url = $(this).attr('action');
let $formData = $(this).serialize();

$('form').submit((event) => {
    event.preventDefault();
    $.ajax($url, {
        data: $formData,
        type: 'POST',
        timeout: 3000,
        success: (_response) => {
                $('#review').html('<p>Thanks for filling out the survey!</p>');
            },
        error: (xhr) => {
            $('#review').html(`<p>Sorry!, ${xhr.statusText}</p>`);
        }
    })   
});

