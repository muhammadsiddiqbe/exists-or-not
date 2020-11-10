var mainForm = document.querySelector('.main-form');
var enterInputBtn  = mainForm.querySelector('.enter-input-btn');
var checkerInput = mainForm.querySelector('.checker-input').value;
var checkerInputBtn = mainForm.querySelector('.checker-input-btn');
var result = mainForm.querySelector('.output');
var massiv = [];

enterInputBtn.addEventListener('click' , function(evt) {

  evt.preventDefault();
  var enterInput  = mainForm.querySelector('.enter-input').value;
  massiv.push(enterInput);
  console.log(massiv);



    checkerInputBtn.addEventListener('click' , function(evt) {
      evt.preventDefault();
      var checkerInput  = mainForm.querySelector('.checker-input').value;

      if (massiv.includes(checkerInput)) {
        console.log('bor ekan')
        result.textContent = "bor ekan"

      } else {
        console.log('yoq ekan')
        result.textContent = "yo\'q ekan"
      }

  })


})
