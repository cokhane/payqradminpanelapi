let userSchema = require('../../../schema/user')
module.exports = (app) => {
  app.post('/insertuser',async (req, res, next) => {

    var response = {
      "status":0,
      "message":null,
      "data":null,
      "error":null
    }

      let datas = {
        "name":req.body['name'],
        "password":req.body['password'],
        "created_at":Math.round(new Date().getTime() / 1000)
      }

      try{
        const isSaved = await userSchema.create(datas);
        console.log(isSaved);
        response['status'] = 1
        response['message'] = 'success'
      }catch(err){
        response['error'] = err
      }
      res.json(response)

  })

  app.get('/getallusers', async (req, res, next) => {
    let data;
    try{
      data =  await userSchema.find();
    }catch(err){
      console.log(err);
    }
    res.send(data)
  });

}
