import React from 'react';

const players = [...new Array(4)];
const estimations = [...new Array(10)];

export const Court: React.FC = () => {
  const [currEstimation, setCurrEstimation] = React.useState(0);
  const [totalEstimation, setTotalEstimation] = React.useState(0);

  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="grid grid-flow-col grid-rows-1 gap-10">
        {players.map((_, index) => (
          <div
            key={index}
            className="flex h-20 items-center justify-center bg-slate-500 text-white"
          >
            {index === 0 ? 'You' : `Player ${index}`}
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-1/4 bg-slate-700 py-10 text-center text-white">
          {totalEstimation
            ? `Average value is - ${totalEstimation}`
            : 'Estimation...'}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-center">
        <button
          onClick={() => {
            let totalEstimationValue = 0;

            players.forEach((_, index) => {
              if (index !== 0) {
                totalEstimationValue += Math.floor(Math.random() * 10) + 1;
              } else {
                totalEstimationValue += currEstimation;
              }
            });

            setTotalEstimation(
              +(totalEstimationValue / players.length).toFixed(2)
            );
          }}
          disabled={!currEstimation}
          className="w-fit rounded-md bg-orange-500 px-12 py-2 hover:bg-orange-400 disabled:bg-slate-400"
        >
          Show results
        </button>
        <button
          onClick={() => {
            setCurrEstimation(0);
            setTotalEstimation(0);
          }}
          className="mt-2 w-fit py-2"
        >
          Clear
        </button>
      </div>

      <div className="mt-14 flex items-center justify-center">
        <span className="pr-2">Choose you estimation:</span>
        <div>
          {estimations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrEstimation(index + 1)}
              className={`mr-2 size-8 border border-slate-900 hover:bg-slate-900 hover:text-white ${
                currEstimation === index + 1
                  ? 'bg-slate-900 text-white'
                  : 'bg-transparent text-slate-900'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
