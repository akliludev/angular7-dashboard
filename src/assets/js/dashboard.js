$(function () {
    $("#sparkline8").sparkline([79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10], {
        type: "line",
        width: "100%",
        height: "50",
        lineColor: "#9068be",
        fillColor: "rgba(144, 104, 190, 0.2)",
        minSpotColor: "#9068be",
        maxSpotColor: "#9068be",
        highlightLineColor: "rgba(0, 0, 0, 0.2)",
        highlightSpotColor: "#9068be"
    });
    new Chartist.Line('#simple-line-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }, {
            fullWidth: true,
            chartPadding: {
                right: 40
            },
            plugins: [
                Chartist.plugins.tooltip()
            ]
        });

});