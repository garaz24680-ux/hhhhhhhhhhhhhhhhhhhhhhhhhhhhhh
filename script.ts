// Test 1: Immediate verification that the script loaded
alert("Success! The JavaScript file has loaded inside the browser.");

const button = document.getElementById("myButton");
const outputText = document.getElementById("messageText");

if (button && outputText) {
    button.addEventListener("click", () => {
        // Test 2: Verification that the click event is working
        alert("Success! The button click was detected.");
        outputText.textContent = "Hello! You clicked the button successfully!";
    });
} else {
    // Test 3: Notification if the HTML elements are missing
    alert("Error: Could not find 'myButton' or 'messageText' in the HTML.");
}
