import React, { useState } from "react";
import Swal from "sweetalert2";  

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    address: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "El nombre es obligatorio.";
    if (!formData.lastName) formErrors.lastName = "El apellido es obligatorio.";
    if (!formData.email) formErrors.email = "El correo electrónico es obligatorio.";  
    if (!formData.address) formErrors.address = "La dirección es obligatoria.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData); 
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Hay errores en el formulario!",
        text: "Por favor, completa todos los campos correctamente.",
      });
    }
  };

  return (
    <div className="checkout-modal">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Dirección de Envío:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
