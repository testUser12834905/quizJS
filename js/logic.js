const START_QUIZ = "Start Quiz";
const RESTART_QUIZ = "Restart Quiz";
const SUBMIT_ANSWER = "Submit Answer";

function createOptionElement(answer, index) {
  const optionDiv = document.createElement("div");
  optionDiv.className = "option";

  const input = document.createElement("input");
  input.type = "radio";
  input.id = `ans${index}`;
  input.value = answer;
  input.name = "answer";

  const label = document.createElement("label");
  label.htmlFor = input.id;
  label.textContent = answer;

  optionDiv.appendChild(input);
  optionDiv.appendChild(label);

  return optionDiv;
}

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  start() {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "none";

    const ruestionElement = document.getElementById("question");
    ruestionElement.style.display = "block";

    this.score = 0;
    this.currentQuestionIndex = 0;
    this.updateUI();
  }

  guess(answer) {
    if (this.isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
    console.log(this.score);
    this.updateUI();
  }

  updateUI() {
    if (this.hasEnded()) {
      const resultElement = document.getElementById("result");
      resultElement.style.display = "block";
      resultElement.textContent = `Your score is: ${this.score}`;

      const questionElement = document.getElementById("question");
      questionElement.style.display = "none";

      const submitButton = document.getElementById("submitQuestion");
      submitButton.textContent = RESTART_QUIZ;
    } else {
      const optionsGrid = document.querySelector(".options-grid");
      optionsGrid.innerHTML = "";

      const currentQuestion = this.getCurrentQuestion();

      const questionElement = document.querySelector("#question > p");
      questionElement.textContent = currentQuestion.question;

      currentQuestion.answers.forEach((answer, index) => {
        optionsGrid.appendChild(createOptionElement(answer, index));
      });
      const currentQuestionTracker = document.createElement("p");
      currentQuestionTracker.textContent = `${this.currentQuestionIndex + 1}/${
        this.questions.length
      }`;
      optionsGrid.appendChild(currentQuestionTracker);
    }
  }

  isCorrectAnswer(answer) {
    const currentQuestion = this.getCurrentQuestion();
    return (
      answer === currentQuestion.answers[currentQuestion.indexOfCorrectAns]
    );
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

async function main() {
  let questions;

  await fetch("api/questions")
    .then((response) => response.json())
    .then((data) => (questions = JSON.parse(data)))
    .catch((error) => console.error("Error fetching questions:", error));

  const quiz = new Quiz(questions);

  const submitButton = document.getElementById("submitQuestion");
  submitButton.textContent = START_QUIZ;

  submitButton.addEventListener("click", function () {
    if (
      submitButton.textContent === START_QUIZ ||
      submitButton.textContent === RESTART_QUIZ
    ) {
      submitButton.textContent = SUBMIT_ANSWER;
      quiz.start();
    }

    const options = document.querySelectorAll("input:checked");

    let selectedAnswer = options.length > 0 ? options[0].value : null;

    selectedAnswer ? quiz.guess(selectedAnswer) : null;
  });
}

main();
