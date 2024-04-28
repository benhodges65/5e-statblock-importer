import { sbiParser } from "./sbiParser.js";

export class sbiWindow {

    static async parseInputAndDisplay() {
        const sbiInput = document.getElementById("sbi-input");
        const lines = sbiInput.value.trim().split(/\n/g).filter(str => str.length); // Remove empty lines
        const sbiOutput = document.getElementById("sbi-output");

        try {
            const parsedData = await sbiParser.parseInput(lines, null);
            console.log(parsedData); // Display parsed data in the console
            sbiOutput.value = JSON.stringify(parsedData, null, 2); // Display parsed data in the output textarea
        } catch (error) {
            console.error("Error occurred during parsing:", error);
            alert("An error occurred during parsing. Please check the console for details.");
        }
    }
}

// Example of calling parseInputAndDisplay() when a button is clicked
document.addEventListener("DOMContentLoaded", () => {
    const parseButton = document.getElementById("parse-button");

    parseButton.addEventListener("click", async () => {
        await sbiWindow.parseInputAndDisplay();
    });
});