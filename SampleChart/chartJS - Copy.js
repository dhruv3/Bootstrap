$(document).ready(
    function(){
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled": true,
            "dataDateFormat": "M*-D*-YYYY",
            "valueAxes": [
                {
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                }
            ],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [
                {
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff"
                    },
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": "value",
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }
            ],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset": 30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "limitToGraph": "g1",
                "valueLineAlpha": 0.2,
                "valueZoomable": true
            },
            "valueScrollbar": {
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 10
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": [
                {
                    "date": "4-24-2017",
                    "value": 47.8
                },
                {
                    "date": "4-21-2017",
                    "value": 47.52
                },
                {
                    "date": "4-20-2017",
                    "value": 47.67
                },
                {
                    "date": "4-19-2017",
                    "value": 47
                },
                {
                    "date": "4-18-2017",
                    "value": 47.56
                },
                {
                    "date": "4-17-2017",
                    "value": 47.39
                },
                {
                    "date": "4-13-2017",
                    "value": 46.9
                },
                {
                    "date": "4-12-2017",
                    "value": 46.83
                },
                {
                    "date": "4-11-2017",
                    "value": 46.79
                },
                {
                    "date": "4-10-2017",
                    "value": 47.21
                },
                {
                    "date": "4-7-2017",
                    "value": 46.44
                },
                {
                    "date": "4-06-2017",
                    "value": 46.28
                },
                {
                    "date": "4-05-2017",
                    "value": 46.38
                },
                {
                    "date": "4-04-2017",
                    "value": 46.23
                },
                {
                    "date": "4-03-2017",
                    "value": 46.43
                },
                {
                    "date": "3-31-2017",
                    "value": 46.41
                },
                {
                    "date": "3-30-2017",
                    "value": 46.62
                },
                {
                    "date": "3-29-2017",
                    "value": 46.78
                },
                {
                    "date": "3-28-2017",
                    "value": 46.57
                }
            ]
        });

        //chart.addListener("rendered", zoomChart);

        //zoomChart();

        function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length , chart.dataProvider.length );
        }
    }
)