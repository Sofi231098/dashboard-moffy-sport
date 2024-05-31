import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import './ProductDetail.css';

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
                    <h1 className="product__title">{product.title}</h1>
                    <img className='product__image' src={`http://localhost:3000/images/products/${product.images?.[0].image}`} alt='Producto' />
                <div className="product__detail">
                    <p> <b>Marca:</b> {product.brand}</p>
                    <p><b>Precio:</b> ${product.price}</p>
                    <p><b>Stock:</b> {product.stock}</p>
                    <div>
                        <p>{product.description}</p>
                    </div>
                    <a className='button button--primary' href={`/products`}>Volver</a>
                </div>
            </article>
        </section>
    )
}
