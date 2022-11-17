
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [
  // Turkiye
  {
    location: { lat: 39.206091750600976, lng: 35.257515693797146 },
    clusteredMarkers : [
      {
        title : 'GUE Turkey',
        logo: '',
        manager: 'Nevcan Uludaş',
        email:'nev@gue.com',
        link : 'http://gueturkey.com/',
        location: { lat: 41.015137, lng: 28.979530 }
      },
      {
        title : 'GUE Turkey',
        logo: '',
        manager: 'Nevcan Uludaş',
        email:'nev@gue.com',
        link : 'http://gueturkey.com/',
        location: { lat: 37.769271305757876, lng: 30.559353824230723 }
      }
    ]
  },

  // Germany
  {
    location: { lat: 51.11751211557289, lng: 10.252610481793429 },
    clusteredMarkers : [
      {
        title : 'Murner See',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 49.35089, lng: 12.20331 }
      },
      {
        title : 'Hamburg',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 53.55108, lng: 9.99368 }
      },
      {
        title : 'Hunsfels Tauchen',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 49.94794, lng: 7.76782 }
      },
      {
        title : 'Berlin',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 52.52, lng: 13.40495 }
      },
      {
        title : 'Wuppertal',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 51.25621, lng: 7.15076 }
      },
      {
        title : 'Dresden',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 51.0504, lng: 13.73726 }
      },
      {
        title : 'Aachen',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 50.77534, lng: 6.08388 }
      },
      {
        title : 'Köln',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 50.93753, lng: 6.96027 }
      },
      {
        title : 'Bodensee',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 47.63633, lng: 9.38924 }
      }
    ]
  },

  // Italy
  {
    title : 'Rom',
    logo: '',
    manager: '',
    email:'',
    link : '',
    location: { lat: 41.90278, lng: 12.49636 }
  },

  // Austria
  {
    title : 'Wien',
    logo: '',
    manager: '',
    email:'',
    link : '',
    location: { lat: 48.20817, lng: 16.37381 }
  },

  // Hungary
  {
    title : 'Budapest',
    logo: '',
    manager: '',
    email:'',
    link : '',
    location: { lat: 47.49791, lng: 19.04023 }
  },

  // Portugal
  {
    title : 'Lissabon',
    logo: '',
    manager: '',
    email:'',
    link : '',
    location: { lat: 38.72225, lng: -9.13933 }
  },
  
  // Switzerland
  {
    location: { lat: 46.77762789947781, lng: 7.850266576996056 },
    clusteredMarkers : [
      {
        title : 'Zürich',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 47.37688, lng: 8.54169 }
      },
      {
        title : 'Locarno',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 46.16699, lng: 8.79426 }
      }
    ]
  },
  
  // Spain
  {
    title : 'Valencia',
    logo: '',
    manager: '',
    email:'',
    link : '',
    location: { lat: 39.4699, lng: -0.37628 }
  },

  // United Kingdom
  {
    location: { lat: 54.98219189283883, lng: -2.7080122916294305 },
    clusteredMarkers : [
      {
        title : 'London',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 51.50721, lng: -0.12758 }
      },
      {
        title : 'Glasgow',
        logo: '',
        manager: '',
        email:'',
        link : '',
        location: { lat: 55.86423, lng: -4.2518 }
      }
    ]
  }

];