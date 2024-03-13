import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {Header} from './components/Header';
import {LoginForm} from './components/LoginForm';
import {ForgotPasswordForm} from './components/ForgotPasswordForm';
import {ResetPasswordForm} from './components/ResetPasswordForm';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginForm/>,
        },
        {
            path: "forgot-password",
            element: <ForgotPasswordForm />,
        },
        {
            path: "reset-password",
            element: <ResetPasswordForm />,
        }
    ]);

    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
