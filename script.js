document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = calculateBMI(weight, height);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);
});
function calculateBMI(weight, height) {
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
}
//https://manuel.pinto.dev




// everything
// call you
// no
//no
// whatever

