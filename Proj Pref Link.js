document.querySelector('.proj-pref-img-item').addEventListener('mousemove', function (e) {
    const hoverCircle = this.querySelector('.hover-circle');
    hoverCircle.style.left = e.pageX + 'px';
    hoverCircle.style.top = e.pageY + 'px';
});