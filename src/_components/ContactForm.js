import { ContactFormContainer } from "../styles/contact.style"

const ContactForm = () => {

    return <ContactFormContainer>
        <input type='text' placeholder="Name" />
        <input type='number' placeholder="How many People" />
        <input type='date' placeholder="Date" />
        <input type='textarea' placeholder="Message \ Special requirement" />
        <button>SEND MESSAGE</button>
    </ContactFormContainer>
}

export default ContactForm