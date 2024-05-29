import { useEffect, useState } from 'react';
import './Users.css';

export const Users = () => {
    const [ users, setUsers ] = useState([]);       
    const[ refresh, setRefresh ] = useState(false);
    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => setUsers(data.data))
            .catch(error => console.error(error));
    }, [refresh]); //este useEffect hace que se cargue la lista de usuarios

    const handleRefresh = () => {
        setRefresh(!refresh);
    } //esta funcion hace que se refresque la lista de usuarios

    const handleDelete = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        console.log(newUsers);
        setUsers(newUsers);
        console.log('Usuario eliminado');
    } //esta funcion hace que se elimine el usuario de la lista de usuarios

    return (
        <section className='items__section'>
            <article className='items__article'>
                {users.length === 0 ? <h1>No hay usuarios</h1> :
                    <table className='users__table'>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        {/* preguntar a pupi, que me explique */}
                                        <td className='td__image'><img src={`http://localhost:3000/images/users/${user.image}`} alt='Usuario' /></td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td className='td__actions'>
                                            <a className='button button--primary' href={`/users/${user.id}`}>Ver</a>
                                            <button className='button' onClick={() => handleDelete(user.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
                {/*<button className='button' onClick={handleRefresh}>Actualizar</button>*/}
            </article>
        </section>
    )
}