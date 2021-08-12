import Form from "react-bootstrap/Form"
import { connect } from "react-redux"
import { SuccessAlert, FailedAlert } from './AdminAlert'
import { clearAlert } from '../../redux/actions/alertActions'
import { updateJawabanQuiz } from '../../redux/actions/jawabanQuizActions'
import { Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"


const ModalUbahJawaban = ({
  updateJawabanQuiz,
  data,
  alert,
  clearAlert
}) => {
  const [dataJawaban, setDataJawaban] = useState({
    jawaban_quiz_id: data.jawaban_quiz_id,
    soal_quiz_id: data.soal_quiz_id,
    text_jawaban: data.text_jawaban,
    benar: data.benar
  })

  useEffect(() => {
    setDataJawaban({
      jawaban_quiz_id: data.jawaban_quiz_id,
      soal_quiz_id: data.soal_quiz_id,
      text_jawaban: data.text_jawaban,
      benar: data.benar
    })
  }, [data])

  const [jawabanIsValid, setJawabanIsValid] = useState({
    text_jawaban: false,
    benar: null
  })
  
  const onChange = e => {
    setDataJawaban({
      ...dataJawaban,
      [e.target.name]: e.target.value 
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataJawaban.text_jawaban) {
      isInValid = false
      err.text_jawaban = true
    }
    if(!dataJawaban.benar === null) {
      isInValid = false
      err.benar = true
    }
    setJawabanIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      updateJawabanQuiz(dataJawaban)
    } 
  }
  
  

  return (
    <div className="modal fade" id="ubah-jawaban" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Ubah Jawaban</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {
              alert.loading ?
                <div className='d-flex align-items-center justify-content-center p-5'> 
                  <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
                </div> :
                alert.alert !== 0 ? 
                  alert.alert === 1 ? 
                    <SuccessAlert close={()=>clearAlert()} text={alert.msg}/> : 
                    alert.alert === 2 ? 
                    <FailedAlert close={()=>clearAlert()} text={alert.msg}/> : 
                  '' : 
                ''
            }
            <div className="row">
              <div className="col-md">
                <Form.Group>
                  <Form.Label>Teks Jawaban</Form.Label>
                  <Form.Control 
                    onChange={onChange} 
                    isInvalid={jawabanIsValid.text_jawaban ? 'true' : ''}
                    as="textarea"
                    rows={4} 
                    placeholder="Teks Jawaban" 
                    name='text_jawaban'
                    value={dataJawaban.text_jawaban}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan jawaban.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Jenis Jawaban</Form.Label>
                  <Form.Control
                    onChange={onChange}
                    isInvalid={jawabanIsValid.benar ? 'true' : ''}
                    as="select" 
                    name='benar'
                    value={dataJawaban.benar}
                  >
                    <option value=''>-- Jenis Jawaban --</option>
                    <option value={true}>Jawaban Benar</option>
                    <option value={false}>Jawaban Salah</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Harap masukan jenis jawaban
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={onSubmit}
              >
                Submit
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps, {
  clearAlert,
  updateJawabanQuiz
})(ModalUbahJawaban)