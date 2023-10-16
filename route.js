function init() {
    var Basic_Map = new Array();
     Basic_Map[ 0 ] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
       continuousWorld: false
    });
   var map_104 = L.map('map_104').setView([35.65809922, 139.74135747], 8);
   map_104.addLayer( Basic_Map[ 0 ] );

   var baseMap = {
   "OpenStreetMap": Basic_Map[ 0 ],
   };

   L.control.layers(baseMap).addTo(map_104);
 }
