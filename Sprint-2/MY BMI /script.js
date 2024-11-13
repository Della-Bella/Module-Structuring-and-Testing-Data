const weightInput = document.getElementById("weight"); 
const heightInput = document.getElementById("height"); 
const calculateBtn = document.getElementById("calculate"); 
const result = document.getElementById("result"); 

function getBmiStatus(bmi) { if (bmi < 18.5) 
    { return "Underweight"; } else if (bmi >= 18.5 && bmi < 24.9)
         { return "Normal weight"; } else if (bmi >= 24.9 && bmi < 25)
             { return "Overweight"; } else if (bmi >= 25 && bmi < 29.9)
                 { return "Pre-obesity"; } else if (bmi >= 30 && bmi < 34.9)
                     { return "Obesity - Class I (Moderate)"; } 
else if (bmi >= 35 && bmi < 39.9) { return "Obesity - Class II (Severe)"; } 
else { return "Obesity - Class III (Very severe or morbidly obese)"; } } 

function calculateBMI() { const weight = parseFloat(weightInput.value); 

    const height = parseFloat(heightInput.value); if (weight && height) 

        { const heightInMeters = height / 100; const bmi = weight / (heightInMeters * heightInMeters); 
            const bmiStatus = getBmiStatus(bmi); 
            result.textContent = `Your BMI: ${bmi.toFixed(1)} 
           (${bmiStatus})`; }
            else { result.textContent = "Please enter valid weight and height values."; } } calculateBtn.addEventListener("click", calculateBMI);