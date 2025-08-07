function initMap() {

	var gurugram = {
		info: '<strong>GridSquare Ceilings</strong><br>\
					Gurugram, Haryana<br>\
					',
		lat: 28.4613148,
		long: 77.0151508
	};

	var newdelhi = {
		info: '<strong>GridSquare Ceilings</strong><br>\
					New Delhi<br>\
					',
		lat: 28.6914875,
		long: 77.150779
	};

	var rajasthan = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Jodhpur, Rajasthan<br>\
					',
		lat: 26.2255939,
		long: 72.9575582
	};
		var bihar = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Patna, Bihar<br>\
					',
		lat: 25.6057423,
		long: 85.0738407
	};
	
	var noida = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Sarfabad, Noida, Uttar Pradesh<br>\
					',
		lat: 28.5861657,
		long: 77.3786226
	};
	
	var punjab = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Chandigarh, Punjab<br>\
					',
		lat: 30.741482,
		long: 76.768066
	};
	var bangalore = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Bangalore, Karnataka<br>\
					',
		lat: 12.972442,
		long: 77.580643
	};
	var raipur = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Raipur, Chhattisgarh<br>\
					',
		lat: 81.5962147,
		long: 21.2376284
	};
	var guwahati = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Guwahati, Assam<br>\
					',
		lat: 26.148043,
		long: 91.731377
	};
	var shillong = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Shillong, Meghalaya<br>\
					',
		lat: 91.8932455,
		long: 25.5787806
	};
	var agartala = {
		info: '<strong>GridSquare Ceilings</strong><br>\r\
					Agartala, Tripura<br>\
					',
		lat: 23.745127,
		long: 91.746826
	};

	var locations = [
      [gurugram.info, gurugram.lat, gurugram.long, 0],
      [newdelhi.info, newdelhi.lat, newdelhi.long, 1],
      [rajasthan.info, rajasthan.lat, rajasthan.long, 2],
	  [bihar.info, bihar.lat, bihar.long, 3],
	   [noida.info, noida.lat, noida.long, 4],
		[punjab.info, punjab.lat, punjab.long, 5],
		[bangalore.info, bangalore.lat, bangalore.long, 6],
		[raipur.info, raipur.lat, raipur.long, 7],
		[guwahati.info, guwahati.lat, guwahati.long, 8],
		[shillong.info, shillong.lat, shillong.long, 9],
		[agartala.info, agartala.lat, agartala.long, 9],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(28.6144691, 77.1971935),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]), 
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
