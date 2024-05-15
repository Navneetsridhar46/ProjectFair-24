import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { SERVER_URL } from '../services/serverUrl';


function ProjectCard({displayData}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Card className='mb-3' onClick={handleShow} style={{ width: '24rem' }}>
        <Card.Img style={{ height: '200px' }} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <div className='container-fluid p-1'>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='img-fluid' src="https://blog.hubbado.com/content/images/2020/01/projectmanager.png" alt="" />
            </div>
            <div className='col-lg-6'>
              <h3>{displayData?.title}</h3>
              <h6><span className='fw-bolder'>Languages Used : </span>{displayData?.language}</h6>
              <p style={{ textAlign: 'justify' }}>Description : {displayData?.overview}</p>
            </div>
          </div>
        </div>
        <div className='float-start mt-2 p-2'>
          <a href={displayData?.github} target='_blank' className='btn btn-secondary' onClick={handleClose}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={displayData?.website} target='_blank' className='btn btn-secondary ms-2' onClick={handleClose}>
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
      </Modal>
    </>
  )
}

export default ProjectCard