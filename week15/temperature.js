//Создаем массив городов и пустой массив для температур
const cities = ['Москва', 'Самара', 'Краснодар', 'Сочи', 'Санкт-Петербург', 'Владивосток'];
const temperatures = [];

//Получение температуры для каждого города
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
}

// Создаем список с информацией о городах на странице
let list = document.createElement('ul'); //создаём новый элемент списка
document.body.appendChild(list);//добавляем этот список в тело документа

//для каждого города создаём элемент списка <li> внутри цикла
for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`; //устанавливаем текстовое содержимое элемента списка, включая название города и температуру
    list.appendChild(listItem); //добавляем каждый новый элемент списка в ранее созданный список <ul>
}

//создаем две переменные макс. и мин. температуры
let maxTemperature = Math.max(...temperatures);
let minTemperature = Math.min(...temperatures);

// Выводим максимальную и минимальную температуру на страницу
const maxTempElement = document.createElement('p');
maxTempElement.textContent = `Максимальная температура: ${maxTemperature}°C`;
document.body.appendChild(maxTempElement);

const minTempElement = document.createElement('p');
minTempElement.textContent = `Минимальная температура: ${minTemperature}°C`;
document.body.appendChild(minTempElement);