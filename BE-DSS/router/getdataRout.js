const router = require("express").Router();
const bcrypt =require('bcrypt')
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')



class getData {

  constructor(getdatacontroller) {

    this.controller = getdatacontroller
    this.init();
  }

  init() {
    router.get("/unsigned",middleware,(req,res)=>{
      console.log({
        "userId":req.user,
        "status":"get unsigned doc"
      })
      this.controller.getUnsigned().then(result=>{
        res.send(result)
      }).catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      })     
    })

    router.get("/signed",middleware,(req,res)=>{
      console.log({
        "userId":req.user,
        "status":"get signed doc"
      })
      this.controller.getSigned().then(result=>{
        res.send(result)
      }).catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      })     
    })
   
  }

  getRouter() {
    return router;
  }
}
  
module.exports = controller => {
  return new getData(controller);
};
  