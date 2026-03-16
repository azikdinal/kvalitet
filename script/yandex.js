ymaps.ready(function () {
    // Initialize the map
    var myMap = new ymaps.Map('map', {
        center: [60.035670, 30.235397], // Set the center of the map
        zoom: 10 // Set the zoom level of the map
    });

    // Add a marker to the map
    var myPlacemark = new ymaps.Placemark([60.035670, 30.235397], {
        hintContent: 'My Marker',
        balloonContent: 'This is my marker'
    });

    myMap.geoObjects.add(myPlacemark); // Add the marker to the map
});