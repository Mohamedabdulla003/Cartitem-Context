import React from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from '../src/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
