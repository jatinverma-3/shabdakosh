function checkWordCountAndReadability() {
    const textToCheck = document.getElementById('textToCheck').value;
    const wordCount = textToCheck.split(/\s+/).length;
    const readabilityScore = calculateReadability(textToCheck);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Word Count: ${wordCount}</p>
        <p>Readability Score: ${readabilityScore}</p>
    `;
}

function calculateReadability(text) {
    // Simple example using the Flesch-Kincaid Grade Level formula
    const sentences = text.split(/[.!?]+/).length;
    const words = text.split(/\s+/).length;
    const syllables = text.match(/[aeiouy]+/g).length;
    const score = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;
    return Math.round(score);
}