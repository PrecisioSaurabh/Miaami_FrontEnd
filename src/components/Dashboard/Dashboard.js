import React from 'react';
import ChartThree from './ChartThree';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

const Dashboard = () => {
  return (
    <>
      <div className='ml-4'> Dashboard</div>
      <div className='flex justify-between gap-8 px-12'>
        <ChartOne/>
        <ChartThree/>
        <ChartTwo/>
      </div>
     </>
  )
}
export default Dashboard

