    
    var customIcons = {
          restaurant: {
            icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
          },
          bar: {
            icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png'
          }
        };
    
    function load() {
//        var latitude = document.getElementById("lat").value;
//        var longitude = document.getElementById("lng").value;
          var map = new google.maps.Map(document.getElementById("mapcanvas"), {
            center: new google.maps.LatLng(),
            zoom: 13,
            mapTypeId: 'roadmap'
          });
//          var infoWindow = new google.maps.InfoWindow;
//
//          // Change this depending on the name of your PHP file
//          downloadUrl("/demo/php/mapsql.php", function(data) {
//            var xml = data.responseXML;
//            var markers = xml.documentElement.getElementsByTagName("marker");
//            for (var i = 0; i < markers.length; i++) {
//              var name = markers[i].getAttribute("name");
//              var description = markers[i].getAttribute("description");
//              var point = new google.maps.LatLng(
//                  parseFloat(markers[i].getAttribute("lat")),
//                  parseFloat(markers[i].getAttribute("lng")));
//              var html = "<b>" + name + "</b> <br/>" + description;
//              // var radius = markers[i].getAttribute("radius");
//              // var icon = customIcons[type] || {};
//              var marker = new google.maps.Marker({
//                map: map,
//                position: point,
//                icon: icon.icon
//              });
//              bindInfoWindow(marker, map, infoWindow, html);
//            }
//          });
//        }
//
//        function bindInfoWindow(marker, map, infoWindow, html) {
//          google.maps.event.addListener(marker, 'click', function() {
//            infoWindow.setContent(html);
//            infoWindow.open(map, marker);
//          });
//        }
//
//        function downloadUrl(url, callback) {
//          var request = window.ActiveXObject ?
//              new ActiveXObject('Microsoft.XMLHTTP') :
//              new XMLHttpRequest;
//
//          request.onreadystatechange = function() {
//            if (request.readyState == 4) {
//              request.onreadystatechange = doNothing;
//              callback(request, request.status);
//            }
//          };
//
//          request.open('GET', url, true);
//          request.send(null);
//        }
//
//        function doNothing() {}