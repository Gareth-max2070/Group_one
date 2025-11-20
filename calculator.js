document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let firstSubject = document.getElementById("first_subject").value;
    let secondSubject = document.getElementById("second_subject").value;
    let thirdSubject = document.getElementById("third_subject").value;
    let error = document.getElementById("error");
    let totalDisplay = document.getElementById("total");
    let averageDisplay = document.getElementById("average");
    let gradeDisplay = document.getElementById("grade");
    let studentName = document.getElementById("name").value;

    error1.textContent = "";
    error2.textContent = "";
    error3.textContent = "";
    error4.textContent = "";



    if (studentName === "") {
        error4.textContent = "Please Enter Your Name"
        return;
    }
    if (firstSubject === "" || isNaN(firstSubject)) {
        error1.textContent = "Please enter your Physics score.";
        return;
    }
    if (firstSubject < 0 || firstSubject > 100) {
        error1.textContent = "Please enter a valid Physics score between 0 and 100.";
        return;
    }
    if (secondSubject === "" || isNaN(secondSubject)) {
        error2.textContent = "Please enter your Mathematics score.";
        return;
    }
    if (secondSubject < 0 || secondSubject > 100) {
        error2.textContent = "Please enter a valid Mathematics score between 0 and 100.";
        return;
    }
    if (thirdSubject === "" || isNaN(thirdSubject)) {
        error3.textContent = "Please enter your Chemistry score.";
        return;
    }
    if (thirdSubject < 0 || thirdSubject > 100) {
        error3.textContent = "Please enter a valid Chemistry score between 0 and 100.";
        return;
    }


    total = Number(firstSubject) + Number(secondSubject) + Number(thirdSubject);
    totalDisplay.textContent = "Total Score: " + total;
    let average = total / 3;
    averageDisplay.textContent = "Average Score:" + average.toFixed(2);

    if (average >= 90) {
        gradeDisplay.textContent = "Grade: A";
    }
    else if (average >= 80) {
        gradeDisplay.textContent = "Grade: B";
    }
    else if (average >= 70) {
        gradeDisplay.textContent = "Grade: C";
    }
    else if (average >= 60) {
        gradeDisplay.textContent = "Grade: D";
    }
    else {
        gradeDisplay.textContent = "Grade: F";
    }
});




