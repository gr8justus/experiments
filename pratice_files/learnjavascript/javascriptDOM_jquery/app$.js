'use strict'

const $ul = $('ul');
const $li = $('li');


const liChildren = () => {
    let $li = $('li');
    $('ul').children().append(addBtnsToList($li))
};

const addBtnsToList = li => {
    const $remove = $('<button class="btn remove">Remove</button>');
    li.append($remove);
    
    const $down = $('<button class="btn down">Down</button>');
    li.append($down);
    
    const $up = $('<button class="btn up">Up</button>');
    li.append($up);   
}

$('#headButton').click(() => {
    $('#head').css('color', $('#myTextInput').val());
    $('#myTextInput').val('');
});

$('#descriptionBtn').click(() => {
    $('#description').text($('#listDescription').val() + ':');
    $('#listDescription').val('');
});

liChildren();

$ul.click( (event) => {
    if(event.target == $('.btn')) {
        $ul.remove($li);
    }
});

$('#addUpBtn').click(() => {
    let $li = $('<li></li>').text($('#addUp').val());
    addBtnsToList($li);
    $('ul').append($li);
    $('#addUp').val('');
});

// $('#toggler').click(() => {
//     if($('#toggleList').css('display', 'none')) {
//         $('#toggler').text('Show list');
//     } else {
//         $('#toggler').text('Hide list');
//     }
// });