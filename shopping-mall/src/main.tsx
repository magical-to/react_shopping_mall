import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from "react-router-dom"; 
import App from './App_a'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)