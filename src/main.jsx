import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css' // Import global sass

// Import Fonts (bisa via fontsource npm atau CDN di index.html)
// Untuk kemudahan, asumsi font Inter sudah dihandle CSS/index.html

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)