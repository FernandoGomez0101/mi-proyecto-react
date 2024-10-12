import React, { useState } from 'react';

function FormularioTarea() {
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('media');
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      descripcion,
      prioridad,
      estado: 'pendiente'
    };
    console.log('Tarea creada:', nuevaTarea);
    // Aquí agregarías la lógica para enviar la tarea a tu backend
  };

  return (
    <div>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={manejarSubmit}>
        <label>
          Descripción:
          <input 
            type="text" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <br />
        <label>
          Prioridad:
          <select 
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </label>
        <br />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default FormularioTarea;
