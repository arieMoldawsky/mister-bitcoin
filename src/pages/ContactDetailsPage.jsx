import React, { Component } from 'react';
import {contactService} from '../services/contactService.js';
import editImg from '../assets/edit.png';
import { TransferFund } from '../components/TransferFund.jsx';
import { MoveList } from '../components/MoveList.jsx';

export class ContactDetailsPage extends Component {
    state = {
        contact: {},
    }

    componentDidMount() {
        this.loadContact();
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({ contact })
    }

    onEditContact = () => {
        this.props.history.push(`/contacts/edit/${this.state.contact._id}`)
    }


    render() {
        const { contact } = this.state;
        console.log(contact);
        return (
            <div className="contact-details-section">
                <h1>Contact Details:</h1>
                <div className="main-details">
                    <img src={`https://robohash.org/${contact._id}?set=set5`} alt=""/>
                    <div><span>Name:</span> {contact.name}</div>
                    <div><span>Email:</span> {contact.email}</div>
                    <div><span>Phone:</span> {contact.phone}</div>
                    <img title="Edit" onClick={this.onEditContact} className="edit-img" src={editImg} alt=""/>
                </div>
                <TransferFund contact={contact} />
                <MoveList location={contact._id} />
            </div>
        )
    }
}
