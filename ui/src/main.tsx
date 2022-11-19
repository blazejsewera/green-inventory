import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { DebugSewera } from './pages/DebugSewera'
import { DebugKoccov } from './pages/DebugKoccov'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/_debug_koccov',
    element: <DebugKoccov />,
  },
  {
    path: '/_debug_sewera',
    element: <DebugSewera />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
