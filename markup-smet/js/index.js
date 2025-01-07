(function() {
    // Находим все заголовки <h3> в списке .list-year
    const headers = document.querySelectorAll('.list-year > li > h3');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const parentLi = this.closest('li'); // Получаем родительский <li>

            if (parentLi.classList.contains('active')) {
                // Если <li> уже активен, снимаем класс active
                parentLi.classList.remove('active');
            } else {
                // Снимаем класс active со всех <li>
                document.querySelectorAll('.list-year > li').forEach(li => {
                    li.classList.remove('active');
                });

                // Добавляем класс active текущему <li>
                parentLi.classList.add('active');
            }
        });
    });
})();

(function() {
    // Находим все списки .list-month на странице
    const lists = document.querySelectorAll('.list-month');

    lists.forEach(list => {
        list.addEventListener('click', function(event) {
            // Проверяем, был ли клик по .list-month-item
            const item = event.target.closest('.list-month-item');
            if (!item) return;

            // Получаем родительский li
            const parentLi = item.closest('li');

            // Если родительский li уже активен, снимаем класс active
            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
            } else {
                // Снимаем класс active со всех li в текущем списке
                this.querySelectorAll('li.active').forEach(li => {
                    li.classList.remove('active');
                });

                // Добавляем класс active к текущему родительскому li
                parentLi.classList.add('active');
            }
        });
    });
})();

(function() {
    // Находим все заголовки .section-list_box_title
    const titles = document.querySelectorAll('.section-list_box_title');

    titles.forEach(title => {
        title.addEventListener('click', function() {
            const parentBox = this.closest('.section-list_box'); // Родительский .section-list_box

            // Если уже активный, снимаем класс active
            if (parentBox.classList.contains('active')) {
                parentBox.classList.remove('active');
            } else {
                // Снимаем active со всех .section-list_box
                document.querySelectorAll('.section-list_box.active').forEach(box => {
                    box.classList.remove('active');
                });

                // Добавляем active к текущему родительскому .section-list_box
                parentBox.classList.add('active');
            }
        });
    });
})();

(function() {
    // Находим все checkbox'ы с классом .show_all
    const checkboxes = document.querySelectorAll('.show_all');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Находим родителя .wrapper текущего чекбокса
            const wrapper = this.closest('.wrapper');
            if (!wrapper) return;

            // Находим все .section-list_box внутри родителя
            const boxes = wrapper.querySelectorAll('.section-list_box');

            if (this.checked) {
                // Добавляем класс active ко всем .section-list_box
                boxes.forEach(box => box.classList.add('active'));
            } else {
                // Снимаем класс active со всех .section-list_box
                boxes.forEach(box => box.classList.remove('active'));
            }
        });
    });
})();

(function() {
    // Обработчик для кнопки .btn_delete
    document.addEventListener('click', function(event) {
        const target = event.target;

        // Если нажата кнопка с классом btn_delete
        if (target.classList.contains('btn_delete')) {
            document.querySelector('.popup-frame').classList.add('active');
            document.querySelector('.popup_dalate').classList.add('active');
        }

        // Если нажата .popup-frame, .close_popup или .delete-row
        if (
            target.classList.contains('popup-frame') ||
            target.classList.contains('close_popup') ||
            target.classList.contains('delete-row')
        ) {
            document.querySelector('.popup-frame').classList.remove('active');
            document.querySelector('.popup_dalate').classList.remove('active');
        }
    });
})();
