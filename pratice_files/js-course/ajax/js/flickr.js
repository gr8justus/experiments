$(document).ready(function () {
    $('.imgTab button').click(function () {
        $('.imgTab button').removeClass("selected");
        $(this).addClass("selected");
        let animals = $(this).text();
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', 
            {
                tags: animals,
                format: 'json'
            },
            function (data) {
                let photoHTML = `<ul class='imgGrid'>`;
                $.each(data.items, function (_i, photo) {
                    photoHTML += `<li><a href ='${photo.link}'>
                    <img src = '${photo.media.m}' alt = '${photo.title}'></a></li>`
                }); // end loop
                photoHTML += '</ul>';
                $('.display').html(photoHTML);
        }).fail(function (photoXhr) {
            $('.display').html(`<li>${photoXhr.statusText}</li>`);
        });
    }); // end click

    $('form').submit(function (event) {
        event.preventDefault();
        let searchKey = $('#search').val();
        $('#search').val('');
        $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', 
            {
                tags: searchKey,
                format: 'json'
            },
            function (data) {
                let photoHTML = `<ul class='imgGrid'>`;
                $.each(data.items, function (_i, photo) {
                    photoHTML += `<li><a href ='${photo.link}'>
                    <img src = '${photo.media.m}' alt = '${photo.title}'></a></li>`
                }); // end loop
                photoHTML += '</ul>';
                console.log(photoHTML);
                $('.searchResults').html(photoHTML);
        }).fail(function (photoXhr) {
            $('.searchResults').html(`<li>${photoXhr.statusText}</li>`);
        });
    }); // end submit
}); // end ready