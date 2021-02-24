
document.getElementById('searchBtn').addEventListener('click', event => {
  event.preventDefault()
  let city = document.getElementById('city').value
  let state = document.getElementById('state').value
  axios.get(`http://open.mapquestapi.com/geocoding/v1/address?key=CwelIFvjcU2rKapuqZ6AcvE64IpoLS9R&location=${city},${state}`)
    .then(res => {
      let latitude = res.data.results[0].locations[0].latLng.lat
      let longitude = res.data.results[0].locations[0].latLng.lng
      //console.log(`${latitude},${longitude}`)

      axios.get(`https://discover.search.hereapi.com/v1/discover?apikey=wapv_QGDUdLAYFEJ_ztgSot46ybSnWVvJkd78ECummU&q=Covid&at=${latitude},${longitude}&limit=10`)
        .then(res => {

          for (let i = 0; i < 10; i++) {
            
            console.log(res)
          
          }
          L.mapquest.key = 'bGIvPWAX9jDPExZQarnLYMiSA90mBVst';

          var map = L.mapquest.map('map', {
            center: [latitude, longitude],
            layers: L.mapquest.tileLayer('map'),
            zoom: 13
          });

          L.marker([res.data.items[0].position.lat, res.data.items[0].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[0].address.label).addTo(map);

          L.marker([res.data.items[1].position.lat, res.data.items[1].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[1].address.label).addTo(map);

          L.marker([res.data.items[2].position.lat, res.data.items[2].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[2].address.label).addTo(map);

          L.marker([res.data.items[3].position.lat, res.data.items[3].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[3].address.label).addTo(map);

          L.marker([res.data.items[4].position.lat, res.data.items[4].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[4].address.label).addTo(map);

          L.marker([res.data.items[5].position.lat, res.data.items[5].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[5].address.label).addTo(map);

          L.marker([res.data.items[6].position.lat, res.data.items[6].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[6].address.label).addTo(map);

          L.marker([res.data.items[7].position.lat, res.data.items[7].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[7].address.label).addTo(map);

          L.marker([res.data.items[8].position.lat, res.data.items[8].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[8].address.label).addTo(map);

          L.marker([res.data.items[9].position.lat, res.data.items[9].position.lng], {
            icon: L.mapquest.icons.marker(),
            draggable: false
          }).bindPopup(res.data.items[9].address.label).addTo(map);

        })
        .catch(err => console.error(err))
    })



    .catch(err => console.error(err))
})


