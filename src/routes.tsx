import App from "./app/App";
import AuthGuard from "./app/guards/authGuards";
import AdminHotel from "./app/pages/admin/adminHotel";
import AdminRoom from "./app/pages/admin/adminRoom";
import AdminUser from "./app/pages/admin/adminUser";
import Detail from "./app/pages/detail";
import History from "./app/pages/history";
import Home from "./app/pages/home";
import Login from "./app/pages/login";
import Register from "./app/pages/register";
import Search from "./app/pages/search";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const routes = createBrowserRouter([
    { path: "/", element: <Navigate to="/home" replace /> },
    {
        
        path: "/",
        element: <App />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'detail', element: <Detail /> },
            { path: 'search', element: <Search /> },
            { path: 'me/history', element: <History /> },
            { path: 'me/hotel_management', element: <AuthGuard component={AdminHotel} /> },
            { path: 'me/room_management', element: <AuthGuard component={AdminRoom}/> },
            { path: 'me/user_management', element: <AuthGuard component={ AdminUser}/> },
            // { path: 'me/hotel_manager', element: <AdminHotel /> },
            { path: 'me/user_manager', element: <AdminUser /> },
            // { path: 'me/room_manager', element: <AdminRoom/> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
]);

