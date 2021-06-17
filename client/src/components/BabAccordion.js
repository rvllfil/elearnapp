import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { CheckCircleFill, Circle, PlayCircleFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const BabAccordion = ({datas}) => {

  return (
    <>
      <Container className='mt-5'>
        <Accordion>
          {
            datas.map((data, index) => {
              return (
                <Card key={index} className='border border-primary mt-1'>
                  <Accordion.Toggle role='button' className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab}>
                    <div className='d-flex flex-row'>
                      <div className='font-weight-bold text-capitalize'>{data.judul_bab}</div>
                      <div className='ml-auto'>0/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
                        <div
                        className='my-auto ml-2' 
                        style={{
                          transform: 'rotate(90deg)'
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
                          data.sub_bab.map((sub, jndex) => {
                            return (
                              <Link className='text-dark' key={jndex} to={`/materi/${data.bab_id}/${sub.sub_bab_id}`}>
                                <ListGroup.Item role='button' className={ `border border-primary text-capitalize ${sub.urutan_sub_bab === 1 ? '' : 'mt-1'}`}>
                                  <div className='d-flex flex-row'>
                                    <div>{sub.judul_sub_bab}</div>
                                    { false ? 
                                      <CheckCircleFill size={22} color='#5cb85c' className='ml-auto'/> :
                                      <Circle size={22} color='#0275d8' className='ml-auto'/>
                                    }
                                  </div>
                                </ListGroup.Item>
                              </Link>     
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
