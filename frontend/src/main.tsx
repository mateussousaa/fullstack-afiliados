import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AppProvider from './context/appProvider.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
