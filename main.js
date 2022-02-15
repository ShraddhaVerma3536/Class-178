let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = "pk.eyJ1Ijoic2hyZWR4c3F1YWQiLCJhIjoiY2t6bzhyZWVhMzV1MDJ2bzAyZG92MHg2ZSJ9.UQ8_4m53cQcAm81yk19qjg"
var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/light-v10",
    center:[longitude,latitude],
    zoom:19
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)