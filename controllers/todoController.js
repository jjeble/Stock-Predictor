var bodyParser = require('body-parser');

console.log('hi');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
  app.get('/home',function(req,res){
    res.render('todo');
  });
}
