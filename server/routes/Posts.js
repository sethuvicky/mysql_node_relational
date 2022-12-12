const express = require("express")
const router = express.Router()
const {Posts} = require("../models")
router.get("/",async(req,res)=>{

    const allPost =await   Posts.findAll()
    res.json(allPost);
 
})
router.get("/:id",async(req,res)=>{
    let {id} =req.params

    const data =await   Posts.findByPk(id)
    res.json(data);
 
})
router.post("/",async(req,res)=>{
    const post = req.body
    console.log(post)
    await Posts.create(post)
    res.json(post)

 
})
module.exports =  router