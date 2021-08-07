import ContactForm from '../../components/ContactForm/ContactForm';
import './styles.css';

const ContactPage = () => {
    return (
        <div className='contact_container'>
            <div className='contact_image'>
                <img src='images/email.svg' alt='email pic' />
            </div>
            <div className='contact_form'>
                <h1>Contact Me</h1>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage;
