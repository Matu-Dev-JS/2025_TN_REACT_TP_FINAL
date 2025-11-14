import React from 'react'

const AddNewContact = ({ addNewContact }) => {
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault()
        const formulario = event.target
        const name_value = formulario.name.value

        addNewContact(name_value)
    } 
  return (
    <form onSubmit={handleSubmitNewContactForm}>  
        <div>
            <label htmlFor='name'>Nombre: </label>
            <input name='name' id='name' placeholder='Ingrese el nombre del nuevo contacto' />
        </div>
        <button type='submit'>Crear contacto</button>
    </form>
  )
}

export default AddNewContact