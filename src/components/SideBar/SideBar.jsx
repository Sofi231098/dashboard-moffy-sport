import { NavLink } from 'react-router-dom';
import './SideBar.css';

import HomeIcon from '../../assets/svgs/home.svg';
import UsersIcon from '../../assets/svgs/users.svg';
import ProductsIcon from '../../assets/svgs/products.svg';

export const SideBar = () => {

    const routes = [{
        path: '/',
        icon: HomeIcon,
        name: 'Home'
    }, {
        path: '/users',
        icon: UsersIcon,
        name: 'Usuarios'
    }, {
        path: '/products',
        icon: ProductsIcon,
        name: 'Productos'
    }];

    return (
        <section className='side-bar'>
            <img src='/moffysports.ico' className='side-bar__img' width={50} height={50} alt="logo-moffy-sports" title='Moffy Sports' />
            {routes.map((route, index) => (
                <NavLink
                    to={route.path}
                    className={({ isActive }) => {
                        return isActive ? "side-bar__link side-bar__link--active" : "side-bar__link";
                    }}
                    key={index}
                >
                    <img src={route.icon} height={25} width={25} alt={route.name} />
                    <span>{route.name}</span>
                </NavLink>
            ))}
        </section>
    )
}
