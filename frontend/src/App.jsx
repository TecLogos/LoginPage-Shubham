import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthContext } from './context/AuthContext';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

function App() {
    const { token } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route path="/" element={token ? <Welcome /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route
                    path="/dashboard"
                    element={token ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
