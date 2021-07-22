import { connect } from "react-redux"
import Header from "../../components/admin/template/Header"
import Menu from "../../components/admin/template/Menu"
import Footer from "../../components/admin/template/Footer"
import { retrieveSubbab, createSubbab, updateSubbab, deleteSubbab } from "../../redux/actions/subbabActions"
import { clearAlert } from "../../redux/actions/alertActions"
import { Spinner } from 'react-bootstrap'
import TableSubbab from "../../components/admin/TableSubbab"
import { useEffect, useState } from "react"
import ModalTambahSubbab from "../../components/admin/ModalTambahSubbab"
import ModalHapusSubbab from "../../components/admin/ModalHapusSubbab"
import ModalUbahSubbab from "../../components/admin/ModalUbahSubbab"

const AdminSubbab = ({
  clearAlert,
  subbab,
  loading,
  alert,
  retrieveSubbab,
  createSubbab,
  updateSubbab,
  deleteSubbab
}) => {
  useEffect(() => {
    retrieveSubbab()
  }, [retrieveSubbab])

  const initDataSubbab = {
    bab_id: '',
    judul_sub_bab: '',
    urutan_sub_bab: ''
  }
  const initDataSubbabIsValid = {
    bab_id: false,
    judul_sub_bab: false,
    urutan_sub_bab: false
  }
  
  const [subbabIsValid, setSubbabIsValid] = useState(initDataSubbabIsValid)
  const [dataSubbab, setDataSubbab] = useState(initDataSubbab)
  const [dataEditSubbab, setDataEditSubbab] = useState({
    sub_bab_id: '',
    bab_id: '',
    judul_sub_bab: '',
    urutan_sub_bab: ''
  })

  const onChange = (e) => {
    setDataSubbab({
      ...dataSubbab,
      [e.target.name]: e.target.value 
    })
  }

  const onChangeUbah = (e) => {
    setDataEditSubbab({
      ...dataEditSubbab,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataSubbab.bab_id) {
      isInValid = false
      err.bab_id = true
    }
    if(!dataSubbab.judul_sub_bab) {
      isInValid = false
      err.judul_sub_bab = true
    }
    if(!dataSubbab.urutan_sub_bab) {
      isInValid = false
      err.urutan_sub_bab = true
    }
    setSubbabIsValid({...isInValid, ...err})
    return isInValid
  }

  const validateUbah = () => {
    let err = {}
    let isInValid = true
    if(!dataEditSubbab.bab_id) {
      isInValid = false
      err.bab_id = true
    }
    if(!dataEditSubbab.judul_sub_bab) {
      isInValid = false
      err.judul_sub_bab = true
    }
    if(!dataEditSubbab.urutan_sub_bab) {
      isInValid = false
      err.urutan_sub_bab = true
    }
    setSubbabIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      createSubbab(dataSubbab)
      setDataSubbab(initDataSubbab)
    } 
  }

  const onSubmitUbah = (e) => {
    if(validateUbah()){
      updateSubbab(dataEditSubbab)
    } 
  }

  return (
    <div className='wrapper'>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="margin p-2">
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#tambah-sub-bab" onClick={()=>clearAlert()}>
                      <i className="fas fa-plus mr-2" />
                      Tambah Sub Bab
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
              <TableSubbab 
                datas={subbab}
                setDataEditSubbab={setDataEditSubbab}
              />
            }
          </div>

          <ModalTambahSubbab 
            onChange={onChange}
            onSubmit={onSubmit}
            dataSubbab={dataSubbab}
            isInvalid={subbabIsValid}
            alert={alert}
          />

          <ModalHapusSubbab 
            dataSubbab={dataEditSubbab}
          />

          <ModalUbahSubbab 
            onChange={onChangeUbah}
            onSubmit={onSubmitUbah}
            dataSubbab={dataEditSubbab}
            isInvalid={subbabIsValid}
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
    subbab: state.subbab.subbab,
    loading: state.subbab.loading,
    alert: state.alert
  }
}

export default connect(mapStateToProps, {
  retrieveSubbab,
  createSubbab,
  updateSubbab,
  deleteSubbab,
  clearAlert
})(AdminSubbab)
