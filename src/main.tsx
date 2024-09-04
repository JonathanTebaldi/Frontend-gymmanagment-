import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './AppRoutes.tsx'
import './index.css'
import { DrawerProvider } from './contexts/DrawerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DrawerProvider>
      <AppRoutes />
    </DrawerProvider>
  </React.StrictMode>,
)
