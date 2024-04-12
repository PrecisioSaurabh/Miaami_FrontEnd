import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import addCircleIcon from '../../assets/addCircleIcon.png';

const App = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'name1',
        data: 44
      },
      {
        name: 'name2',
        data: 55
      },
      {
        name: 'name3',
        data: 41
      },
      {
        name: 'name4',
        data: 17
      },
      {
        name: 'name5',
        data: 15
      }
    ],
    options: {
      chart: {
        width: 400,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: '85%'
          }
        }
      },
      stroke: {
        width: 0 
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'] 
      },
      legend: {
 
        align: 'center',
        verticalAlign: 'bottom',
        offsetY: 0,
        formatter: function(val, opts) {
          const seriesData = opts.w.globals.series[opts.seriesIndex];
          const seriesName = chartState.series[opts.seriesIndex].name;
          return seriesName + " - " + seriesData + "%";
        }
      },
      title: {
        text: 'Gradient Donut with custom Start-angle'
      },
    }
  });

  return (
    <div className="mt-8 bg-white rounded-lg w-1/3 h-80">
      <div className="mb-3 justify-between gap-4 sm:flex bg-violet-100">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Assets
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <img src={addCircleIcon} alt="AddCircleIcon" />
           </div>
        </div>
      </div>
      <div>
        <ReactApexChart options={chartState.options} series={chartState.series.map(serie => serie.data)} type="donut" width={370}  height={500}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default App;





