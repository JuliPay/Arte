document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('#navbarNav');

    toggler.addEventListener('click', function () {
        toggler.classList.toggle('open');
    });

    collapse.addEventListener('shown.bs.collapse', function () {
        toggler.classList.add('open');
    });

    collapse.addEventListener('hidden.bs.collapse', function () {
        toggler.classList.remove('open');
    });
});