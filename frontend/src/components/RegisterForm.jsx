import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        const res = await fetch('http://localhost:5249/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email }),
        });

        if (res.ok) {
            const data = await res.json();
            setMessage(data.message);
        } else {
            const err = await res.text();
            setError(err || "Registration failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-white">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Register</h2>
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                    autoComplete="username"
                />
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    autoComplete="email"
                />
                <input
                    className="w-full mb-4 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="new-password"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-500 transition-colors"
                >
                    Register
                </button>
                {message && <p className="text-green-600 text-center mt-4">{message}</p>}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
}