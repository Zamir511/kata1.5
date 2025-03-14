   const toggleButton = document.getElementById('toggle-button');
        const toggleButtonText = toggleButton.querySelector('.toggle-button--text');
        const toggleButtonImg = toggleButton.querySelector('.toggle-button--img img');
        const hiddenItems = document.querySelectorAll('.brand-swiper__slide.hidden');

        toggleButton.addEventListener('click', () => {
            hiddenItems.forEach(slide => {
                slide.classList.toggle('hidden');
            });

            if (toggleButtonText.textContent === 'Показать все') {
                toggleButtonText.textContent = 'Скрыть';
                toggleButtonImg.classList.add('rotated');
            } else {
                toggleButtonText.textContent = 'Показать все';
                toggleButtonImg.classList.remove('rotated');
            }
        });