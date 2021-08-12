import { Link } from "react-router-dom"
import Footer from "../../components/admin/template/Footer"
import Header from "../../components/admin/template/Header"
import { useParams } from "react-router"
import { connect } from "react-redux"
import { retrieveSoalQuiz } from '../../redux/actions/soalQuizActions'
import { clearAlert } from '../../redux/actions/alertActions'
import { useEffect, useState } from "react"
import { Spinner } from 'react-bootstrap'
import ModalTambahSoal from "../../components/admin/ModalTambahSoal"
import ModalUbahSoal from "../../components/admin/ModalUbahSoal"
import ModalHapusSoal from "../../components/admin/ModalHapusSoal"
import ModalTambahJawaban from "../../components/admin/ModalTambahJawaban"
import ModalHapusJawaban from "../../components/admin/ModalHapusJawaban"
import ModalUbahJawaban from "../../components/admin/ModalUbahJawaban"


const DetailQuiz = ({
  soalQuiz,
  loadingSoal,
  retrieveSoalQuiz,
  clearAlert
}) => {

  const { quiz_id } = useParams()

  useEffect(() => {
    retrieveSoalQuiz(quiz_id)
  }, [retrieveSoalQuiz, quiz_id])

  const [dataSoal, setDataSoal] = useState({
    quiz_id: quiz_id
  })

  const [dataJawaban, setDataJawaban] = useState({
    jawaban_quiz_id: '',
    soal_quiz_id: '',
    text_jawaban: '',
    benar: ''
  })


  return (
    <div className='wrapper'>
      <Header />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  Detail Quiz
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active"><Link to='/admin/quiz'>Quiz</Link></li>
                  <li className="breadcrumb-item active">Detail Quiz</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
            { loadingSoal ? 
                <div className="col-12">
                  <div className="card" style={{width: '100%'}}>
                    <div className='d-flex align-items-center justify-content-center p-5'> 
                      <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
                    </div>
                  </div>
                </div>
              :
              <div className="col-12">
                { soalQuiz.map((data, index)=> {
                  return (
                    <div key={index} className="card">
                      <div className="card-header d-flex flex-row align-items-center">
                        <h5>{data.text_soal}</h5>
                        <button type="button" className="btn btn-outline-primary ml-auto" data-toggle="modal" data-target="#ubah-soal" 
                        onClick={() => {
                          setDataSoal({
                          ...dataSoal,
                          soal_quiz_id: data.soal_quiz_id,
                          text_soal: data.text_soal 
                          })
                          clearAlert()
                        }}
                        >
                          <i className="fas fa-edit mr-2" />
                          Edit
                        </button>
                        <button type="button" className="btn btn-outline-danger ml-2" data-toggle="modal" data-target="#hapus-soal" 
                        onClick={() => {
                          setDataSoal({
                          ...dataSoal,
                          soal_quiz_id: data.soal_quiz_id,
                          text_soal: data.text_soal 
                          })
                          clearAlert()
                        }}
                        >
                          <i className="fas fa-trash mr-2" />
                          Hapus
                        </button>
                      </div>
                      <div className="card-body">
                      { data.jawaban !== null ? data.jawaban.map((jawaban, idx) => {
                          return (
                            
                            // <div className='p-2 d-flex f align-items-center'>
                              <div className="row d-flex flex-row align-items-center">
                                <div className="col-md-8 d-flex flex-row"> 
                                  <h5 className=''>
                                    [{jawaban.benar ? 'Benar' : 'Salah '}]
                                  </h5>
                                  <div className="row">
                                    <div className="col-12">
                                    <h5 className='ml-3'>{jawaban.text_jawaban}</h5>    
                                    </div>
                                  </div>
                                  
                                </div>
                                <div className="col d-flex flex-row justify-content-end">
                                  <button type="button" className="btn text-primary" data-toggle="modal" data-target="#ubah-jawaban" 
                                  onClick={()=> {
                                    setDataJawaban({
                                      ...dataJawaban,
                                      jawaban_quiz_id: jawaban.jawaban_quiz_id,
                                      soal_quiz_id: data.soal_quiz_id,
                                      text_jawaban: jawaban.text_jawaban,
                                      benar: jawaban.benar
                                    })
                                    clearAlert()
                                  }}
                                  >
                                    <i className="fas fa-edit mr-2" />
                                    Edit
                                  </button>
                                  <button type="button" className="btn text-danger" data-toggle="modal" data-target="#hapus-jawaban" 
                                  onClick={()=> {
                                    setDataJawaban({
                                      ...dataJawaban,
                                      jawaban_quiz_id: jawaban.jawaban_quiz_id,
                                      soal_quiz_id: data.soal_quiz_id,
                                      text_jawaban: jawaban.text_jawaban,
                                      benar: jawaban.benar
                                    })
                                    clearAlert()
                                  }}
                                  >
                                    <i className="fas fa-trash mr-2" />
                                    Hapus {data.jawaban_quiz_id}
                                  </button>
                                </div>
                              </div>                           
                            // </div>
                          )
                        })
                        :
                        ''
                      }
              
                        <button type="button" className="btn text-primary" data-toggle="modal" data-target="#tambah-jawaban"
                        onClick={() => {
                          setDataJawaban({
                            ...dataJawaban,
                            soal_quiz_id: data.soal_quiz_id,
                            text_jawaban: '',
                            benar: ''
                          })
                          clearAlert()
                        }}
                        >
                          <i className="fas fa-plus mr-2" />
                          Tambah Jawaban
                        </button>
                            
                      </div>

                    </div>
                    )
                  })
                }
              </div>
              }
              <div className='col-12'>
                <div className="card text-center">
                  <div className="margin p-2">
                    <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#tambah-soal" 
                      onClick={()=>{
                        setDataSoal({
                          text_soal: '' 
                        })
                        clearAlert()
                      }}
                    >
                      <i className="fas fa-plus mr-2" />
                      Tambah Soal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <ModalTambahSoal 
        data={dataSoal}
      />

      <ModalUbahSoal 
        data={dataSoal}
      />
      <ModalHapusSoal 
        id={dataSoal.soal_quiz_id}
      />

      <ModalTambahJawaban 
        data={dataJawaban}
      />

      <ModalUbahJawaban 
        data={dataJawaban}
      />

      <ModalHapusJawaban 
        id={dataJawaban.jawaban_quiz_id}
      />

      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    soalQuiz: state.soalQuiz.soalQuiz,
    loadingSoal: state.soalQuiz.loading
  }
}

export default connect(mapStateToProps, {
  retrieveSoalQuiz,
  clearAlert
})(DetailQuiz)
