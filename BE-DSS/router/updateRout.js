const router = require("express").Router();
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')
const multer=require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
    cb(null,"AUDIO-" + Date.now() + path.extname(file.originalname));
    
   
  }
});

const upload = multer({
  storage: storage
});


class update {

  constructor(updatecontroller) {
    this.controller = updatecontroller
    this.init();
  }

  init() {
    router.post("/adddoc", middleware,upload.single("doc"), (req, res) =>{
      var docName =req.body.docName
      let str=req.file.path
      // REMOVING PUBLIC FROM THE PATH AS IT IS STATIC
      let newstr=str.slice(6)
      var url ="http://localhost:9000/"+newstr
      var id =req.user
      console.log({
        "userId":req.user,
        "status":"adding doc"
      })
      this.controller.addDoc(
        url,
        id,
        docName
      ).then(result => {
        res.send(result);
      })
      .catch((e)=>{
        res.status(400).send({errMsg: "DB error"})

      });
      
    })

    router.post("/addsign",middleware,(req,res)=>{
      const {docId,text,pageNumber} = req.body
      const id = req.user

      console.log({
        "userId":req.user,
        "status":"adding doc sign"
      })
      this.controller.addSign(id,docId,text,pageNumber).then(result=>{
        res.send(result)
      })
      .catch((e)=>{
        res.status(400).send({errMsg: "DB error"})

      });
    })


  }

  getRouter() {
    return router;
  }
  }
  
  module.exports = controller => {
    return new update(controller);
  };
  