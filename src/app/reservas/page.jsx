'use client'

import React, { useState } from 'react';

function ReservasPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('Reserva registrada');
    const mailtoLink = `mailto:yosoypxl@gmail.com?subject=Reserva&body=Nombre: ${formData.name}%0AEmail: ${formData.email}%0AFecha: ${formData.date}%0AHora: ${formData.time}%0ANúmero de personas: ${formData.guests}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-start pt-4 justify-center h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Reservar una mesa</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className='flex w-full gap-4'>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Fecha</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Hora</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Número de personas</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Reservar
        </button>
      </form>
    </div>
  );
}

export default ReservasPage;