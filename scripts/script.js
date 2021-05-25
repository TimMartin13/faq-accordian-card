const row = document.querySelectorAll(".faq__row");
let rotate = 0;

row.forEach(element => {
  element.addEventListener("click", e => {
    e.stopPropagation();
    
    // Get the answer element
    let answer = e.target.parentElement.nextElementSibling;
    // If it doesn't exist, that means the container has been selected, not the question or chevron
    if (!answer) {
      // Get the answer element from the correct path
      answer = e.target.nextElementSibling;
    }
    
    // Get the question and chevron elements
    let question = e.target.parentElement.firstElementChild;
    let chevron = e.target.parentElement.lastElementChild;
    
    // If the question is it's parent, correct it
    if (question.classList.contains("faq__row")) {
      question = e.target.firstElementChild;
      chevron = e.target.lastElementChild;
    }
    
    // If the answer is inactive...
    if (answer.classList.contains("inactive")) {
      // Make it active
      answer.classList.remove("inactive");
      answer.classList.add("active");
      // Flip the chevron
      chevron.style.transform = `rotate(180deg)`;
      // Make the question bold
      question.style.fontWeight = 700;
    }
    else {
      answer.classList.remove("active");
      answer.classList.add("inactive");
      chevron.style.transform = `rotate(0deg)`;
      question.style.fontWeight = 400;
    }
    
    console.log(e);
})})