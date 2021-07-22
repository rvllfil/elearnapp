import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { CheckCircleFill, Circle, PlayCircleFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { retrieveUserProgress } from '../redux/actions/progressActions'
import { Spinner } from 'react-bootstrap'

const BabAccordion = ({
  datas,
  progress,
  loadingUser,
  loading,
  retrieveUserProgress,
  user,
  loadUser
}) => {

  useEffect(() => {
    if(!loadingUser) {
      if(user !== null) {
        retrieveUserProgress(user.user_id)
      }
    }
  }, [retrieveUserProgress, user, loadingUser])

  return (
    <>
    {
      loading ? 
      <div className='d-flex justify-content-center align-items-start mt-5'>
        <Spinner style={{width: '5rem', height: '5rem'}} animation="border" variant='primary'/>
      </div> :
      <Container className='mt-5 px-2'>
        <Accordion>
          {
            datas.map((data, index) => {    
              return (
                progress.length < 1 ?
                  index === 0 ?
                  <Card key={index} className='border border-primary mt-1'>
                    <Accordion.Toggle role='button' className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab}>
                      <div className='d-flex flex-row'>
                        <div className='font-weight-bold text-capitalize'>{data.judul_bab}</div>
                        <div className='ml-auto'>{progress.filter(p => p.bab_id === data.bab_id).length}/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
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
                            data.sub_bab.sort((a, b) => (a.urutan_sub_bab > b.urutan_sub_bab) ? 1 : -1).map((sub, jndex) => {
                              return (
                                sub.urutan_sub_bab <= progress.filter(p => p.bab_id === data.bab_id).length + 1 ?
                                <Link className='text-dark' key={jndex} to={`/materi/${data.bab_id}/${sub.sub_bab_id}`}>
                                  <ListGroup.Item role='button' className={ `border border-primary text-capitalize ${sub.urutan_sub_bab === 1 ? '' : 'mt-1'}`}>
                                    <div className='d-flex flex-row'>
                                      <div>{sub.judul_sub_bab}</div>
                                      { progress.filter(p => p.sub_bab_id === sub.sub_bab_id).length > 0 ? 
                                        <CheckCircleFill size={22} color='#7293F5' className='ml-auto'/> :
                                        <Circle size={22} color='#0275d8' className='ml-auto'/>
                                      }
                                    </div>
                                  </ListGroup.Item>
                                </Link> :
                                <ListGroup.Item role='button' className={ `border border-secndary text-capitalize ${sub.urutan_sub_bab === 1 ? '' : 'mt-1'}`}>
                                  <div className='d-flex flex-row'>
                                    <div>{sub.judul_sub_bab}</div>
                                    { progress.filter(p => p.sub_bab_id === sub.sub_bab_id).length > 0 ? 
                                      <CheckCircleFill size={22} color='#7293F5' className='ml-auto'/> :
                                      <Circle size={22} color='#6c757d' className='ml-auto'/>
                                    }
                                  </div>
                                </ListGroup.Item>
                              )
                            })
                          }
                        </ListGroup>
                        </Card>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card> :
                  <Card key={index} className='border border-secondary mt-1'>
                    <Accordion.Toggle className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab}>
                      <div className='d-flex flex-row'>
                        <div className='font-weight-bold text-capitalize'>{data.judul_bab}</div>
                        <div className='ml-auto'>{progress.filter(p => p.bab_id === data.bab_id).length}/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
                          <div
                          className='my-auto ml-2' 
                          style={{
                            transform: 'rotate(90deg)'
                          }}
                          >                
                            <PlayCircleFill
                            size={22} color='grey'/>
                          </div>
                      </div>
                    </Accordion.Toggle>
                  </Card>
                :
                progress.filter(p => p.bab_id === data.bab_id).length + 1 >= 1 ?
                <Card key={index} className='border border-primary mt-1'>
                  <Accordion.Toggle role='button' className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab}>
                    <div className='d-flex flex-row'>
                      <div className='font-weight-bold text-capitalize'>{data.judul_bab}</div>
                      <div className='ml-auto'>{progress.filter(p => p.bab_id === data.bab_id).length}/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
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
                          data.sub_bab.sort((a, b) => (a.urutan_sub_bab > b.urutan_sub_bab) ? 1 : -1).map((sub, jndex) => {
                            return (
                              sub.urutan_sub_bab <= progress.filter(p => p.bab_id === data.bab_id).length + 1 ?
                              <Link className='text-dark' key={jndex} to={`/materi/${data.bab_id}/${sub.sub_bab_id}`}>
                                <ListGroup.Item role='button' className={ `border border-primary text-capitalize ${sub.urutan_sub_bab === 1 ? '' : 'mt-1'}`}>
                                  <div className='d-flex flex-row'>
                                    <div>{sub.judul_sub_bab}</div>
                                    { progress.filter(p => p.sub_bab_id === sub.sub_bab_id).length > 0 ? 
                                      <CheckCircleFill size={22} color='#7293F5' className='ml-auto'/> :
                                      <Circle size={22} color='#0275d8' className='ml-auto'/>
                                    }
                                  </div>
                                </ListGroup.Item>
                              </Link> :
                              <ListGroup.Item role='button' className={ `border border-secndary text-capitalize ${sub.urutan_sub_bab === 1 ? '' : 'mt-1'}`}>
                                <div className='d-flex flex-row'>
                                  <div>{sub.judul_sub_bab}</div>
                                  { progress.filter(p => p.sub_bab_id === sub.sub_bab_id).length > 0 ? 
                                    <CheckCircleFill size={22} color='#7293F5' className='ml-auto'/> :
                                    <Circle size={22} color='#6c757d' className='ml-auto'/>
                                  }
                                </div>
                              </ListGroup.Item>
                            )
                          })
                        }
                      </ListGroup>
                      </Card>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card> :
                <Card key={index} className='border border-secondary mt-1'>
                  <Accordion.Toggle className='border-bottom border-primary' as={Card.Header} eventKey={data.urutan_bab}>
                    <div className='d-flex flex-row'>
                      <div className='font-weight-bold text-capitalize'>{data.judul_bab}</div>
                      <div className='ml-auto'>{progress.filter(p => p.bab_id === data.bab_id).length}/{data.sub_bab === null ? '0' : data.sub_bab.length}</div>
                        <div
                        className='my-auto ml-2' 
                        style={{
                          transform: 'rotate(90deg)'
                        }}
                        >                
                          <PlayCircleFill
                          size={22} color='grey'/>
                        </div>
                    </div>
                  </Accordion.Toggle>
                </Card>
              )
            })
          }
        </Accordion>
      </Container>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loadingUser: state.auth.loading,
    progress: state.progress.progress,
    loading: state.progress.loading 
  }
}

export default connect(mapStateToProps, {
  retrieveUserProgress
})(BabAccordion)
