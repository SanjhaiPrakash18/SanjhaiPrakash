document.querySelector('.hover-package').addEventListener('mouseenter', function () {
    document.querySelector('#hover-svg').style.display = 'block';
});

document.querySelector('.hover-package').addEventListener('mouseleave', function () {
    document.querySelector('#hover-svg').style.display = 'none';
});
