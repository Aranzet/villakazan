ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 12
        }, 
        myPlacemark1 = new ymaps.Placemark([55.76, 37.64], {
            balloonContent: 'Иконка геолокации'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/geoposition.png',
            iconImageSize: [212, 229],
            iconImageOffset: [-212, -229],
        }))
        myMap.geoObjects.add(myPlacemark1)
}