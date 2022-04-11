const {Router}=require('express');
const bodyParser = require('body-parser')

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/user');

const router=Router();
const jsonParser = bodyParser.json();


router.get('/', usuariosGet)
  
router.put('/', usuariosPut)
  
router.post('/', jsonParser , usuariosPost)
  
router.delete('/', usuariosDelete)




module.exports=router