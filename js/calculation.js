// Get modal elements
const modal = document.getElementById("myModal");
const resultText = document.getElementById("result");
const closeModal = document.getElementsByClassName("close")[0];
const btn = document.querySelector("button"); // Your Calculate button

// GPA calculation function
function calculateGPA() {
    const courses = document.querySelectorAll(".course");
    let totalPoints = 0;
    let totalCredits = 0;
    let filledCourses = 0;

    courses.forEach(course => {
        const finalGradeInput = course.querySelector('input[placeholder="Course Final Grade %"]');
        const creditHoursInput = course.querySelector('input[placeholder="Credit Hours"]');
        const minScaleInputs = course.querySelectorAll('input[id="minScale"]');
        const maxScaleInputs = course.querySelectorAll('input[id="maxScale"]');

        const grade = parseFloat(finalGradeInput.value);
        const credits = parseFloat(creditHoursInput.value);

        // Skip courses with empty grade or credits
        if (isNaN(grade) || isNaN(credits)) return;

        filledCourses++; // Count how many courses are filled

        let letter = "F";
        if (grade >= parseFloat(minScaleInputs[0].value) && grade <= parseFloat(maxScaleInputs[0].value)) letter = "A";
        else if (grade >= parseFloat(minScaleInputs[1].value) && grade <= parseFloat(maxScaleInputs[1].value)) letter = "B";
        else if (grade >= parseFloat(minScaleInputs[2].value) && grade <= parseFloat(maxScaleInputs[2].value)) letter = "C";
        else if (grade >= parseFloat(minScaleInputs[3].value) && grade <= parseFloat(maxScaleInputs[3].value)) letter = "D";
        else letter = "F";

        let gradePoint = 0;
        if (letter === "A") gradePoint = 4;
        else if (letter === "B") gradePoint = 3;
        else if (letter === "C") gradePoint = 2;
        else if (letter === "D") gradePoint = 1;
        else gradePoint = 0;

        totalPoints += gradePoint * credits;
        totalCredits += credits;
    });

    if (filledCourses === 0) {
        alert("Please fill at least one course!");
        return;
    }

    const gpa = (totalPoints / totalCredits).toFixed(2);

    // Show GPA in modal
    resultText.textContent = `Your GPA is: ${gpa}`;
}

// Button click event
btn.addEventListener("click", function() {
    calculateGPA();
    modal.style.display = "block"; // Show modal
});

// Close modal when X is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
