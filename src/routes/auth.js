const router = require('express').Router()
const AuthController = require('../controllers/auth')
const controller = new AuthController()


router.post('/register', async(req, res) => {
  try{
    const {status, message} = await controller.register(req.body)
    res.status(status).json({message})
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

router.post('/login', async(req, res) => {
  try{
    const {status, message, token} = await controller.login(req.body)
    const obj = token ? {message, token} : {message}
      res.status(status).json(obj)
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router
