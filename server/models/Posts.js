module.exports = ((sequelize,DataTypes)=>{

    const Posts = sequelize.define("Posts",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        PostText:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

    //  comment model linked with this model on delete cascade is delete all comments linked with this post
  Posts.associate = (models)=>{
    Posts.hasMany(models.Comment,{
        onDelete:"cascade"
    })
    
  }

    return Posts

})