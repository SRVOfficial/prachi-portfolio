// Tooltip.js
import React from 'react';

const Tooltip = ({ message }) => {
  return (
    <div className="absolute top-full mt-2 w-40 p-2 bg-[#D2691E] text-white text-center rounded shadow-lg">
      {message}
    </div>
  );
};

export default Tooltip;
