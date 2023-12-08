function createOptionElement(answer, index) {
  const optionDiv = document.createElement("div");
  optionDiv.className = "option";

  const input = document.createElement("input");
  input.type = "radio";
  input.id = `ans${index}`;
  input.value = answer;

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

  guess(answer) {
    if (this.isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.updateUI();
    console.log(this.score);
  }

  updateUI() {
    const optionsGrid = document.querySelector(".options-grid");
    optionsGrid.innerHTML = "";

    const currentQuestion = this.getCurrentQuestion();

    const questionElement = document.querySelector("#question > p");
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
      optionsGrid.appendChild(createOptionElement(answer, index));
    });
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

const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    indexOfCorrectAns: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      "Charles Dickens",
      "J.K. Rowling",
      "William Shakespeare",
      "Leo Tolstoy",
    ],
    indexOfCorrectAns: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    indexOfCorrectAns: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
    indexOfCorrectAns: 2,
  },
  {
    question: "In which year did the Titanic sink?",
    answers: ["1912", "1915", "1920", "1905"],
    indexOfCorrectAns: 0,
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["O2", "H2O", "CO2", "NaCl"],
    indexOfCorrectAns: 1,
  },
  {
    question: "How many continents are there on Earth?",
    answers: ["Five", "Six", "Seven", "Eight"],
    indexOfCorrectAns: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Vincent Van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    indexOfCorrectAns: 2,
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    indexOfCorrectAns: 2,
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    indexOfCorrectAns: 2,
  },
];

const quiz = new Quiz(questions);

const STARTQUIZ = "Start Quiz";
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitQuestion");
  submitButton.textContent = STARTQUIZ;

  submitButton.addEventListener("click", function () {
    if (submitButton.textContent === STARTQUIZ) {
      submitButton.textContent = "Submit Answer";
      quiz.updateUI();
    }
    const options = document.querySelectorAll("input:checked");

    let selectedAnswer = options.length > 0 ? options[0].value : null;

    selectedAnswer ? quiz.guess(selectedAnswer) : null;
  });
});
