console.log ('Hello')

const place_name = 'Moscow'
const API_KEY_YANDEX = '85eaff1b-ef9e-4c11-89bc-ca01d1ae43de'

const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY_YANDEX}&geocode=${place_name}&format=json`

//const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=pm10,pm2_5`

function createNode(element) {
    return document.createElement(element);
    }
    function append(parent, el) {
        return parent.appendChild(el);
    }
    const ul = document.getElementById('Point');
    
fetch(API_URL_GEO_DATA)

.then(resp => resp.json())
.then(function(date) {

    return;
})


//console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
//.then(  
    //function(response) {  
      //if (response.status !== 200) {  
        //console.log('Looks like there was a problem. Status Code: ' +  
          //response.status);  
        //return;  
      //}

      // Examine the text in the response  
      //response.json().then(function(data) {  
        //console.log(data);  
      //});  
    //}  
  //)  
 // .catch(function(err) {  
   // console.log('Fetch Error :-S', err);  
 // });



