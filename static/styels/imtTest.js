
let numHeight = 0;
let numKg = 0;
let numAge = 0;

function perevirka(depressionTest) {
  let answer1 = document.querySelector('input[name="question1"]:checked').value;
  let answer2 = document.querySelector('input[name="question2"]:checked').value;
  let answer3 = document.querySelector('input[name="question3"]:checked').value;
  let answer4 = document.querySelector('input[name="question4"]:checked').value;
  let answer5 = document.querySelector('input[name="question5"]:checked').value;
  let answer6 = document.querySelector('input[name="question6"]:checked').value;
  let answer7 = document.querySelector('input[name="question7"]:checked').value;
  let answer8 = document.querySelector('input[name="question8"]:checked').value;
  let answer9 = document.querySelector('input[name="question9"]:checked').value;
  let resDepTest = +answer1 + +answer2 + +answer3 + +answer4 + +answer5 + +answer6 + +answer7 + +answer8 + +answer9;
  if (resDepTest >= 0 && resDepTest <= 4) {
    document.getElementById('answerDepTest').innerHTML = 'У тебе немає ознак депресії, продовжуй підтримувати здоровий спосіб життя.';
  }
  else if (resDepTest >= 5 && resDepTest <= 9) {
    document.getElementById('answerDepTest').innerHTML = 'Ознаки легкої депресії – слід звернутися до сімейного лікаря для виявлення можливих причин.';
  }
  else if (resDepTest >= 10 && resDepTest <= 14) {
    document.getElementById('answerDepTest').innerHTML = "Ознаки помірної депресії – обов`язково потрібна консультація лікаря, щоб запобігти погіршенню стану.";
  }
  else if (resDepTest >= 15 && resDepTest <= 19) {
    document.getElementById('answerDepTest').innerHTML = "Ознаки вираженої депресії – обов`язково потрібна консультація лікаря для розробки стратегії лікування.";
  }
  else if (resDepTest >= 20 && resDepTest <= 27) {
    document.getElementById('answerDepTest').innerHTML = 'Ознаки тяжкої депресії – слід негайно звернутися до лікаря та розпочати лікування';
  }
  console.log(resDepTest);
}

function imtTest() {

  let gender = document.getElementById('gender');
  let gender2 = gender.value;

  let age = document.getElementById('age');
  let age2 = age.value;
  let numAge = +age2;
  age.value = ' ';

  let height = document.getElementById('height');
  let height2 = height.value;
  let numHeight = +height2;
  height.value = ' ';

  let kg = document.getElementById('kg');
  let kg2 = kg.value;
  let numKg = +kg2;
  kg.value = ' ';

  if (numAge >= 18 && numHeight != 0 && numKg != 0) {
    numHeight = numHeight / 100;
    resHei = numHeight * numHeight;
    let result = numKg / resHei;
    document.getElementById('cheack_form').innerHTML = result;
    console.log(result);

    if (result >= 18.5 && result <= 24.9) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
      document.getElementById('cheack_form').style.color = 'green';
    }

    else if (result < 18.5) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
      document.getElementById('cheack_form').style.color = 'blue';
    }

    else if (result >= 25 && result < 29.9) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
      document.getElementById('cheack_form').style.color = 'orange';
    }

    else if (result >= 30 && result < 34.9) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – ожиріння I ступення';
      document.getElementById('cheack_form').style.color = 'darkorange';
    }

    else if (result >= 35 && result < 39.9) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – ожиріння II ступення';
      document.getElementById('cheack_form').style.color = 'rgb(226, 98, 7)';
    }

    else if (result >= 40) {
      document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – ожиріння III ступення';
      document.getElementById('cheack_form').style.color = 'rgb(211, 21, 21)';
    }

  }
  else if (numAge < 18 && numAge > 0) {

    numHeight = numHeight / 100;
    resHei = numHeight * numHeight;
    let result = numKg / resHei;

    if (gender2 == 'Чоловік' || gender2 == 'чоловік') {
      switch (numAge) {
        case 10: {

          if (result >= 14.4 && result <= 21.1) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 14.3) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 21.2) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            console.log(typeof result);
          }
          break;

        }
        case 11: {

          if (result >= 14.4 && result <= 21.3) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 14.3) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 21.4) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 12: {

          if (result >= 14.9 && result <= 21.9) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 14.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 22) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 13: {

          if (result >= 16.3 && result <= 21.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 16.2) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 21.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 14: {

          if (result >= 16.8 && result <= 22.5) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 16.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 22.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 15: {

          if (result >= 17.9 && result <= 23) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 17.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.1) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 16: {

          if (result >= 18.6 && result <= 23.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 18.5) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 17: {

          if (result >= 18.7 && result <= 23.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 18.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }
        }

      }
    }
    else if (gender2 == 'Жінка' || gender2 == 'жінка') {
      switch (numAge) {
        case 10: {

          if (result >= 14.3 && result <= 20.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 14.2) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 20.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }
          break;

        }
        case 11: {

          if (result >= 14.7 && result <= 20.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 14.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 20.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 12: {

          if (result >= 16.1 && result <= 21.4) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 16.0) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 21.5) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 13: {

          if (result >= 15.7 && result <= 22) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 15.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 22.1) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 14: {

          if (result >= 17.1 && result <= 23.1) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 17) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.2) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 15: {

          if (result >= 17.7 && result <= 23.1) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 17.6) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.2) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 16: {

          if (result >= 17.9 && result <= 22.7) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 17.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 22.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }

        }
        case 17: {

          if (result >= 17.9 && result <= 23.3) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – нормальна вага';
            document.getElementById('cheack_form').style.color = 'green';
          }

          else if (result <= 17.8) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – недостатня вага';
            document.getElementById('cheack_form').style.color = 'blue';
          }

          else if (result >= 23.4) {
            document.getElementById('cheack_form').innerHTML = Math.round(result) + ' – надлишкова вага';
            document.getElementById('cheack_form').style.color = 'darkorange';
          }
        }

      }
    }
  }

  else if (numAge == 0 || numHeight == 0 || numKg == 0) {
    document.getElementById('cheack_form').innerHTML = 'Неправильно заповнені поля';
    document.getElementById('cheack_form').style.color = 'rgb(211, 21, 21)';
  }
  else {
    alert('Error');
  }
}



let time = 0;
let timeReset = 0;
function deepBreathingTime() {
  document.getElementById('inOrOut').innerHTML = "Вдихаємо";

let timer = setInterval(function() {
  document.getElementById('deep_breathing_img').src = 'static/images/Breath-in.png';
  if (time == 5) {
    clearInterval(timer);
    timeReset++;
    console.log (timeReset);
    deepBreathingTime2();
    document.getElementById('deep_breathing_img').src = 'static/images/Breath-out.png';
  }
  else if (time < 5){
  time++;
  document.getElementById('count_down_breathing').innerHTML = time;
  }
}, 1000)
}

function deepBreathingTime2() {
  document.getElementById('inOrOut').innerHTML = "Видихаємо";
  let timer = setInterval(function() {
    document.getElementById('count_down_breathing').innerHTML = time;
    time--;
    if (time < 0 && timeReset != 5) {
      clearInterval(timer);
      deepBreathingTime();
      // document.getElementById('inOrOut').innerHTML = "Видихаємо";
    }
    else if(time < 0 && timeReset == 5) {
      clearInterval(timer);
      document.getElementById('inOrOut').innerHTML = "Молодець";
    }
  }, 1000)
  }
