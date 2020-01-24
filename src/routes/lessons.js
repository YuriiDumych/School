const router = require('express').Router()
const Lesson = require('../controllers/lessons')
const lesson = new Lesson()


router.post('/create', async (req, res) => {
  try{
    const {status, message} = await lesson.create(req.body)
    res.status(status).json(message)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router