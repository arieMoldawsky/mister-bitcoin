import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { contactService } from '../services/contactService.js';
import { ContactList } from '../components/ContactList';
import { ContactFilter } from '../components/ContactFilter';
import plusImg from '../assets/plus.png'
import { loadContacts } from '../store/actions/contactsActions.js';
class _ContactPage extends Component {
    state = {
        filterBy: null
    }

    componentDidMount() {
        this.props.loadContacts(this.state.filterBy)
    }

    // async loadContacts() {
    //     // const contacts = await contactService.getContacts(this.state.filterBy);
    //     // this.setState({ contacts })
    // }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.props.loadContacts(this.state.filterBy))
    }

    onAddContact = () => {
        this.props.history.push('/contacts/edit')
    }


    render() {
        const { contacts } = this.props;
        return (
            <div className="contact-page-section">
                <h1>Contacts</h1>
                <ContactFilter onSetFilter={this.onSetFilter} />
                <ContactList contacts={contacts} />
                <img onClick={this.onAddContact} className="plus-img" src={plusImg} alt=""/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contactReducer.contacts
    }
}

const mapDispatchToProps = {
    loadContacts
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
