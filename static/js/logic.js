url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

console.log(url)

d3.json(url, function(data) {
    console.log(data)
    generateMap(data)
})

// Create a new layer
var eqLayer = new L.layerGroup();

/**
 * Generates Map
 * @param {json} earthquakes 
 */
function generateMap(earthquakes) {
    var features = earthquakes.features

    generateCircles(features)

}

/**
 * 
 * @param {object} features 
 */
function generateCircles(features) {
    for (var i = 0; i < features.length; i++) {
        var radius = features[i].properties.mag * 2.2
        var color = getColor(features[i].geometry.coordinates[2])
        var long = features[i].geometry.coordinates[0]
        var lat = features[i].geometry.coordinates[1]

    // Add circle markers to earthquake_layer
    L.circle([lat,long], {
        fillOpacity: 0.4,
        color: color,
        fillColor: color,
        radius: radius
        })
    .bindPopup("<h4>"+features[i].properties.title+"</h4><h4>Type: "+ features[i].properties.type+"</h4>")
    .addTo(eqLayer)
    }
}

/**
 * 
 * @param {number} depth 
 */
function getColor(dp) {
    return dp > 90 ? "#ff0303":
        dp > 75 ? "#ff8040":
        dp > 50 ? "#ffcc40":
        dp > 25 ? "#efff40":
        dp > 0 ? "#a3fa57":
        "#99ff40";
}


/**
 * 
 * @param {string} baselayers
 */
function generateBaselayers(layer_id) {

}



//d3.json(url).then(function(data) {})
//     console.log(data.features)
// });

// // API call to gather earthquakes for the past 30 days
// d3.json(url).then(function(data) {
//     var earthquakes = data.features
//     console.log(earthquakes)
// })