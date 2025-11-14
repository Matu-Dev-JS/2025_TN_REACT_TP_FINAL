import React from 'react'

const MessagesList = ({messages}) => {
    return (
        <div>
            {
            messages.length === 0
            ? <span>Aun no has chateado, envia un mensaje para hacerlo</span>
            : messages.map(
                (message) => {
                    return <div>
                        <h3>{message.author_name}</h3>
                        <p>{message.content}</p>
                        <span>{message.created_at}</span>
                        <span>
                            {
                                message.status === 'VIEWED'
                                ? <span>Leido</span>
                                : <span>No leido</span>
                            }
                        </span>
                    </div>
                }
            )
            }
            <hr/>
        </div>
    )
}

export default MessagesList