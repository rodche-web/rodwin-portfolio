import {Link} from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header>
            <img src='images/logo.png' alt='logo' />
            <nav>
                <ul className='nav_list'>
                    <li className='nav_item'><Link className='nav_link' href='/'>Home</Link></li>
                    <li className='nav_item'><Link className='nav_link' href='/projects'>Projects</Link></li>
                    <li className='nav_item'><Link className='nav_link' href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
