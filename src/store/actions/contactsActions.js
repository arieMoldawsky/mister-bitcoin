import { contactService } from '../../services/contactService';

export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await contactService.getContacts(filterBy);
        dispatch({ type: 'SET_CONTACTS', contacts })
    }
}

export function removeContact(contactId) {
    return async dispatch => {
        await contactService.deleteContact(contactId);
        dispatch({ type: 'REMOVE_CONTACT', contactId })
    }
}

export function addContact(contact) {
    return async dispatch => {
        const newContact = await contactService.saveContact(contact);
        dispatch({ type: 'ADD_CONTACT', newContact })
    }
}

export function updateContact(contact) {
    return async dispatch => {
        const newContact = await contactService.saveContact(contact);
        dispatch({ type: 'UPDATE_CONTACT', newContact })
    }
}