import {ContactPreview} from './ContactPreview'

export function ContactList({ contacts }) {
    return (
        <ul className="contact-list-section">{
            contacts.map(contact => {
                return <ContactPreview contact={contact} key={contact._id}/>
            })
        }</ul>
    )
}