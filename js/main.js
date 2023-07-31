function createEarthJS() {
  let zoom_based_rescale_factor = 10;
  myearth = new Earth(document.getElementById('myearth'), {
    location: {
      lat: 47.5,
      lng: 10
    },
    zoom: 1.2,
    zoomMin: 1,
    zoomMax: 2.6,
    quality: (window.innerWidth <= 4096) ? 4 : 5,
    light: 'simple',
    transparent: true,
    mapLandColor: '#1e2225',
    mapSeaColor: '#3391eb',
    mapBorderColor: '#FFF',
    mapBorderWidth: .15,
    mapStyles: '#AE, #AT, #AU, #BE, #BR, #CA, #CH, #CN, #CY, #DE, #EG, #ES, #GB, #GR, #HK, #HU, #HR, #IN, #IT, #JP, #KR, #KW, #LB, #MX, #MY, #NL, #PH, #PL, #PT, #SE, #SG, #TH, #TR, #US { fill: #1e2225bb; }' // fill: #e1f3fd;
    // https://www.iban.com/country-codes --> 2 letter of country codes list
  });

  // collapse cluster on click
  myearth.addEventListener('click', function (event) {
    if (current_cluster && !goto_transition) {
      zoomOut();
    }
  });

  // setup
  myearth.addEventListener("ready", function () {
    // add tooltip overlay (community information tooltip)
    tooltip = this.addOverlay({
      className: 'tooltip',
      visible: true,
      containerScale: 0.2,
      zoomScale: 0,
      depthScale: 0.4
    });

    // add star mesh
    Earth.addMesh(star_mesh);
    Earth.addMesh(circle_mesh);

    // add markers
    for (var i = 0; i < markers.length; i++) {
      const { type, location, clusteredMarkers } = markers[i];
      const scale = 0.1 / zoom_based_rescale_factor;
      let marker;

      if (!clusteredMarkers) { // single marker
        let color;

        if (type === 'diveCenter') {
          color = '#babe82';
        } else if (type === 'premiumDiveCenter') {
          color = '#64947b';
        } else if (type === 'centerOfExcellence') {
          color = 'orange';
        } else {
          color = '#FFCC00';
        }

        marker = myearth.addMarker({
          mesh: "Circle",
          color,
          location,
          scale,
          hotspot: true,
          hotspotRadius: 2.5,
          hotspotHeight: 0.1,
          title: markers[i].title,
          type: markers[i].type,
          poc: markers[i].poc,
          email: markers[i].email,
          link: markers[i].link,
          facebook: markers[i].facebook
        });
      } else { // cluster of markers
        const clusterScale = 0.15 + clusteredMarkers.length * 0.01;
        const cluster = this.addMarker({
          mesh: "Star",
          color: 'gold',
          location,
          scale: clusterScale,
          hotspot: true,
          hotspotRadius: 0.5,
          hotspotHeight: 0.1,
          originalScale: 0.25,
          title: markers[i].title,
          type: markers[i].type,
          poc: markers[i].poc,
          email: markers[i].email,
          link: markers[i].link,
          facebook: markers[i].facebook,
          clusteredMarkers: []
        });

        cluster.addEventListener('click', expandCluster);

        // add clusteredMarkers
        for (var j = 0; j < clusteredMarkers.length; j++) {
          let color;

          if (clusteredMarkers[j].type === 'diveCenter') {
            color = '#babe82';
          } else if (clusteredMarkers[j].type === 'premiumDiveCenter') {
            color = '#64947b';
          } else if (clusteredMarkers[j].type === 'centerOfExcellence') {
            color = 'orange';
          } else {
            color = '#FFCC00';
          }

          marker = myearth.addMarker({
            mesh: "Circle",
            color,
            location,
            scale: 0.1 / zoom_based_rescale_factor,
            hotspot: true,
            hotspotRadius: 2.5,
            hotspotHeight: 0.1,
            visible: false,
            title: clusteredMarkers[j].title,
            type: clusteredMarkers[j].type,
            logo: clusteredMarkers[j].logo,
            poc: clusteredMarkers[j].poc,
            email: clusteredMarkers[j].email,
            link: clusteredMarkers[j].link,
            facebook: clusteredMarkers[j].facebook,
            clusterLocation: location,
            markerLocation: clusteredMarkers[j].location
          });
          
          if (marker.link !== null) {
            marker.addEventListener('click', openLink);
          } else if (marker.facebook !== null) {
            marker.addEventListener('click', openFacebook);
          }
          marker.addEventListener('mouseover', enterMarker);
          marker.addEventListener('mouseout', leaveMarker);
          
          if (
            clusteredMarkers[j].type === 'localCommunity' && document.getElementById('localCommunities').checked ||
            clusteredMarkers[j].type === 'diveCenter' && document.getElementById('diveCenters').checked ||
            clusteredMarkers[j].type === 'premiumDiveCenter' && document.getElementById('premiumDiveCenters').checked ||
            clusteredMarkers[j].type === 'centerOfExcellence' && document.getElementById('centerOfExcellence').checked
          ) {
            cluster.clusteredMarkers.push(marker);
          }
        }
      }

      if (marker.link !== null) {
        marker.addEventListener('click', openLink);
      } else if (marker.facebook !== null) {
        marker.addEventListener('click', openFacebook);
      }
      marker.addEventListener('mouseover', enterMarker);
      marker.addEventListener('mouseout', leaveMarker);
    }
  });
};
var current_cluster, goto_transition;

