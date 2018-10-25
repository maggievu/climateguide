<?php

/* Include the ../src/fusioncharts.php file that contains functions to embed the charts.*/
include("fusioncharts.php");

ini_set('max_execution_time', '0');
$url = 'https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt';

$category = '"';
$dataset1 = '"';
$dataset2 = '"';

$temps = file($url);
foreach ($temps as $i => $line) {
    $temp = explode("\t", $line);
    if ($i < count($temps)-1) {
        $category = $category . $temp[0] . ",";
        $dataset1 = $dataset1 . $temp[1] . ",";
        $dataset2 = $dataset2 . floatval($temp[2]) . ",";
    } else {
        $category = $category . $temp[0] . '"';
        $dataset1 = $dataset1 . $temp[1] . '"';
        $dataset2 = $dataset2 . floatval($temp[2]) . '"';
    }

}

// echo ($category) . "<br>";
// echo ($dataset1) . "<br>";
// echo ($dataset2);

$columnChart = new FusionCharts('zoomline', 'ex1', '100%', '400', 'zoomline', 'json', '
{
    "chart": {
        "caption": "Global Surface Temperature",
        "alignCaptionWithCanvas": false,
        "subcaption": "Click & drag on the plot area to zoom & then scroll",
        "yaxisname": "Temperature Anomaly (C)",
        "yAxisMinValue": -0.5,
        "xaxisname": "Year",
        "forceaxislimits": "1",
        "pixelsperpoint": "0",
        "pixelsperlabel": "30",
        "compactdatamode": "1",
        "dataseparator": ",",
        "theme": "candy"
    },
    "categories": [
        {
            "category": ' . $category . '
        }
    ],
    "dataset": [
        {
            "seriesname": "Annual Mean",
            "data": ' . $dataset1 . ',
            "dashed": true
        },
        {
            "seriesname": "Lowess smoothing",
            "data": ' . $dataset2 . '
        }
    ]
}');

$columnChart -> render();

?>
