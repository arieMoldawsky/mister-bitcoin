import React, { Component } from 'react';
import { contactService } from '../services/contactService.js';
import backImg from '../assets/back.png';
import deleteImg from '../assets/delete.png';
import { connect } from 'react-redux';
import { addContact, removeContact, updateContact } from '../store/actions/contactsActions.js';


class _ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.loadContact();
        console.log(this.props.match);
    }

    loadContact = async () => {
        const { id } = this.props.match.params;
        var contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact();
        this.setState({ contact })
    }

    onHandleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = (ev) => {
        ev.preventDefault();
        const { contact } = this.state;
        if (contact._id) this.props.updateContact(contact);
        else this.props.addContact(contact);
        this.props.history.push('/contacts');
    }

    backToDetails = (to) => {
        if (to === 'details') this.props.history.push(`/contacts/${this.state.contact._id}`);
        else this.props.history.push(`/contacts`);
    }

    onDeleteContact = async () => {
        this.props.removeContact(this.state.contact._id)
        this.props.history.push('/contacts');
    }


    render() {
        const { contact } = this.state;
        return (
            <div className="contact-edit-section">
                {this.props.match.params.id && <div className="edit-header">
                    <div className="edit-main-btns">
                        <img onClick={() => this.backToDetails('details')} src={backImg} alt="" className="back-img" />
                        <img onClick={this.onDeleteContact} src={deleteImg} alt="" className="back-img" />
                    </div>
                    <h1>Edit:</h1>
                </div>}
                {!this.props.match.params.id && <div className="edit-header">
                    <img onClick={() => this.backToDetails('list')} src={backImg} alt="" className="back-img" />
                    <h1>Add:</h1>
                </div>}
                <form action="" onSubmit={this.onSaveContact}>
                    {this.props.match.params.id && <img className="contact-img" src={`https://robohash.org/${contact._id}?set=set5`} alt="" />}
                    <label htmlFor="">Name: </label>
                    <input name="name" type="text" value={contact.name} onChange={this.onHandleChange} />
                    <label htmlFor="">Email: </label>
                    <input name="email" type="mail" value={contact.email} onChange={this.onHandleChange} />
                    <label htmlFor="">Phone: </label>
                    <input name="phone" type="tel" value={contact.phone} onChange={this.onHandleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = {
    removeContact,
    addContact,
    updateContact
}

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage)