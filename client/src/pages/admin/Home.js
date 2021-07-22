import Content from "../../components/admin/template/Content"
import Footer from "../../components/admin/template/Footer"
import Header from "../../components/admin/template/Header"
import Menu from "../../components/admin/template/Menu"

const AdminHome = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              Hello World
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default AdminHome
