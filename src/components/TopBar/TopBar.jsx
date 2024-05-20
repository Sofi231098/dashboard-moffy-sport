import './TopBar.css';
import Avatar from '../../assets/imgs/baby-yoda.webp';

export const TopBar = () => {
    return (
        <header className='top-bar'>
            <p className='top-bar__name'>Bienvenido!</p>
            <img src={Avatar} className='top-bar__img' width={50} height={50} alt="avatar" />
        </header>
    )
}
