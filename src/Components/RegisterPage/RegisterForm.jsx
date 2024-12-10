import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        });

    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState('');

    const getCsrfToken = () => {
        const csrfToken = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('csrftoken='));
        return csrfToken ? csrfToken.split('=')[1] : '';
        };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            });
        };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrf_token = getCsrfToken();

        if (formData.password != formData.confirm_password) {
            setErrors('Passwords do not match.');
            return
            }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrf_token,
                },
                body: JSON.stringify(formData),
            });

            console.log('MAAAAAAAAATTTTTTTTTTTTAAAAAAAAAAAAAAAAA')

            if (!response.ok) {
                console.log('TACTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')
                const errorData = await response.json()
                setErrors(errorData.message || 'Something went wrong');
                return
            }

            const data = await response.json();
            setMessage(data.message);
            setErrors(null);

            } catch (error) {
                setErrors(error.message || 'Something went wrong');
                }
        };

  return (
    <div className = 'flex flex-column flex-center full-view'>
        <div className = 'flex flex-column flex-center register-container'>
      <h1>Register</h1>
      {message && <p>{message}</p>}
      {errors && <p style={{ color: 'red' }}>{errors}</p>}

      <form onSubmit={ handleSubmit } className = 'flex flex-column register-form'>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={ formData.username }
            onChange={ handleChange }
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={ formData.email }
            onChange={ handleChange }
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={ formData.password }
            onChange={ handleChange }
            required
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirm_password"
            value={ formData.confirm_password }
            onChange={ handleChange }
            required
          />
        </div>

        <button type="submit" className = 'register-button'>Register</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterForm;