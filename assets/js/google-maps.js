function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 24.815836812162253, lng:67.11011163681702};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Korangi, KHI' // Title Location
    });
}
24.815836812162253, 67.11011163681702