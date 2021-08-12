import React from 'react'
import { Button, Card, Container, Image, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navbar'
import gambar from '../img/gambar.png'
import py from '../img/py.png'

const Landing = () => {
  return (
    <>
      <NavBar /> 
      <Jumbotron fluid>
        <Container className='text-center'>
          <h1 className="display-5">JADI PRODUKTIF DENGAN KAMI</h1>
          <p className="lead">Tempat mengasah ilmu bahasa pemrograman python GRATIS !!!</p>
          <p className="lead">
            <Link to='/daftar'><Button color="danger">Mulai Belajar</Button></Link>
          </p>
        </Container>
      </Jumbotron>
      <div className='text-center'><Image src={gambar} width="85%" fluid /></div>

      <div className="d-flex justify-content-center mt-5 mb-5">
      <Card style={{ width: '20rem' }}>
      <div className='d-flex justify-content-center mt-4 bg-primary'>
        <div className='rounded-circle border bg-light p-3 m-4'>
          <img src={py} alt="py" width='100'/>
        </div>
      </div>
        <Card.Body className='text-center'>
          <Card.Text>
            Python adalah bahasa pemrograman yang sedang naik daun belakangan ini
          </Card.Text>
          <Link to='/daftar'><Button color="danger">Mulai Belajar</Button></Link>
        </Card.Body>
      </Card>
      </div>
      <Jumbotron className='bg-dark' style={{marginBottom: '-60px'}} fluid>
        <Container className='text-center' >
          <h5 className="display-6">JADILAH BAGIAN DARI KAMI</h5>
          <p className="lead mt-3">
          <Link to='/daftar'><Button color="danger">Mulai Belajar</Button></Link>
          </p>
        </Container>
      </Jumbotron>
      
    </>
  )
}

export default Landing
