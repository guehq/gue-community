// Get the checkbox elements
var localCommunitiesCheckbox = document.getElementById('localCommunities');
var diveCentersCheckbox = document.getElementById('diveCenters');
var premiumDiveCentersCheckbox = document.getElementById('premiumDiveCenters');

// Add event listeners to the checkboxes
localCommunitiesCheckbox.addEventListener('click', function() {
  showLocalCommunities = this.checked;
});
diveCentersCheckbox.addEventListener('click', function() {
  showDiveCenters = this.checked;
});
premiumDiveCentersCheckbox.addEventListener('click', function() {
  showPremiumDiveCenters = this.checked;
});

var showLocalCommunities = false;
var showDiveCenters = false;
var showPremiumDiveCenters = false;

// Functions to handle checkbox changes
function toggleLocalCommunities() {
  // Get all the markers of type 'localCommunity'
  var localCommunitiesMarkers = myearth.getMarkers({ type: 'localCommunity' });

  // Toggle the visibility of the markers based on the checkbox state
  for (var i = 0; i < localCommunitiesMarkers.length; i++) {
    localCommunitiesMarkers[i].visible = localCommunitiesCheckbox.checked;
  }
}

function toggleDiveCenters() {
  // Get all the markers of type 'diveCenter'
  var diveCentersMarkers = myearth.getMarkers({ type: 'diveCenter' });

  // Toggle the visibility of the markers based on the checkbox state
  for (var i = 0; i < diveCentersMarkers.length; i++) {
    diveCentersMarkers[i].visible = diveCentersCheckbox.checked;
  }
}

function togglePremiumDiveCenters() {
  // Get all the markers of type 'premiumDiveCenter'
  var premiumDiveCentersMarkers = myearth.getMarkers({ type: 'premiumDiveCenter' });

  // Toggle the visibility of the markers based on the checkbox state
  for (var i = 0; i < premiumDiveCentersMarkers.length; i++) {
    premiumDiveCentersMarkers[i].visible = premiumDiveCentersCheckbox.checked;
  }
}
