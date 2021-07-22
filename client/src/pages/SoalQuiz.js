import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import Result from '../components/Result'
import Soal from './Soal'

const SoalQuiz = ({bab, loading}) => {
  const { bab_id, sub_bab_id } = useParams()
  const [subBab, setSubBab] = useState([])
  const [quiz, setQuiz] = useState({})
  const [page, setPage] = useState(1)
  const [finish, setFinish] = useState(false)
  const [dataJawaban, setDataJawaban] = useState({})
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    setSubBab(bab.filter(data => data.bab_id === parseInt(bab_id)).map(bab => bab.sub_bab.filter(sub_bab => sub_bab.sub_bab_id === parseInt(sub_bab_id))))
  }, [bab, bab_id, sub_bab_id])

  useEffect(() => {
    if(subBab !== undefined) {
      if(subBab.length > 0) {
        setQuiz(subBab[0][0].quiz[0].soal_quiz)
      }
    }
  }, [setQuiz, subBab])

  const nextPage = () => {
    setPage(page+1)
  }

  const prevPage = () => {
    setPage(page-1)
  }

  const back = () => {
    setFinish(false)
    setPage(1)
    setDataJawaban({})
  }
  
  const benar = () => {
    let result = {}
    if( quiz.length > 0){
      quiz.map((soal) => {
        const jwb = soal.jawaban_quiz.filter(jawaban => jawaban.benar === true)
        return result = {
          ...result, 
          [soal.soal_quiz_id]: jwb[0].jawaban_quiz_id
        }
      })
      return result
    }
  }

  const getFinish = () => {
    const jawaban = benar()    
    if(Object.values(dataJawaban).length === Object.values(jawaban).length) {
      setPage(page+1)
      setFinish(true)
      setAlert(false)
    } else {
      setAlert(true)
    }
  }

  const onChange = (e) => {
    setDataJawaban({...dataJawaban, [e.target.name]: e.target.value})
  }

  


  return (
    <div>
      {
        alert && (
          <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
            <Alert.Heading>Ada Pertanyaan yang belum terjawab</Alert.Heading>
          </Alert>
        )
      } 
  
      {
        quiz === undefined || quiz.length > 0 ?
        quiz.map((data, index) =>  {
          if((index === 0)&&(page === 1)) {
            return (
              <Soal 
                key={index} 
                data={data} 
                prevPage={null} 
                nextPage={nextPage}
                finish={null}
                onChange={onChange}
                dataJawaban={dataJawaban}
              />
            )
          } else if((index === quiz.length-1)&&(page === quiz.length)) {
            return (
              <Soal 
                key={index} 
                data={data} 
                prevPage={prevPage}
                nextPage={null} 
                finish={getFinish}
                onChange={onChange}
                dataJawaban={dataJawaban}
              />
            )
          } else if(((index !== 0)&&(index !== quiz.length-1))&&(page === index+1)) {
              return (
                <Soal 
                  key={index} 
                  data={data} 
                  nextPage={nextPage}
                  prevPage={prevPage}
                  finish={null}
                  onChange={onChange}
                  dataJawaban={dataJawaban}
                />
              )    
          } else {
            return <></>
          } 
        }) :
        <div className='d-flex justify-content-center align-items-start mt-5'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant='primary'/>
        </div> 
        
      }

      { finish && (
        <Result 
          data={dataJawaban} 
          jawaban={benar()}
          back={back}
          bab_id={bab_id}
          sub_bab_id={sub_bab_id}
        />
      )}
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bab: state.bab.bab,
    loading: state.bab.loading,
  }
}

export default connect(mapStateToProps)(SoalQuiz)
