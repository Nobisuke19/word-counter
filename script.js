const wordPad = document.getElementById('wordPad');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const characterLength = document.getElementById('characterLength');

function updateCount() {
    const text = wordPad.value;
    const words = text.trim().split(/\s+/);
    const sentence = text.split(/[.!?]\s*/);
    const charLength = text.length;

    const wordC = words.length;
    const sentenceC = sentence.length;

    wordCount.textContent = `Total Word count: ${wordC}`;
    sentenceCount.textContent = `Total Sentence count: ${sentenceC}`;
    characterLength.textContent = `Total Character count: ${charLength}`;
}

wordPad.addEventListener('input', updateCount);



