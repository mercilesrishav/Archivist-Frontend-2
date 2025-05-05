import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
const Register = () => {

    const [form, setForm] = useState({
        reader_name: '',
        reader_email: '',
        reader_address: '',
        reader_phone: '',
        reader_birthday: '',
      });
      
      const [message, setMessage] = useState('');
    const navigate = useNavigate()
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        const [year, month, day] = form.reader_birthday.split('-');
        const formattedDate = `${day}/${month}/${year}`;
    
        const payload = {
          ...form,
          reader_birthday: formattedDate,
        };
    
        try {
          const response = await fetch('http://localhost:8080/reader/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          
            setMessage('Registration successful!');
            console.log('Success:', response);
            navigate('/addBooks')
        } catch (error) {
          setMessage('❌ Something went wrong.');
          console.error('Error:', error);
        }
      };
    
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-8xl mt-12'>Archivist</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 justify-center h-screen">
        <label>
          Name:
          <input
            className='border-4 border-black-400'
            type="text"
            name="reader_name"
            value={form.reader_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            className='border-4 border-black-400'
            type="email"
            name="reader_email"
            value={form.reader_email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address:
          <input
            className='border-4 border-black-400'
            type="text"
            name="reader_address"
            value={form.reader_address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            className='border-4 border-black-400'
            type="tel"
            name="reader_phone"
            value={form.reader_phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Birthday:
          <input
            className='border-4 border-black-400'
            type="date"
            name="reader_birthday"
            value={form.reader_birthday}
            onChange={handleChange}
            required
          />
        </label>

        <button className='border-4 border-black-400' type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Register
