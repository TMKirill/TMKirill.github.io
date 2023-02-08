var viewer = OpenSeadragon({
            id: 'manuscript'
            , prefixUrl: 'mtc/images/'
            , tileSources: 'mtc/Rishu.dzi',        
        });

viewer.addSimpleImage (       
        {
          index: 1,
          url: 'dizhi_numbers.png',
          x: 0.095,
          y: 0.365,
          width: 0.36,
          preload: true,
          opacity: 0,
        
      });        

viewer.addHandler('canvas-click', function(event) {
    // The canvas-click event gives us a position in web coordinates.
    var webPoint = event.position;

    // Convert that to viewport coordinates, the lingua franca of OpenSeadragon coordinates.
    var viewportPoint = viewer.viewport.pointFromPixel(webPoint);

    // Convert from viewport coordinates to image coordinates.
    var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);

    // Show the results.
    console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
});

// Overlays, grouped by highlightable groups; each element within a group contains the CSS classnames that allow to highlight it with a chosen color;
// some elements may additionally contain a classname indicating the specific rotation angle (the classname is defined in columns.css)
var overlayCollection = [
  { 
    "layerName": "Bindings",
    "layerContents": [
       [{
  	      id: 'Bindings', px: 0.005, py: 0.06, width: 0.99, height: 0.03,
  	      classname: 'highlight highlight-bluecontrastborder'
       }],
/*       [{
        id: 'Bindings', px: 0.475, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.525, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.565, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.605, py: 0.05, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.65, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.69, py: 0.05, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.735, py: 0.05, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.78, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.87, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.91, py: 0.05, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.96, py: 0.06, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
*/
       [{
        id: 'Bindings', px: 0.005, py: 0.62, width: 0.99, height: 0.04,
        classname: 'highlight highlight-bluecontrastborder'
       }],
/*
       [{
        id: 'Bindings', px: 0.365, py: 0.63, width: 0.09, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.48, py: 0.61, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.52, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.57, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.61, py: 0.615, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.65, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.695, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],

       [{
        id: 'Bindings', px: 0.74, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.785, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.83, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.87, py: 0.62, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.915, py: 0.63, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.96, py: 0.63, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],

*/

       [{
        id: 'Bindings', px: 0.01, py: 1.165, width: 0.98, height: 0.04,
        classname: 'highlight highlight-bluecontrastborder'
       }],
/*
       [{
        id: 'Bindings', px: 0.34, py: 1.18, width: 0.09, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.44, py: 1.18, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.485, py: 1.15, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.53, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.565, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.61, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.66, py: 1.16, width: 0.025, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.695, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.755, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.79, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.83, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.87, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.915, py: 1.16, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }],
       [{
        id: 'Bindings', px: 0.955, py: 1.18, width: 0.03, height: 0.02,
        classname: 'highlight highlight-bluecontrastborder'
       }]
*/
     ]
  },
  
  {
  "layerName":"Jianutitle",
  "layerContents": [
  [{
	id: 'Jianutitle', px: 0.958, py: 0.02, width: 0.037, height: 0.045,
	classname: 'highlight highlight-greenyellowcontrastborder'
  }]
]
},



  {
    "layerName":"strip1text",
    "layerContents": [
    [{
      id: 'strip1text', px: 0.955, py: 0.09, width: 0.04, height: 0.28,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },

  {
    "layerName":"strip2text",
    "layerContents": [
    [{
      id: 'strip2text', px: 0.91, py: 0.08, width: 0.04, height: 0.32,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },


  {
    "layerName":"strip13text",
    "layerContents": [
    [{
      id: 'strip13text', px: 0.425, py: 0.4, width: 0.04, height: 0.73,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },

  {
    "layerName":"strip27text",
    "layerContents": [
    [{
      id: 'strip27text', px: 0.07, py: 0.41, width: 0.03, height: 0.56,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },

  {
    "layerName":"strip2pattern",
    "layerContents": [
    [{
      id: 'strip2pattern', px: 0.91, py: 0.65, width: 0.04, height: 0.075,
      classname: 'highlight highlight-gold'
    }]
  ]
  },


  
  {
    "layerName":"emptyspace1",
    "layerContents": [
    [{
      id: 'emptyspace1', px: 0.48, py: 0.47, width: 0.515, height: 0.15,
      classname: 'highlight highlight-yellowcontrastborder'
    }]
  ]
  },

  {
    "layerName":"emptyspace2",
    "layerContents": [
    [{
      id: 'emptyspace2', px: 0.005, py: 0.33, width: 0.45, height: 0.07,
      classname: 'highlight highlight-yellowcontrastborder'
    }]
  ]
  },

  {
    "layerName":"Jianutext",
    "layerContents": [
    [{
      id: 'Jianutext', px: 0.48, py: 0.07, width: 0.51, height: 0.44,
      classname: 'highlight highlight-lime'
    }]
  ]
  },

  {
    "layerName":"Genshan",
    "layerContents": [
    [{
      id: 'Genshan', px: 0.48, py: 0.64, width: 0.47, height: 0.14,
      classname: 'highlight highlight-azure'
    }],
    [{
        id: 'Genshan', px: 0.57, py: 0.78, width: 0.38, height: 0.08,
        classname: 'highlight highlight-azure'
      }],
      [{
        id: 'Genshan', px: 0.69, py: 0.86, width: 0.26, height: 0.3,
        classname: 'highlight highlight-azure'
      }]
  ]
  },

  {
    "layerName":"GenshanEmbeddedTitle",
    "layerContents": [
    [{
      id: 'GenshanEmbeddedTitle', px: 0.87, py: 0.86, width: 0.03, height: 0.18,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },

  {
    "layerName":"YuTang",
    "layerContents": [
    [{
      id: 'YuTang', px: 0.005, py: 0.08, width: 0.45, height: 0.3,
      classname: 'highlight highlight-mediumslateblue'
    }]
  ]
  },

  {
    "layerName":"YuTangTextBlock",
    "layerContents": [
    [{
      id: 'YuTangTextBlock', px: 0.18, py: 0.085, width: 0.12, height: 0.27,
      classname: 'highlight highlight-red'
    }]
  ]
  },

  {
    "layerName":"YuTangEmbeddedTitle",
    "layerContents": [
    [{
      id: 'YuTangEmbeddedTitle', px: 0.27, py: 0.09, width: 0.03, height: 0.16,
      classname: 'highlight highlight-fuchsia'
    }]
  ]
  },

  {
    "layerName":"Shengzi",
    "layerContents": [
    [{
      id: 'Shengzi', px: 0.065, py: 0.4, width: 0.40, height: 0.79,
      classname: 'highlight highlight-gold'
    }]
  ]
  },

  {
    "layerName":"Shengziindex",
    "layerContents": [
    [{
      id: 'Shengziindex', px: 0.1, py: 0.4, width: 0.355, height: 0.03,
      classname: 'highlight highlight-greenyellow'
    }]
  ]
  },

  {
    "layerName":"PlainSiChars",
    "layerContents": [
    [{
      id: 'PlainSiChars', px: 0.428, py: 0.565, width: 0.03, height: 0.02,
      classname: 'highlight highlight-aliceblue'
    }],
    [{
        id: 'PlainSiChars', px: 0.43, py: 0.79, width: 0.03, height: 0.02,
        classname: 'highlight highlight-aliceblue'
      }],
      [{
        id: 'PlainSiChars', px: 0.433, py: 0.92, width: 0.03, height: 0.02,
        classname: 'highlight highlight-aliceblue'
      }]
  ]
  },

  {
    "layerName":"ElongatedSiChar",
    "layerContents": [
    [{
      id: 'ElongatedSiChar', px: 0.44, py: 1.08, width: 0.03, height: 0.05,
      classname: 'highlight highlight-royalblue'
    }]
  ]
  },

  {
    "layerName":"strip2Date",
    "layerContents": [
    [{
      id: 'strip2Date', px: 0.913, py: 0.085, width: 0.03, height: 0.08,
      classname: 'highlight highlight-lightgoldenrodyellow'
    }]
  ]
  },

  {
    "layerName":"strip2PhraseWithRepetition",
    "layerContents": [
    [{
      id: 'strip2PhraseWithRepetition', px: 0.79, py: 1.08, width: 0.03, height: 0.09,
      classname: 'highlight highlight-lightgoldenrodyellow'
    }],
    [{
      id: 'strip2PhraseWithRepetition', px: 0.74, py: 0.87, width: 0.04, height: 0.07,
      classname: 'highlight highlight-lightgoldenrodyellow'
    }],
  ]
  },

  {
    "layerName":"dot",
    "layerContents": [
    [{
      id: 'dot', px: 0.615, py: 0.87, width: 0.02, height: 0.02,
      classname: 'highlight highlight-greencontrastborder'
    }]
  ]
  },

  {
    "layerName":"Rongli",
    "layerContents": [
    [{
      id: 'Rongli', px: 0.605, py: 0.89, width: 0.04, height: 0.17,
      classname: 'highlight highlight-mediumslateblue'
    }]
  ]
  },

  {
    "layerName":"GenshanDiagram",
    "layerContents": [
    [{
      id: 'GenshanDiagram', px: 0.48, py: 0.64, width: 0.46, height: 0.22,
      classname: 'highlight highlight-mediumslateblue'
    }]
  ]
  },

  {
    "layerName":"YuTangDiagram",
    "layerContents": [
    [{
      id: 'YuTangDiagram', px: 0.01, py: 0.11, width: 0.15, height: 0.25,
      classname: 'highlight highlight-mediumslateblue'
    }],
    [{
      id: 'YuTangDiagram', px: 0.3, py: 0.1, width: 0.15, height: 0.36,
      classname: 'highlight highlight-mediumslateblue'
    }]
  ]
  },
  
];

var tiledoverlayCollection = [
  
  {
    "layerName": "1TolCaptions",
    "layerContents": [
      [{
        id: '1TolCaptions', source: 'dizhi.png', ind: 1, px: 0.0185, py: 0.767, pw: 0.183, op: 0.5,
        classname: ''
      }]
    ]
  }
  
];

