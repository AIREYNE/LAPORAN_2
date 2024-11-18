// Toggle visibility of content
function toggleContent(element) {
    const nextElement = element.nextElementSibling;
    if (nextElement.classList.contains('hidden')) {
        if (confirm('Apakah Anda ingin menampilkan konten?')) {
            nextElement.classList.remove('hidden');
        }
    } else {
        if (confirm('Apakah Anda ingin menyembunyikan konten?')) {
            nextElement.classList.add('hidden');
        }
    }
}

// Set display mode
function setMode(mode) {
    if (mode === 'tidy') {
        document.body.classList.remove('messy-mode');
        document.body.classList.add('tidy-mode');
    } else if (mode === 'messy') {
        document.body.classList.remove('tidy-mode');
        document.body.classList.add('messy-mode');
    }
}
