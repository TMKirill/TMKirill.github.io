var viewer = OpenSeadragon({
            id: 'manuscript'
            , prefixUrl: 'mtc/images/'
            , tileSources: 'mtc/Dresden4041.dzi'
            , debugMode:  false
          });

viewer.addSimpleImage (
        {
          index: 1,
          url: 'hb_figure03a.jpg',
          x: 0.002,
          y: 0.747,
          width: 0.49,
          preload: true,
          opacity: 1,
        });
viewer.addSimpleImage (       
        {
          index: 2,
          url: 'hb_figure03b_nmod.jpg',
          x: 0.508,
          y: 0.753,
          width: 0.49,
          preload: true,
          opacity: 1,
        
      });        

viewer.addSimpleImage (       
      { 
   url: 'tol1.png', index:3, x: 0.025, y: 0.756, width: 0.183, opacity: 0
       });
viewer.addSimpleImage (             
      { url: 'tol2.png', index:4, x: 0.157, y: 0.757, width: 0.187, opacity: 0
       
      });
viewer.addSimpleImage (       
      { 
       url: 'tol3.png', index:5, x: 0.297, y: 0.758, width: 0.182, opacity: 0
      });
viewer.addSimpleImage (       
      { 
url: 'tol4.png', index:6, x: 0.428, y: 0.756, width: 0.236, opacity: 0
      });
viewer.addSimpleImage (       
      { url: 'tol5.png', index:7, x: 0.616, y: 0.758, width: 0.203, opacity: 0
      });
viewer.addSimpleImage (       
      { 
        url: 'tol6.png', index:8, x: 0.763, y: 0.758, width: 0.205, opacity: 0
      });
viewer.addSimpleImage (       
      { 
        url: 'readingorder.png', index:9, x: 0.051, y: 0.768, width: 0.11, opacity: 0
      });

var overlayCollection = [
  {
    "layerName": "DaySigns",
    "layerContents": [
      [{
        id: 'DaySigns', px: 0.03, py: 0.84, width: 0.04, height: 0.24,
        classname: 'highlight highlight-royalblue'
      }]
    ]
  },

  {
    "layerName": "Coefficient",
    "layerContents": [
      [{
        id: 'Coefficient', px: 0.038, py: 0.79, width: 0.03, height: 0.04,
        classname: 'highlight highlight-palevioletred'
      }]
    ]
  },

    {
    "layerName": "HieroglyphicCaptions",
    "layerContents": [

      [{
        id: 'HieroglyphicCaptions', px: 0.078, py: 0.76, width: 0.13, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }],
      [{
        id: 'HieroglyphicCaptions', px: 0.21, py: 0.76, width: 0.13, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }],
      [{
        id: 'HieroglyphicCaptions', px: 0.34, py: 0.76, width: 0.14, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }],
      [{
        id: 'HieroglyphicCaptions', px: 0.52, py: 0.76, width: 0.14, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }],
      [{
        id: 'HieroglyphicCaptions', px: 0.68, py: 0.76, width: 0.14, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }],
      [{
        id: 'HieroglyphicCaptions', px: 0.83, py: 0.76, width: 0.14, height: 0.08,
        classname: 'highlight highlight-forestgreen'
      }]

    ]
  },

  {
    "layerName": "Pictures",
    "layerContents": [

      [{
        id: 'Pictures', px: 0.08, py: 0.87, width: 0.12, height: 0.23,
        classname: 'highlight highlight-fuchsia'
      }],
      [{
        id: 'Pictures', px: 0.21, py: 0.87, width: 0.13, height: 0.24,
        classname: 'highlight highlight-fuchsia'
      }],
      [{
        id: 'Pictures', px: 0.35, py: 0.87, width: 0.13, height: 0.24,
        classname: 'highlight highlight-fuchsia'
      }],
      [{
        id: 'Pictures', px: 0.53, py: 0.87, width: 0.14, height: 0.24,
        classname: 'highlight highlight-fuchsia'
      }],
      [{
        id: 'Pictures', px: 0.68, py: 0.87, width: 0.14, height: 0.24,
        classname: 'highlight highlight-fuchsia'
      }],
      [{
        id: 'Pictures', px: 0.83, py: 0.87, width: 0.14, height: 0.24,
        classname: 'highlight highlight-fuchsia'
      }]

    ]
  },

  {
    "layerName": "BlackNumbers",
    "layerContents": [

      [{
        id: 'BlackNumbers', px: 0.08, py: 0.85, width: 0.06, height: 0.02,
        classname: 'highlight highlight-navy'
      }],
      [{
        id: 'BlackNumbers', px: 0.21, py: 0.85, width: 0.07, height: 0.02,
        classname: 'highlight highlight-navy'
      }],
      [{
        id: 'BlackNumbers', px: 0.35, py: 0.85, width: 0.06, height: 0.02,
        classname: 'highlight highlight-navy'
      }],
      [{
        id: 'BlackNumbers', px: 0.53, py: 0.85, width: 0.06, height: 0.02,
        classname: 'highlight highlight-navy'
      }],
      [{
        id: 'BlackNumbers', px: 0.68, py: 0.85, width: 0.06, height: 0.02,
        classname: 'highlight highlight-navy'
      }],
      [{
        id: 'BlackNumbers', px: 0.83, py: 0.85, width: 0.07, height: 0.02,
        classname: 'highlight highlight-navy'
      }]

    ]
  },

  {
    "layerName": "RedNumbers",
    "layerContents": [

      [{
        id: 'RedNumbers', px: 0.14, py: 0.85, width: 0.07, height: 0.02,
        classname: 'highlight highlight-red'
      }],
      [{
        id: 'RedNumbers', px: 0.28, py: 0.84, width: 0.06, height: 0.02,
        classname: 'highlight highlight-red'
      }],
      [{
        id: 'RedNumbers', px: 0.42, py: 0.85, width: 0.05, height: 0.02,
        classname: 'highlight highlight-red'
      }],
      [{
        id: 'RedNumbers', px: 0.6, py: 0.85, width: 0.07, height: 0.02,
        classname: 'highlight highlight-red'
      }],
      [{
        id: 'RedNumbers', px: 0.76, py: 0.85, width: 0.06, height: 0.02,
        classname: 'highlight highlight-red'
      }],
      [{
        id: 'RedNumbers', px: 0.91, py: 0.85, width: 0.05, height: 0.02,
        classname: 'highlight highlight-red'
      }]

    ]
  },


  {
    "layerName": "Coefficients",
    "layerContents": [

      [{
        id: 'Coefficients', px: 0.075, py: 0.84, width: 0.4, height: 0.03,
        classname: 'highlight highlight-lime'
      }],
      [{
        id: 'Coefficients', px: 0.53, py: 0.84, width: 0.44, height: 0.03,
        classname: 'highlight highlight-lime'
      }]

    ]
  },
];

