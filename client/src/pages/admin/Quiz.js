import { connect } from "react-redux"
import Header from "../../components/admin/template/Header"
import Footer from "../../components/admin/template/Footer"
import { retrieveQuiz, createQuiz, updateQuiz, deleteQuiz } from "../../redux/actions/quizActions"
import { clearAlert } from "../../redux/actions/alertActions"
import { Spinner } from 'react-bootstrap'
import TableQuiz from "../../components/admin/TableQuiz"
import { useEffect, useState } from "react"
import ModalTambahQuiz from "../../components/admin/ModalTambahQuiz"
import ModalHapusQuiz from "../../components/admin/ModalHapusQuiz"
import ModalUbahQuiz from "../../components/admin/ModalUbahQuiz"

const AdminQuiz = ({
  clearAlert,
  quiz,
  loading,
  alert,
  retrieveQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz
}) => {
  useEffect(() => {
    retrieveQuiz()
  }, [retrieveQuiz])

  const initDataQuiz = {
    sub_bab_id: '',
    judul_quiz: ''
  }
  const initDataQuizIsValid = {
    sub_bab_id: false,
    judul_quiz: false,
  }
  
  const [quizIsValid, setQuizIsValid] = useState(initDataQuizIsValid)
  const [dataQuiz, setDataQuiz] = useState(initDataQuiz)
  const [dataEditQuiz, setDataEditQuiz] = useState({
    quiz_id: '',
    sub_bab_id: '',
    judul_quiz: ''
  })

  const onChange = (e) => {
    setDataQuiz({
      ...dataQuiz,
      [e.target.name]: e.target.value 
    })
  }

  const onChangeUbah = (e) => {
    setDataEditQuiz({
      ...dataEditQuiz,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataQuiz.sub_bab_id) {
      isInValid = false
      err.sub_bab_id = true
    }
    if(!dataQuiz.judul_quiz) {
      isInValid = false
      err.judul_quiz = true
    }
    setQuizIsValid({...isInValid, ...err})
    return isInValid
  }

  const validateUbah = () => {
    let err = {}
    let isInValid = true
    if(!dataEditQuiz.sub_bab_id) {
      isInValid = false
      err.sub_bab_id = true
    }
    if(!dataEditQuiz.judul_quiz) {
      isInValid = false
      err.judul_quiz = true
    }
    setQuizIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      createQuiz(dataQuiz)
      setDataQuiz(initDataQuiz)
    } 
  }

  const onSubmitUbah = (e) => {
    if(validateUbah()){
      updateQuiz(dataEditQuiz)
    } 
  }
  return (
    <div className='wrapper'>
      <Header />
      <div className="content-wrapper">
        <div className="content pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="margin p-2">
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#tambah-quiz" onClick={()=>clearAlert()}>
                      <i className="fas fa-plus mr-2" />
                      Tambah Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
            { loading ?   
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className='d-flex align-items-center justify-content-center p-5'> 
                      <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
                    </div>
                  </div>
                </div>
              </div>:
              <TableQuiz 
                datas={quiz}
                setDataEditQuiz={setDataEditQuiz}
              />
            }
          </div>

          <ModalTambahQuiz 
            onChange={onChange}
            onSubmit={onSubmit}
            dataQuiz={dataQuiz}
            isInvalid={quizIsValid}
            alert={alert}
          />

          <ModalHapusQuiz 
            dataQuiz={dataEditQuiz}
          />

          <ModalUbahQuiz 
            onChange={onChangeUbah}
            onSubmit={onSubmitUbah}
            dataQuiz={dataEditQuiz}
            isInvalid={quizIsValid}
            alert={alert}
          />

        </div>
      </div>
      <Footer /> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
    alert: state.alert
  }
}

export default connect(mapStateToProps, {
  retrieveQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  clearAlert
})(AdminQuiz)
