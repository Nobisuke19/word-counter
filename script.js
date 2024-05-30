let totalWords = function(word){
    document.getElementById('wordCount').innerHTML = `Total word : ${word}`
}

let senlength = function(len){
    document.getElementById('sentenceLength').innerHTML = `Total length : ${len}`
}

// document.getElementById('wordPad').onkeyup = function() {
//     totalWords(document.getElementById('wordPad').length)
// }

document.getElementById('wordPad').addEventListener('input', function() {
    const text = this.value.trim();
    const wordCount = text === '' ? 0 : text.split(/\s+/).length;
    totalWords(wordCount);
});


document.getElementById('wordPad').addEventListener('input',function(){
    const len = this.value.length;
    senlength(len);
})
