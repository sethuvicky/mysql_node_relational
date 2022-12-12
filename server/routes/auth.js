const express = require("express")
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcrypt")
const {sign} = require("jsonwebtoken")
// we include postid so we can fetch with that id  so we can get comments for that id
router.get("/",async(req,res)=>{

    // const comments =  await Comment.findAll({where:{PostId:PostId}})

     res.json("users working");
 
})

router.post("/",async(req,res)=>{
    const {username,password} =req.body
    console.log(req.body)

    bcrypt.hash(password,10).then((hash)=>{

        console.log(hash)
        Users.create({
            username:username,
            password:hash
        })
        res.json("success")

    })
     
 
})

router.post("/login",async(req,res)=>{
    const {username,password} =req.body
 
     const user = await Users.findOne({where :{username,username}})

     if(!user){
        res.json({error:"user not found"}) 
     }else{
        bcrypt.compare(password,user.password).then((match)=>{

            if(!match){
                res.json({error:"username or password incorrect"})
            }else{
                    // if  user we generate token for that user 
                const accessToken  = sign({username:user.username,id:user.id},"importantsecretkey")
                res.json(accessToken)
            }
    
         })
    
     }


   
     
 
})
module.exports =  router