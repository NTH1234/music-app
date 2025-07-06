import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import HomeLayout from './components/Home/HomeLayout'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route
              element={
                <HomeLayout>
                  <Outlet />
                </HomeLayout>
              }
            >
              <Route path="/" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
