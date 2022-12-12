const express = require("express")
const router = express.Router()
const {Comment} = require("../models")

// we include postid so we can fetch with that id  so we can get comments for that id
router.get("/:PostId",async(req,res)=>{
    const {PostId} = req.params

    const comments =  await Comment.findAll({where:{PostId:PostId}})

     res.json(comments);
 
})

router.post("/",async(req,res)=>{
    const post = req.body
    console.log(post)

    await Comment.create(post)
    res.json(post)
 
})

module.exports =  router