import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClickedContextProvider } from './context/button_clicked.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClickedContextProvider>
    <App />
  </ClickedContextProvider>,
)
