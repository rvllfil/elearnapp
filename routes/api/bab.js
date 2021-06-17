const express = require('express')
const router = express.Router()
const pool = require('./../../db')
const format = require('pg-format')
const { data, dataAnd } = require('../../function')

// @route   GET api/bab/all
// @desc    Get All Bab nested
// @access  Public
router.get('/all', async (req, res) => {
  const sql = `
    select
      array_to_json(array_agg(bab))
      from (
        select bab_id, urutan_bab, judul_bab,
        (
          select array_to_json(array_agg(s))
          from (
            select sub_bab_id, urutan_sub_bab, judul_sub_bab, 
            (
              select array_to_json(array_agg(m)) 
              from (
                select materi_id, urutan_materi, judul_materi, isi_materi
                from materi where materi.sub_bab_id = sub_bab.sub_bab_id
              ) m
            ) as materi,
            (
              select array_to_json(array_agg(q))
              from (
                select quiz_id, judul_quiz,
                (
                  select array_to_json(array_agg(sq))
                  from (
                    select soal_quiz_id, text_soal,
                    (
                      select array_to_json(array_agg(jq)) 
                      from (
                        select jawaban_quiz_id, text_jawaban, benar
                        from jawaban_quiz where jawaban_quiz.soal_quiz_id = soal_quiz.soal_quiz_id
                      ) jq
                    ) as jawaban_quiz
                    from soal_quiz where soal_quiz.quiz_id = quiz.quiz_id
                  ) sq
                ) as soal_quiz
                from quiz where quiz.sub_bab_id = sub_bab.sub_bab_id
              ) q
            ) as quiz
            from sub_bab where sub_bab.bab_id = bab.bab_id
          ) s
        ) as sub_bab
        from bab
      ) bab
    ` 
  try {
    const bab = await pool.query(sql)
    if(!bab) throw Error("Data Bab tidak ditemukan")
    res.status(200).json(bab.rows[0].array_to_json)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// (
//   select array_to_json(array_agg(sq)) 
//   from (
//     select soal_quiz_id, text_soal
//     (
//       select array_to_json(array_agg(jq)) 
//       from (
//         select jawaban_quiz_id, text_jawaban, benar
//         from jawaban_quiz where jawaban_quiz.soal_quiz_id = soal_quiz.soal_quiz_id
//       ) jq
//     ) as jawaban_quiz
//     from soal_quiz where soal_quiz.quiz_id = quiz.quiz_id
//   ) sq
// ) as soal_quiz

// @route   GET api/bab
// @desc    Get All Bab
// @access  Public
router.get('/', async (req, res) => {
  const query = req.query
  const keys = Object.keys(query)
  let sql
  if(keys.length < 1) {
    sql = format('SELECT * FROM bab ORDER BY urutan_bab;')
  } else {
    const data = dataAnd(query, keys)
    sql = format('SELECT * FROM bab WHERE %s ORDER BY urutan_bab', data)
  }
  try {
    const bab = await pool.query(sql)
    if(!bab) throw Error("Data Bab tidak ditemukan")
    res.status(200).json(bab.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   GET api/bab
// @desc    Get One Bab
// @access  Public
router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const bab = await pool.query("SELECT * FROM bab WHERE bab_id = $1", [id])
    if(!bab) throw Error("Data Bab tidak ditemukan")
    res.status(200).json(bab.rows)
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


// @route   POST api/bab
// @desc    Create Bab
// @access  Public
router.post('/', async (req, res) => {
  const {judul_bab} = req.body
  try {
    const newBab = await pool.query("INSERT INTO bab (judul_bab) VALUES ($1) RETURNING *", [judul_bab])
    if(!newBab) throw Error('Terjadi Kesalahan ketika menyimpan Data Bab')
    res.status(201).json(newBab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   PUT api/bab
// @desc    Edit Bab
// @access  Public
router.put('/:id', async (req, res) => {
  const {id} = req.params
  const keys = Object.keys(req.body)
  const updateData = data(req.body, keys)
  const sql = format("UPDATE bab SET %s WHERE bab_id = %L RETURNING *", updateData, id)
  try {
    const updateBab = await pool.query(sql)
    if(!updateBab) throw Error('Terjadi Kesalahan ketika menyimpan Data Bab')
    res.status(200).json(updateBab.rows[0])
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})

// @route   DELETE api/bab
// @desc    Remove a Bab
// @access  Public
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deleteBab = await pool.query("DELETE FROM bab WHERE bab_id = $1", [id])
    if(!deleteBab) throw Error("Data Bab tidak ditemukan")
    res.status(200).json({msg: 'data berhasil dihapus'})
  } catch (e) {
    res.status(400).json({
      msg: e.message
    })
  }
})


module.exports = router