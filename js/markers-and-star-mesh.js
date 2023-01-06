
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';
location_marker = '../img/Location-marker.svg'

// marker data

markers = [
  // Turkiye
  {
    location: { lat: 39.206091750600976, lng: 35.257515693797146 },
    clusteredMarkers: [
      {
        title: 'GUE Turkey',
        logo: '',
        poc: 'Nevcan Uludaş',
        email: 'nev@gue.com',
        link: 'http://gueturkey.com/',
        location: { lat: 41.015137, lng: 28.979530 }
      },
      {
        title: 'GUE Turkey',
        logo: '',
        poc: 'Fatih Albayrak',
        email: 'fatih@gueturkey.com',
        link: 'http://gueturkey.com/',
        location: { lat: 37.769271305757876, lng: 30.559353824230723 }
      }
    ]
  },

  // Germany
  {
    location: { lat: 51.11751211557289, lng: 10.252610481793429 },
    clusteredMarkers: [
      {
        title: 'Murner See',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 49.35089, lng: 12.20331 }
      },
      {
        title: 'Hamburg',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 53.55108, lng: 9.99368 }
      },
      {
        title: 'Hunsfels Tauchen',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 49.94794, lng: 7.76782 }
      },
      {
        title: 'Berlin',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 52.52, lng: 13.40495 }
      },
      {
        title: 'Wuppertal',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 51.25621, lng: 7.15076 }
      },
      {
        title: 'Dresden',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 51.0504, lng: 13.73726 }
      },
      {
        title: 'Aachen',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 50.77534, lng: 6.08388 }
      },
      {
        title: 'Köln',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 50.93753, lng: 6.96027 }
      },
      {
        title: 'Bodensee',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 47.63633, lng: 9.38924 }
      }
    ]
  },

  // Italy
  {
    title: 'Rom',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 41.90278, lng: 12.49636 }
  },

  // Austria
  {
    title: 'Wien',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 48.20817, lng: 16.37381 }
  },

  // Hungary
  {
    title: 'Budapest',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 47.49791, lng: 19.04023 }
  },

  // Portugal
  {
    title: 'Lissabon',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 38.72225, lng: -9.13933 }
  },
  
  // Switzerland
  {
    location: { lat: 46.77762789947781, lng: 7.850266576996056 },
    clusteredMarkers: [
      {
        title: 'Zürich',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 47.37688, lng: 8.54169 }
      },
      {
        title: 'Locarno',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 46.16699, lng: 8.79426 }
      }
    ]
  },
  
  // Spain
  {
    title: 'Valencia',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 39.4699, lng: -0.37628 }
  },

  // United Kingdom
  {
    location: { lat: 54.98219189283883, lng: -2.7080122916294305 },
    clusteredMarkers: [
      {
        title: 'London',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 51.50721, lng: -0.12758 }
      },
      {
        title: 'Glasgow',
        logo: '',
        poc: '',
        email: '',
        link: '',
        location: { lat: 55.86423, lng: -4.2518 }
      }
    ]
  },

  // Premium Dive Centers
  {
    type: 'premiumDiveCenter',
    title: 'Base1 Sardinia [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@baseone.it',
    link: 'https://www.baseone.it',
    location: { lat: 40.2841987687179, lng: 9.636964711283438 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Deep Dive Dubai [Premium Dive Center]',
    logo: '',
    poc: 'Dimitris Fifts',
    email: 'info@deepdivedubai.com',
    link: 'https://www.deepdivedubai.com',
    location: { lat: 25.127855026793533, lng: 55.29512669746564 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Deepstop [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'shop@deepstop.de',
    link: 'https://www.deepstop.de/en/',
    location: { lat: 49.40237470514091, lng: 8.55816781155137 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Dive Centre Bondi [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@divebondi.com.au',
    link: 'https://www.divebondi.com.au',
    location: { lat: -33.893597517625224, lng: 151.26292766902677 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Duikcentrum de Aalscholvers [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@aalscholvers.nl',
    link: 'http://www.aalscholvers.nl/',
    location: { lat: 51.568901673548815, lng: 5.086470269293292 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Eight Diving [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@8diving.com',
    link: 'https://www.8diving.com/',
    location: { lat: 47.401578845502456, lng: -122.32485663084049 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Extreme Exposure [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@extreme-exposure.com',
    link: 'http://www.extreme-exposure.com/',
    location: { lat: 29.825308613961422, lng: -82.59779848895784 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Living Oceans [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@livingoceans.com.sg',
    link: 'http://www.livingoceans.com.sg/',
    location: { lat: 1.2990235598463238, lng: 103.85199115497402 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Living Oceans Malaysia [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@livingoceans.com.my',
    link: 'http://www.livingoceans.com.my/',
    location: { lat: 3.1856309677566883, lng: 101.59923123989562 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Plongée Nautilus [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@plongeenautilus.com',
    link: 'http://www.plongeenautilus.com/',
    location: { lat: 48.64098748695309, lng: -71.45614147840811 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Portofino Divers [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@portofinodivers.com',
    link: 'https://portofinodivers.com/',
    location: { lat: 44.329415874465134, lng: 9.213241826738368 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Qiandaohu Diving Center [Premium Dive Center]',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 29.59806716556093, lng: 119.00611419026711 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Scuba Academie [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@scuba-academie.nl',
    link: 'http://www.scuba-academie.nl/',
    location: { lat: 52.225409008498744, lng: 4.926427111644085 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Silent Bubbles [Premium Dive Center]',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 52.47608902406759, lng: 5.465696612119041 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Tec Diving [Premium Dive Center]',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 51.682773821954854, lng: -0.08514484808772843 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Tech Korea [Premium Dive Center]',
    logo: '',
    poc: 'Kyungsoo Kim',
    email: 'dive.tech.korea@gmail.com',
    link: 'https://divetechkorea.com/',
    location: { lat: 37.39286168722462, lng: 126.64571202654295 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Third Dimension Diving [Premium Dive Center]',
    logo: '',
    poc: 'Kelvin Davidson',
    email: 'kelvin@thirddimensiondiving.com',
    link: 'https://www.thirddimensiondiving.com/',
    location: { lat: 20.214650382388147, lng: -87.4596731602703 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Third Dimension Diving SEA [Premium Dive Center]',
    logo: '',
    poc: 'Andreas Baumgaertner',
    email: 'sales@thirddimensiondivingsea.com',
    link: 'https://thirddimensiondivingsea.com/',
    location: { lat: 22.309219702321766, lng: 114.22612915068594 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Zen Dive Co. [Premium Dive Center]',
    logo: '',
    poc: 'Karim Hamza',
    email: 'support@zendive.co',
    link: 'https://www.zendive.co/',
    location: { lat: 34.18064624239513, lng: -118.15938931585961 }
  },
  {
    type: 'premiumDiveCenter',
    title: 'Zero Gravity [Premium Dive Center]',
    logo: '',
    poc: '',
    email: 'info@zerogravity.com.mx',
    link: 'https://zerogravity.com.mx/',
    location: { lat: 20.505538421452883, lng: -87.23039000722034 }
  },

  // Dive Centers
  {
    type: 'diveCenter',
    title: 'Acuatic Tulum Dive Center',
    logo: '',
    poc: '',
    email: 'booking@acuatictulum.com',
    link: 'https://www.acuatictulum.com',
    location: { lat: 20.207948634127778, lng: -87.45135014678196 }
  },
  {
    type: 'diveCenter',
    title: 'Buddy Dive Resort',
    logo: '',
    poc: '',
    email: 'info@buddydive.com',
    link: 'https://buddydive.com',
    location: { lat: 12.171044257369875, lng: -68.28723146034903 }
  },
  {
    type: 'diveCenter',
    title: 'Dive Alaska',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Diveolution',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Faszination-Tauchsport',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Freestyle Divers',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Hollywood Divers',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Islas Hormigas',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Kasai Village Dive Academy',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'KrakenDive',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Krnicadive',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Moby Tek Dive Centre',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Ocean Blue Wave',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Red Sea Explorers',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Scuba Adventures',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Scuba Seekers',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Tauchen und Freizeit',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Tauchservice Münster',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Tech Asia',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  },
  {
    type: 'diveCenter',
    title: 'Emperor Divers',
    logo: '',
    poc: '',
    email: '',
    link: '',
    location: { lat: 25.12, lng: 55.29 }
  }
];