class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
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

document.addEventListener("DOMContentLoaded", function () {
  const question = document.getElementById("question");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function () {
    console.log(questions);
  });
});
