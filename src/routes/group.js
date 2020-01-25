const router = require('express').Router()
const GroupController = require('../controllers/group')
const controller = new GroupController()
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/create', authMiddleware, async (req, res) => {
  try{
    const {status, message, group} = await controller.createGroup(req.body.name)
    const obj = group ? {message, group} : {message}
    res.status(status).json(obj)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.post('/enter', authMiddleware, async (req, res) => {
  try{
    const {status, message} = await controller.addMember(req.body)
    res.status(status).json({message})
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router