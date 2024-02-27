// InputSecion.jsx
import React from 'react';

export const InputSecion = ({ placeholder,label, type, value, name,handleChange }) => {
  return (
    <div className='body_inputsec'>
      <div className='label_sec'><label>{label}</label></div>
      <input
        name= {name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
    </div>
  );
};
