import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasicLayout } from '../layouts';
import { Home, Products, ProductDetail, Users } from '../pages';

export const Navigation = () => {

    const routes = [
        {
            path: "/",
            component: Home,
            layout: BasicLayout,
            exact: true,
        },
        {
            path: "/users",
            component: Users,
            layout: BasicLayout,
            exact: true,
        },
        {
            path: "/products",
            component: Products,
            layout: BasicLayout,
            exact: true,
        },
        {
            path: "/products/:id",
            component: ProductDetail,
            layout: BasicLayout,
            exact: true,
        },
    ];

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}
