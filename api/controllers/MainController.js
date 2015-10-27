module.exports = {
  index: function (req, res, next) {
    var page = req.params.page || 1;
    Request.getUmeiIndexData({page: page}, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      res.ok(JSON.parse(body), {view: 'index'});
    });
  },
  profile: function (req, res) {
    var id = req.params.id;
    Request.getUmeiProfileData({id: id}, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      return res.ok(JSON.parse(body), {view: 'profile'});
    });
  }
};