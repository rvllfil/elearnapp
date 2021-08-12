import { connect } from 'react-redux'
import { deleteJawabanQuiz } from '../../redux/actions/jawabanQuizActions'

const ModalHapusJawaban = ({
  deleteJawabanQuiz, 
  id
}) => {
  
  const onSubmit = () => {
    deleteJawabanQuiz(id)
  }

  return (
    <div className="modal fade" id="hapus-jawaban" style={{display: 'none'}} aria-hidden="true">
      <div className="modal-dialog modal-default">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Hapus Data Jawaban</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Apakah anda yakin untuk menghapus data Jawaban?</p>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" 
            onClick={onSubmit}
            >Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  deleteJawabanQuiz
})(ModalHapusJawaban)

// export default ModalHapusJawaban