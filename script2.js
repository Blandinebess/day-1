function changeContent() {
  let currentYear = new Date().getFullYear();
  document.querySelector("h1").innerHTML = `Welcome to ${currentYear}!`;
  document.querySelector("p").innerHTML = `Let's have some fun with code!`;
}

<div id="quiz">
    <h2>Quiz</h2>
    <p>What is the capital of France?</p>
    <button onclick="checkAnswer('a')">A. Madrid</button>
    <button onclick="checkAnswer('b')">B. Paris</button>
    <button onclick="checkAnswer('c')">C. Rome</button>
    <p id="quizResultscript>
