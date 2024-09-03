import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', { email, password });
      alert('Account created successfully!');
    } catch (err) {
      alert('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Password"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
}
