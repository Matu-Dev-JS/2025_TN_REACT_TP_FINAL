import React from 'react'

const CreateNewMessage = ({createNewMessage}) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        createNewMessage(message_value)
        //Limpia los campos del formulario
        formulario.reset()
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='message'>Mensaje: </label>
            <textarea name='message' id='message' placeholder='Ingrese el mensaje' />
        </div>
        <button type='submit'> Enviar mensaje </button>
    </form>
  )
}

export default CreateNewMessage