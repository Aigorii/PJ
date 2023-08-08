    function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

//Получаем координаты места
const ul = document.getElementById('impurities');   

const place_name = 'Moscow'
const API_KEY_YANDEX = '85eaff1b-ef9e-4c11-89bc-ca01d1ae43de'
const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY_YANDEX}&geocode=${place_name}&format=json`
   
    
fetch(API_URL_GEO_DATA)
.then(resp => resp.json())
.then(function(date) {
   
   
const coor = date.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
const coordinates = coor.split(' ');

//Получаем распределение частиц в заданном месте
const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=pm10,pm2_5`
fetch(API_OPEN_METEO)
.then(resp => resp.json())
.then(function(date) {
  
   
//Выводим информацию в браузер
const times = date.hourly.time;
const pm10s = date.hourly.pm10;
const pm2_5s = date.hourly.pm2_5;
//console.log(times[119])
//dateLength=pm10s.length;


//Извлечение числа из даты
//let i= 0

//Функция извлечения числа (d2) из даты
function ddd (i) {
let d1 = times[i]
let datePm = new Date(d1);
let d2 = datePm.getDate();
return d2
}

//Извлечение первого числа, для которого есть данные по загрязненности
let t1 = ddd(0)
console.log(t1)

//Формирование массива чисел из дат
const labels = [ ];
labels.push(t1)
labels.push(t1+1)
labels.push(t1+2)
labels.push(t1+3)
labels.push(t1+4)
console.log(labels)


//Формирование массива средних значений загрязненности (pm10)
const datesPm10 = [ ];

let pm10avar1 =0
for (let i = 0; i < 24; i++) {
    pm10avar1 = pm10avar1 + pm10s[i]
   }
datesPm10.push(pm10avar1/24)


let pm10avar2 =0
for (let i = 24; i < 48; i++) {
    pm10avar2 = pm10avar2 + pm10s[i]
   }
datesPm10.push(pm10avar2/24)


let pm10avar3 =0
for (let i = 49; i < 72; i++) {
    pm10avar3 = pm10avar3 + pm10s[i]
   }
datesPm10.push(pm10avar3/24)


let pm10avar4 =0
for (let i = 73; i < 96; i++) {
    pm10avar4 = pm10avar4 + pm10s[i]
   }
datesPm10.push(pm10avar4/24)


let pm10avar5 =0
for (let i = 97; i < 120; i++) {
    pm10avar5 = pm10avar5 + pm10s[i]
   }
datesPm10.push(pm10avar5/24)
console.log(datesPm10)

console.log('Work')

// Массив с меткам месяцев
//const labels = [
//   'Январь',
//   'Февраль',
//   'Март',
//   'Апрель',
//   'Май',
//   'Июнь',
//   'Июль',
//   'Август',
//   'Сентябрь',
//   'Октябрь',
//   'Ноябрь',
//   'Декабрь',
//   ];

// Получаем canvas элемент
const canvas = document.getElementById('canvas')

// Указываем элемент для 2D рисования 
// настраиваем на то, что бы рисовать 2D объекты
const ctx = canvas.getContext('2d')


// сделали по высоте метки допустимых значениях, 
// а по ширине в качестве меток месяцы
ctx.fillStyle = "black"; // Задаём чёрный цвет для линий 
ctx.lineWidth = 2.0; // Ширина линии
ctx.beginPath(); // Запускает путь
ctx.moveTo(30, 10); // Указываем начальный путь
ctx.lineTo(30, 460); // Перемешаем указатель
ctx.lineTo(1500, 460); // Ещё раз перемешаем указатель
ctx.stroke(); // Делаем контур

// Цвет для рисования
ctx.fillStyle = "black";
// Цикл для отображения значений по Y 
for(let i = 0; i < labels.length; i++) { 
    ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60); 
    ctx.beginPath(); 
    ctx.moveTo(25, i * 80 + 60); 
    ctx.lineTo(30, i * 80 + 60); 
    ctx.stroke(); 
}
 
// Выводим метки
for(let i=0; i<labels.length; i++) { 
    ctx.fillText(labels[i], 50+ i*100, 475); 
}

// Рисуем столбцы

// Объявляем массив данных графика
//let data = [ 100, 53, 39, 54, 21, 10, 53, 39, 54, 21, 22, 40 ]; 
 
// Назначаем зелёный цвет для графика
ctx.fillStyle = "blue"; 
// Цикл для от рисовки графиков
for(var j=0; j<datesPm10.length; j++) { 
    var dp = datesPm10[j]; 
    ctx.fillRect(40 + j*100, 460-dp*5 , 50, dp*5); 
}














 for (let i = 0; i <= dateLength-1; i++) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${times[i]} ${pm10s[i]} ${pm2_5s[i]}`;
    //span.innerHTML = `${times[i]}`;
      
    append(li, span);
    append(ul, li);
}
})
.catch(function(error) {
    console.log(error);  
}); 
})
      