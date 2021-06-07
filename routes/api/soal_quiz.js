const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/soal-quiz
// @desc    Get All Soal Quiz
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM soal_quiz;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM soal_quiz WHERE %s;', data)
  }
  try {
    const soal_quiz = await pool.query(sql)
    if(!soal_quiz.rows) throw Error("Data Soal Quiz tidak ditemukan")
    res.status(200).json(soal_quiz.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/soal-quiz
// @desc    Get One Soal Quiz
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const soal_quiz = await pool.query("SELECT * FROM soal_quiz WHERE soal_quiz_id = $1", [id])
    if(!soal_quiz.rows[0]) throw Error("Data Soal Quiz tidak ditemukan")
    res.status(200).json(soal_quiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/soal-quiz
// @desc    Create Soal Quiz
// @access  Public
router.post('/', async (req, res) => {
  const {quiz_id, text_soal} = req.body
  try {
    const newSoalQuiz = await pool.query("INSERT INTO soal_quiz (quiz_id, text_soal) VALUES ($1, $2) RETURNING *", [quiz_id, text_soal])
    if(!newSoalQuiz.rows) throw Error('Terjadi Kesalahan ketika menyimpan Data Soal Quiz')
    res.status(201).json(newSoalQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/soal-quiz
// @desc    Edit Soal Quiz
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const UpdateData = data(req.body, keys)
  const sql = format("UPDATE soal_quiz SET %s WHERE soal_quiz_id = %L RETURNING *", UpdateData, id)
  try {
    const updateSoalQuiz = await pool.query(sql)
    if(!updateSoalQuiz.rows) throw Error('Terjadi Kesalahan ketika mengedit Data Soal Quiz')
    res.status(200).json(updateSoalQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/soal-quiz
// @desc    Remove a Soal Quiz
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteSoalQuiz = await pool.query("DELETE FROM soal_quiz WHERE soal_quiz_id = $1", [id])
    if(!deleteSoalQuiz) throw Error("Data Soal Quiz tidak ditemukan")
    res.status(200).json({msg: 'data berhasil dihapus'})
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router