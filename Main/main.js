document.addEventListener('DOMContentLoaded', function () {
    const startAdventureButton = document.getElementById('startAdventureButton');
    const mirageSection = document.querySelector('.mirage-section');

    startAdventureButton.addEventListener('click', function () {
        mirageSection.style.animation = 'fadeOut 1s ease';
        setTimeout(function () {
            mirageSection.style.display = 'none';
        }, 1000);

        // Прокрутка страницы к следующему разделу (замените '#nextSection' на селектор вашего следующего раздела)
        window.scrollTo({
            top: document.querySelector('#nextSection').offsetTop,
            behavior: 'smooth'
        });
    });
});