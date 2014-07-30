/***************** GOOGLE MAPS API *****************/

    /* POSITION REQUEST */

    function showlocation() {
    navigator.geolocation.getCurrentPosition(success);
    }

    /*USER GEOLOCATION*/

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    } else { error('Geolocation is not supported by this browser.'); };
    
    function success(position) {
        
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
           
    /* GET THE LAT & LONG AND SEND FORM */
    
    var lat = position.coords.latitude.toFixed(6);
    var long = position.coords.longitude.toFixed(6);
        
    var inputLat = document.getElementById("lat");
    var inputLong = document.getElementById("long");
        
    inputLat.value = lat;
    inputLong.value = long;
    
    document.getElementById('latbox').innerHTML = lat;
    document.getElementById('longbox').innerHTML = long;
        
    /*MAP OPTIONS*/    
    
    var myOptions = {
    zoom: 18,
    center: latlng,
    disableDefaultUI: true,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.SATELLITE
    
    };
    
    /*MAP CREATION*/ 
    
    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
    
    /*MARKER CREATION*/
    
    var markerImage = new google.maps.MarkerImage('http://doors.gs/demo//img/marker.png',
                new google.maps.Size(25, 25),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 12));
			
    var marker = new google.maps.Marker({ // Set the marker
        position: latlng, // Position marker to coordinates
        icon: markerImage, //use our image as the marker
        map: map, // assign the market to our map variable
        title: 'This is your Door' // Marker ALT Text
    });
    
    /*AREA WINDOW*/
    
    var infowindow = new google.maps.InfoWindow ({
        content: 'This is your Door'
    
    });
    
    /*WINDOW EVENT*/
    
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);

    });
    
    /*CIRCLE OPTIONS*/
    
    var circulo = {
      strokeColor: "#191970",  // Color del borde del círculo
      strokeOpacity: 0.6, // opacidad dl borde (entre 9,9 y 1) 
      strokeWeight: 5,  // ancho del borde en px
      fillColor: "#1E90FF",  // Color del relleno
      fillOpacity: 0.3,  // Opacidad del relleno
      geodesic: true,  // gedodésica sobre la Tierra (por defecto es flase)
      map: map,  // El mapa con el que estamos trabajando
      center: latlng,  // En este caso el mismo que nuestro marcador
      radius: 40  // Radio del círculo (correspondiente a metros)
   
    };   
   
    /*CIRCLE CREATION*/
    
    cityCircle = new google.maps.Circle(circulo);

    };

    /*FUNCTION ERROR NO GEOLOCATION*/

    function error(msg) {
  
    var x = document.querySelector('#status');
    s.innerHTML = typeof msg == 'string' ? msg : "failed";
    s.className = 'fail';

    };

