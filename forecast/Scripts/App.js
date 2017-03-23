'use strict';
$(document).ready(function () {
    var url = 'https://api.darksky.net/forecast/';
    var apiKey = 'ec97dcd36a75d47eeeaabb306011f9bf';
    var unit = 'si';
    var lati = 59.345237;
    var longi = 18.023431;
    var language = 'sv';

    jQuery.ajax({
        url: url + apiKey + "/" + lati + "," + longi + "?callback=?&units=" + unit + "&lang=" + language,
        type: 'GET',
        dataType: 'jsonp',
        timeout: 3000,
        success: function (data) {
            $('#currentTemp').html(data.currently.temperature.toFixed(0) + '\xB0' + 'C' + '</br>') ;
            $('#summaryToday').html(data.currently.summary);
        },
        error: function () {
            $('.weatherWrapper').html('Latest forecast not available, please check the API key');
            $('.forecastWrapper').hide();
        }
    });
});