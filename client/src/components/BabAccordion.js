import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { PlayCircleFill } from 'react-bootstrap-icons'

const BabAccordion = ({datas}) => {
  const [isRotate, setIsRotate] = useState(false)

  const rotate = () => {
    setIsRotate(!isRotate)
  }

  const transitionStyle = {
    transform: isRotate ? 'rotate(90deg)': '',
    transition: 'transform 500ms ease-in-out'
  }

  return (
    <>
      <Container>
        <Accordion>
          {
            datas.map((data, index) => {
              return (
                <Card key={index} className='border border-primary mt-1'>
                  <Accordion.Toggle className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab} onClick={rotate}>
                    <div className='d-flex flex-row'>
                      <div className='text-capitalize'>{data.judul_bab}</div>
                      <div className='ml-auto'>0/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
                        <div
                        className='my-auto ml-2' 
                        style={{
                          ...transitionStyle
                        }}
                        >                
                          <PlayCircleFill
                          size={22} color='royalBlue'/>
                        </div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={data.urutan_bab}>
                    <Card.Body>
                      <Card>
                      <ListGroup variant="flush">
                        {
                          data.sub_bab === null ? 'Belum Ada Sub Bab' :
                          data.sub_bab.map((sub, index) => {
                            return (
                              <ListGroup.Item key={index} className={ sub.urutan_sub_bab === 1 ? 'border border-primary text-capitalize' : 'mt-1 border border-primary text-capitalize'}>
                                {sub.judul_sub_bab}
                              </ListGroup.Item>     
                            )
                          })
                        }
                      </ListGroup>
                      </Card>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })
          }
        </Accordion>
      </Container>
    </>
  )
}

export default BabAccordion
