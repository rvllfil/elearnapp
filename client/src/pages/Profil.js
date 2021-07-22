import { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import NavBar from '../components/Navbar'
import { retrieveUserProgress } from '../redux/actions/progressActions'
import { retrieveSubbab } from '../redux/actions/subbabActions'

const Profil = ({
  user,
  progress,
  loading,
  retrieveUserProgress,
  retrieveSubbab,
  subbab,
  loadingSubbab
}) => {
  useEffect(() => {
    if(user !== null) {
      retrieveUserProgress(user.user_id)
    }
  }, [retrieveUserProgress, user])

  useEffect(() => {
    retrieveSubbab()
  }, [retrieveSubbab])

  return (
    <>
    <NavBar />
      <Container>
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            {user.jenis_kelamin === 'laki-laki' &&
              <img className="profile-user-img img-fluid img-circle" src="../../dist/img/avatar4.png" alt="user" />
            }
            {user.jenis_kelamin === 'perempuan' &&
              <img className="profile-user-img img-fluid img-circle" src="../../dist/img/avatar2.png" alt="user" />
            }
          </div>
          <h3 className="profile-username text-center">{user.nama}</h3>
          <p className="text-muted text-center">{user.username}</p>
          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Email</b> <b className="float-right">{user.email}</b>
            </li>
            <li className="list-group-item">
              <b>Mulai Belajar</b> <b className="float-right">{moment(user.tanggal_registrasi)}</b>
            </li>
          </ul>
        </div>
        {/* /.card-body */}
      </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Kemajuan Belajar</h3>
          </div>
          {/* /.card-header */}
          { loadingSubbab && loading ?   
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className='d-flex align-items-center justify-content-center p-5'> 
                      <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
                    </div>
                  </div>
                </div>
              </div>:
              <div className="card-body">
              <div className="progress mb-3">
                <div className="progress-bar bg-info" role="progressbar" aria-valuenow={progress.length/subbab.length*100} aria-valuemin={0} aria-valuemax={100} style={{width: `${progress.length/subbab.length*100}%`}}>
                  <span className="sr-only">{progress.length/subbab.length*100}% Complete</span>
                </div>
              </div>
            </div>
            }
          {/* /.card-body */}
        </div>
      </Container>
    </>
  )
}

const moment = (date) => {
  let dated = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  let result = dated.toLocaleDateString('id-ID', options)
  return result 
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    progress: state.progress.progress,
    subbab: state.subbab.subbab,
    loadingSubbab: state.subbab.loading,
    loading: state.progress.loading 
  }
}

export default connect(mapStateToProps, {
  retrieveUserProgress,
  retrieveSubbab
})(Profil)
