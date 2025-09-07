import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./Components/AuthContext.jsx"
import { CartProvider } from "./Components/CartContext.jsx"

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <AuthProvider>
 <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </AuthProvider>
  </CartProvider>
)
