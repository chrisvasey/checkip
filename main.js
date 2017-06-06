$.getJSON('http://freegeoip.net/json/?callback=?', function(data) {
	  console.log(JSON.stringify(data, null, 2));
	  $('#users_ip').text(data.ip);
});