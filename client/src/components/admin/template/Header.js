import { useState } from 'react'
import Logout from '../../Logout'
import logo from '../../../img/logo1.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [state, setState] = useState(false)
  const location = useLocation()
  const path = location.pathname
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" data-widget="pushmenu" role="button" onClick={()=>setState(!state)}><i className="fas fa-bars" /></div>
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
            <Link to="/admin" className="nav-link">Home</Link>
          </li> */}
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          {/* <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li> */}
          {/* <li className="nav-item">
            <div className="nav-link" data-widget="fullscreen" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </div>
          </li> */}
          <li className="nav-item">
            <div className="nav-link dropdown-toggle" id="dropdownSubMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" role="button">
              <i className="fas fa-cog" />
            </div>
            <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow" style={{left:'inherit', right: 0}}>
              <li><Logout sty='dropdown-item'/></li>
            </ul>
          </li>

        </ul>
      </nav>
      {state && <div className='overlay over' data-widget="pushmenu" role="button" onClick={()=>setState(!state)}></div>}
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
              {/* <li className="nav-item" data-widget="pushmenu" role="button">
                <Link to="/admin" className={`nav-link ${path === '/admin' ? 'active': ''}`}>
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li> */}
              <li className="nav-item" data-widget="pushmenu" role="button">
                <Link to="/admin/bab" className={`nav-link ${path === '/admin/bab' ? 'active': ''}`}>
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Bab
                  </p>
                </Link>
              </li>
              <li className="nav-item" data-widget="pushmenu" role="button">
                <Link to="/admin/sub-bab" className={`nav-link ${path === '/admin/sub-bab' ? 'active': ''}`}>
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Sub Bab
                  </p>
                </Link>
              </li>
              <li className="nav-item" data-widget="pushmenu" role="button">
                <Link to="/admin/materi" className={`nav-link ${path === '/admin/materi' ? 'active': ''}`}>
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Materi
                  </p>
                </Link>
              </li>
              <li className="nav-item" data-widget="pushmenu" role="button">
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
    </>
  )
}

export default Header
