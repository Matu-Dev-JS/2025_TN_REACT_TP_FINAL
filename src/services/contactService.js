import contacts from "../data/contacts_data";

function getContacts (){
    return contacts
}

function getContactById (contact_id){
    const contact_found = contacts.find(contact => Number(contact.id) === Number(contact_id))
    if(!contact_found){
        return null
    }
    else{
        return contact_found
    }
}

export {getContacts, getContactById}