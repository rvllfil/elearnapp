import Form from "react-bootstrap/Form"
import { connect } from "react-redux"
import { SuccessAlert, FailedAlert } from './AdminAlert'
import { clearAlert } from '../../redux/actions/alertActions'
import { Spinner } from "react-bootstrap"


const ModalTambahQuiz = ({
  onChange, 
  onSubmit,
  dataQuiz,
  isInvalid,
  alert,
  clearAlert
}) => {
  return (
    <div className="modal fade" id="tambah-quiz" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Tambah Quiz</h4>
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
                  <Form.Label>Sub Bab Id</Form.Label>
                  <Form.Control
                    onKeyDown={numeric} 
                    onChange={onChange} 
                    isInvalid={isInvalid.sub_bab_id ? 'true' : ''}
                    type="text" 
                    placeholder="Sub Bab Id" 
                    name='sub_bab_id'
                    value={dataQuiz.sub_bab_id}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan sub bab id.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Judul</Form.Label>
                  <Form.Control 
                    onChange={onChange} 
                    isInvalid={isInvalid.judul_quiz ? 'true' : ''}
                    type="text" 
                    placeholder="Judul" 
                    name='judul_quiz'
                    value={dataQuiz.judul_quiz}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan judul.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const numeric = e => {
  if(e.keyCode > 57) return e.preventDefault()
}

export default connect(null, {
  clearAlert
})(ModalTambahQuiz)