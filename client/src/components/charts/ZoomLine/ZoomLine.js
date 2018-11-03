//https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt
import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomline';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

import dataCategories from './dataSource/categories.json';
import dataChart from './dataSource/chart2.json';
import dataSet1 from './dataSource/dataset1.json';
import dataSet2 from './dataSource/dataset2.json';

// ReactFusioncharts.fcRoot(FusionCharts, Chart, CandyTheme);
Chart(FusionCharts);

const dataSource = {
    "chart": dataChart,
    "categories": [dataCategories],
    "dataset": [dataSet1, dataSet2]

};

class ZoomLine extends Component {
   render() {
      return (
      <ReactFusioncharts
         type = "zoomline"
         width = '100%'
         height = '40%'
         dataFormat = "json"
         dataSource = {dataSource} />
      );
   }
}

export default ZoomLine
