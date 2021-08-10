import { connect } from "react-redux"
import Header from "../../components/admin/template/Header"
import Menu from "../../components/admin/template/Menu"
import Footer from "../../components/admin/template/Footer"
import { retrieveBab, createBab, updateBab, deleteBab } from "../../redux/actions/babActions"
import { clearAlert } from "../../redux/actions/alertActions"
import { Spinner } from 'react-bootstrap'
import TableBab from "../../components/admin/TableBab"
import { useEffect, useState } from "react"
import ModalTambahBab from "../../components/admin/ModalTambahBab"
import ModalHapusBab from "../../components/admin/ModalHapusBab"
import ModalUbahBab from "../../components/admin/ModalUbahBab"

const AdminBab = ({
  clearAlert,
  bab,
  loading,
  alert,
  retrieveBab,
  createBab,
  updateBab,
  deleteBab
}) => {
  useEffect(() => {
    retrieveBab()
  }, [retrieveBab])

  const initDataBab = {
    judul_bab: '',
    urutan_bab: ''
  }
  const initDataBabIsValid = {
    judul_bab: false,
    urutan_bab: false
  }
  
  const [babIsValid, setBabIsValid] = useState(initDataBabIsValid)
  const [dataBab, setDataBab] = useState(initDataBab)
  const [dataEditBab, setDataEditBab] = useState({
    judul_bab: '',
    urutan_bab: ''
  })

  const onChange = (e) => {
    setDataBab({
      ...dataBab,
      [e.target.name]: e.target.value 
    })
  }

  const onChangeUbah = (e) => {
    setDataEditBab({
      ...dataEditBab,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {}
    let isInValid = true
    if(!dataBab.judul_bab) {
      isInValid = false
      err.judul_bab = true
    }
    if(!dataBab.urutan_bab) {
      isInValid = false
      err.urutan_bab = true
    }
    setBabIsValid({...isInValid, ...err})
    return isInValid
  }

  const validateUbah = () => {
    let err = {}
    let isInValid = true
    if(!dataEditBab.judul_bab) {
      isInValid = false
      err.judul_bab = true
    }
    if(!dataEditBab.urutan_bab) {
      isInValid = false
      err.urutan_bab = true
    }
    setBabIsValid({...isInValid, ...err})
    return isInValid
  }

  const onSubmit = (e) => {
    if(validate()){
      createBab(dataBab)
      setDataBab(initDataBab)
    } 
  }

  const onSubmitUbah = (e) => {
    if(validateUbah()){
      updateBab(dataEditBab)
    } 
  }
  return (
    <div className='wrapper'>
      <Header />
      <div className="content-wrapper">
      <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  Data Bab
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Bab</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="margin p-2">
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#tambah-bab" onClick={()=>clearAlert()}>
                      <i className="fas fa-plus mr-2" />
                      Tambah Bab
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
              <TableBab 
                datas={bab}
                setDataEditBab={setDataEditBab}
              />
            }
          </div>

          <ModalTambahBab 
            onChange={onChange}
            onSubmit={onSubmit}
            dataBab={dataBab}
            isInvalid={babIsValid}
            alert={alert}
          />

          <ModalHapusBab 
            dataBab={dataEditBab}
          />

          <ModalUbahBab 
            onChange={onChangeUbah}
            onSubmit={onSubmitUbah}
            dataBab={dataEditBab}
            isInvalid={babIsValid}
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
    bab: state.bab.bab,
    loading: state.bab.loading,
    alert: state.alert
  }
}

export default connect(mapStateToProps, {
  retrieveBab,
  createBab,
  updateBab,
  deleteBab,
  clearAlert
})(AdminBab)
