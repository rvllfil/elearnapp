import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Quiz = ({bab_id, sub_bab_id, data, prevPage}) => {
  return (
    <>
      <div className='d-flex flex-column min-vh-100 min-vw-100 align-items-center justify-content-center'> 
      <div className='h3 text-capitalize mb-5'>{data.judul_quiz}</div>
        <div className='d-flex flex-row justify-content-center'>
          <Button className='but' onClick={prevPage}>Kembali</Button>
          <Link to={`/quiz/${bab_id}/${sub_bab_id}`}><Button className='ml-3 but'>Mulai</Button></Link>     
        </div>
      </div>
    </>
  )
}

export default Quiz