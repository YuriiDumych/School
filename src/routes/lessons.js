const router = require('express').Router()
const Lesson = require('../controllers/lessons')
const controller = new Lesson()

router.get('/lessons', async(req, res) => {
  try{
    const lessons = await controller.all(req.body.group)
    res.status(200).json(lessons)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.post('/create', async (req, res) => {
  try{
    const {status, message} = await controller.create(req.body)
    res.status(status).json(message)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.delete('/delete', async(req, res) => {
  try{
    const {status, message} = await controller.delete(req.body.id)
    res.status(status).json({message})
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})


module.exports = router