var model=require('../models')


class updateController{
 
async addDoc(url,id,docName){
 model.doc.create({
   url:url,
   docName:docName,
   isSigned:false
 })
}

async addSign(id,docId,text,pageNumber){
  await model.doc.update({
    isSigned:true
  },{
    where:{
      id:docId
    }
  })

  return await model.signedDoc.create({
    userId:id,
    docId:docId,
    sign:text,
    pageNumber:pageNumber
  })

}



 
}


module.exports = () => {
    return new updateController();
  };
   