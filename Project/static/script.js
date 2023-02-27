// position of the title
const pos = 'center';

// This variable is used to display the frame before an option is selected
var options = {

    series: [{ name: "Stock Prices",data: []}],
    chart: {
        height: 500,
        width: 1000,
        type: 'line',
        zoom: {enabled: false}
            },
    dataLabels: {enabled: false},
    stroke: {curve: 'straight'},
    title: {
            text: 'Lumber Futures Stock Price',
            align: pos,
            style: {fontSize: '24px'}
             },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
             },
          },
    xaxis: {categories: [],}
                
             };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// stk will store the json data
let stk = '';

// Fetching the stock prices data
fetch('/static/data.json')
    .then(response => response.json())
    .then(data => {
                console.log(data);
                stk = data;
        })
// This fuction is used to draw an interactive plot in the webpage based on the options selected in the drapdown
function changeSelect(stk) 

{
    // This variable stores the option selected by the user from the dropdown
    const typeOfChart = document.getElementById('typeOfChart').value;

    const results = stk;

    // delaring an empty list which does a look up on the json and stores the data
    dataToShow = []

    // conditional statement to update the chart with values bbased upon user selection
    if(typeOfChart === 'Open') 
    {
        dataToShow = results.map(row=> row.Open)
    } 
    else if(typeOfChart === 'Low') 
    {
        dataToShow = results.map(row=> row.Low)
    } 
    else if(typeOfChart === 'High') 
    {
        dataToShow = results.map(row=> row.High)
    } 
    else if(typeOfChart === 'Close') 
    {
        dataToShow = results.map(row=> row.Close)
    } 
    else if(typeOfChart === 'Adj_Close') {
    dataToShow = results.map(row=> row.Adj_Close)
    }

// This variable is used to display the frame after an option is selected
var newOptions = {
    
    series: [{
        name: "Stock Prices",
        data: dataToShow
      }],

    chart: {
        height: 500,
        width: 1000,
        type: 'line',
        zoom: {enabled: false}
            },
    dataLabels: {enabled: false},
    stroke: {curve: 'straight'},
    title: {
        text: 'Lumber Futures Stock Price',
        align: pos,
        style: {fontSize: '24px'}
      },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
      },
    xaxis: {categories: results.map(row=> row.Date),}
            };

      chart.updateOptions (newOptions, true, true, true)
    }

