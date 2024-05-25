import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export const ProductDetail = () => {

    const [product, setProduct] = useState({});
    const [refresh, setRefresh] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.data))
            .catch(error => console.error(error));
    }, [refresh]);

    return (
        <section className='product__section'>
            <article className='product__article'>
                <h1>{product.title}</h1>
                <img src={`http://localhost:3000/images/products/${product.images?.[0].image}`} alt='Producto' />
                <p>Marca: {product.brand}</p>
                <p>Precio: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>{product.description}</p>
            </article>
        </section>
    )
}
