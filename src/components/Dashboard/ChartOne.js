import addCircleIcon from '../../assets/addCircleIcon.png';
import { useState } from 'react';

const brandData = [
  {
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
  },
  {
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
  },
  {
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
  },
  {
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
  },
  {
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
  },
];

const ChartOne = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-1/3 ml-8 rounded-lg mt-8 bg-white">
      <div className="mb-3 justify-between gap-4 sm:flex bg-violet-100">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Work order
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <img src={addCircleIcon} alt="AddCircleIcon" />
          </div>
        </div>
      </div>

      <div className="overflow-auto" style={{ maxHeight: '25vh' }}>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="p-2.5 xl:p-5" style={{ flex: '20%' }}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Wef no
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5" style={{ flex: '60%' }}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Discription and status
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5" style={{ flex: '20%' }}>
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Revenues
              </h5>
            </div>
          </div>

          {brandData.slice(0, showAll ? brandData.length : 2).map((brand, key) => (
            <div
              className={`flex justify-between ${
                key === brandData.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center" style={{ flex: '20%' }}>
                <p className="text-black dark:text-white p-2.5 xl:p-5">{brand.name}</p>
              </div>

              <div className="flex items-center justify-center" style={{ flex: '60%' }}>
                <p className="text-black dark:text-white p-2.5 xl:p-5">{brand.visitors}K</p>
              </div>

              <div className="flex items-center justify-center" style={{ flex: '20%' }}>
                <p className="text-meta-3 p-2.5 xl:p-5">${brand.revenues}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {brandData.length > 2 && (
        <div className="mt-3">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={toggleShowAll}
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChartOne;




