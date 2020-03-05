let score = 0;
let currentQuestion = 0;

let questions = [
  {
    title: "Who is Jasmine?",
    answers: ['yellow', 'blue', 'orange', 'purple'],
    correct: 1
  },
  {
    title: "Who is Cinderella?",
    answers: ['yellow', 'blue', 'orange', 'purple'],
    correct: 3
  },
  {
    title: "Who is Mermaid?",
    answers: ['yellow', 'blue', 'orange', 'purple'],
    correct: 0
  },
  {
    title: "Who is Snowwhite?",
    answers: ['yellow', 'blue', 'orange', 'purple'],
    correct: 2
  }
];

$(document).ready(function(){
  $('.start a').click(function(e){
    e.preventDefault();
    $('.start').hide();
    $('.quiz').show();
    showQuestion();
    
  });  
  $('.quiz ul').on('click', 'li', function(){
    $('.selected').removeClass('selected');
    $(this).toggleClass('selected');
  })
  
  $('.quiz a').click(function(e){
    e.preventDefault();
    if($('li.selected').length){
      let guess = parseInt($('li.selected').attr('id'));
      checkAnswer(guess);
    }
    else{
      alert('Please select an answer');
    }
    
  });
  $('.summary a').click(function(e){
    e.preventDefault();
    restartQuiz();
   })
 
});

function updateScore(score){
  $('.currentScore').text(`Current Score: ${score}`)
}

function updateQuestionNumber(){
  $('.questionCount').text(`Question ${currentQuestion + 1} of 4`);
}


function showQuestion(){
  updateQuestionNumber();
  let question = questions[currentQuestion];
  $('.quiz h2').text(question.title);
  //clearing any text from html 
  $('.answers').html('');
  for (var i=0; i<question.answers.length; i++){
    $('.answers').append('<li id="'+i+'" class="answer '+question.answers[i]+'">'+question.answers[i]+'</li>')
  }
  
  
}

function checkAnswer(guess){
  let question = questions[currentQuestion];
  if(question.correct === guess){
    score++;  
    updateScore(score);
    
  }
  currentQuestion++;
  if(currentQuestion >= questions.length){
    showSummary();
  }
  else{
    showQuestion();
    
  }
  
}

function showSummary(){
  $('.quiz').hide();
  $('.summary').show();
  $('.summary p').text("Congrats you scored "+ score + " out of "+ questions.length+" correct!");
  $('img.show').removeClass('show');
  if(score >= 3){
    $('.happy-ditto').addClass('show');
  }
  else{
    $('.sad-ditto').addClass('show');
  }
  
}

function restartQuiz(){
    $('.summary').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();
 
}
