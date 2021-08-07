import {FaLinkedin, FaFacebookSquare, FaGithubSquare} from 'react-icons/fa/';
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
                    <li className='nav_item_foot'><a href='/'>Home</a></li>
                    <li className='nav_item_foot'><a href='/projects'>Projects</a></li>
                    <li className='nav_item_foot'><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
            <small>©2021 Rodwin Espiritu</small>
        </footer>
    )
}

export default Footer
