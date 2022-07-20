/* Quiz guide
keep track of questions with variables
provide a final message
Rank participants with crowns:
 Gold - 5
 Silver - 3 to 4
 Bronze - 1 to 2 */

 alert ('Welcome aboard, it\'s quiz time!!!');

 // Variables holding the responses of prompts
 var questions = 5;
 questions -= 1;
 var questionsLeft = '[ ' + questions + ' questions left ]';
 var questionA = prompt ('ASUU has been on strike for how many months now? ' + questionsLeft );
 questions -= 1;
 questionsLeft = '[ ' + questions + ' questions left ]';
 var questionB = prompt ('When did the strike action commence? ' + questionsLeft );
 questions -= 1;
 questionsLeft = '[ ' + questions + ' questions left ]';
 var questionC = prompt ('What was the reason for the strike? ' + questionsLeft );
 questions -= 1;
 questionsLeft = '[ ' + questions + ' questions left ]';
 var questionD = prompt ('Under whose watch has the strike lingered up till now (on the government\'s part? ' + questionsLeft );
 var questionE = prompt ('How many semesters has been wasted by the unchallant attitude of the government?');
 
 // Final message
 alert ('Thanks for participating in the quiz, you\'ll get your score and reward shortly.')
 
 // Conditions to be met for ranking of participants.
 if ( 
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS'
     )
 {
     document.write ('<p>Got all questions right. Excellent!<br> You\'ve won yourself a <strong>Gold Crown</strong></p>');
 } 
 else if (
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionA.toUpperCase() === '5 MONTHS'  &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionE.toUpperCase() === '2 SEMESTERS'
     )
 {
     document.write ( '<p>Got 4 questions right. Very Good!<br> You\'ve won yourself a <strong>Silver Crown</strong></p>' );
 } 
 else if (
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS'
     )
 {
     document.write ( '<p>Got 3 questions right. Good!<br> You\'ve won yourself a <strong>Silver Crown</strong></p>' );
 }
 else if (
     questionA.toUpperCase() === '5 MONTHS' &&
     questionB.toUpperCase() === 'FEBRUARY' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionA.toUpperCase() === '5 MONTHS' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionC.toUpperCase() === 'OWED ALLOWANCES' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionB.toUpperCase() === 'FEBRUARY' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionC.toUpperCase() === 'OWED ALLOWANCES' &&
     questionE.toUpperCase() === '2 SEMESTERS' ||
     questionD.toUpperCase() === 'CHRIS NGIGE' &&
     questionE.toUpperCase() === '2 SEMESTERS'
     )
 {
     document.write ( '<p>Got 2 questions right. Fair!<br> You\'ve won yourself a <strong>Bronze Crown</strong></p>' );
 }
 else if (
     questionA.toUpperCase() === '5 MONTHS' ||
     questionB.toUpperCase() === 'FEBRUARY' ||
     questionC.toUpperCase() === 'OWED ALLOWANCES' ||
     questionD.toUpperCase() === 'CHRIS NGIGE' ||
     questionE.toUpperCase() === '2 SEMESTERS'
 )
 {
     document.write ( '<p>Got 1 question right. Poor!<br> You\'ve won yourself a <strong>Bronze Crown</strong></p>' );
 }
 else {
     document.write ('<p>Sorry, you can do better next time.<br><em>Keep trying</em></p>' );
     }