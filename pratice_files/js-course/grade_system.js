// This function can be used to process the grades of student based on certain parameters.
// grade is inputed as the initial student score which later translates to the the final score as output. 
// rnd helps to make decision about the number needed inorder to roundup to the multiple decided upon.
// d is the multiple chosen e.g. multiple of 2, 3, 4, ...


function gradingSystem(grade, d) {
    if (grade < 38) { // the condition here states the failure grade that cannot be rounded up.
        return grade;
    }
    else {
        let rnd = (Math.round(grade / d) * d + d) - grade;
        if (rnd < 3) { // condition for rounding-up grades 
            return (grade += rnd);
        }
        else if (rnd > 5) {
            rnd -= 5;
            if (rnd < 3) {
                return (grade += rnd);
            }
        }
        else {
            return grade;
        }
    }
};