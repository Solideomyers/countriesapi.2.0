import React, { forwardRef } from 'react';
import Dropdown from 'react-dropdown-select';

export const Populations = forwardRef(({ onChange }, ref) => {
  return (
    <>
      <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
        <label className="font-bold mb-5 text-white text-xl">Sort by Population</label>
        <Dropdown
          options={[
            { value: 'population', label: 'Population' },
            { value: 'low', label: 'Low' },
            { value: 'high', label: 'High' },
          ]}
          name="Population"
          ref={ref}
          onChange={(value) => onChange(value[0].value)}
        />
      </div>
    </>
  );
});
