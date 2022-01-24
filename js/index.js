console.log("hello");

let calculate = document.getElementById("cal");

let choice = `byMetric`;

// Declaring buttons variables
let btnUs = document.querySelector(`.Us`);
let btnMetric = document.querySelector(`.Metric`);

// for converting to US SYSTEM
btnUs.addEventListener("click", function () {
  choice = `byUs`;
  btnUs.classList.add(`active`);
  btnMetric.classList.remove(`active`);
  console.log(choice);
  document.getElementsByClassName(`border`)[0].innerHTML = `
            <input type="text" id="heightvalFeet" class="adjustUs" placeholder="Feet"/>
            <input type="text" id="heightvalInch" class="adjustUs" placeholder="Inch"/>`;

  document.getElementsByClassName(
    `border`
  )[1].innerHTML = `<input type="text" id="weightValPound"      class="adjustMetric" placeholder="Pounds"/>`;

  document.querySelector(`.result`).innerHTML = `<p>BMI Calculator</p>`;
});

// for converting to METRIC SYSTEM
btnMetric.addEventListener("click", function () {
  choice = `byMetric`;
  btnMetric.classList.add(`active`);
  btnUs.classList.remove(`active`);
  console.log(choice);
  document.getElementsByClassName(`border`)[0].innerHTML = `<input
              type="text"
              id="heightvalCm"
              class="adjustMetric"
              placeholder="Centimetrers"
            />`;

  document.getElementsByClassName(`border`)[1].innerHTML = `<input
              type="text"
              id="weightValKg"
              class="adjustMetric"
              placeholder="Kg"
            />`;

  document.querySelector(`.result`).innerHTML = `<p>BMI Calculator</p>`;
});

// calculation of BI

calculate.addEventListener("click", function () {
  // For Metric

  if (choice == `byMetric`) {
    let weightKg = parseFloat(document.getElementById("weightValKg").value);
    let heightCm = parseFloat(document.getElementById("heightvalCm").value);

    let bmi = ((weightKg / (heightCm * heightCm)) * 10000).toFixed(2);

    display(bmi);
  }
  if (choice == `byUs`) {
    console.log("harry");
    let weightPound = parseFloat(
      document.getElementById("weightValPound").value
    );
    let heightInch =
      parseFloat(document.getElementById("heightvalInch").value) +
      parseFloat(document.getElementById("heightvalFeet").value) * 12;

    let bmi = ((weightPound / (heightInch * heightInch)) * 703).toFixed(2);
    display(bmi);
  }
});

function display(bmi) {
  html = `<p>Your BMI is ${bmi}</p>`;
  if (bmi <= 18.6) {
    html += `<p>You are Under Weight.</p>`;
  } else if (bmi >= 24.9) {
    html += `<p>You are Over Weight</p>`;
  } else if ((bmi <= 24.9) & (bmi >= 18.9)) {
    html += `<p>You are in Normal Range</p>`;
  } else {
    html = `<p>Invalid Input</p>`;
  }

  document.querySelector(`.result`).innerHTML = html;
}
