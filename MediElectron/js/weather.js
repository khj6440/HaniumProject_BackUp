const DATA_KEY = "ok5U7zvwJ2BXvndun5rYy%2BaKAKoWXLE0XXQAU5hAM7AWUimTgWQsEbsPf%2FOzPeegE3jn6iae6On07VQuTW8ZZA%3D%3D";

window.$ = window.jQuery = require('jquery');

//User location
$.getJSON('http://ip-api.com/json', function(data){
    var lat = data.lat;
    var lon = data.lon;
    var units = "metric";
    console.log(data);
    $("#city").html(data.city + ", " + data.country)
    $.ajaxSetup({
        headers : {
          'Authorization' : 'KakaoAK d8d67d3d69ab7f44bc09d1ecf85da1f8'
        }
    });
    $.getJSON(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`,function(data){
        console.log(data);
        var code = data.documents[1].code;
        var region = data.documents[1].region_3depth_name;
        $("#region").html("Location : " + data.documents[1].region_3depth_name);
        $.getJSON(`https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${lon}&y=${lat}&input_coord=WGS84&output_coord=TM`,function(data){
            var x =data.documents[0].x;
            var y =data.documents[0].y;
            $.ajaxSetup({
                headers : null
            });
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + units + '&APPID=e95d958a11128b11ad3eb0fa101dae38', function(json){            console.log(json);
                        $("#temperature-celcius").html("Temperature : "+json.main.temp + ' C&deg');
                        $("#temperature-farenheit").html((json.main.temp * 1,8 + 32) + ' F&deg');
                        $("#humidity").html("Humidity : " + json.main.humidity + ' %');
                        $("#overall").html("Overall" + json.weather[0].main);
                        $("#icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png"</img>');     
                    });

        })               
    })      
});
