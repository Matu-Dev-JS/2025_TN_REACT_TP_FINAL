import React from 'react'

import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ChatScreen/>} />
      <Route path='/chat' element={<ChatScreen/>} />
      <Route path='/chat/:chat_id' element={<ChatScreen/>} />
    </Routes>
  )
}

export default App