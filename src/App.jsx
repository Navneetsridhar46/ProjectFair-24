import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
// import Header from './components/Header'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/TokenAuth'


function App() {

  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/dashboard' element={isAuthorized ? <Dashboard /> : <Navigate to={'/login'} />} />
        <Route path='/projects' element={isAuthorized ? <Projects /> : <Navigate to={'/login'} />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
