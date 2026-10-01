// Get elements from the HTML DOM
const button = document.getElementById("myButton") as HTMLButtonElement;
const outputText = document.getElementById("messageText") as HTMLParagraphElement;

// Add an event listener to run when the button is clicked
button.addEventListener("click", () => {
    outputText.innerText = "Hello! You clicked the button successfully!";
    outputText.style.color = "blue";
});
