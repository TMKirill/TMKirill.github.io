
// Checking whether there are overlays to be added on top of the main image.
// The overlays match the classnames of span elements with onclick events attached to them.

// First, make sure that all overlays are deactivated.
var overlayToggle = {};
for (i =0; i < overlayCollection.length; i++) {
   overlayToggle[i] = false;

};


// The procedure to switch the overlays on or off.
var overlaysRoutine = function () {
  for (k = 0; k < overlayCollection.length; k++) {
// Check if there is an overlay matching the class name of the clicked element.
    if (this.classList.contains(overlayCollection[k].layerName)) {
// If the overlay is activated, switch it off by calling the OpenSeadragon removeOverlay function.
      if (overlayToggle[k]) {
        overlayCollection[k].layerContents.forEach(function (overlaySet) {
          overlaySet.forEach(function (overlay) {
            var overlayToRemove = document.getElementById(overlay.id);
            viewer.removeOverlay(overlayToRemove);
          });
        });

      }
// If the overlay is deactivated, switch it on by creating an HTML element on top of the main image.
      else {
        overlayCollection[k].layerContents.forEach(function (overlaySet) {
// Repeat it as many times as there are overlay rectangles in the set.
          overlaySet.forEach(function (overlay) {

            var elt = document.createElement("div");
            if (overlay.place) {
              var newoverlayplace = overlay.place;
            }
            else { var newoverlayplace = 'TOP_LEFT'; }
            elt.id = overlay.id;
            elt.className = overlay.classname;
            viewer.addOverlay({
              element: elt,
              location: new OpenSeadragon.Rect(overlay.px, overlay.py, overlay.width, overlay.height, overlay.rotation)
            });
          });
        });
// Switch the overlay's status to the opposite.
      };
      overlayToggle[k] = !overlayToggle[k];
      break;
    }
  };
};

// Add listeners for all overlay collections.
for (var l = 0; l < overlayCollection.length; l++) {
// console.log(extractedLayerNames);
  var classname = document.getElementsByClassName(overlayCollection[l].layerName);
  for (var m = 0; m < classname.length; m++)         { 
    var layerAnchor = {};
    layerAnchor[l] = overlayCollection[l].layerName;    
    classname[m].addEventListener('click', overlaysRoutine, false);  

};
};


// This is for non-HTML overlays that are handled a bit differently.
// Create an array consisting of elements marked by "TolCaptions" classname.
var allCaptionElements = document.getElementsByClassName("TolCaptions");
  // console.log(tiledoverlayCollection[l].layerName);
// Extract the ID of a particular element, invoke the function that switches its visibility on and off.
  for (var p = 0; p < allCaptionElements.length; p++)         { 
    var currentCaptionId = {};
    currentCaptionId[p] = allCaptionElements[p].id.match(/[0-9]+/g);
//    console.log('ID of the element with caption ' + currentCaptionId[p]);
    allCaptionElements[p].addEventListener('click', captionsRoutine, false);  

};

// Switch the overlay's visibility on or off.
function captionsRoutine () {
  var currentLayer = viewer.world.getItemAt(this.id.match(/[0-9]+/g));
  // console.log('Layer whose opacity is being changed ' + viewer.world.getIndexOfItem(currentLayer));
  if (currentLayer.opacity == 0) {
    currentLayer.setOpacity(0.8);
    
  }
  else {
    currentLayer.setOpacity(0);
    
  }
 
};
/*
function updateOverlays() {
  var transformProp = OpenSeadragon.getCssPropertyWithVendorPrefix('transform');
  viewer.overlayCollection.forEach(overlay => {
    overlay.element.style[transformProp] = 'rotate(45deg)';
  });
}
  
    viewer.addHandler("update-viewport", function(){
      setTimeout(updateOverlays, 0.01);
    });
  
    viewer.addHandler("animation", updateOverlays);
  */