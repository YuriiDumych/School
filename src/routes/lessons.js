const router = require('express').Router()
const Lesson = require('../controllers/lessons')
const controller = new Lesson()
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/lessons', authMiddleware, async(req, res) => {
  try{
    const lessons = await controller.all(req.body.group)
    res.status(200).json(lessons)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.post('/create', authMiddleware, async (req, res) => {
  try{
    const {status, message} = await controller.create(req.body)
    res.status(status).json(message)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.delete('/delete', authMiddleware, async(req, res) => {
  try{
    const {id, group} = req.body
    const {status, message} = await controller.delete(id)
    res.status(status).json({message})
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.put('/edit', authMiddleware, async (req, res) => {
  try{
    const {id, payload} = req.body
    const {status, message} = await controller.edit(id, payload)
    res.status(status).json({message})
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router