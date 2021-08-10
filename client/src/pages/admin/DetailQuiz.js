import { Link } from "react-router-dom"
import Footer from "../../components/admin/template/Footer"
import Header from "../../components/admin/template/Header"
import { useParams } from "react-router"
import { connect } from "react-redux"
import { retrieveSoalQuiz } from '../../redux/actions/soalQuizActions'
import { retrieveJawabanQuiz } from '../../redux/actions/jawabanQuizActions'
import { useEffect } from "react"
import { Spinner } from 'react-bootstrap'


const DetailQuiz = ({
  soalQuiz,
  loadingSoal,
  retrieveSoalQuiz
}) => {

  const { quiz_id } = useParams()

  useEffect(() => {
    retrieveSoalQuiz(quiz_id)
  }, [retrieveSoalQuiz, quiz_id])



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
            { false ? 
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
                      <div className="card-body">
                      {data.text_soal}
                      </div>
                    </div>
                    )
                  })
                }
              </div>
              }
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

// const Jawaban = ({
//   id,
//   jawabanQuiz,
//   loadingJawaban,,
//   retrieveJawabanQuiz
// }) => {
//   useEffect(() => {
//     retrieveJawabanQuiz(id)
//   }, [retrieveJawabanQuiz])
//   return (
//     <>
//     { !loadingJawaban ?   
//       <tr>
//         <td colspan='3' style={{align: 'center'}}>
//           <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
//         </td>
//       </tr>
//       :
//       <>
//         {jawabanQuiz.map((data, index)=> {
//             return (
//               <tr>
//                 <td style={{width: '60%'}}>{jawabanQuiz.text_jawaban}</td>
//                 <td style={{width: '10%'}}>{jawabanQuiz.benar}</td>
//                 <td></td>
//               </tr>
//             )
//           })
//         }
//       </>
//     }
//     </>
//   )
// }

const mapStateToProps = (state) => {
  return {
    soalQuiz: state.soalQuiz.soalQuiz,
    loadingSoal: state.soalQuiz.loading,
    jawabanQuiz: state.jawabanQuiz.jawabanQuiz,
    loadingJawaban: state.jawabanQuiz.loading,
  }
}

export default connect(mapStateToProps, {
  retrieveSoalQuiz,
  retrieveJawabanQuiz
})(DetailQuiz)
