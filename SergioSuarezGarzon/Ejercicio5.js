google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(graficoColumnas);

function graficoColumnas() {
    var data = new google.visualization.arrayToDataTable([
        ["Año", 'Poblacion', { role: 'style' }],
        ["2011", 1452, 'fill-opacity:0.1;fill-color:brown'],
        ["2012", 2360, 'fill-opacity:0.9,fill-color:black'],
        ["2013", 4021, 'fill-opacity:0.4;fill-color:yellow'],
        ["2014", 1300, 'fill-opacity:0.3;fill-color:pink']
    ]);
    var options = {
        title: 'Evolución de la población de mi pueblo',
        backgroundColor: "grey",
        width: 500,
        height:500,
        animation: {
            duration: 6000,
            easing: 'out',
            startup: true
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('grafico'));
    chart.draw(data, options);
};