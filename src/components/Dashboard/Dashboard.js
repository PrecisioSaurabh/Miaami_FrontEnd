import React from 'react';
import ChartThree from './ChartThree';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';

const Dashboard = () => {
  return (
    <>
      <div className='ml-4'> Dashboard</div>
      <div className='flex space-x-4'>
        <ChartOne/>
        <ChartThree/>
        <ChartTwo/>
      </div>
     </>
  )
}
export default Dashboard

