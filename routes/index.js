const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + '/controller/order/').forEach((file) => {
    require(`./controller/order/${file.substr(0, file.indexOf('.'))}`)(app);
  });

  fs.readdirSync(__dirname + '/controller/qr/').forEach((file) => {
    require(`./controller/qr/${file.substr(0, file.indexOf('.'))}`)(app);
  });

  fs.readdirSync(__dirname + '/controller/user/').forEach((file) => {
    require(`./controller/user/${file.substr(0, file.indexOf('.'))}`)(app);
  });

};
