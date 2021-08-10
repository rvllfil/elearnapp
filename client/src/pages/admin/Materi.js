import { connect } from "react-redux"
import Header from "../../components/admin/template/Header"
import Footer from "../../components/admin/template/Footer"
import { retrieveMateri, createMateri, updateMateri, deleteMateri } from "../../redux/actions/materiActions"
import { clearAlert } from "../../redux/actions/alertActions"
import { Spinner } from 'react-bootstrap'
import TableMateri from "../../components/admin/TableMateri"
import { useEffect, useState } from "react"
import ModalTambahMateri from "../../components/admin/ModalTambahMateri"
import ModalHapusMateri from "../../components/admin/ModalHapusMateri"
import ModalUbahMateri from "../../components/admin/ModalUbahMateri"

const AdminMateri = ({
  clearAlert,
  materi,
  loading,
  alert,
  retrieveMateri,
  createMateri,
  updateMateri,
  deleteMateri
}) => {
  useEffect(() => {
    retrieveMateri()
  }, [retrieveMateri])

  const initDataMateri = {
    sub_bab_id: '',
    judul_materi: '',
    isi_materi: '',
    urutan_materi: ''
  }
  const initDataMateriIsValid = {
    sub_bab_id: false,
    judul_materi: false,
    isi_materi: false,
    urutan_materi: false
  }
  
  const [materiIsValid, setMateriIsValid] = useState(initDataMateriIsValid)
  const [dataMateri, setDataMateri] = useState(initDataMateri)
  const [dataEditMateri, setDataEditMateri] = useState({
    materi_id: '',
    sub_bab_id: '',
    judul_materi: '',
    isi_materi: '',
    urutan_materi: ''
  })

  const onChange = (e) => {
    setDataMateri({
      ...dataMateri,
      [e.target.name]: e.target.value 
    })
  }

  const onChangeUbah = (e) => {
    setDataEditMateri({
      ...dataEditMateri,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataMateri.sub_bab_id) {
      isInValid = false
      err.sub_bab_id = true
    }
    if(!dataMateri.judul_materi) {
      isInValid = false
      err.judul_materi = true
    }
    if(!dataMateri.isi_materi) {
      isInValid = false
      err.isi_materi = true
    }
    if(!dataMateri.urutan_materi) {
      isInValid = false
      err.urutan_materi = true
    }
    setMateriIsValid({...isInValid, ...err})
    return isInValid
  }

  const validateUbah = () => {
    let err = {}
    let isInValid = true
    if(!dataEditMateri.sub_bab_id) {
      isInValid = false
      err.sub_bab_id = true
    }
    if(!dataEditMateri.judul_materi) {
      isInValid = false
      err.judul_materi = true
    }
    if(!dataEditMateri.isi_materi) {
      isInValid = false
      err.isi_materi = true
    }
    if(!dataEditMateri.urutan_materi) {
      isInValid = false
      err.urutan_materi = true
    }
    setMateriIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      createMateri(dataMateri)
      setDataMateri(initDataMateri)
    } 
  }

  const onSubmitUbah = (e) => {
    if(validateUbah()){
      updateMateri(dataEditMateri)
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
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#tambah-materi" onClick={()=>clearAlert()}>
                      <i className="fas fa-plus mr-2" />
                      Tambah Materi
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
              <TableMateri 
                datas={materi}
                setDataEditMateri={setDataEditMateri}
              />
            }
          </div>

          <ModalTambahMateri 
            onChange={onChange}
            onSubmit={onSubmit}
            dataMateri={dataMateri}
            isInvalid={materiIsValid}
            alert={alert}
          />

          <ModalHapusMateri 
            dataMateri={dataEditMateri}
          />

          <ModalUbahMateri 
            onChange={onChangeUbah}
            onSubmit={onSubmitUbah}
            dataMateri={dataEditMateri}
            isInvalid={materiIsValid}
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
    materi: state.materi.materi,
    loading: state.materi.loading,
    alert: state.alert
  }
}

export default connect(mapStateToProps, {
  retrieveMateri,
  createMateri,
  updateMateri,
  deleteMateri,
  clearAlert
})(AdminMateri)
