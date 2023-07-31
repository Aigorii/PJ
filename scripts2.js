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
    console.log('date ===', date)
   
const coor = date.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
const coordinates = coor.split(' ');

//Получаем распределение частиц в заданном месте
const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[1]}&longitude=${coordinates[0]}&hourly=pm10,pm2_5`
fetch(API_OPEN_METEO)
.then(resp => resp.json())
.then(function(date) {
   //console.log('date ===', date)
   
//Выводим информацию в браузер
const times = date.hourly.time;
const pm10s = date.hourly.pm10;
const pm2_5s = date.hourly.pm2_5;

dateLength=times.length;
//console.log(dateLength);


 for (let i = 1; i <= dateLength; i++) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${times[i]} ${pm10s[i]} ${pm2_5s[i]}`;
      
    append(li, span);
    append(ul, li);
}
})
.catch(function(error) {
    console.log(error);  
}); 
})
      