function toggleText() {
    const container = document.querySelector('.toggle-container');
    const textBefore = document.getElementById('textBefore');
    const textAfter = document.getElementById('textAfter');

    container.classList.toggle('toggled');
    textBefore.style.opacity = container.classList.contains('toggled') ? '0' : '1';
    textAfter.style.opacity = container.classList.contains('toggled') ? '1' : '0';
}
