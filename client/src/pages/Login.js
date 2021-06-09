import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.jpg'
import { Link, useHistory } from 'react-router-dom'
import  Container  from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/actions/authAction'
import { ExclamationCircle } from 'react-bootstrap-icons'

const Login = ({login, error}) => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const [isInValid, setIsInValid] = useState({
    username: false,
    password: false
  })
  const [message, setMessage] = useState('')
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const validate = () => {
    let err = {}
    let isInValid = true
    if(!data.username) {
      isInValid = false
      err.username = true
    }
    if(!data.password) {
      isInValid = false
      err.password = true
    }
    setIsInValid({...isInValid, ...err})
    return isInValid
  }
  const history = useHistory()
  const onSubmit = (e) => {
    e.preventDefault()
    if(validate()){
      setIsInValid({
        password: false,
        confirmed: false
      })
      login(data, history)
      setData({
        username: '',
        password: ''
      })
    }
  }

    
  useEffect((prevProps) => {
    if (error !== prevProps) {
      // check for Login error
      if (error.id === 'LOGIN_FAIL') {
        setMessage(error.msg.msg)
      }
    }
    
  }, [error])

  return (
    <>
      <Container>
        <div className='mt-5 d-flex justify-content-center'>
          <img className='py-5 mt-3' src={logo} alt="OWL-Ulin" width="100" />
        </div>
        <Form className='px-4 mt-2' method='post' onSubmit={onSubmit}>
          <Form.Group className=' mt-4'>
            <Form.Control 
              onChange={onChange}
              isInvalid={isInValid.username ? 'true' : ''}
              size='lg' 
              type="text" 
              placeholder="Username atau email" 
              name='username'
              value={data.username}
            />
            <Form.Control.Feedback type="invalid">
              Harap masukan username atau email
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className='mb-4 mt-4'>
            <Form.Control 
              onChange={onChange}
              isInvalid={isInValid.password ? 'true' : ''}
              size='lg' 
              type="password" 
              placeholder="Password" 
              name='password'
              value={data.password}
            />
            <Form.Control.Feedback type="invalid">
              Harap masukan password.
            </Form.Control.Feedback>
          </Form.Group>
          {message && 
            <div className='mb-2 d-flex flex-row'>
              <ExclamationCircle size={24} color='red'/>
              <h5 className='violett ml-2 text-danger'>{message}</h5>
            </div>
          }
          <Button size='lg' className='violet font-weight-bold' variant="primary" type="submit" block>
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


const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, {
  login
})(Login)
