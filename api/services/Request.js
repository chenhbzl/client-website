var request = require("request");
var apiUrl = process.env.NODE_INTERIP || 'http://localhost:3000/';


module.exports = {
  getPrettyGirlProfileData: function (param, cb) {
    var opt = {
      qs: param,
      uri: apiUrl + 'prettyGirl/getProfileData'
    };
    request(opt, cb)
  },
  getPrettyGirlIndexData: function (param, cb) {
    var opt = {
      qs: param,
      uri: apiUrl + 'prettyGirl/getIndexData'
    };
    request(opt, cb)
  }
};