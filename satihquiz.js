//creates a quiz
//creates an alert
alert('Hello World!')
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    var x = document.getElementById("portfolioTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {

      
      question: "Satih Saidiyah is currently a PhD student at:",
      answers: {
        a: "Swinburne University",
        b: "Central Queensland University",
        c: "The University of Queensland",
        d: "Not all above"
      },
      correctAnswer: "b"
    },
    {
      question: "Satih is super passionate about:",
      answers: {
        a: "Leadership",
        b: "Ageing issues and the gerontology",
        c: "Politics issues",
        d: "All of the above and more"
      },
      correctAnswer: "b"
    },
    {
      question: "Satih's technical skills include:",
      answers: {
        a: "Hand writing analyses",
        b: "Project management",
        c: "Programming language",
        d: "Only a and b"
      },
      correctAnswer: "d"
    },
  ];

  function buildQuiz(){
    }
    function showResults(){
   // variable to store the HTML output
const output = [];
for(i=0; i<quizQuestions.length; i++){ 
}
 // variable to store the list of possible answers
 const answers = []; 
 // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){
  answers.push(
      '<label>'
      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
      + letter + ': '
      + quizQuestions[i].answers[letter]
      + '</label>'
      );
  }
  // add this question and its answers to the output
output.push(
  '<div class="question">' + quizQuestions[i].question + '</div>'
  + '<div class="answers">' + answers.join('') + '</div>'
  );
    }
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');
  // keep track of user's answers
  var numCorrect = 0; 
  // for each question...
for(i=0; i<quizQuestions.length; i++){
    
  // find selected answer
  userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
} 
// if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){
  // add to the number of correct answers
  numCorrect++;
          
  // color the answers green
  answerContainers[i].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
    else{
    // color the answers red
        answerContainers[i].style.color = 'red';
    }
    if (numCorrect === 0) { 
      resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
          }
          function showResults(){
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
          
            // keep track of user's answers 
            var numCorrect = 0; 
              // for each question find the selected answer
              for(i=0; i<quizQuestions.length; i++){
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                  // if answer is correct add to the number of correct answers
                  if(userAnswer===quizQuestions[i].correctAnswer){
                    numCorrect++;
                    // and colour the answers green
                    answerContainers[i].style.color = 'lightgreen';
                  }
                  // if answer is wrong or blank
                  else{
                    // colour the answers red
                    answerContainers[i].style.color = 'red';
                  }
                }
            
                // show number of correct answers out of total
                if (numCorrect === 0) { 
                resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
              }
              if (numCorrect === 1) { 
                  resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
                }
                if (numCorrect === 2) { 
                  resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
                }
                if (numCorrect === 3) { 
                  resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
                }
                if (numCorrect === 4) { 
                  resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
                }
          }
        //load quiz
   buildQuiz(); 
   submitButton.onclick = function() {
    showResults();
  }