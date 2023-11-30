const chooseColor = document.querySelectorAll('.choose__color-btn'); // выбор Цвета Наушников = выбор класса Кнопок
const contentItem = document.querySelectorAll('.content-item'); // Элементы - Нашуники (в Шапке Сайта)

chooseColor.forEach(function(element){  // Применение Метода forEach для перебора chooseColor и записи каждого Элемента Функции в Переменную (Параметр) element.
  element.addEventListener('click', open) // Добавление каждому Элементу Слушателя/Обработчика Событий EventListener. Тип События 'click', котоырй будет привязан к Функции (Параметру) open.
});

function open(evt){  // создание Функции open, в которую передается объект event - генерирующий при Клике на Элемент - Кнопку

    const target = evt.currentTarget; // поиск Места, где был Клик
    const button = target.dataset.button; // здесь будет Элемет с Цветом, какой то из 5. Например: с Элемент с Классом color--green
    const contentActive = document.querySelectorAll(`.${button}`) // все Элементы у которых есть одинаковый Цвет при Клике на Кнопку

    chooseColor.forEach(function(item) {  // Применение Метода forEach для перебора записи в item всех Элементов - Кнопки
        item.classList.remove('choose__color-btn--active') // удаление у всех Элементов - Кнопки - Класса Active
    });
    
    target.classList.add('choose__color-btn--active') // добавление Элементу - Кнопка - Класса Active

    contentItem.forEach(function(item) { 
        item.classList.remove('content-item__active') // удаление у всех Элементов - Наушники (В Шапке Сайта) - Класса Active
    });

    contentActive.forEach(function(item){ // Применение Метода forEach для перебора записи в item все Элементов Наушники (В Шапке Сайта)
        item.classList.add('content-item__active') // добавление к Выбранному Элементу - Наушники (В Шапке Сайта) - Класса Active
    });

}



