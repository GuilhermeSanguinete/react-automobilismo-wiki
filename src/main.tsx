import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Automobilismo } from './pages/Automobilismo'

const App = () => {
  return (
    <>
    <Automobilismo></Automobilismo>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
