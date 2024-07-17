import React, { useState } from 'react';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import logo from '../assets//Black_Elegant_Modern_Name_Initials_Monogram_Logo-removebg-preview.png'

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    identifier: '',
    pin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.identifier || !formData.pin) {
      alert('All fields are required.');
      return;
    }

    // Fetch user from database (this is a placeholder, you need to implement the actual fetch logic)
    const user = await fetchUser(formData.identifier);

    if (!user) {
      alert('User not found.');
      return;
    }

    // Verify PIN
    const isPinValid = await bcrypt.compare(formData.pin, user.pin);

    if (!isPinValid) {
      alert('Invalid PIN.');
      return;
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    console.log('JWT:', token);

    // Save token to local storage
    localStorage.setItem('token', token);

    // Close the modal
    onClose();
  };

  const fetchUser = async (identifier) => {
    // Placeholder logic to fetch user from the database
    // You need to implement actual logic to fetch the user by mobile or email
    const users = [
      { id: 1, email: 'user@example.com', mobile: '1234567890', pin: await bcrypt.hash('12345', 10) }
    ];
    return users.find(user => user.email === identifier || user.mobile === identifier);
  };

  return (
    <div className="modal">
      <div className="modal-content h-screen">
        <img src={logo} alt="" />
        <h2  data-text='Login' className="text-red-500 text-6xl font-bold login-animation">Login</h2>
        <form onSubmit={handleSubmit}>
          <input className='border border-black rounded-md' type="text" name="identifier" placeholder="Email or Mobile" value={formData.identifier} onChange={handleChange} required />
          <input className='border border-black rounded-md' type="password" name="pin" placeholder="PIN" value={formData.pin} onChange={handleChange} required />
          <button className='bg-blue-700 mt-40 text-white font-bold rounded-md' type="submit">Login</button>
        </form>
        <button className='bg-red-700 w-full  rounded-md mt-2 text-white font-bold' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
