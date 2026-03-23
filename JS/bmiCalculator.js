const err = document.getElementById(`error`);

document.getElementById(`heightInFeet`).addEventListener(`input`, bmiCalculator);
document.getElementById(`heightInInches`).addEventListener(`input`, bmiCalculator);
document.getElementById(`weight`).addEventListener(`input`, bmiCalculator);

function bmiCalculator(){
    const heightInFeet = parseFloat(document.getElementById(`heightInFeet`).value),
          heightInInches = parseFloat(document.getElementById(`heightInInches`).value),
          weight = parseFloat(document.getElementById(`weight`).value),
          totalInches = (heightInFeet * 12) + heightInInches,
          heightInMeters = totalInches * 0.0254;
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    document.getElementById(`bmi`).value = BMI;
}

function showError(message){
    err.classList.remove(`hidden`);
    err.style.display = `block`;
    err.innerHTML = message;
}

function hideError(){
    err.style.display = `none`;
}

function validation(){
    const name = document.getElementById(`name`).value,
          email = document.getElementById(`email`).value,
          phoneNumber = document.getElementById(`phoneNumber`).value,
          age = parseFloat(document.getElementById(`age`).value),
          gender = document.getElementById(`gender`).value,
          bmi = document.getElementById(`bmi`).value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu)$/;
    var phonePattern = /^[0-9]{7,15}$/;

    if(!name || !email || !phoneNumber || !age || gender === `gender` || !bmi){
        showError(`*All fields are required`);
        return;
    }
    else if(!emailPattern.test(email)){
        showError(`Enter valid email address`);
        return;
    }
    else if(!phonePattern.test(phoneNumber)){
        showError(`Enter valid phone number`);
        return;
    }
    else if(age < 10 || age > 100){
        showError(`Invalid age — must be between 10 and 100`);
        return;
    }
    else{
        hideError();
        setTimeout(function(){
            window.location.href = `success.html`; // ← sahi redirect

        }, 2000);
        
    }
}

function openModal() {
  document.getElementById('modal').classList.remove('hidden')
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden')
}