import { Link } from 'react-router-dom';

export function ContactPreview({ contact }) {
    return (
        <Link to={`/contacts/${contact._id}`}>
            <li className="contact-preview-section">
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                <div>{contact.name}</div>
            </li>
        </Link>
    )
}