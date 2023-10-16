function init() {
    var Basic_Map = new Array();
     Basic_Map[ 0 ] = L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
       continuousWorld: false
    });
   var map_104 = L.map('map_104').setView([34.694925577318706,133.92794107726027], 13);
   map_104.addLayer( Basic_Map[ 0 ] );

   var baseMap = {
   "Cyclemap": Basic_Map[ 0 ],
   };

   L.control.layers(baseMap).addTo(map_104);
 }
