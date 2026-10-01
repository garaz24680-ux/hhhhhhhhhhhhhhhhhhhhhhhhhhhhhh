// Create an on-screen error logger for devices without 'Inspect'
window.onerror = function(message, source, lineno, colno, error) {
    const errorBox = document.createElement('div');
    errorBox.style.color = 'red';
    errorBox.style.background = '#fee';
    errorBox.style.padding = '15px';
    errorBox.style.border = '2px solid red';
    errorBox.style.marginTop = '20px';
    errorBox.innerText = `🚨 Error Found: ${message} (Line ${lineno})`;
    document.body.appendChild(errorBox);
    return true;
};

// --- Your Original Code (Protected inside a try/catch block) ---
try {
    const button = document.getElementById("myButton") as HTMLButtonElement;
    const outputText = document.getElementById("messageText") as HTMLParagraphElement;

    if (!button) {
        throw new Error("HTML Button element with id 'myButton' was not found!");
    }
    if (!outputText) {
        throw new Error("HTML Paragraph element with id 'messageText' was not found!");
    }

    button.addEventListener("click", () => {
        outputText.innerText = "Hello! You clicked the button successfully!";
        outputText.style.color = "blue";
    });
} catch (e: any) {
    // If something goes wrong above, force it to print on the screen
    const errorBox = document.createElement('div');
    errorBox.style.color = 'orange';
    errorBox.style.padding = '15px';
    errorBox.style.border = '2px solid orange';
    errorBox.innerText = `⚠️ Setup Error: ${e.message}`;
    document.body.appendChild(errorBox);
}
