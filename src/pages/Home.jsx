import React, { useEffect, useState } from 'react'
import landingImage from '../assets/landing.png'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from '../services/allAPI';

function Home() {

    const [homeProjects, setHomeProjects] = useState([])
    const navigate = useNavigate()
    const [loginStatus, setLoginStatus] = useState(false)

    console.log(homeProjects);

    useEffect(() => {
        getHomeProjects()
        if (sessionStorage.getItem("token")) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }, [])

    const handleProjects = () => {
        if (loginStatus) {
            navigate('/projects')
        } else {
            toast.warning("Please login to get full access to our projects!!")
        }
    }

    const getHomeProjects = async () => {
        try {
            const result = await getHomeProjectsAPI()
            console.log(result);
            if (result.status == 200) {
                setHomeProjects(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>

            {/* landing  */}
            <div style={{ minHeight: '100vh' }} className='w-100 d-flex justify-content-center align-items-center'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h1>Project Fair</h1>
                            <p>One Stop destination for all software development projects. Where user can add and manage their projects. As well as access all projects available in our website.What are you waiting for!!</p>

                            {loginStatus ?
                                <button className='btn btn-warning'><Link style={{ textDecoration: 'none' }} to={'/dashboard'}>Manage our projects</Link><i class="fa-solid fa-magnifying-glass ms-1"></i></button>
                                :
                                <button className='btn btn-primary'><Link style={{ textDecoration: 'none' }} to={'/login'}>Start To Explore</Link><i class="fa-solid fa-magnifying-glass ms-1"></i></button>
                            }

                        </div>
                        <div className='col-lg-6'>
                            <img style={{ width: '100%' }} src={landingImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* projects  */}
            <div className='mt-3 mb-3'>
                <div className='container'>
                    <h1 className='text-center'>Explore Our Projects</h1>
                    <marquee>
                        <div className='d-flex'>
                            {
                                homeProjects?.length > 0 &&
                                homeProjects?.map(project => (
                                    <div key={project} className='me-5 mb-2'>
                                        <ProjectCard displayData={project} />
                                    </div>
                                ))
                            }
                        </div>
                    </marquee>
                    <div className='d-flex justify-content-center'><button onClick={handleProjects} className='btn btn-link mt-3'>Click here to view more projects...</button></div>
                </div>
            </div>

            {/* client reviews  */}
            <div className='container p-2'>
                <h1 className='text-center mt-4'>Our Testimonials</h1>
                <div className='d-flex justify-content-evenly'>
                    <Card className='mt-2' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src={user1} alt="" />
                                <span>Luke Damian</span>
                            </Card.Title>
                            <Card.Text>
                                <div className='d-flex mb-1 justify-content-center'>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                </div>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* card2 */}
                    <Card className='mt-2' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src={user2} alt="" />
                                <span>Luke Damian</span>
                            </Card.Title>
                            <Card.Text>
                                <div className='d-flex mb-1 justify-content-center'>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                </div>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* card 3  */}
                    <Card className='mt-2' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src={user3} alt="" />
                                <span>Luke Damian</span>
                            </Card.Title>
                            <Card.Text>
                                <div className='d-flex mb-1 justify-content-center'>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                </div>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </div>
        </>
    )
}

export default Home