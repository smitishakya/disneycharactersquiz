let score = 0;
let currentQuestion = 0;
let questions = [
    {
      title: "What color is Squirtle?",
      answers: ['yellow', 'blue', 'orange', 'purple'],
      correct: 1
    },
    {
      title: "What color is Bulbasuar?",
      answers: ['yellow', 'blue', 'orange', 'purple'],
      correct: 3
    },
    {
      title: "What color is Pikachu?",
      answers: ['yellow', 'blue', 'orange', 'purple'],
      correct: 0
    },
    {
      title: "What color is Charmander?",
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
    });

  });

  function startQuiz(){

  }

  function showQuestion(){
      let question = questions[currentQuestion];
      $('.quiz h2').text(question.title);
      $('.quiz ul').html('');
      for(var i=0; i<question.answers.length; i++){
          $('.quiz ul').append(`<li id="${i}">${question.answers[i]}</li>`);
      }

  }

  function checkAnswer(){

  }