import React from 'react'
import NavBar from '../components/Navbar'
import { Canvas, DownloadCanvas } from '../components/Certificate'
import { Container, Spinner } from 'react-bootstrap';
import cert from '../img/cert.jpg'
import { connect } from 'react-redux';


const Sertifikat = ({
  user,
  loading
}) => {
  const size = useWindowSize();

  const onClick = e => {
    console.log(e.target)
    console.log(document.getElementById('downloadCanvas').toDataURL('image/jpg'))
    e.target.href = document.getElementById('downloadCanvas').toDataURL()
    e.target.download = 'sertifikat.jpg'
  }

  return (
    <>
      <NavBar />
      <Container>
        <div className="row">
          <div className="col">
            <div className="card mt-3 mx-2">
              <div className="card-header d-flex flex-row justify-content-center">
                <h5 class="card-title">Sertifikat Kelulusan</h5>
                <a className='btn btn-primary ml-auto' href='#downloadCanvas' onClick={onClick}>Download</a> 
              </div>
              <div className="card-body text-center">
              { loading ?   
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className='d-flex align-items-center justify-content-center p-5'> 
                        <Spinner style={{width: '4rem', height: '4rem'}} animation="border" variant='primary'/>
                      </div>
                    </div>
                  </div>
                </div>:
                <>
                {size.width >= 992 &&
                  <Canvas 
                    height='630' 
                    width='891'
                    text={user.nama.toUpperCase()}
                    fontSize='23'
                    textX={58}
                    textY={350}
                  />
                }
                {size.width < 992 && size.width >= 768 && 
                  <Canvas 
                    height='420' 
                    width='594'
                    text={user.nama.toUpperCase()}
                    fontSize='16'
                    textX={39}
                    textY={235}
                  />
                }
                {size.width < 768 &&
                  <Canvas 
                    height='210' 
                    width='297'
                    text={user.nama.toUpperCase()}
                    fontSize='8'
                    textX={19}
                    textY={117}
                  />
                }
                <DownloadCanvas
                  height='840' 
                  width='1188'
                  text={user.nama.toUpperCase()}
                />
                </>
              }
              </div>
            </div>    
          </div>
        </div>
      </Container>

    </>
  )
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.auth.loading 
  }
}

export default connect(mapStateToProps)(Sertifikat)
