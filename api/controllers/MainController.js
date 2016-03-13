var request = require("module-request");
module.exports = {
  index: function (req, res) {
    var limit = 100;
    var page = req.params.page || 1;
    var type = req.params.type || 'mm';
    request.getSmallPics({page: page, limit: limit, type: type}, function (err, body) {
      if (err) {
        return res.serverError(err);
      } else {
        res.ok({result: body.result}, {view: 'list'});
      }
    });
  },
  profile: function (req, res) {
    request.getBigPics({id: req.params.id}, function (err, body) {
      if (err) {
        console.error(err);
        return res.serverError(err);
      } else if(body){
        res.ok({result:body}, {view: 'newprofile'});
      } else {
        res.notFound();
      }
    });
  },
  redirect: function (req, res) {
    var url = '/mm/page/1';
    return res.redirect(url);
  }
};