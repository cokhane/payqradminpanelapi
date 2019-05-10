

module.exports = (app) => {

  app.get('/getorder', (req, res, next) => {
    var response = {
      "status":0,
      "message":null,
      "data":null,
      "error":null
    }
    try{

    var tokens=req.headers['token'];

    var YZClient = require('yz-open-sdk-nodejs');
    var Token = require('yz-open-sdk-nodejs/Token');

    var YZClient = new YZClient(new Token(tokens)); // var YZClient = new YZClient(new Sign('app_id', 'app_secret'));
    params={};

    var promise = YZClient.invoke('youzan.trades.qr.get', '3.0.0', 'GET', params, undefined);

    promise.then(function(resp) {
        // console.log('resp: ' + resp.body);
        var data = JSON.parse(resp.body);
        //console.log(data);

        response['data'] = data
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
