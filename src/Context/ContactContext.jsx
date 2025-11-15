import { createContext, useEffect, useState } from "react";
import { getContacts } from "../services/contactService";
import { useParams } from "react-router";

export const ContactContext = createContext()

function ContactContextProvider({ children }) {
    const [contacts, setContacts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [chatDetail, setChatDetail] = useState(null)
    const [chat_id, setChatId] = useState(null)



    function loadContacts() {
        setLoading(true)
        setTimeout(
            () => {
                const contacts = getContacts()
                setContacts(contacts)
                setLoading(false)
            },
            2000
        )

    }

    function addNewContact(name) {
        const new_contact = {
            id: contacts.length + 1,
            user_id: contacts.length + 1,
            name: name,
            profile_picture: 'https://i.etsystatic.com/52946191/r/il/20ab0d/6269485703/il_794xN.6269485703_jno8.jpg',
            last_connection: 'ahora',
            is_connected: true
        }
        setContacts(
            (prev_state) => {
                return [...prev_state, new_contact]
            }
        )
    }

    function createNewMessage(message) {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: message,
            author_id: 50, //Aca iria MI id, ponemos un valor cualquiera
            author_name: 'cosme fulanito', //Aca lo mismo, este es mi nombre
            created_at: 'Hoy',
            status: 'VIEWED'
        }
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat
                    }
                )
            }
        )

        //Enviamos mensaje automatizado a los 2 segundos
        setTimeout(
            sendAutomaticMessage,
            2000
        )
    }

    function sendAutomaticMessage() {
        const new_message = {
            id: chatDetail.messages.length + 1,
            content: 'Tu mensaje fue recibido',
            author_id: chatDetail.user_id,
            author_name: chatDetail.name,
            created_at: 'Hoy',
            status: 'VIEWED'
        }
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            chat.messages = [...chat.messages, new_message]
                        }
                        return chat
                    }
                )
            }
        )
    }

    function loadChatDetail() {
        console.log({
            contacts,
            loading,
            chat_id
        })
        if (contacts && !loading && chat_id) {
            const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id))
            setChatDetail(chat_selected)
        }
    }

    /* Queremos que se cargue loadContacts solamente una vez */
    useEffect(
        loadContacts,
        []
    )

    /* Cada vez que cambie la ruta revisar el chat seleccionado */
    useEffect(
        loadChatDetail,
        [chat_id, contacts]
    )
    console.log(chat_id)
    return (
        <ContactContext.Provider
            value={
                {
                    contacts,
                    loading,
                    error,
                    chatDetail,
                    chat_id,
                    addNewContact,
                    createNewMessage,
                    setChatId
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
}


export default ContactContextProvider