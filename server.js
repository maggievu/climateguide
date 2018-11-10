const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5000;
const fs = require('fs');

app.listen(port, () => console.log(`Listening on port ${port}`));

const urlSource= "https://climate.nasa.gov/system/internal_resources/details/original/647_Global_Temperature_Data_File.txt";

let dataArray1 = [];
let dataArray2 = [];

request.get(urlSource, (error, respond, body) => {
    if (!error && respond.statusCode == 200) {

        // loop through the lines of body of txt file then push elements of lines to dataArray
        for (let line of body.split("\n")) {
            dataArray1.push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[1]
            });
            dataArray2.push({
                "x": line.split("\t")[0],
                "y": line.split("\t")[2].replace("\r", "")
            });
        }
    }

    // create 2 new JSON files so that react charts can use
    fs.writeFile('client/src/components/charts/ZoomScatter/dataSource/dataset1.json', JSON.stringify(dataArray1), 'utf8');
    fs.writeFile('client/src/components/charts/ZoomScatter/dataSource/dataset2.json', JSON.stringify(dataArray2), 'utf8');
});

// request.get(url2, (error, res, body) => {
//     if (!error && res.statusCode == 200) {
//
//         fs.writeFile('client/src/components/datatest.json', body, 'utf8');
//     }
// });
