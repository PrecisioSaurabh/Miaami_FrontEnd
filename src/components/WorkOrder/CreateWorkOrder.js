import React from 'react';

const CreateWorkOrder = () => {
  return (
    <>
     <div className='my-4 ml-8'> work order <span className='text-[#5723EA]'> CreateWorkOrder </span> </div>
      <div className="bg-white mx-16 mt-12 p-4">
      <h3> Create Work Order </h3>
      <div className="grid grid-cols-2 gap-4">
        {/* First row */}
        <div className="col-span-1">
          <select
            id="dropdown1"
            placeholder='category'
            name="dropdown1"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 "
          >
            <option value="" disabled selected>category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="col-span-1">
          <select
            id="dropdown2"
            name="dropdown2"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 "
            placeholder="Select option"
          >
            <option value="" disabled selected>Parent Asset</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        {/* Second row */}
        <div className="col-span-1">
          <input
            type="date"
            id="date1"
            name="date1"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 "
            placeholder="Select date"
          />
        </div>
        <div className="col-span-1">
          <input
            type="date"
            id="date2"
            name="date2"
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
          />
        </div>
        {/* Third row */}
        <div className="col-span-1">
          <input
            type="text"
            id="text1"
            name="text1"
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
            placeholder='asset group'
          />
        </div>
        <div className="col-span-1">
          <select
            id="dropdown3"
            name="dropdown3"
            className="mt-1 p-2 w-full rounded-md border border-gray-300"
          >
            <option value="" disabled selected>Priority</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        {/* Fourth row */}
        <div className="col-span-2 ">
          <input
            type="text"
            id="text2"
            name="text2"
            className="mt-1 p-2 w-1/2 rounded-md border border-gray-300"
            placeholder='source assets or rigs'
          />
        </div>
        {/* Fifth row */}
        <div className="col-span-1">
           <textarea
            id="textarea1"
            name="textarea1"
            rows="4"
            placeholder='brief description'
            className="mt-1 p-2 w-full rounded-md border border-gray-300 "
          ></textarea>
        </div>
        <div className="col-span-1">
          <textarea
            id="textarea2"
            name="textarea2"
            placeholder='additional description'
            rows="4"
            className="mt-1 p-2 w-full rounded-md border border-gray-300 "
          ></textarea>
        </div>
      </div>
    </div>
    </>
  );
};
export default CreateWorkOrder;