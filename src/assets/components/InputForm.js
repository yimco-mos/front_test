import React from 'react';

export const InputForm = ({ formData, handleChange, fields, message, labels }) => {
  return (
    <div>
      {fields.map(field => (
        <div key={field.name} className='content_input'>
          {/* Utiliza el objeto de etiquetas para mostrar el texto del label */}
          <label className='txt-neutral-950'>{labels[field.name]}</label>
          <input
            className='input_control'
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      {message && <div>{message}</div>}
    </div>
  );
};
