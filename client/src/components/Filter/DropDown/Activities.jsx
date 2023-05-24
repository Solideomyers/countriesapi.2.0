import React, { forwardRef } from 'react';
import Dropdown from 'react-dropdown-select';

export const Activities = forwardRef(({ activities, onChange }, ref) => {
  return (
    <>
      <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
        <label className="font-bold mb-5 text-white text-xl" htmlFor="activity">
          Sort by Activity
        </label>
        <Dropdown
          options={activities.map((elem, index) => ({
            value: elem.name,
            label: elem.name,
          }))}
          name="Activity"
          ref={ref}
          onChange={(value) => onChange(value[0].value)}
        />
      </div>
    </>
  );
});
