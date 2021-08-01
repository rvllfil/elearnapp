import Form from "react-bootstrap/Form"
import { connect } from "react-redux"
import { SuccessAlert, FailedAlert } from './AdminAlert'
import { clearAlert } from '../../redux/actions/alertActions'
import { Spinner } from "react-bootstrap"


const ModalTambahBab = ({
  onChange, 
  onSubmit,
  dataBab,
  isInvalid,
  alert,
  clearAlert
}) => {
  return (
    <div className="modal fade" id="tambah-bab" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-default">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Tambah Bab</h4>
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
                  <Form.Label>Judul</Form.Label>
                  <Form.Control 
                    onChange={onChange} 
                    isInvalid={isInvalid.judul_bab ? 'true' : ''}
                    type="text" 
                    placeholder="Judul" 
                    name='judul_bab'
                    value={dataBab.judul_bab}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan judul.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Urutan Bab</Form.Label>
                  <Form.Control
                    onKeyDown={numeric} 
                    onChange={onChange} 
                    isInvalid={isInvalid.urutan_bab ? 'true' : ''}
                    type="text" 
                    placeholder="Urutan Bab" 
                    name='urutan_bab'
                    value={dataBab.urutan_bab}
                  />
                  <Form.Control.Feedback type="invalid">
                    Harap masukan urutan bab.
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
})(ModalTambahBab)