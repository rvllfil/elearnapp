const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/progress
// @desc    Get All Progress
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM progress;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM progress WHERE %s;', data)
  }
  try {
    const progress = await pool.query(sql)
    if(!progress.rows) throw Error("Data Progress tidak ditemukan")
    res.status(200).json(progress.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/progress
// @desc    Get One Progress
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const progress = await pool.query("SELECT * FROM progress WHERE progress_id = $1", [id])
    if(!progress.rows[0]) throw Error("Data Progress tidak ditemukan")
    res.status(200).json(progress.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/progress
// @desc    Create Progress
// @access  Public
router.post('/', async (req, res) => {
  const {user_id, sub_bab_id, completed, waktu} = req.body
  try {
    const newProgress = await pool.query("INSERT INTO progress (user_id, sub_bab_id, completed, waktu) VALUES ($1, $2, $3, $4) RETURNING *", [user_id, sub_bab_id, completed, waktu])
    if(!newProgress.rows) throw Error('Terjadi Kesalahan ketika menyimpan Data Progress')
    res.status(201).json(newProgress.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/Progress
// @desc    Edit Progress
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const UpdateData = data(req.body, keys)
  const sql = format("UPDATE progress SET %s WHERE progress_id = %L RETURNING *", UpdateData, id)
  try {
    const updateProgress = await pool.query(sql)
    if(!updateProgress.rows) throw Error('Terjadi Kesalahan ketika mengedit Data Progress')
    res.status(200).json(updateProgress.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/progress
// @desc    Remove a Progress
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteProgress = await pool.query("DELETE FROM progress WHERE progress_id = $1", [id])
    if(!deleteProgress) throw Error("Data Progress tidak ditemukan")
    res.status(200).json({msg: 'data berhasil dihapus'})
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router