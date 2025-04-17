document.addEventListener('DOMContentLoaded', function() {
    const sopOutput = document.getElementById('sopOutput');
    const sopContent = localStorage.getItem('generatedSOP');
    if (sopContent) {
        sopOutput.innerHTML = sopContent;
    }
});

function downloadPDF() {
    const element = document.getElementById('sopOutput');
    html2pdf().from(element).save();
}
