// https://www.omnicalculator.com/math/multiplicative-inverse

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const multiplicativeinverseRadio = document.getElementById('multiplicativeinverseRadio');
const numeratorRadio = document.getElementById('numeratorRadio');
const denominatorRadio = document.getElementById('denominatorRadio');

let multiplicativeinverse;
let numerator = v1;
let denominator = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

multiplicativeinverseRadio.addEventListener('click', function() {
  variable1.textContent = 'Numerator';
  variable2.textContent = 'Denominator';
  numerator = v1;
  denominator = v2;
  result.textContent = '';
});

numeratorRadio.addEventListener('click', function() {
  variable1.textContent = 'Multiplicative inverse';
  variable2.textContent = 'Denominator';
  multiplicativeinverse = v1;
  denominator = v2;
  result.textContent = '';
});

denominatorRadio.addEventListener('click', function() {
  variable1.textContent = 'Multiplicative inverse';
  variable2.textContent = 'Numerator';
  multiplicativeinverse = v1;
  numerator = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(multiplicativeinverseRadio.checked)
    result.textContent = `Multiplicative inverse = ${computeMultiplicativeinverse().toFixed(2)}`;

  else if(numeratorRadio.checked)
    result.textContent = `Numerator = ${computeNumerator().toFixed(2)}`;

  else if(denominatorRadio.checked)
    result.textContent = `Denominator = ${computeDenominator().toFixed(2)}`;
})

// calculation

function computeMultiplicativeinverse() {
  return Number(denominator.value) / Number(numerator.value);
}

function computeNumerator() {
  return Number(denominator.value) / Number(multiplicativeinverse.value);
}

function computeDenominator() {
  return Number(multiplicativeinverse.value) * Number(numerator.value);
}