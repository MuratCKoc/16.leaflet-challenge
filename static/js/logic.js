url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

console.log(url)

d3.json(url, function(data){
    console.log(data)
})
//d3.json(url).then(function(data) {})
//     console.log(data.features)
// });

// // API call to gather earthquakes for the past 30 days
// d3.json(url).then(function(data) {
//     var earthquakes = data.features
//     console.log(earthquakes)
// })