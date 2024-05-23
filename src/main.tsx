import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CalcProvider from "@/context/CalcContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CalcProvider>
            <App />
        </CalcProvider>
    </React.StrictMode>,
)