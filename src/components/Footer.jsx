import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='container-fluid justify-content-between p-3' style={{ display: 'flex', height: '300px' }}>
                <div className='media' style={{ width: '40%' }}>
                    <h5><i class="fa-solid fa-play me-2"></i>Project Fair</h5>
                    <p>Designed and built with love in the world by the Botostrap team with the help of our contributors.</p>
                    <p>Code licensed MIT, docs CC BY 3.0</p>
                    <p>Currently v5.3.2</p>
                </div>

                <div className='links flex-column d-flex'>
                    <h5>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home page</Link>
                    <Link to={'/watch'} style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
                </div>

                <div className='guides d-flex flex-column'>
                    <h5>Guides</h5>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target=''>React JS</a>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="https://react-bootstrap.netlify.app/" target=''>React Bootstrap</a>
                    <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/en/main" target=''>React Routing</a>
                </div>

                <div className='contact us'>
                    <h5>Contact us</h5>
                    <div className='d-flex'>
                        <input type="text" className='form-control' placeholder='Enter your email id' />
                        <button className='btn btn-danger ms-2'><i style={{height:'20px'}} class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='p-2 mt-2' style={{alignItems:'center', justifyContent:'space-between',display:'flex'}}>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-solid fa-message"></i></a>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-twitter"></i></a>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-linkedin"></i></a>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-instagram"></i></a>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-github"></i></a>
                        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-whatsapp"></i></a>

                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright & copy; 2024 Project Fair. Built with React</p>
   </>
  )
}

export default Footer