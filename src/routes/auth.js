const {Router} = require('express')
const router = Router()
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
    if(message){
      res.status(status).json({message})
    } else {
      res.status(status).json({token})
    }
  } catch(e){
    res.status(500).json({message: 'Something went wrong. Try again.'})
  }
})

module.exports = router
