const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/jawaban-quiz
// @desc    Get All Jawaban Quiz
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM jawaban_quiz;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM jawaban_quiz WHERE %s;', data)
  }
  try {
    const jawaban_quiz = await pool.query(sql)
    if(!jawaban_quiz.rows) throw Error("Data Jawaban Quiz tidak ditemukan")
    res.status(200).json(jawaban_quiz.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/jawaban-quiz
// @desc    Get One Jawaban Quiz
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const jawaban_quiz = await pool.query("SELECT * FROM jawaban_quiz WHERE jawaban_quiz_id = $1", [id])
    if(!jawaban_quiz.rows[0]) throw Error("Data Jawaban Quiz tidak ditemukan")
    res.status(200).json(jawaban_quiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/jawaban-quiz
// @desc    Create Jawaban Quiz
// @access  Public
router.post('/', async (req, res) => {
  const {soal_quiz_id, text_jawaban, benar} = req.body
  try {
    const newJawabanQuiz = await pool.query("INSERT INTO jawaban_quiz (soal_quiz_id, text_jawaban, benar) VALUES ($1, $2, $3) RETURNING *", [soal_quiz_id, text_jawaban, benar])
    if(!newJawabanQuiz.rows) throw Error('Terjadi Kesalahan ketika menyimpan Data Jawaban Quiz')
    res.status(201).json(newJawabanQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/jawaban-quiz
// @desc    Edit Jawaban Quiz
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const UpdateData = data(req.body, keys)
  const sql = format("UPDATE jawaban_quiz SET %s WHERE jawaban_quiz_id = %L RETURNING *", UpdateData, id)
  try {
    const updateJawabanQuiz = await pool.query(sql)
    if(!updateJawabanQuiz.rows) throw Error('Terjadi Kesalahan ketika mengedit Data Jawaban Quiz')
    res.status(200).json(updateJawabanQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/jawaban-quiz
// @desc    Remove a Jawaban Quiz
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteJawabanQuiz = await pool.query("DELETE FROM jawaban_quiz WHERE jawaban_quiz_id = $1 RETURNING *", [id])
    if(!deleteJawabanQuiz.rows) throw Error("Data Jawaban Quiz tidak ditemukan")
    res.status(200).json(deleteJawabanQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router