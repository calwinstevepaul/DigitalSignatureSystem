var model=require('../models')
let Op=require('sequelize').Op


class getdataController{
 
  async getUnsigned(){
    return model.doc.findAll({
      where:{
        isSigned:false
      }
    })
  }

  async getSigned(){
    return model.signedDoc.findAll({
      include:[
      {
        model:model.doc  
      },
      {
        model:model.user
      }
    ]
    })
  }
}


module.exports = () => {
    return new getdataController();
  };
  