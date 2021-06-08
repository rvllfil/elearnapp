import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.jpg'
import { Link } from 'react-router-dom'
import  Container  from 'react-bootstrap/Container'

const Login = () => {
  return (
    <>
      <Container>
        <div className='mt-5 d-flex justify-content-center'>
          <img className='py-5 mt-3' src={logo} alt="OWL-Ulin" width="100" />
        </div>
        <Form className='px-4 mt-2'>
          <Form.Group className='' controlId="formBasicEmail">
            <Form.Control size='lg' type="email" placeholder="Username" />
            {/* <Form.Text className="text-muted">
              Harap masukan username.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className=' mt-4' controlId="formBasicPassword">
            <Form.Control size='lg' type="password" placeholder="Password" />
            {/* <Form.Text className="text-muted">
              Harap masukan password.
            </Form.Text> */}
          </Form.Group>
          
          <Button size='lg' className='violet mt-4 font-weight-bold' variant="primary" type="submit" block>
            MASUK
          </Button>
          <div className='mt-5 d-flex flex-row justify-content-center'>
            <div>Tidak punya akun ?</div>
            <Link className='violett ml-2' to='/daftar'>Daftar</Link>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Login
