import './styles.css';

const ContactForm = () => {
    return (
        <form>
            <div className='form_group'>
                <label htmlFor='name'>Your name</label>
                <input id='name' name='name' required />
            </div>
            <div className='form_group'>
                <label htmlFor='email'>Your email</label>
                <input id='email' type='email' name='email' required />
            </div>
            <div className='form_group'>
                <label htmlFor='name'>Your message</label>
                <textarea rows='10' required />
            </div>
            <button className='contact_btn' type='submit'>Send</button>
        </form>
    )
}

export default ContactForm
