import React, { useContext } from 'react'
import { Navbar, Container, NavbarBrand } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'

function Header({ insideDashBoard }) {

  const navigate = useNavigate()
  const {isAuthorized, setIsAuthorized} = useContext(tokenAuthContext)

  const logout = () => {
    sessionStorage.clear()
    isAuthorized(false)
    navigate('/')
  }

  return (
    <Navbar style={{ zIndex: '1' }} className='card shadow top-0 position-fixed w-100'>
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: 'none' }} className='fw-bolder' to={'/'}><i className='fa-brands fa-docker me-1'></i>Projects Fair</Link>
        </Navbar.Brand>
        {
          insideDashBoard &&
          <div className='ms-auto'> 
            <button style={{textDecoration:'none'}} onClick={logout} className='btn btn-link fw-bolder'>Logout<i className='fa-solid fa-arrow-right text-success'></i></button>
          </div>
        }
      </Container>

    </Navbar>
  )
}

export default Header