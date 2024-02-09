// Находим кнопку по id
const myButton = document.getElementById('my-button');

// Добавляем обработчик события на клик
myButton.addEventListener('click', () => {
    // Выполняем запрос fetch при клике на кнопку
    fetch('https://dream-singles.com/members/', {
        mode: 'cors' // Требует соответствующей настройки на сервере
    })
    .then(response => response.json())
    .then(data => {
        // Обрабатываем полученные данные
        console.log(data);
        // Добавьте свой код для обработки данных здесь
    })
    .catch(error => console.error('Ошибка:', error));
});
