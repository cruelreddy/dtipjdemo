
   import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
    
    

    const today = dayjs();
    const todayFormatted = today.format('ddd, MMMM, D')
    document.querySelector('#timer').textContent= todayFormatted;
    
    
    // Iitialize the map and set default view
    // Default world map view
    // Add OpenStreetMap tiles
    
    const map = L.map('map').setView([20, 0], 2); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marker for user location
    let userMarker = null;
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateUserLocation, locationError, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    // Function to update user location on the map
    function updateUserLocation(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (!userMarker) {
        userMarker = L.marker([lat, lng]).addTo(map).bindPopup("here").openPopup();
      } else {
        userMarker.setLatLng([lat, lng]);
      }

      map.setView([lat, lng], 15);
    }

    function locationError(err) {
      alert("Error getting location: " + err.message);
    }

    // Use Geolocation API to track user location
    

