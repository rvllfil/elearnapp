import { Link, useLocation } from 'react-router-dom'
import logo from '../../../img/logo1.png'


const Menu = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <aside className="main-sidebar sidebar-dark-cyan elevation-4">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={logo} alt="logo" style={{width: '200px'}}/>
          </div>
        </div>
        
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/admin" className={`nav-link ${path === '/admin' ? 'active': ''}`}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Tables
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link to="/admin/bab" className={`nav-link ${path === '/admin/bab' ? 'active': ''}`}>
                <i className="nav-icon fas fa-table" />
                <p>
                  Bab
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/sub-bab" className={`nav-link ${path === '/admin/sub-bab' ? 'active': ''}`}>
                <i className="nav-icon fas fa-table" />
                <p>
                  Sub Bab
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/materi" className={`nav-link ${path === '/admin/materi' ? 'active': ''}`}>
                <i className="nav-icon fas fa-table" />
                <p>
                  Materi
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/quiz" className={`nav-link ${path === '/admin/quiz' ? 'active': ''}`}>
                <i className="nav-icon fas fa-table" />
                <p>
                  Quiz
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}

export default Menu
