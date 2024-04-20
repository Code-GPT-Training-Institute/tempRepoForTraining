import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppComponent from './AppComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppComponent appName = "My App Component by Code GPT" />
  </React.StrictMode>
)
