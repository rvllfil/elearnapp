const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/quiz
// @desc    Get All Quiz
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM quiz;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM quiz WHERE %s;', data)
  }
  try {
    const quiz = await pool.query(sql)
    if(!quiz) throw Error("Data Quiz tidak ditemukan")
    res.status(200).json(quiz.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/quiz
// @desc    Get One Quiz
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const quiz = await pool.query("SELECT * FROM quiz WHERE quiz_id = $1", [id])
    if(!quiz.rows[0]) throw Error("Data Quiz tidak ditemukan")
    res.status(200).json(quiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/quiz
// @desc    Create Quiz
// @access  Public
router.post('/', async (req, res) => {
  const {sub_bab_id, judul_quiz} = req.body
  try {
    const newQuiz = await pool.query("INSERT INTO quiz (sub_bab_id, judul_quiz) VALUES ($1, $2) RETURNING *", [sub_bab_id, judul_quiz])
    if(!newQuiz.rows) throw Error('Terjadi Kesalahan ketika menyimpan Data Quiz')
    res.status(201).json(newQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/quiz
// @desc    Edit Quiz
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const UpdateData = data(req.body, keys)
  const sql = format("UPDATE quiz SET %s WHERE quiz_id = %L RETURNING *", UpdateData, id)
  try {
    const updateQuiz = await pool.query(sql)
    if(!updateQuiz.rows) throw Error('Terjadi Kesalahan ketika mengedit Data Quiz')
    res.status(200).json(updateQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/quiz
// @desc    Remove a Quiz
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteQuiz = await pool.query("DELETE FROM quiz WHERE quiz_id = $1 RETURNING *", [id])
    if(!deleteQuiz.rows) throw Error("Data Quiz tidak ditemukan")
    res.status(200).json(deleteQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router