import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { BoxArrowLeft, CodeSquare, HouseDoor, List, PersonCircle, XLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import logo1 from '../img/logo1.png'
import Logout from './Logout';
const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar1'>
          <div className='menu-bars1 bg-red'>
            <div className='d-flex align-items-center bg-primary p-2'>
              <List size={30} onClick={showSidebar} color='#fff'/>
            </div>
          </div>
          <Link to='/home' className=''>
            <img src={logo1} alt="logo" />
          </Link>
          <div></div>
          
          <div className="ml-auto nav1">
            <Link to='/home' className='py-auto ml-4'>
              <div className='h6 font-weight-bold'>Home</div>
            </Link>
            <Link to='/live-code' className='py-auto ml-4'>
              <div className='h6 font-weight-bold'>Live Code</div>
            </Link>
            <Link to='/profil' className='py-auto ml-4'>
              <div className='h6 font-weight-bold'>Profil</div>
            </Link>
            <Link to='/home' className='py-auto ml-4'>
              <Logout sty='h6 font-weight-bold'/>
            </Link>
          </div>
          
        </div>
        
        <nav className={sidebar ? 'nav-menu1 active' : 'nav-menu1'}>
          <div className='pt-5 pl-5 d-flex flex-column justify-content-start'>
            <div className='d-flex flex-row-reverse mr-5'>
              <XLg color='white' size={30} onClick={showSidebar}/>
            </div>
            <Link to='/home' className='d-flex flex-row align-items-center mt-2 py-4'>
              <HouseDoor size={30} color='#fff'/>
              <div className='h-100 my-auto d-block h4 ml-4 text-white align-middle'>Home</div>
            </Link>
            <Link to='/profil' className='d-flex flex-row align-items-center mt-2 py-4'>
              <PersonCircle size={30} color='#fff'/>
              <div className='h-100 my-auto d-block h4 ml-4 text-white align-middle'>Profil</div>
            </Link>
            <Link to='/live-code' className='d-flex flex-row align-items-center mt-2 py-4'>
              <CodeSquare size={30} color='#fff'/>
              <div className='h-100 my-auto d-block h4 ml-4 text-white align-middle'>Live Code</div>
            </Link>
            <Link to='/home' className='d-flex flex-row align-items-center mt-2 py-4'>
              <BoxArrowLeft size={30} color='#fff'/>
              <Logout sty='h-100 my-auto d-block h4 ml-4 text-white align-middle'/>
            </Link>
          </div>
        </nav>
        {sidebar && <div className='overlay' onClick={showSidebar}></div>}
    </>
  );
}
export default NavBar
