import * as React from "react";
import addCircleIcon from '../../assets/DashboardIcons/addCircleIcon.png';
// import attachIcon from "../../assets/DashboardIcons/attach-icon.png";
import { useEffect, useRef } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  AnnotationsDirective,
  AnnotationDirective,
  ChartAnnotation,
  Legend,
  Category,
  SplineSeries,
  Tooltip,
  Highlight,
} from "@syncfusion/ej2-react-charts";

import { Browser } from "@syncfusion/ej2-base";
export let data1 = [
  { x: "Sun", y: 10 },
  { x: "Mon", y: 15 },
  { x: "Tue", y: 20 },
  { x: "Wed", y: 22 },
  { x: "Thu", y: 20 },
  { x: "Fri", y: 11 },
  { x: "Sat", y: 12},
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    #charts_Series_0_Point_2_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }

    #charts_Series_2_Point_0_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-in-out infinite;
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }`;
const ChartTwo = () => {
  let chartInstance = useRef(null);
  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };

  return (
    <div className="w-1/3 mt-8 bg-white rounded-lg mr-8">
      <div className="mb-3 justify-between gap-4 sm:flex bg-violet-100">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Inventory
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <img src={addCircleIcon} alt="AddCircleIcon" />
          </div>
        </div>
      </div>
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <div>Chart with data</div>
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          ref={chartInstance}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: "Rotate90",
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          // width={Browser.isDevice ? "100%" : "75%"}
          height="250px" 
          width="100%"
          legendSettings={{ enableHighlight: true }}
          chartArea={{ border: { width: 0 } }}
          //   load={load.bind(this)}
          primaryYAxis={{
            interval: 5,
            minimum: 10,
            maximum: 22,
            labelFormat: "{value}°C",
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          tooltip={{ enable: true }}
          // title="NC Weather Report - 2016"
          loaded={onChartLoad.bind(this)}
        >
          <Inject
            services={[
              SplineSeries,
              Legend,
              Category,
              Tooltip,
              ChartAnnotation,
              Highlight,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              width={2}
              name="Max Temp"
              type="Spline"
              marker={{ visible: true, width: 1, height: 1 }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
        <div style={{ float: "right", marginRight: "10px" }}>
          {/* Source: &nbsp;
          <a
            href="http://www.worldweatheronline.com/mooresville-weather/north-carolina/us.aspx"
            target="_blank"
          >
            www.worldweatheronline.com
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default ChartTwo;
