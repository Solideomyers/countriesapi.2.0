import React, { forwardRef } from 'react';
import Dropdown from 'react-dropdown-select';

export const OrderAZ = forwardRef(({ onChange }, ref) => {
  return (
    <>
      <div className="flex flex-col flex-basis-[calc(33.33%-20px)] mb-20">
        <label className="font-bold mb-5 text-white text-xl">Sort by Name</label>
        <Dropdown
          options={[
            { value: 'sort', label: 'Sort' },
            { value: 'asc', label: 'A-Z' },
            { value: 'desc', label: 'Z-A' },
          ]}
          name="Sort"
          ref={ref}
          onChange={(value) => onChange(value[0].value)}
        />
      </div>
    </>
  );
});
