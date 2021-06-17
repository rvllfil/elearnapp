import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useHistory} from 'react-router-dom'

const Result = ({data, jawaban, back}) => {
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

export default Result
