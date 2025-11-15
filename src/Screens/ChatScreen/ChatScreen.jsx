import React, { useContext, useEffect, useState } from 'react'
import ChatList from '../../Components/ChatList/ChatList'
import { getContacts } from '../../services/contactService'
import { useParams } from 'react-router'
import ChatDetail from '../../Components/ChatDetail/ChatDetail'
import { ContactContext } from '../../Context/ContactContext'

const ChatScreen = () => {
  const {chat_id} = useParams()
  const {loading, chatDetail, setChatId, createNewMessage, addNewContact, contacts} = useContext(ContactContext)
  useEffect (
    () => {
      setChatId(chat_id)
    },
    [chat_id]
  )

  return (
    <div>
      {/* Panel izquierdo con lista de contactos */}
      {
        loading
          ? <span>Cargando contactos...</span>
          : contacts && <ChatList />
      }
      {
        !loading && (
          !chat_id
            ? <h2>Aun no has seleccionado ningun chat</h2>
            : (
              chatDetail
                ? <ChatDetail chatDetail={chatDetail} createNewMessage={createNewMessage} />
                : null
            )
        )
      }


      {/* Panel derecho con el detalle del contacto */}
    </div>
  )
}

export default ChatScreen