import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextFilterProvider } from './context/ContextFilter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextFilterProvider>
        <App />
    </ContextFilterProvider>
)
