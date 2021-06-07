import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import BabAccordion from '../components/BabAccordion'


const Home = ({bab, loadingBab}) => {
  return (
    <div>
      {
        loadingBab ? 
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
          <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant='primary'/>
        </div> :
        <>
          <div className='mt-3'></div>
          <BabAccordion datas={bab}/>
        </>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bab: state.bab.bab,
    loadingBab: state.bab.loading 
  }
}

export default connect(mapStateToProps)(Home)
