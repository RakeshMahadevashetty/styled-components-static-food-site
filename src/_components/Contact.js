import ContactForm from './ContactForm';
import { ContactContainer } from '../styles/contact.style';

const Contact = () => {
    return <ContactContainer id="Contact">
        <h1>Contact</h1>
        <h4>We offer full-service catering for any event, large or small.
            We understand your needs and we will cater the food to satisfy the biggerst criteria of them all,
            both look and taste.<br /> Do not hesitate to contact us.</h4>
        <p><strong>Catering Service, 42nd Living St, 43043 New York, NY</strong></p>
        <h5>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</h5>
        <ContactForm />
    </ContactContainer>
}

export default Contact;