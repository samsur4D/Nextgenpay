import React, { useState } from "react";
import bcrypt from "bcryptjs";
import logo from '../assets//Black_Elegant_Modern_Name_Initials_Monogram_Logo-removebg-preview.png'

const RegisterModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    pin: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.pin ||
      !formData.mobile ||
      !formData.email
    ) {
      alert("All fields are required.");
      return;
    }

    if (formData.pin.length !== 5 || isNaN(formData.pin)) {
      alert("PIN must be a 5-digit number.");
      return;
    }

    // Hash the PIN
    const hashedPin = await bcrypt.hash(formData.pin, 10);

    // Save user to the database (this is a placeholder, you need to implement the actual save logic)
    const newUser = {
      ...formData,
      pin: hashedPin,
      status: "pending",
    };

    console.log("User registered:", newUser);

    // Close the modal
    onClose();
  };

  return (
    <div className="modal   absolute   top-32">
      <div className="modal-content  ">
        <img src="" alt="" />
        <img className="flex justify-center items-center ml-16 w-60" src={logo} alt="" />
        <h2 data-text='Register' className="text-red-500 text-6xl font-bold perfect-animation">Register</h2>
        <form onSubmit={handleSubmit} className="flex-col">
     <div className="flex-col py-24 px-16">
     <input
          className="border border-black"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="border border-black"
            type="text"
            name="pin"
            placeholder="5-digit PIN"
            value={formData.pin}
            onChange={handleChange}
            required
          />
          <input
            className="border border-black"
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            className="border border-black"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
     </div>
          <button className="bg-blue-600 rounded-md text-white font-bold mb-2" type="submit">Register</button>
        </form>
        <button className="bg-red-700  mb-20 w-full rounded-md font-bold  text-white" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegisterModal;
