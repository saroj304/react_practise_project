import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, {
    githubInfoLoader
} from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import MainLayout from "./layout/MainLayout.jsx";


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/github",
                element: <Github />,
                loader: githubInfoLoader
            },
            {
                path: "/user/:userid",
                element: <User />
            }
        ]
    }
]);


function App() {
    return <RouterProvider router={router} />;
}

export default App;