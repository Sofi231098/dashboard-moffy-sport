import { useEffect, useState } from 'react';
import './Products.css';

export const Products = () => {

    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(error => console.error(error));
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh);
    }

    const handleDelete = (id) => {
        const newProducts = products.filter(product => product.id !== id);
        console.log(newProducts);
        setProducts(newProducts);
        console.log('Producto eliminado');
    }

    return (
        <section className='items__section'>
            <article className='items__article'>
                {products.length === 0 ? <h1>No hay productos</h1> :
                    <table className='products__table'>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='td__image'><img src={`http://localhost:3000/images/products/${product.images[0].image}`} alt='Producto' /></td>
                                        <td>{product.title}</td>
                                        <td>{product.brand}</td>
                                        <td>${product.price}</td>
                                        <td>{product.stock}</td>
                                        <td className='td__actions'>
                                            <a className='button button--primary' href={`/products/${product.id}`}>Ver</a>
                                            <button className='button' onClick={() => handleDelete(product.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }

            </article>
        </section>
    )
}
