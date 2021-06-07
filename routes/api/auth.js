const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const pool = require('../../db')
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', async (req, res) => {
  const { username, password } = req.body

  // Simple Validation
  if(!username || !password) {
    return res.status(400).json({msg: '*Harap masukan username dan password'})
  }

  // Check for existing user
  const User = await pool.query("SELECT * FROM users where username = $1", [username])
  const user = User.rows[0]
  if(!user) return res.status(400).json({msg: '*User tidak ditemukan!'})

  // Validate Password
  bcrypt.compare(password, user.password)
    .then(isMatch => {
      if(!isMatch) return res.status(400).json({msg: 'Password Salah!'})
      jwt.sign(
        { id: user.user_id, role: user.role },
        config.get('jwtSecret'),            
        (err, token) => {
          if(err) throw err
          res.json({
            token,
            user: { 
              id: user.user_id,
              username: user.username,
              nama: user.nama,
              email: user.email,
              role: user.role
            }
          })
        }
      )
    })
})


// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, async (req, res) => {
  const User = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user.user_id])
  const user = User.rows[0]
  if(!user) return res.status(400).json({msg: '*User tidak ditemukan!'})
  res.status(200).json(user)
})


module.exports = router