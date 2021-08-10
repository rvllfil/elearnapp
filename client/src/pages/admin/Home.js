import Footer from "../../components/admin/template/Footer"
import Header from "../../components/admin/template/Header"
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  Dashboard
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              Hello World
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminHome
