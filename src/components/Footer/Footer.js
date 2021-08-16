import {FaLinkedin, FaFacebookSquare, FaGithubSquare} from 'react-icons/fa/';
import {Link} from 'react-router-dom';
import './styles.css';

const Footer = () => {
    return (
        <footer>
            <div className='contact_icons'>
                <a href='https://www.linkedin.com/in/rodwin-e-427b41216/'><FaLinkedin /></a>
                <a href='https://www.facebook.com'><FaFacebookSquare /></a>
                <a href='https://github.com/rodche-web'><FaGithubSquare /></a>
            </div>
            <nav>
                <ul className='nav_list_foot'>
                    <li className='nav_item_foot'><Link className='footer-link' to='/'>Home</Link></li>
                    <li className='nav_item_foot'><Link className='footer-link' to='/projects'>Projects</Link></li>
                    <li className='nav_item_foot'><Link className='footer-link' to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <small>©2021 Rodwin Espiritu</small>
        </footer>
    )
}

export default Footer
