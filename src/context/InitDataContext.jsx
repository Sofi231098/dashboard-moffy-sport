import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

const InitDataContext = createContext();



function InitDataProvider({ children }){
    const [data, setData] = useState({
        products: null,
        purchases: null,
        brands: null,
        users: null
    });


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const products = await axios.get('http://localhost:3000/api/products');
            const purchases = await axios.get('http://localhost:3000/api/purchases');
            const brands = await axios.get('http://localhost:3000/api/products');
            const users = await axios.get('http://localhost:3000/api/users');
            setData({products: products.data, purchases: purchases.data, brands: brands.data , users: users.data});
        } catch (error) {
            throw new Error(error);
        }
    }

    return(
        <InitDataContext.Provider value={ data }>
            { children }
        </InitDataContext.Provider> 
    )
}

InitDataProvider.propTypes = {
    children: PropTypes.element,
};

export { InitDataContext, InitDataProvider };