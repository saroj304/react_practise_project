import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
    return (
        <UserContextProvider>
            <Login/>
            <Profile/>
            <h1> react with saroj</h1>
        </UserContextProvider>
    )
}

export default App;