/*
viewer.addHandler('canvas-click', function (event) {
  // The canvas-click event gives us a position in web coordinates.
  var webPoint = event.position;

  // Convert that to viewport coordinates, the lingua franca of OpenSeadragon coordinates.
  var viewportPoint = viewer.viewport.pointFromPixel(webPoint);

  // Convert from viewport coordinates to image coordinates.
  var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);

  // Show the results.
  console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
});
*/

var tiledoverlayCollection = [

  {
    "layerName": "1TolCaptions",
    "layerContents": [
      [{
        id: '1TolCaptions', source: 'tol1.png', ind: 3, px: 0.0185, py: 0.767, pw: 0.183, op: 0.5,
        classname: ''
      }]
    ]
  },
  {
    "layerName": "2TolCaptions",
    "layerContents": [
      [{
        id: '2TolCaptions', source: 'tol2.png', ind: 4, px: 0.204, py: 0.767, pw: 0.132, op: 0.5,
        classname: ''
      }]
    ]
  },
  {
    "layerName": "3TolCaptions",
    "layerContents": [
      [{
        id: '3TolCaptions', source: 'tol3.png', ind: 5, px: 0.338, py: 0.767, pw: 0.136, op: 0.5,
        classname: ''
      }]
    ]
  },
  {
    "layerName": "4TolCaptions",
    "layerContents": [
      [{
        id: '4TolCaptions', source: 'tol4.png', ind: 6, px: 0.52, py: 0.763, pw: 0.145, op: 0.5,
        classname: ''
      }]
    ]
  },
  {
    "layerName": "5TolCaptions",
    "layerContents": [
      [{
        id: '5TolCaptions', source: 'tol5.png', ind: 7, px: 0.674, py: 0.765, pw: 0.146, op: 0.5,
        classname: ''
      }]
    ]
  },
  {
    "layerName": "6TolCaptions",
    "layerContents": [
      [{
        id: '6TolCaptions', source: 'tol6.png', ind: 8, px: 0.828, py: 0.768, pw: 0.143, op: 0.5,
        classname: ''
      }]
    ]
  }
];

/*
viewer.addTiledImage({
tileSource: 'mtc/hb_figure07a.dzi',
x: 0.00,
y: 0.765,
width: 0.215,
opacity: 0.9});
*/

var forstezoom = document.getElementById("ForsteZoom");
forstezoom.addEventListener("click", function(){
  var zoomingPoint = new OpenSeadragon.Point(0.5, 0.85);
  viewer.viewport.zoomTo(1, zoomingPoint, false);
  viewer.viewport.panTo(zoomingPoint, false);
  viewer.viewport.applyConstraints();
});

var FostermannVisibility = false;
var forstergroup = document.getElementsByClassName("Forstemann");
for (var z=0; z<forstergroup.length; z++) {

forstergroup[z].addEventListener("click", function() {
if (!(FostermannVisibility)) {
  var FostermannLayer = viewer.world.getItemAt(1);
  FostermannLayer.setOpacity(0.3);
  var FostermannLayer = viewer.world.getItemAt(2);
  FostermannLayer.setOpacity(0.3);
  FostermannVisibility = !FostermannVisibility;
}
else {
  var FostermannLayer = viewer.world.getItemAt(1);
  FostermannLayer.setOpacity(0);
  var FostermannLayer = viewer.world.getItemAt(2);
  FostermannLayer.setOpacity(0);
  FostermannVisibility = !FostermannVisibility;  

}


});
};


var slider = document.getElementById("overlayopacitysliderrange");

slider.oninput = function() {
  console.log('Slider value: ' + this.value);
  var FostermannLayer = viewer.world.getItemAt(1);
  FostermannLayer.setOpacity(this.value);
  var FostermannLayer = viewer.world.getItemAt(2);
  FostermannLayer.setOpacity(this.value);
 
}; 