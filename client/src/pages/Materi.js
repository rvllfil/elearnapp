import DOMPurify from 'dompurify'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { ArrowRightSquareFill, ArrowLeftSquareFill } from 'react-bootstrap-icons'
import { useEffect } from 'react'

const Materi = ({data, nextPage, prevPage}) => {
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Container className='mt-3 fontsize mw-100'>
      <div className='row'>
        <div className='col-md-6'>
          <Card body className='mt-3'>
            <div dangerouslySetInnerHTML={createMarkup(data.isi_materi)}></div>
          </Card>
        </div>
        <div className='col-md-6'>
          <div className='mt-3'>
            <iframe title={`fr${data}.materi_id`} src="https://trinket.io/embed/python3/65d69a8bf4?font=22px" width="100%" height="360" frameBorder="0" marginWidth="0" marginHeight="0" allowFullScreen></iframe>     
          </div>
        </div>
      </div>
      
      
      <div className='d-flex flex-row justify-content-center mt-3 mb-3'>
        { prevPage === null ?
          <ArrowLeftSquareFill color='#0275d8' style={{opacity: '0.6', cursor: 'not-allowed'}} size={40}/>
          :  
          <ArrowLeftSquareFill color='#0275d8' size={40} onClick={prevPage}/>
        }
        <ArrowRightSquareFill color='#0275d8' size={40} className='ml-3' onClick={nextPage}/>
      </div>
    </Container>
    </>
  )
}

export default Materi
