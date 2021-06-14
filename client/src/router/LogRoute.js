import { connect } from 'react-redux'
import { Redirect, Route, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

const LogRoute = ({ 
  comp: Component,
  auth: { user, isLoading }, 
  ...rest 
}) => {
  const [status, setStatus] = useState('')
  const history = useHistory()
  useEffect(() => {
    try {
      if (!isLoading && user.role === 'user') {
        setStatus('user')
      } else if (!isLoading && user.role === 'admin') {
        setStatus('admin')
      }
    } catch (e) {
      setStatus('')
    }
    if (status === 'admin') {
      history.push('/admin')
    } else if (status === 'user') {
      history.push('/home')
    } 
  }, [user, isLoading, status, history])
  return (
    <>
      { isLoading ?
        <div className='d-flex min-vh-100 min-vw-100 align-items-center justify-content-center'> 
          <Spinner style={{width: '8rem', height: '8rem'}} animation="border" variant='primary'/>
        </div>:
        (<Route
          {...rest}
          render={props =>
            !isLoading && !status ? (     
              <Component {...props} />
            ) : (  
              !isLoading && status === 'admin' ? <Redirect to='/admin'/> :
              !isLoading && status === 'user'? <Redirect to='/home'/> :
              <div></div>
            )
          }
        />)
      }
    </>
  )
}

LogRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(LogRoute)