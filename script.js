
var canvas = document.getElementById("canvas");

// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function(chart, options, el) {
    chart.ctx.globalCompositeOperation = 'multiply';
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.globalCompositeOperation = 'source-over';
  },
};
//Ingresamos de manera manual los datos del archivo .JSON
var config = {
    type: 'bar',
    data: {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [
          {
            label: 'Spending - Last 7 days',
            data: [17.45,34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            fill: true,
            pointBackgroundColor: 'transparent',
            backgroundColor:'hsl(10, 79%, 65%)',
            pointBackgroundColor: 'hsl(25, 47%, 15%)',
            pointBorderColor: 'hsl(186, 34%, 60%)',
            pointBorderWidth: 3,
            pointHoverBorderColor: 'hsl(186, 34%, 60%)',
            pointHoverBorderWidth: 0,
            lineTension: 2,
          }
        ]
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    options: {
      responsive: true,
      elements: { 
        point: {
          radius: 5,
          hitRadius: 5, 
          hoverRadius: 5 
        } 
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: 'hsl(25, 47%, 15%)',
        displayColors: false, //desactiva el color del mensaje hover
        bodyFontSize: 12,
        callbacks: {
          label: function(tooltipItems, data) { 
            return '$'+tooltipItems.yLabel;
          }
        }
      },
      scales: {
        xAxes: [{
          display: true,
          
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
          },
        }]
      }
    },
    plugins: [multiply],
};

window.chart = new Chart(canvas, config);