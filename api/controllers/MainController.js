var request = require("module-request");
var clientName = 'client-website';
module.exports = {
  index: function (req, res) {
    var limit = 120;
    var page = req.params.page || 1;
    var type = req.params.type || 'mm';
    request.getSmallPics({page: page, limit: limit, type: type, client: clientName}, function (err, body) {
      if (err) {
        return res.serverError(err);
      } else {
        res.ok({result: body.result}, {view: 'list'});
      }
    });
  },
  profile: function (req, res) {
    request.getBigPics({id: req.params.id, client: clientName}, function (err, body) {
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
