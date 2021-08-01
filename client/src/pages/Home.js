import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import BabAccordion from '../components/BabAccordion'
import NavBar from '../components/Navbar'
import py from '../img/py.png'

const Home = ({allMateri, loadingBab}) => {
  return (
    <div>
      <NavBar />
      <div className='d-flex justify-content-center mt-4'>
        <div className='rounded-circle border border-primary p-3'>
          <img src={py} alt="py" width='100'/>
        </div>
      </div>
      {
        loadingBab ? 
        <div className='d-flex justify-content-center align-items-start mt-5'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant='primary'/>
        </div> :
        <>
          <div className='mt-3'></div>
          <BabAccordion datas={allMateri}/>
        </>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allMateri: state.allMateri.bab,
    loadingBab: state.allMateri.loading 
  }
}

export default connect(mapStateToProps)(Home)
