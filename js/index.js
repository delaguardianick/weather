$(function () { 
    console.log('jqeury imporeted');
    url = window.location['href'].split('/');
    url = url.slice(0,-1).join('/') + '/src/get_weather_data.php'
    $(document).ready(function () {
        //GET REUQEST TO PHP
        $.get(url + '?type=current', function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
    });
 });