import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './UserDetail.css';

export const UserDetail = () => {
    
        const [user, setUser] = useState({});
        const [refresh, setRefresh] = useState(false);
        const { id } = useParams();
    
        useEffect(() => {
            fetch(`http://localhost:3000/api/users/${id}`)
                .then(response => response.json())
                .then(data => setUser(data.data))
                .catch(error => console.error(error));
        }, [refresh]);
    
        return (
            <section className='user__section'>
                <article className='user__article'>
                    <img className="user__img" src={`http://localhost:3000/${user.image}`} alt='Usuario' />
                    <h1 className="user__name">{user.name} {user.lastName}</h1>
                    <p className="user__email">{user.email}</p>
                    <p className="user__staff">{user.tipo ? 'Administrador' : 'Usuario Común'}</p>
                    <a className='button button--primary' href={`/users`}>Volver</a>
                </article>
            </section>
        )
    }