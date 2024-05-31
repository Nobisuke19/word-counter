const wordPad = document.getElementById('wordPad');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const characterLength = document.getElementById('characterLength');
const downloadPdf = document.getElementById('downloadPdf')

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

//Download the text
downloadPdf.addEventListener('click', () =>{
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();

    const text = wordPad.value;
    const lines = doc.splitTextToSize(text,180);
    doc.text(lines,10,10);
    doc.save('document.pdf');
})

