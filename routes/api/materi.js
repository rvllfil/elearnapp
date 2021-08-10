const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')

const data = (obj, keys) => { 
  let result = []
  keys.map(key => {
	result = [...result, key+' = '+"'"+ obj[key]+"'"]
  })
  return result
}

const arrStr = (arr) => {
  let a = [] 
  arr.map(i => {
    a = [...a, "'"+i+"'"] 
  })
  let result = a.toString()
  return result
}

const dataAnd = (obj, keys) => { 
  let arr = []
  let result
  keys.map(key => {
	arr = [...arr, key+' = '+"'"+ obj[key]+"'"]
  })
  let str = arr.toString()
  if (keys.length > 1){
    result = str.replace(/,/g, ' AND ')
  } else {
    result = str  
  }
  return result
}


// @route   GET api/materi
// @desc    Get All Materi
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM materi ORDER BY sub_bab_id, urutan_materi;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM materi WHERE %s ORDER BY sub_bab_id, urutan_materi', data)
  }
  try {
    const materi = await pool.query(sql)
    if(!materi) throw Error("Data Materi tidak ditemukan")
    res.status(200).json(materi.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/materi
// @desc    Get One Materi
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const materi = await pool.query("SELECT * FROM materi WHERE materi_id = $1", [id])
    if(!materi) throw Error("Data Materi tidak ditemukan")
    res.status(200).json(materi.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/materi
// @desc    Create Materi
// @access  Public
router.post('/', async (req, res) => {
  const b = Object.values(req.body)
  const keys = Object.keys(req.body).toString()
  const body = arrStr(b)
  const sql = format('INSERT INTO materi (%s) VALUES (%s) RETURNING *', keys, body)
  
  try {
    const newBab = await pool.query(sql)
    if(!newBab) throw Error('Terjadi Kesalahan ketika menyimpan Data Materi')
    res.status(201).json(newBab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/materi
// @desc    Edit Materi
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const body = req.body
  const keys = Object.keys(body)
  const updateData = data(body, keys)
  const sql = format('UPDATE materi SET %s WHERE materi_id = %s RETURNING *', updateData, id)
  try {
    const updateMateri = await pool.query(sql)
    if(!updateMateri) throw Error('Terjadi Kesalahan ketika menyimpan Data Materi')
    res.status(200).json(updateMateri.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/materi
// @desc    Remove a Materi
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteMateri = await pool.query("DELETE FROM materi WHERE materi_id = $1 RETURNING *", [id])
    if(!deleteMateri.rows) throw Error("Data Materi tidak ditemukan")
    res.status(200).json(deleteMateri.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router