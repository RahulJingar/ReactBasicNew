import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
>>>>>>> d92860b30239813995654d0c5c189d3e1435f93b
)
