module.exports = function(app) {


    var qlicksense = require('../controllers/qliksense.controller.js');
   
    app.get('/qlicksense', qlicksense.Reporting);
}
