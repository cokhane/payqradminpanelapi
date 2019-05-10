

module.exports = (app) => {

  app.post('/createqr', (req, res, next) => {
    var response = {
      "status":0,
      "message":null,
      "data":null,
      "error":null
    }
    try{
    var name=req.body['name'];
    var price=req.body['price'];
    var type=req.body['type'];
    var tokens=req.headers['token'];

    var YZClient = require('yz-open-sdk-nodejs');
    var Token = require('yz-open-sdk-nodejs/Token');

    var YZClient = new YZClient(new Token(tokens)); // var YZClient = new YZClient(new Sign('app_id', 'app_secret'));
    params={};

    params['qr_name']=name;
    params['qr_price']=price;
    params['qr_type']=type;

    var promise = YZClient.invoke('youzan.pay.qrcode.create', '3.0.0', 'GET', params, undefined);

    promise.then(function(resp) {

        //console.log('resp: ' + resp.body);
        var data = JSON.parse(resp.body);
        var qr_id=data.response.qr_id;
        var qr_code=data.response.qr_code;

        let datas ={
          "qr_id":qr_id,
          "qr_name":name,
          "qr_price":price,
          "qr_code":qr_code
        }

        response['data'] = datas
        response['status'] = 1
        response['message'] = 'success'

        res.json(response)

    }, function(err) {
        console.log('err: ' + err);
    }, function(prog) {
        console.log('prog: ' + prog);
    });


    }catch(err){
      response['error'] = err.message
      res.json(response)
    }

  })

}
