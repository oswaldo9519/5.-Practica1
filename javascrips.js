/* token de acceso: pk.eyJ1Ijoib3N3YWxkbzk1IiwiYSI6ImNrMXd0NTFmdDAyNHAzaW16aWFtMTByOWwifQ.LkyJe-cLuniu0A44IWpwBw */

mapboxgl.accessToken = 'pk.eyJ1Ijoib3N3YWxkbzk1IiwiYSI6ImNrMXd0NTFmdDAyNHAzaW16aWFtMTByOWwifQ.LkyJe-cLuniu0A44IWpwBw';

let map = new mapboxgl.Map({

    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-58.381557, -34.603683],
    zoom: 15

})


let element = document.createElement('div')
element.className = 'marker'

element.addEventListener('click', () => {
    window.alert('https://www.google.com/search?q=obelisco%20corrientes&oq=obelis&aqs=chrome.0.69i59j0l4j69i57.988j0j7&sourceid=chrome&ie=UTF-8&sxsrf=ACYBGNTfM8xi6iqvfEU8JyWM_13S-Z1vfw:1571594722898&npsic=0&rflfq=1&rlha=0&rllag=-34603998,-58383888,214&tbm=lcl&rldimm=1278649895331190155&ved=2ahUKEwjGtsHJtqvlAhUnLLkGHRe2C44QvS4wAHoECAkQIA&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rlst=f#rlfi=hd:;si:1278649895331190155;mv:[[-34.6005276,-58.3714478],[-34.6101044,-58.387042199999996]];tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2')
})



let marker = new mapboxgl.Marker(element)
    .setLngLat({
        lng: -58.381557,
        lat: -34.603683
    })

    .addTo(map)

