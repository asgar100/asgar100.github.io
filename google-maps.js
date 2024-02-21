function initMap() {
    // Latitude and Longitude for Infopark Phase 2 Kochi
    var infoparkLatLng = {lat: 10.017864, lng: 76.307858};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: infoparkLatLng
    });

    var marker = new google.maps.Marker({
        position: infoparkLatLng,
        map: map,
        title: 'Infopark Phase 2, Kochi, India'
    });
}