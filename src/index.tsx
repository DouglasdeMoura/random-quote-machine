import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import { routes } from './routes'

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser')

  worker.start()
}

const SuspendedRoute: React.FC = () => (
  <React.Suspense>
    <Outlet />
  </React.Suspense>
)

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuspendedRoute />}>
          {routes.map((props) => (
            <Route {...props} key={props.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
