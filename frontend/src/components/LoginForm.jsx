import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5249/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (res.ok) {
            const data = await res.json();
            login(data.token);
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-white">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h2>
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    autoComplete="username"
                />
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <button
                    type="submit"
                    className="w-full  py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                >
                    Login
                </button>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </div>
    );
}
