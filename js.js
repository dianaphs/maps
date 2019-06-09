//var locations = [
//  ["content1", 51.4963069, -0.1764153],
//  ["content2", 45.840196, 15.9643316],
//  ["content3", 42.6457256, 18.094058]
//];

var map;

function initialize() {

    var panoPos = new google.maps.LatLng(51.496208, -0.176268);
    var markerPos = new google.maps.LatLng(51.4963069, -0.1764153);

    var panoOptions = {
        position: panoPos
    };

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'), panoOptions);

    var marker = new google.maps.Marker({
        position: {
            lat: 51.4963115,
            lng: -0.1764153
        },
        map: panorama,
        icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00',
    });

    var windowMarker = new google.maps.Marker({
        position: {
            lat: 51.4962529,
            lng: -0.176439
        },
        map: panorama,
        icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00',
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<div><img class='widthimg' src='images/Aarsman0105.jpg'></div><h1>Extinction Rebellion</h1><p>Het museum heeft het 'Hope' gedoopt, omdat 'Hope' aantoont dat maatregelen die de natuur beschermen, effect hebben. Met zo'n milieubewust beleid heeft het museum er vast geen bezwaar tegen dat activisten van de Extinction Rebellion in de hal een Die-in houden. Ze beelden uit wat er gaat gebeuren als we niets doen aan de klimaatverandering. Door de temperatuurverhoging wordt de zeespiegel zo hoog, het vasteland wordt weggevaagd. Engeland onder water, Londen onder water, iedereen dood.</p></div>"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(panorama, marker);
    });


    panorama.setPov({
        heading: 290,
        pitch: 35,
        zoom: 1
    });

}

google.maps.event.addDomListener(window, 'load', initialize);