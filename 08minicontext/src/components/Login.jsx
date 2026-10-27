import UserContext from "../context/UserContext";
import { useState, useContext } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
            <input type='submit' value='Login' />
        </form>
    )
}

export default Login;