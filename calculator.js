document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let firstSubject = document.getElementById("first_subject").value;
    let secondSubject = document.getElementById("second_subject").value;
    let thirdSubject = document.getElementById("third_subject").value;
    let totalDisplay = document.getElementById("total");
    let averageDisplay = document.getElementById("average");
    let gradeDisplay = document.getElementById("grade");
    let studentName = document.getElementById("name").value.trim().toUpperCase();
    let studenNameDisplay = document.getElementById("s_name");
    let remarksDisplay = document.getElementById("remarks");
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");

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

    studenNameDisplay.textContent = "Dear" + "," + "" + studentName;

    total = Number(firstSubject) + Number(secondSubject) + Number(thirdSubject);
    totalDisplay.textContent = "Your Total Score: " + total;
    let average = total / 3;
    averageDisplay.textContent = "Your Average Score:" + average.toFixed(2);

    if (average >= 90) {
        gradeDisplay.textContent = "Grade: A";
        remarksDisplay.textContent = "Excellent performance! Keep it up."
    }
    else if (average >= 80) {
        gradeDisplay.textContent = "Grade: B";
        remarksDisplay.textContent = "Very good! You're doing great."
    }
    else if (average >= 70) {
        gradeDisplay.textContent = "Grade: C";
        remarksDisplay.textContent = "Good effort. You can still improve."
    }
    else if (average >= 60) {
        gradeDisplay.textContent = "Grade: D";
        remarksDisplay.textContent = "Fair result. Try harder next time."
    }
    else {
        gradeDisplay.textContent = "Grade: F";
        remarksDisplay.textContent = "Poor performance. More study is needed."
    }

});

document.getElementById("name").addEventListener("input", () => {
    document.getElementById("error4").textContent = "";
});

document.getElementById("first_subject").addEventListener("input", () => {
    document.getElementById("error1").textContent = "";
});
document.getElementById("second_subject").addEventListener("input", () => {
    document.getElementById("error2").textContent = "";
});
document.getElementById("third_subject").addEventListener("input", () => {
    document.getElementById("error3").textContent = "";
});


document.getElementById("name").addEventListener("keyup", () => {
    document.getElementById("error4").textContent = "";
});
document.getElementById("first_subject").addEventListener("keyup", () => {
    document.getElementById("error1").textContent = "";
});
document.getElementById("second_subject").addEventListener("keyup", () => {
    document.getElementById("error2").textContent = "";
});
document.getElementById("third_subject").addEventListener("keyup", () => {
    document.getElementById("error3").textContent = "";
});

