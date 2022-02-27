const haversine = require("haversine-distance");

module.exports = {
    execute: function(user) {
        const londonLatitude = 51.509865
        const londonLongitude = -0.118092
        const haversine_m = haversine(
            {lat: londonLatitude, lng: londonLongitude}, 
            {lat: user.latitude, lng: user.longitude}
        );
        var haversine_km = haversine_m /1000;
        return haversine_km <= 80.4672
    }
}