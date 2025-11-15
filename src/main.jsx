
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import App from './App.jsx'
import ContactContextProvider from './Context/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </BrowserRouter>

)
