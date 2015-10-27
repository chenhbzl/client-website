var request = require("request");
var apiUrl = process.env.NODE_INTERIP || 'http://localhost:3000/';


module.exports = {
  getUmeiProfileData: function (param, cb) {
    var opt = {
      qs: param,
      uri: apiUrl + 'umei/getProfileData'
    };
    request(opt, cb)
  },
  getUmeiIndexData: function (param, cb) {
    var opt = {
      qs: param,
      uri: apiUrl + 'umei/getIndexData'
    };
    request(opt, cb)
  }
};