const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./models")
app.use(cors())
app.use(express.json())

const postRouter = require("./routes/Posts")
const commentRouter = require("./routes/Comments")
const authRouter = require("./routes/auth")

app.use("/posts" ,postRouter)
app.use("/comments" ,commentRouter)
app.use("/auth" ,authRouter)

db.sequelize.sync().then(()=>{
    app.listen(3001,(()=>{
        console.log("server running on port 3001")
    }))
})
