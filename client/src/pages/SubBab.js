import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router"
import { Redirect } from "react-router-dom"
import Materi from './Materi'
import Quiz from './Quiz'
import Spinner from 'react-bootstrap/Spinner'
import NavBar from '../components/Navbar'

const SubBab = ({bab, loading}) => {
  const { bab_id, sub_bab_id } = useParams()
  const [subBab, setSubBab] = useState({})
  const [pageData, setPageData] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    setSubBab(bab.filter(data => data.bab_id === parseInt(bab_id)).map(bab => bab.sub_bab.filter(sub_bab => sub_bab.sub_bab_id === parseInt(sub_bab_id)))[0])
  }, [bab, bab_id, sub_bab_id])


  useEffect(() => {
    if(subBab !== undefined) {
      if(subBab.length > 0) {
        setPageData(subBab[0].quiz !== null ? [...subBab[0].materi, ...subBab[0].quiz] : [...subBab[0].materi, {}])
      }
    }
  }, [setPageData, subBab])

  const nextPage = () => {
    setPage(page+1)
  }

  const prevPage = () => {
    setPage(page-1)
  }

  const home = () => {
    <Redirect to="/home" />
  }

  return (
    <>
      <NavBar />
      {
        pageData.length > 0 ? 
          pageData.map((data, index) => {
            if((index === 0)&&(page === 1)) {
              return (<Materi 
                  key={index}
                  data={data} 
                  nextPage={nextPage}
                  prevPage={null}
                />)        
            } else if((index === pageData.length-1)&&(page === pageData.length)) {
              console.log('harusnya tidak terpilih')
              return <Quiz key={index} bab_id={bab_id} sub_bab_id={sub_bab_id} data={data} prevPage={prevPage}/>
            } else {
              if(((index !== 0)&&(index !== pageData.length+1))&&(page === index+1)) {
                console.log('wow ini dia')
                console.log(data)
                return <Materi
                    key={index} 
                    data={data} 
                    nextPage={nextPage}
                    prevPage={prevPage}
                  /> 
              }
            }
          })
        :
        <div className='d-flex min-vh-100 min-vw-100 align-items-center justify-content-center'> 
          <Spinner style={{width: '8rem', height: '8rem'}} animation="border" variant='primary'/>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    bab: state.bab.bab,
    loading: state.bab.loading,
  }
}

export default connect(mapStateToProps)(SubBab)