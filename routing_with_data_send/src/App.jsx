import './index.css'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout /> ,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '*',
                element: <h1
                    className="text-red-500 text-center text-2xl font-bold mt-15">404: Page Not Found
                    <br/>
                    <Link to="/"><span className="underline">Home</span> Page</Link>
                </h1>
            }
        ] },
])

export default function App() {
    return <RouterProvider router={router}/>
}
