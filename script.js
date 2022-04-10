const quizData = [
     {
          question: "What is the most used programming language in 2019?",
          a: "Java",
          b: "C",
          c: "Python",
          d: "JavaScript",
          correct: "d",
     },
     {
          question: "Who is the President of US?",
          a: "Florin Pop",
          b: "Donald Trump",
          c: "Ivan Saldano",
          d: "Mihai Andrei",
          correct: "b",
     },
     {
          question: "What does HTML stand for?",
          a: "Hypertext Markup Language",
          b: "Cascading Style Sheet",
          c: "Jason Object Notation",
          d: "Helicopters Terminals Motorboats Lamborginis",
          correct: "a",
     },
     {
          question: "What year was JavaScript launched?",
          a: "1996",
          b: "1995",
          c: "1994",
          d: "none of the above",
          correct: "b",
     },
];

const question = document.getElementById('question')
const Inputs = document.querySelectorAll('.answer')
const a1 = document.getElementById('a_text')
const a2 = document.getElementById('b_text')
const a3 = document.getElementById('d_text')
const a4 = document.getElementById('d_text')
const submitBTN = document.getElementById('submit')

let currentQuiz = 0
let score = 0

// Take the question form the date above and reflect it in the HTML
loadQuiz()

function loadQuiz() {
     resetOption()
     const curentQuestion = quizData[currentQuiz]

     question.innerText = curentQuestion.question
     a1.innerText = curentQuestion.a
     a2.innerText = curentQuestion.b
     a3.innerText = curentQuestion.d
     a4.innerText = curentQuestion.c
}

// Get the answer for each quiz
function getAnswer() {
     let answer = undefined

     Inputs.forEach((inputt) => {
          if (inputt.checked) {
               answer = inputt.value
          }
     })
     return answer
}

// Reset the selected answer
function resetOption() {
     Inputs.forEach((inputt) => {
          inputt.checked = false
     })
}

// Button Event listner
submitBTN.addEventListener('click', nxtQuestion)

// Move to the next question
function nxtQuestion() {
     const answer = getAnswer()

     if (answer) {

          if (answer === quizData[currentQuiz].correct) {
               score++
               console.log(score)
          }
          currentQuiz++

          if (currentQuiz < quizData.length) {

               loadQuiz()
          } else {
               alert('You have done')
          }
     }


}