import { connect } from 'react-redux'
import { deleteBab } from '../../redux/actions/babActions'

const ModalHapusBab = ({
  deleteBab, 
  dataBab
}) => {
  return (
    <div className="modal fade" id="hapus-bab" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-default">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Hapus Data Bab</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Apakah anda yakin untuk menghapus data Bab?</p>
            <p>Menghapus data bab akan otomatis menghapus semua data sub_bab, materi dan quiz yang memiliki data bab id yang sama</p>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => deleteBab(dataBab.bab_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  deleteBab
})(ModalHapusBab)