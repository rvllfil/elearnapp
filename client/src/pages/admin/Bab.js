import Header from "../../components/admin/template/Header"
import Menu from "../../components/admin/template/Menu"

const AdminBab = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              Bab
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AdminBab