function expandCluster() {
  // collapse other clusters
  if (current_cluster) {
    collapseCluster();
  }

  // shrink cluster marker
  this.animate('scale', 0.001, { duration: 200 });

  // go to and zoom earth
  myearth.draggable = true;
  goto_transition = true;
  myearth.goTo(this.location, {
    zoom: 2.5,
    duration: 2000,
    easing: 'out-quad',
    complete: function () { goto_transition = false; }
  });

  // show clusteredMarkers
  for (var i = 0; i < this.clusteredMarkers.length; i++) {
    this.clusteredMarkers[i].visible = true;
    this.clusteredMarkers[i].animate('location', this.clusteredMarkers[i].markerLocation, { duration: 400, easing: 'out-quad' });
  }

  current_cluster = this;
  document.body.classList.add('cluster-open');
}

function collapseCluster() {
  if (!current_cluster) return;
  // reveal cluster marker
  current_cluster.animate('scale', current_cluster.originalScale, { duration: 400, easing: 'out-quad' });

  // hide clusteredMarkers
  for (var i = 0; i < current_cluster.clusteredMarkers.length; i++) {
    current_cluster.clusteredMarkers[i].animate(
      'location', current_cluster.clusteredMarkers[i].clusterLocation,
      { duration: 400, easing: 'out-quad', complete: function () { this.visible = true; } }
    );
  }

  current_cluster = false;
  document.body.classList.remove('cluster-open');
  myearth.draggable = true;
}

function zoomOut() {
  collapseCluster();
  myearth.animate(
    'zoom',
    1.2,
    { relativeDuration: 100 }
  );
}

function enterMarker() {
  if (goto_transition) return; // no tooltips during zoom

  // LOGO
  let logo = this.logo;
  if (logo == null) {
    logo = './img/gue-community-stroke-w200.png';
  }
  logo = '<img class="tooltip-logo" src="' + logo + '">';

  // COMMUNITY TITLE
  let community = this.title;
  community = '<span class="label">Community: </span>' + community;

  // COMMUNITY TYPE
  let type = this.type;
  let typeColor;
  if (type == 'localCommunity') {
    typeColor = '#FFCC00';
  } else if (type == 'diveCenter') {
    typeColor = '#babe82';
  } else if (type == 'premiumDiveCenter') {
    typeColor = '#64947b';
  } else if (type == 'centerOfExcellence') {
    typeColor = 'orange';
  }
  type = '<span class="tooltip-community-type" style="background-color:' + typeColor + '">' + type + '</span>';

  // TOOLTIP HEADER
  header = '<header>' + this.title + type + '</header>';

  // TOOLTIP CONTACT
  let poc = this.poc;
  if (poc == null) {
    poc = '';
  } else {
    poc = '<div class="tooltip-line"><span class="label">Contact:</span>' + poc + '</div>';
  }

  // TOOLTIP EMAIL
  let email = this.email;
  if (email == null) {
    email = '';
  } else {
    email = '<div class="tooltip-line"><span class="label">E-mail:</span>' + email + '</div>';
  }

  // TOOLTIP LINK
  let link = this.link;
  let facebook = this.facebook;

  if (link == null) {
    if (facebook == null) {
      link = '';
    } else {
      link = '<div class="tooltip-line"><span class="label">Website:</span>' + facebook + '</div>';
    }
  } else {
    link = '<div class="tooltip-line"><span class="label">Website:</span>' + link + '</div>';
  }

  tooltip.location = this.location;
  tooltip.content = '<div class="tooltip-card">' + logo + '<div>' + header + poc + email + link + '</div>' + '</div>';
  tooltip.element.style.marginTop = '-' + String(this.scale * 0.5 + 0.75) + 'em';
  tooltip.visible = true;
}

function leaveMarker() {
  tooltip.visible = false;
}

function openLink() {
  window.open(this.link);
}

function openFacebook() {
  window.open(this.facebook);
}

// BUILD THE GLOBE
window.onload = function () {
  createEarthJS ();
};

function reloadEarthJS () {
  const myearthContainer = document.getElementById('myearth');
  
  // Function to delete all child elements
  function deleteAllChildElements(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  deleteAllChildElements(myearthContainer);

  // Create the canvas element
  const newCanvasElement = document.createElement('canvas');
  newCanvasElement.width = 1200;
  newCanvasElement.height = 796;
  newCanvasElement.style.display = 'block';
  newCanvasElement.style.width = '1200px';
  newCanvasElement.style.height = '796px';

  // Create the div for the earth overlay
  const earthOverlayDiv = document.createElement('div');
  earthOverlayDiv.classList.add('earth-overlay', 'earth-overlay-left');
  earthOverlayDiv.style.display = 'none';
  earthOverlayDiv.style.zIndex = '1010';

  // Create the tooltip div
  const tooltipDiv = document.createElement('div');
  tooltipDiv.classList.add('tooltip');

  // Append the tooltip div to the earth overlay div
  earthOverlayDiv.appendChild(tooltipDiv);

  // Append the canvas and earth overlay div to the #myearth element
  myearthContainer.appendChild(newCanvasElement);
  myearthContainer.appendChild(earthOverlayDiv);

  createEarthJS ();
}
