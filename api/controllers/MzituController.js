/**
 * MzituController
 *
 * @description :: Server-side logic for managing mzitus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require("fs");
module.exports = {
  test: function (req, res) {
    Request.getUmeiProfileData({id:'561f5e45ce138ce516979d9c'}, function (err,res,body) {
      console.log("err, body", err, body);
    });
  }
};

