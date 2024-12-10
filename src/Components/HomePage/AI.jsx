import React, { useState } from 'react';

const AI = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);

    const getCsrfToken = () => {
        const csrfToken = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('csrftoken = '));
        return csrfToken ? csrfToken.split('=')[1] : '';
        }

    const getAIResponse = async () => {
        const userInputValue = userInput.trim();

        if (!userInputValue) {
            setError('Input cannot be empty');
            return;
            };

        const csrfToken = getCsrfToken();

        try {
            setLoading(true);
            setError('');
            setResponse('');

            const response = await fetch('http://127.0.0.1:8000/api/ai_response/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                    },
                body: JSON.stringify({ content: userInputValue }),
            });

            const data = await response.json();

            if (response.ok) {
                    setResponse(data.response);
                } else {
                    setError(data.error || 'An unexpected error occurred');
            }

        } catch (error) {
            setError(error.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
                }
    };

    return (
        <div>
            <textarea
            value = { userInput }
            onChange = {(e) => setUserInput(e.target.value)}
            placeholder = 'Enter your question here...'
            id = 'userInput'
            >
            </textarea>

            <button onClick={getAIResponse} disabled = { loading }>
                {loading ? 'Loading...': 'Get AI Response'}
            </button>

            {response && <p>Response: {response}</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
    );
};

export default AI;
