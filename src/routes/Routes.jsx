import { createBrowserRouter, RouterProvider } from "react-router"
import App from "../App"

export default function Routes(){
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/home",
            element: <Home
        }
    ])
}