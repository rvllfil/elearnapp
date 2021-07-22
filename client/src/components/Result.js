import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { useHistory} from 'react-router-dom'
import { createProgress } from '../redux/actions/progressActions'
import { retrieveProgress } from "../redux/actions/progressActions"

const Result = ({
  data, 
  jawaban, 
  back, 
  createProgress,
  bab_id,
  sub_bab_id,
  user,
  retrieveProgress,
  loading,
  progress
}) => {

  useEffect(() => {
    retrieveProgress()
  }, [retrieveProgress])

  const [nilai, setNilai] = useState([])

  useEffect(() => {
    const arr1 = Object.values(data)
    const arr2 = Object.values(jawaban)
    if(arr1.length>0 && arr2.length>0) {
      setNilai(compare(arr1, arr2))
    }
  }, [data, jawaban])

  const history = useHistory()

  const click = (e) => {
    if(!loading){
      const data = progress.filter(item => item.user_id === user.user_id && item.sub_bab_id === parseInt(sub_bab_id))
      if(data.length < 1) {
        createProgress({
          user_id: user.user_id,
          bab_id: parseInt(bab_id),
          sub_bab_id: parseInt(sub_bab_id)
        })
      }
    }
    history.push('/home')
  }

  console.log(nilai)
  return (
    <>
      <div className='d-flex flex-column min-vh-100 min-vw-100 align-items-center justify-content-center'> 
      <div className='h3 text-capitalize mb-2'>{data.judul_quiz}</div>
        <div className='d-flex flex-column justify-content-center'>
          <div className='h3 text-center text-capitalize'>Nilai quiz :</div>
          {nilai.length > 0 && (
            <div className='text-center d-flex flex-column justify-content-center'>
            <div className='display-2 mb-4'>{nilai.filter(Boolean).length}/{nilai.length}</div>
            {
              nilai.filter(Boolean).length !== nilai.length ?
              <Button className='but2 h2' size='lg' onClick={back}>Coba Lagi</Button> :
              <Button className='but2 h2' size='lg' onClick={click}>Selanjutnya</Button>
            }
            </div>
          )}
          
        </div>
      </div>
    </>
  )
}

const compare = (_arr1, _arr2) => {
  // .concat() to not mutate arguments
  const arr1 = _arr1.concat().sort();
  const arr2 = _arr2.concat().sort();
  let a = []
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
        a = [...a, false];
    } else {
      a = [...a, true] 
    }   
  }
  return a
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    progress: state.progress.progress,
    loading: state.progress.loading
  }
}

export default connect(mapStateToProps, {
  createProgress,
  retrieveProgress
})(Result)
