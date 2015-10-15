module.exports = {
  index: function (req, res) {
    var page = req.params.page || 1;
    var limit = 100;
    var skip = 100 * Number(page);
    var query = { where: {}, skip: skip, limit: limit, sort: 'title DESC' };
    Mzitu.find(query).exec(function (err, result) {
      if (err) {
        return res.serverError(err);
      }
      var data = {result: result, page: +page};
      res.ok(data, {view: 'index'});
    });
  },
  profile: function (req, res) {
    var id = req.params.id;
    Mzitu.findOne({id:id}).exec(function (err, result) {
      res.ok(result.localBigPic, 'profile');
    });
  }
};