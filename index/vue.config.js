
const MovieData = require('./public/mock/data.json')

module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get('/api/list',(req,res)=>{
        res.json({
          errCode:0,
          list:MovieData.movieList
        })
        // console.log(MovieData.movieList)
      })

      app.get('/api/detail',(req,res)=>{
        let {id}=req.query
        let dataa=MovieData.find(val=>val.id==id)
        res.json({
          adds:dataa,
          errCode:0
        })
      })
    }
  }
}