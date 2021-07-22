import { connect } from 'react-redux'
import { deleteSubbab } from '../../redux/actions/subbabActions'

const ModalHapusSubbab = ({
  deleteSubbab, 
  dataSubbab
}) => {
  return (
    <div className="modal fade" id="hapus-sub-bab" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-default">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Hapus Data Sub Bab</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Apakah anda yakin untuk menghapus data Sub?</p>
            <p>Menghapus data sub bab akan otomatis menghapus semua data materi dan quiz yang memiliki data sub bab id yang sama</p>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => deleteSubbab(dataSubbab.sub_bab_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  deleteSubbab
})(ModalHapusSubbab)