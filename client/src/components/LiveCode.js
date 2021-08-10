import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './Navbar'

const LiveCode = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <NavBar />
      <Container>
      <div className="card">
        <div className="card-header text-center h4">
          Live Code
        </div>
        <div className="card-body box-profile">
      
          <iframe title='Live Code' src="https://trinket.io/embed/python3/65d69a8bf4?font=22px" width="100%" height="360" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>     
      
        </div>
      </div>
      </Container>
    </>
  )
}

export default LiveCode
