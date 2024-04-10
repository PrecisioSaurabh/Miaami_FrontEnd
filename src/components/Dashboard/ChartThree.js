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
            size: '85%' // Adjust this value to reduce the width of the ring
          }
        }
      },
      stroke: {
        width: 0 // Set to 0 to remove the stroke or set to a small value to adjust the thickness
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
    <div className="ml-8 mt-8 bg-white rounded-lg w-1/3">
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






// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import addCircleIcon from '../../assets/addCircleIcon.png';

// const options = {
//   chart: {
//     fontFamily: 'Satoshi, sans-serif',
//     type: 'donut',
//   },
//   colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
//   labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
//   legend: {
//     show: false,
//     position: 'bottom',
//   },
//   plotOptions: {
//     pie: {
//       donut: {
//         size: '65%',
//         background: 'transparent',
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   responsive: [
//     {
//       breakpoint: 2600,
//       options: {
//         chart: {
//           width: 380,
//         },
//       },
//     },
//     {
//       breakpoint: 640,
//       options: {
//         chart: {
//           width: 200,
//         },
//       },
//     },
//   ],
// };

// const ChartThree = () => {
//   const [series, setSeries] = useState([65, 34, 12, 56]);

//   const handleReset = () => {
//     setSeries([65, 34, 12, 56]);
//   };

//   return (
//     <div className="ml-8 mt-8 bg-white rounded-lg">
      // <div className="mb-3 justify-between gap-4 sm:flex bg-violet-100">
      //   <div>
      //     <h5 className="text-xl font-semibold text-black dark:text-white">
      //       Assets
      //     </h5>
      //   </div>
      //   <div>
      //     <div className="relative z-20 inline-block">
      //       <img src={addCircleIcon} alt="AddCircleIcon" />
      //      </div>
      //   </div>
      // </div>

//       <div className="mb-2 flex">
//         <div id="chartThree" className="ml-0 flex justify-center">
//           <ReactApexChart
//             options={options}
//             series={series}
//             type="donut"
//           />
//         </div>
      
//       </div>
    
//       <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
//         <div className="sm:w-1/2 w-full px-8">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Desktop </span>
//               <span> 65% </span>
//             </p>
//           </div>
//         </div>
//         <div className="sm:w-1/2 w-full px-8">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Tablet </span>
//               <span> 34% </span>
//             </p>
//           </div>
//         </div>
//         <div className="sm:w-1/2 w-full px-8">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Mobile </span>
//               <span> 45% </span>
//             </p>
//           </div>
//         </div>
//         <div className="sm:w-1/2 w-full px-8">
//           <div className="flex w-full items-center">
//             <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
//             <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
//               <span> Unknown </span>
//               <span> 12% </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ChartThree;



