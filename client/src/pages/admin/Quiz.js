import React from 'react'
import Header from '../../components/admin/template/Header'
import Menu from '../../components/admin/template/Menu'

const AdminQuiz = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="content-wrapper">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              Quiz
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AdminQuiz
