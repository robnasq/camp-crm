import { createBrowserRouter } from "react-router-dom";
import { Initial } from "../pages/dashboard/Initial";
import { MainLayout } from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path:  '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Initial />
            }
        ]
    },
])