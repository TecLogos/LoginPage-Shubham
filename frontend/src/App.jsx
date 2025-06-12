import { useContext } from 'react';
import LoginForm from './components/LoginForm';
import { AuthContext } from './context/AuthContext';
import './index.css';

function App() {
    const { token, logout } = useContext(AuthContext);

    return (
        <div>
            {token ? (
                <>
                    <h2>Welcome! You are logged in.</h2>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <LoginForm />
            )}
        </div>
    );
}

export default App;
