import React, { useEffect } from 'react'
import { getContacts } from '../../services/contactService'
import contacts from '../../data/contacts_data'
import { Link } from 'react-router'
import AddNewContact from '../AddNewContact/AddNewContact'

const ChatList = () => {
    const {contacts} = useContext(ContactContext)

    return (
        <div>
            {
                contacts.map(
                    (contact) => {
                        return (
                            <>

                                <Link to={'/chat/' + contact.id} key={contact.id}>
                                    <img width={'50px'} src={contact.profile_picture} />
                                    <h2>{contact.name}</h2>
                                    <span>Ultima conexion: {contact.last_connection}</span>
                                </Link>
                                <br />
                                <hr/>
                            </>
                        )
                    }
                )
            }

            <AddNewContact  />
        </div>
    )
}

export default ChatList