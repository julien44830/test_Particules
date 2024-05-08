import { createBrowserRouter } from "react-router-dom";
import Login from "./compoments/Login";
import Home from "./compoments/Home";
import Text3D from "./compoments/Text3D";
import App from "./App";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: <h1>not found</h1>,
        children : [
            {
                path :'/login',
                element: <Login />
            },
            {
                path:'/',
                element: <Home />
            },
            {
                path:'3D',
                element: <Text3D/>
            }
        ]
    }


]);

export default router;