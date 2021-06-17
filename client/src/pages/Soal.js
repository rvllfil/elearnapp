import { Button, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Soal = ({
  data, 
  prevPage, 
  nextPage, 
  finish, 
  onChange,
  dataJawaban
}) => {
  const jawaban = data.jawaban_quiz
  return (
    <>
      <Container className='mt-5'>
        <Card body>
          <h5>{data.text_soal}</h5>
          <Container className='mt-4 d-flex flex-column'>
            {jawaban.map((radio, idx) => (
              <Button
                className='mb-2 text-left'
                name={data.soal_quiz_id}
                key={idx}
                variant={radio.jawaban_quiz_id == dataJawaban[data.soal_quiz_id] ? 'secondary' : 'outline-secondary'}
                value={radio.jawaban_quiz_id}                 
                onClick={onChange}
              >
                {radio.text_jawaban}
              </Button> 
            ))}
          </Container>
        </Card>
        <div className='d-flex flex-row justify-content-center mt-3 mb-3'>
        { prevPage === null ?
          <Button onClick={prevPage} style={{opacity: '0.6', cursor: 'not-allowed', margin: '10px'}}>Kembali</Button>
          :  
          <Button onClick={prevPage} style={{margin: '10px'}}>Kembali</Button>
        }
        { nextPage === null ?
          <Button onClick={finish} style={{margin: '10px'}}>Selesai</Button>
          :  
          <Button onClick={nextPage} style={{margin: '10px'}}>Selanjutnya</Button>
        }
      </div>
      </Container>
    </>
  )
}

export default Soal
