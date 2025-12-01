
// Light defaults
Chart.defaults.color = "#222";
Chart.defaults.borderColor = "rgba(0,0,0,0.15)";
Chart.defaults.plugins.legend.labels.boxWidth = 12;

document.addEventListener("DOMContentLoaded", ()=>{
  createCharts();
});

function createCharts(){

// Production
new Chart(document.getElementById("productionChart"),{
 type:'line',
 data:{labels:[2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
       datasets:[{label:"Урожайність, ц/га",data:[43.4,44.2,46.1,44.2,47.6,48.1,51.8,48.8,53.8,51.4],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

// Life
new Chart(document.getElementById("lifeChart"),{
 type:'line',
 data:{labels:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
       datasets:[{label:"Очікувана тривалість життя",data:[81.3,81.3,81.6,81.5,81.9,81.5,81.5,81.8,82.5,82.7],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

// Energy
new Chart(document.getElementById("energyChart"),{
 type:'line',
 data:{labels:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
       datasets:[{label:"Імпортна залежність, %",data:[70.234,76.293,72.241,77.965,75.657,73.875,65.282,66.925,71.274,66.866],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

// Trade
new Chart(document.getElementById("tradeChart"),{
 type:'line',
 data:{labels:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
       datasets:[{label:"Відкритість економіки",data:[80.6,79.5,84.8,86.7,86.8,76.5,85.9,101.4,93.9,91.1],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

// Investment
new Chart(document.getElementById("investmentChart"),{
 type:'line',
 data:{labels:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
       datasets:[{label:"Чистий приріст ПІІ",data:[0.6,3.6,5.0,3.5,4.5,1.8,3.6,5.1,3.9,4.3],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

// Social
new Chart(document.getElementById("socialChart"),{
 type:'line',
 data:{labels:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
       datasets:[{label:"Децильний коефіцієнт",data:[11.91,11.38,11.46,9.89,9.50,9.29,11.21,9.82,11.52,9.96],borderWidth:2,tension:0.3}]},
 options:{responsive:true,maintainAspectRatio:false}
});

}
