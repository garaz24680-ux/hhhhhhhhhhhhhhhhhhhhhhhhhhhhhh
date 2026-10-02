const button = document.getElementById("myButton");
const outputText = document.getElementById("messageText");

if (button && outputText) {
    button.addEventListener("click", () => {
        outputText.textContent = "Hello! You clicked the button successfully!";
        outputText.style.color = "blue";
    });
}
