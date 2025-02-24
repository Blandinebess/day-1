functionchangeContent() {
  document.querySelector("h1").innerHTML = "New Header";
  document.querySelector("p").innerHTML = "New paragraph content!";
}
    document.addEventListener("DOMContentLoaded", function() {
        const quiz = document.getElementById('quiz');
        quiz.onclick = function() {
            const question = prompt('What is the capital of Ivory Coast?');
        };
    });
    
 

