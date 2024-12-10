let data1 = 1;

document.querySelector('.mini-game-input').addEventListener('input', function () {
  let data = document.querySelector('.mini-game-input').value;
  data1 = data;
 if(data == 1){
  document.getElementById('gryd2').src = 'static/images/grudnaklitynataruka3.png';
 }
 else if ( data == 2) {
  document.getElementById('gryd2').src = 'static/images/grydnaklitynataryka.png';
 }
 else if (data == 3) {
  document.getElementById('gryd2').src = 'static/images/grydnaklitynataruka.png';
 }
 else if (data == 4) {
  document.getElementById('gryd2').src = 'static/images/grydnaklitynataruka2.png';
 }
 else if (data == 5) {
  document.getElementById('gryd2').src = 'static/images/grudnaklitynataruka4.png';
 }

});
function miniGameAnswer() {
  console.log(data1);
  if (data1 == 1) {
    document.querySelector('.out').innerHTML = 'Неправильно';
    document.getElementById('outColor').style.color = 'rgb(211, 21, 21)';
  }
  else if (data1 == 2) {
    document.querySelector('.out').innerHTML = 'Неправильно';
    document.getElementById('outColor').style.color = 'rgb(211, 21, 21)';
  }
  else if (data1 == 3) {
    document.querySelector('.out').innerHTML = 'Правильно';
    document.getElementById('outColor').style.color = 'green';
  }
  else if (data1 == 4) {
    document.querySelector('.out').innerHTML = 'Неправильно';
    document.getElementById('outColor').style.color = 'rgb(211, 21, 21)';
  }
  else if (data1 == 5) {
    document.querySelector('.out').innerHTML = 'Неправильно';
    document.getElementById('outColor').style.color = 'rgb(211, 21, 21)';
  }

}

 // міні-гра на тему домедичної допомоги

 

 let counter = 1;
 let growing = true;
 
 function resizeImage() {
   if (counter >= 60) {
     counter = 0;
   } 
   else if (counter < 60) {
     if (growing) {
       document.getElementById('hearth1').style.width = '220px'; 
       setTimeout(resizeImage, 500); 
     } 
     else {
       document.getElementById('hearth1').style.width = '300px'; 
       setTimeout(resizeImage, 80); 
     }
     
     growing = !growing; 
     counter++;

   }
 }

 function resizeImage2 () {
   document.getElementById('hearth2').style.width = '220px'; 
 }
 
 function ex2b2() {
   document.getElementById('hearth2').style.width = '300px';
   
   setTimeout(resizeImage2, 80);
 }
