// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});
google.charts.load('current', {'packages':['geochart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data1 = new google.visualization.DataTable();
    data1.addColumn('string', 'Partidos');
    data1.addColumn('number', 'Votos');
    data1.addRows([
        ['PP', 7941236],
        ['PSOE', 5443846],
        ['PODEMOS', 3227123],
        ['CIUDADANOS', 3141570],
        ['ECP', 853102],
        ['OTROS', 3779358]
    ]);

    var data11 = new google.visualization.DataTable();
    data11.addColumn('string', 'Partidos');
    data11.addColumn('number', 'Votos');
    data11.addRows([
        ['PP', 5443846],
        ['PSOE', 7941236],
        ['PODEMOS', 853102],
        ['CIUDADANOS', 3779358],
        ['ECP', 3227123],
        ['OTROS', 3141570]
    ]);

    // Set chart options
    var options1 = {'title':'Elecciones generales 2016',
        'width':400,
        'height':300,
        animation: {
            duration: 1000,
            startup: true
        },
    };
    // Instantiate and draw our chart, passing in some options.
    var chart1 = new google.visualization.PieChart(document.getElementById('chart_div'));
    var chart11 = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart1.draw(data1, options1);
    var flag = 0;
    function cambiarDatos() {
        if (flag == 0){
            chart11.draw(data11, options1);
            flag = 1;
        }
        else if (flag== 1){
            chart1.draw(data1, options1);
            flag = 0;
        }

    }
    setInterval(function() {cambiarDatos()}, 2000);

//////////////////////////////////////
    var data2 = google.visualization.arrayToDataTable([
        ['Partidos', 'Votos'],
        ['PP', 7941236 ],
        ['PSOE', 5443846],
        ['PODEMOS', 3227123],
        ['CIUDADANOS', 3141570],
        ['ECP', 853102],
        ['OTROS', 3779358]
    ]);

    var options2 = {
        chart: {
            title: 'Elecciones generales 2016',
        }
    };

    var chart2 = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart2.draw(data2, google.charts.Bar.convertOptions(options2));
    ////////////////////////////////////////
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    var data3 = google.visualization.arrayToDataTable([
        ['Pais', 'Visitas'],
        ['France', 82600000],
        ['United States', 75600000],
        ['Spain', 75600000 ],
        ['China', 59300000],
        ['Italy', 52400000],
        ['United Kingdom', 35800000],
        ['Germany', 35600000],
        ['Mexico', 35000000],
        ['Thailand', 32600000],
        ['Turkey', 29000000]
    ]);

    var options3 = {};

    var chart3 = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart3.draw(data3, options3);

}