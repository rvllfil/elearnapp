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
    sql = format(`
    select
    soal_quiz_id, quiz_id, text_soal,
      (
        select array_to_json(array_agg(s))
        from (
          select jawaban_quiz_id, text_jawaban, benar
          from jawaban_quiz where soal_quiz.soal_quiz_id = jawaban_quiz.soal_quiz_id
        ) s
      ) as jawaban
    from soal_quiz
  `, data)
  } else {
    const data = dataAnd(query, keys)
    sql = format(`
      select
      soal_quiz_id, quiz_id, text_soal,
        (
          select array_to_json(array_agg(s))
          from (
            select jawaban_quiz_id, text_jawaban, benar
            from jawaban_quiz where soal_quiz.soal_quiz_id = jawaban_quiz.soal_quiz_id
          ) s
        ) as jawaban
      from soal_quiz where %s
    `, data)
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
    const soalQuiz = await pool.query(`
    select
    soal_quiz_id, quiz_id, text_soal,
      (
        select array_to_json(array_agg(s))
        from (
          select jawaban_quiz_id, text_jawaban, benar
          from jawaban_quiz where soal_quiz.soal_quiz_id = jawaban_quiz.soal_quiz_id
        ) s
      ) as jawaban
    from soal_quiz where soal_quiz_id = $1
  `, [newSoalQuiz.rows[0].soal_quiz_id])
    res.status(201).json(soalQuiz.rows[0])
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
    const soalQuiz = await pool.query(`
    select
    soal_quiz_id, quiz_id, text_soal,
      (
        select array_to_json(array_agg(s))
        from (
          select jawaban_quiz_id, text_jawaban, benar
          from jawaban_quiz where soal_quiz.soal_quiz_id = jawaban_quiz.soal_quiz_id
        ) s
      ) as jawaban
    from soal_quiz where soal_quiz_id = $1
  `, [updateSoalQuiz.rows[0].soal_quiz_id])
    res.status(200).json(soalQuiz.rows[0])
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
    const deleteSoalQuiz = await pool.query("DELETE FROM soal_quiz WHERE soal_quiz_id = $1 RETURNING *", [id])
    if(!deleteSoalQuiz.rows) throw Error("Data Soal Quiz tidak ditemukan")
    const deleteJawaban = await pool.query("DELETE FROM jawaban_quiz WHERE soal_quiz_id = $1", [id])
    res.status(200).json(deleteSoalQuiz.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

module.exports = router