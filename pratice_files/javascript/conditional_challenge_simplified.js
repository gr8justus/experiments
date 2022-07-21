// Welcome Message
alert ('Welcome aboard, it\'s quiz time!!!');

var correct = 0
var questions = 5;
questions -= 1;
var questionsLeft = '[ ' + questions + ' questions left ]';
var questionA = prompt ('ASUU has been on strike for how many months now? ' + questionsLeft );
if ( questionA.toUpperCase() === '5 MONTHS' ) {
    correct += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left ]';
var questionB = prompt ('When did the strike action commence? ' + questionsLeft );
if ( questionB.toUpperCase() === 'FEBRUARY' ) {
    correct += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left ]';
var questionC = prompt ('What was the reason for the strike? ' + questionsLeft );
if ( questionC.toUpperCase() === 'OWED ALLOWANCES' ) {
    correct += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left ]';
var questionD = prompt ('Under whose watch has the strike lingered up till now (on the government\'s part? ' + questionsLeft );
if ( questionD.toUpperCase() === 'CHRIS NGIGE' ) {
    correct += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left ]';
var questionE = prompt ('How many semesters has been wasted by the unchallant attitude of the government?');
if ( questionE.toUpperCase() === '2 SEMESTERS' ) {
    correct += 1;
}

// Final Message
document.write ( 'You got ' + correct + ' out of 5 questions.');

// Ranking
if ( correct === 5 ) {
    document.write ('<p>Excellent!<br> You\'ve won yourself a <strong>Gold Crown</strong></p>');
}
else if ( correct >= 3 ) {
    document.write ( '<p>Very Good!<br> You\'ve won yourself a <strong>Silver Crown</strong></p>' );
}
else if ( correct >= 1 ) {
    document.write ( '<p>Fair!<br> You\'ve won yourself a <strong>Bronze Crown</strong></p>' );
}
else {
    document.write ('<p>Sorry, you can do better next time.<br><em>Keep trying</em></p>' );
}