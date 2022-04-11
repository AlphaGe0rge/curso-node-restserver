const {response, request} =require("express");


const usuariosGet=(req=request, res=response)=> {

    const {q, nombre='no name', apikey,page=1, limit} = req.query;
 
    res.json({
        msg:'api get',
        q,
        nombre,
        apikey,
        page, 
        limit

    })
  }

const usuariosPut=(req, res=response)=> {
    res.json('api put')
  }
  

const usuariosPost= (req, res=response)=> {
   const body=req.body;
   
    res.json({
      body
    });
   
  }

const usuariosDelete=(req, res=response)=> {
    res.json('api Delete')
  }





  module.exports={usuariosGet,usuariosPut,usuariosPost,usuariosDelete}