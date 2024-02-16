function toggleAnswer(clickedElement) {
    const answer = clickedElement.nextElementSibling;
    const togglePlusIcon = clickedElement.querySelector('.plus');
    const toggleMinusIcon = document.querySelector('.minus');
    
    // Toggle the visibility of the answer content
    answer.classList.toggle("hidden");
    
    // Check if the answer content is currently visible
    const answerVisible = !answer.classList.contains("hidden");
    
    // Update the icon based on the visibility of the answer content
    if (answerVisible) {
        togglePlusIcon.src = toggleMinusIcon.src;
    } else {
        togglePlusIcon.src = "/faq-accordion-main/assets/images/icon-plus.svg";
    }
}
