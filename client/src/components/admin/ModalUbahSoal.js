import Form from "react-bootstrap/Form"
import { connect } from "react-redux"
import { SuccessAlert, FailedAlert } from './AdminAlert'
import { clearAlert } from '../../redux/actions/alertActions'
import { updateSoalQuiz } from '../../redux/actions/soalQuizActions'
import { Spinner } from "react-bootstrap"
import { useEffect, useState } from "react"


const ModalUbahSoal = ({
  data,
  alert,
  clearAlert,
  updateSoalQuiz
}) => {
  const [dataSoal, setDataSoal] = useState({
    soal_quiz_id: data.soal_quiz_id,
    quiz_id: data.quiz_id,
    text_soal: data.text_soal
  })

  useEffect(() => {
    setDataSoal({
      soal_quiz_id: data.soal_quiz_id,
      quiz_id: data.quiz_id,
      text_soal: data.text_soal
    })
  }, [data])

  const [soalIsValid, setSoalIsValid] = useState({
    text_soal: false
  })
  
  const onChange = e => {
    setDataSoal({
      ...dataSoal,
      [e.target.name]: e.target.value 
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataSoal.text_soal) {
      isInValid = false
      err.text_soal = true
    }
    setSoalIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      updateSoalQuiz(dataSoal)
    } 
  }
  
  

  return (
    <div className="modal fade" id="ubah-soal" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Ubah Soal</h4>
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
                  <Form.Label>Teks Soal</Form.Label>
                  <Form.Control 
                    onChange={onChange} 
                    isInvalid={soalIsValid.text_soal ? 'true' : ''}
                    as="textarea" 
                    rows={4}
                    placeholder="Teks Soal" 
                    name='text_soal'
                    value={dataSoal.text_soal}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan soal.
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
  updateSoalQuiz
})(ModalUbahSoal)