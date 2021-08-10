import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { clearAlert } from "../../redux/actions/alertActions"

const TableMateri = ({
  datas,
  setDataEditMateri,
  clearAlert
}) => {
  const [filtered, setFiltered] = useState(datas)
  const toStr = (str) => {
    if(str === null){
      return ''
    } else if(Number.isInteger(str)) {
      return str.toString()
    } else {
      return str
    }
  }

  useEffect(() => {
    setFiltered(datas)
  }, [datas])

  const onSearch = (e) => {
    const input = e.target.value
    const search = input.toLowerCase()
    if(datas.length > 0){
      setFiltered(datas.filter(item => {
        return Object.keys(item).some(key => toStr(item[key]).toLowerCase().includes(search)
        )
      }))
    }    
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Data Materi</h3>
            <div className="card-tools">
              <div className="input-group input-group-sm" style={{width: 150}}>
                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" onChange={onSearch} />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>Sub Bab Id</th>
                  <th>Judul Materi</th>
                  <th>Urutan Materi</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.sort((a, b) => (a.sub_bab_id > b.sub_bab_id) ? 1 : -1).map((data, index)=> {
                  return (
                    <>
                      <tr key={index}>
                        <td>{data.sub_bab_id}</td>
                        <td className='text-capitalize'>{data.judul_materi}</td>
                        <td>{data.urutan_materi}</td>
                        <td>
                          <button 
                            type="button" 
                            className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#ubah-materi" 
                            onClick={() => {
                              setDataEditMateri({
                                materi_id: data.materi_id,
                                sub_bab_id: data.sub_bab_id,
                                judul_materi: data.judul_materi,
                                isi_materi: data.isi_materi,
                                urutan_materi: data.urutan_materi
                              })
                              clearAlert()
                            }}
                          >
                            <i className="fas fa-edit mr-2" />
                            Ubah
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-danger ml-3" 
                            data-toggle="modal" 
                            data-target="#hapus-materi"
                            onClick={() => {
                              setDataEditMateri({
                                materi_id: data.materi_id,
                                sub_bab_id: data.sub_bab_id,
                                judul_materi: data.judul_materi,
                                isi_materi: data.isi_materi,
                                urutan_materi: data.urutan_materi
                              })
                              clearAlert()
                            }}
                          >
                            <i className="fas fa-trash mr-2" />
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </>
                  )  
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  clearAlert
})(TableMateri)