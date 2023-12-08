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

document.addEventListener("DOMContentLoaded", function () {
  const question = document.getElementById("question");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function () {
    console.log("hello world");
  });
});
