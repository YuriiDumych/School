const router = require('express').Router()
const TeacherController = require('../controllers/teacher')
const controller = new TeacherController()

router.post('/create', async (req,res) => {
  try{  
    const {status, message, teacher} = await controller.createTeacher(req.body)
    const obj = teacher ? {message, teacher} : {message} 
    res.status(status).json(obj)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.get('/all', async (req, res) => {
  try{
    const {status, message, teachers} = await controller.allTeachers()
    const obj = teachers ? {teachers} : {message} 
    res.status(status).json(obj)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router