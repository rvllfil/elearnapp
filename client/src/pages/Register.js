import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.jpg'
import { Link, useHistory } from 'react-router-dom'
import  Container  from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import { CheckCircle, ExclamationCircle } from 'react-bootstrap-icons'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { register } from '../redux/actions/authAction'

const Register = ({register, error}) => {
  const initData = {
    username: '',
    nama: '',
    jenis_kelamin: '',
    email: '',
    password: ''
  }
  const initMsg = {
    username: false,
    nama: false,
    jenis_kelamin: false,
    email: false,
    password: false,
    konfirmasi: false,
    confirmed: false
  }
  
  const [data, setData] = useState(initData)
  const [isInValid, setIsInValid] = useState(initMsg)
  const [confirmed, setConfirmed] = useState({
    password: false,
    confirmed: false
  })
  const [konfirmasi, setKonfirmasi] = useState('')
  const [message, setMessage] = useState('')
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const onPassword = (e) => {
    let text = e.target.value
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    if(text.length > 7){
      setIsInValid({
        ...isInValid,
        [e.target.name]: false
      })
      setConfirmed({
        ...confirmed,
        [e.target.name]: true
      })
    } else if(text.length < 8){
      setConfirmed({
        ...confirmed,
        [e.target.name]: false
      })
    }
  }

  const onConfirm = (e) => {
    setKonfirmasi(e.target.value)
    if(e.target.value === data.password) {
      setConfirmed({
        ...confirmed,
        [e.target.name]: true
      })
      setIsInValid({
        ...isInValid,
        [e.target.name]: false
      })
    } else {
      setConfirmed({
        ...confirmed,
        [e.target.name]: false
      })
    }
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!data.username) {
      isInValid = false
      err.username = true
    }
    if(!data.nama) {
      isInValid = false
      err.nama = true
    }
    if(!data.jenis_kelamin) {
      isInValid = false
      err.jenis_kelamin = true
    }
    if(!data.email) {
      isInValid = false
      err.email = true
    }
    if(!data.password) {
      isInValid = false
      err.password = true
    }
    if(!konfirmasi) {
      isInValid = false
      err.konfirmasi = true
    }else if(!confirmed.konfirmasi){
      isInValid = false
      err.confirmed = true
    }
    setIsInValid({...isInValid, ...err})
    return isInValid
  }

  const history = useHistory()
  const onSubmit = (e) => {
    
    e.preventDefault()
    if(validate()){
      register(data, history)
      setData(initData)
      setKonfirmasi('')
      setConfirmed({
        password: false,
        confirmed: false
      })
    }
  }
  
  useEffect((prevProps) => {
    if (error !== prevProps) {
      // check for register error
      if (error.id === 'REGISTER_FAIL') {
        setMessage(error.msg.msg)
      }
    }
    
  }, [error])

  return (
    <>
      <Container>
        <div className='mt-2 d-flex justify-content-center'>
          <img className='py-5' src={logo} alt="OWL-Ulin" width="100" />
        </div>

        <Form className='px-4' method='post' onSubmit={onSubmit}>
          <Form.Group className=' mt-4'>
            <Form.Control 
              onChange={onChange} 
              isInvalid={isInValid.username ? 'true' : ''}
              size='lg' 
              type="text" 
              placeholder="Username" 
              name='username'
              value={data.username}
            />
            <Form.Control.Feedback type="invalid">
              Harap masukan username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className=' mt-4'>
            <Form.Control
            onChange={onChange}
            isInvalid={isInValid.nama ? 'true' : ''}
            size='lg' 
            type="text" 
            placeholder="Nama Lengkap" 
            name='nama'
            value={data.nama}
          />
            <Form.Control.Feedback type="invalid">
              Harap masukan nama lengkap.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className=' mt-4'>
            <Form.Control
              onChange={onChange}
              isInvalid={isInValid.jenis_kelamin ? 'true' : ''}
              as="select" 
              size="lg" 
              name='jenis_kelamin'
              value={data.jenis_kelamin}
            >
              <option disabled value=''>Jenis Kelamin</option>
              <option value='laki-laki'>Laki-laki</option>
              <option value='perempuan'>Perempuan</option> 
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Harap masukan Jenis Kelamin
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className=' mt-4'>
            <Form.Control 
              onChange={onChange}
              isInvalid={isInValid.email ? 'true' : ''}
              size='lg' 
              type="email" 
              placeholder="Email" 
              name='email'
              value={data.email}
            />
            <Form.Control.Feedback type="invalid">
              Harap masukan email
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className=' mt-4'>
            <Form.Control 
              onChange={onPassword}
              isInvalid={isInValid.password || isInValid.confirmed ? 'true' : ''}
              isValid={confirmed.password ? 'true' : ''}
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

          <Form.Group className='mb-5 mt-4'>
            <Form.Control 
              onChange={onConfirm}
              isInvalid={isInValid.konfirmasi || isInValid.confirmed ? 'true' : ''}
              isValid={confirmed.konfirmasi ? 'true' : ''}
              size='lg' 
              type="password" 
              placeholder="Konfirmasi Password" 
              name='konfirmasi'
              value={konfirmasi}
            />
            <Form.Control.Feedback type="invalid">
              { isInValid.confirmed ? 'Konfirmasi password tidak sesuai' : 'Harap masukan konfirmasi password.'}
            </Form.Control.Feedback>
          </Form.Group>
          {message && 
            <div className='mb-2 d-flex flex-row'>
              <ExclamationCircle size={24} color='red'/>
              <h5 className='violett ml-2 text-danger'>{message}</h5>
            </div>
          }
          
          <Button size='lg' className='violet font-weight-bold' variant="primary" type="submit" block>
            Daftar
          </Button>
        
          
          <div className='mt-5 mb-5 d-flex flex-row justify-content-center'>
            <div>Punya akun ?</div>
            <Link className='violett ml-2' to='/login'>Masuk</Link>
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
  register
})(Register)
