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
            path: process.env.PUBLIC_URL,
            element: <LoginForm/>,
        },
        {
            path: process.env.PUBLIC_URL + "/forgot-password",
            element: <ForgotPasswordForm />,
        },
        {
            path: process.env.PUBLIC_URL + "/reset-password",
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
