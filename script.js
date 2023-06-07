window.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const radioButtons = question.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(button => {
      button.addEventListener('click', () => {
        question.classList.add('answered');
      });
    });
  });
});
