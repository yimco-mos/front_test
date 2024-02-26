import React from 'react';

export const InputSecion = ({ label, type, value, onChange }) => {
  return (
    <div className='body_inputsec'>
     <div className='label_sec'><label>{label}</label></div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
    </div>
  );
};
