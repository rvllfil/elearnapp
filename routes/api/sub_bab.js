const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/sub-bab
// @desc    Get All Sub Bab
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM sub_bab ORDER BY bab_id, urutan_sub_bab;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM sub_bab WHERE %s ORDER BY bab_id, urutan_sub_bab', data)
  }
  try {
    const sub_bab = await pool.query(sql)
    if(!sub_bab) throw Error("Data Sub Bab tidak ditemukan")
    res.status(200).json(sub_bab.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/sub-bab
// @desc    Get One Sub Bab
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const sub_bab = await pool.query("SELECT * FROM sub_bab WHERE sub_bab_id = $1", [id])
    if(!sub_bab.rows[0]) throw Error("Data Sub Bab tidak ditemukan")
    res.status(200).json(sub_bab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/sub-bab
// @desc    Create Sub Bab
// @access  Public
router.post('/', async (req, res) => {
  const {bab_id, judul_sub_bab} = req.body
  try {
    const newSubBab = await pool.query("INSERT INTO sub_bab (bab_id, judul_sub_bab) VALUES ($1, $2) RETURNING *", [bab_id, judul_sub_bab])
    if(!newSubBab) throw Error('Terjadi Kesalahan ketika menyimpan Data Sub Bab')
    res.status(201).json(newSubBab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/sub-bab
// @desc    Edit Sub Bab
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const UpdateData = data(req.body, keys)
  const sql = format("UPDATE sub_bab SET %s WHERE sub_bab_id = %L RETURNING *", UpdateData, id)
  try {
    const updateSubBab = await pool.query(sql)
    if(!updateSubBab) throw Error('Terjadi Kesalahan ketika menyimpan Data Bab')
    res.status(200).json(updateSubBab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/sub-bab
// @desc    Remove a Sub Bab
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteSubBab = await pool.query("DELETE FROM sub_bab WHERE sub_bab_id = $1", [id])
    if(!deleteSubBab) throw Error("Data Sub Bab tidak ditemukan")
    res.status(200).json({msg: 'data berhasil dihapus'})
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router