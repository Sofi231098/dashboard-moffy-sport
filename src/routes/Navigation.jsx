import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from '../layouts';

export const Navigation = () => {

    const routes = [
        {
            path: "/",
            component: <h1>Home</h1>,
            layout: BasicLayout,
            exact: true,
        },
        {
            path: "/users",
            component: <h1>Usuarios</h1>,
            layout: BasicLayout,
            exact: true,
        },
        {
            path: "/products",
            component: <h1>Productos</h1>,
            layout: BasicLayout,
            exact: true,
        },
    ];

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            element={
                                <route.layout>
                                    {route.component}
                                </route.layout>
                            }
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    )
}
