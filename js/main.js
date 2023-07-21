window.addEventListener( "earthjsload", function() {
  let zoom_based_rescale_factor = 10;
  myearth = new Earth( document.getElementById('myearth'), {
    location: {
      lat: 47.5,
      lng: 10
    },
    zoom: 1.2, // 1.15
    zoomMin: 1, // 1
    zoomMax: 2.6, // 1.8
    quality: ( window.innerWidth <= 4096 ) ? 4 : 5,
    light: 'simple',
    
    transparent: true,
    mapLandColor : '#1e2225', //#7193cb
    mapSeaColor : '#3391eb', // rgba(0,51,153,0.8)
    mapBorderColor : '#FFF', // rgba(0,51,153,1)
    mapBorderWidth : .15, // 0.25,
    mapStyles : '#AE, #AT, #AU, #BE, #BR, #CA, #CH, #CN, #CY, #DE, #EG, #ES, #GB, #HK, #HU, #HR, #IT, #KR, #MX, #MY, #NL, #PH, #PT, #SG, #TH, #TR, #US { fill: #1e2225bb; }' // fill: #e1f3fd;
    // https://www.iban.com/country-codes --> 2 letter of country codes list
  });

  // collapse cluster on click
  myearth.addEventListener( 'click', function( event ) {
    if ( current_cluster && ! goto_transition ) {
      zoomOut();
    }
  });

  // setup
  myearth.addEventListener( "ready", function() {
  
    // add tooltip overlay (community information tooltip)
    tooltip = this.addOverlay( {
      className : 'tooltip',
      visible : true,
      containerScale : 0.2,
      zoomScale : 0,
      depthScale : 0.4
    });

    // add star mesh
    Earth.addMesh( star_mesh );
    Earth.addMesh( circle_mesh );

    // add markers
    for (var i = 0; i < markers.length; i++) {
      const { type, location, clusteredMarkers } = markers[i];
      const scale = 0.1 / zoom_based_rescale_factor;
      let marker;
    
      if (!clusteredMarkers) { // single marker
        const color = type === 'diveCenter' ? '#babe82' : type === 'premiumDiveCenter' ? '#64947b' : '#FFCC00';
    
        marker = myearth.addMarker({
          mesh: "Circle",
          color,
          location,
          scale,
          hotspot: true,
          hotspotRadius: 2.5,
          hotspotHeight: 0.1,
          title: markers[i].title,
          poc: markers[i].poc,
          email: markers[i].email,
          link: markers[i].link
        });
      } else { // cluster of markers
        const clusterScale = 0.1 + clusteredMarkers.length * 0.04;
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
          poc: markers[i].poc,
          email: markers[i].email,
          link: markers[i].link,
          clusteredMarkers: []
        });
    
        cluster.addEventListener('click', expandCluster);
    
        // add clusteredMarkers
        for (var j = 0; j < clusteredMarkers.length; j++) {
          const color = clusteredMarkers[j].type === 'diveCenter' ? '#babe82' : clusteredMarkers[j].type === 'premiumDiveCenter' ? '#64947b' : '#FFCC00';
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
            logo: clusteredMarkers[j].logo,
            poc: clusteredMarkers[j].poc,
            email: clusteredMarkers[j].email,
            link: clusteredMarkers[j].link,
            clusterLocation: location,
            markerLocation: clusteredMarkers[j].location
          });
    
          marker.addEventListener('click', openLink);
          marker.addEventListener('mouseover', enterMarker);
          marker.addEventListener('mouseout', leaveMarker);
    
          cluster.clusteredMarkers.push(marker);
        }
      }
    
      marker.addEventListener('click', openLink);
      marker.addEventListener('mouseover', enterMarker);
      marker.addEventListener('mouseout', leaveMarker);
    }
  });
});

var current_cluster, goto_transition;

function expandCluster() {
  // collapse other clusters
  if ( current_cluster ) {
    collapseCluster();
  }

  // shrink cluster marker
  this.animate( 'scale', 0.001, { duration: 200 } );

  // go to and zoom earth
  myearth.draggable = true; // false
  goto_transition = true;
  myearth.goTo( this.location, { 
    zoom: 2.5, // 1.8 (min: 1, max: 2.6)
    duration: 2000, // 400 (zoom animation speed)
    easing : 'out-quad', 
    complete: function () { goto_transition = false; } 
  } );
  
  // show clusteredMarkers
  for ( var i=0; i < this.clusteredMarkers.length; i++ ) {
    this.clusteredMarkers[i].visible = true;
    this.clusteredMarkers[i].animate( 'location', this.clusteredMarkers[i].markerLocation, { duration: 400, easing : 'out-quad' } );
  }

  current_cluster = this;
  document.body.classList.add('cluster-open');
}

function collapseCluster() {
  if ( ! current_cluster ) return;
  // reveal cluster marker
  current_cluster.animate( 'scale', current_cluster.originalScale, { duration: 400, easing : 'out-quad' } );
  
  // hide clusteredMarkers
  for ( var i=0; i < current_cluster.clusteredMarkers.length; i++ ) {
    current_cluster.clusteredMarkers[i].animate(
      'location', current_cluster.clusteredMarkers[i].clusterLocation,
      { duration: 400, easing : 'out-quad', complete: function() { this.visible = true; } }
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
  if ( goto_transition ) return; // no tooltips during zoom
  tooltip.location = this.location;
  tooltip.content = 'Community: ' + this.title + '\n' + 'Contact: ' + this.poc + '\n' + 'Email: ' + this.email + '\n' + 'Website: ' + this.link;
  tooltip.element.style.marginTop = '-' + String(this.scale*0.5 + 0.75) + 'em';
  tooltip.visible = true;
}

function leaveMarker() {
  tooltip.visible = false;
}

function openLink() {
  window.open( this.link );
}
