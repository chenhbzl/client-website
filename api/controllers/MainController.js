var map = {
  spring: 'umei',
  summer: 'mm131',
  autumn: 'd22mm',
  winter: 'mzitu'
};
module.exports = {
  index: function (req, res) {
    var opt = {
      page: req.params.page || 1,
      type: req.params.type,
      collection:map[req.params.collection] || 'umei'
    };
    sails.log.info('opt', opt);
    Request.getPrettyGirlIndexData(opt, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      if (!body) {
        return res.notFound();
      }
      res.ok(JSON.parse(body), {view: 'index'});
    });
  },
  profile: function (req, res) {
    Request.getPrettyGirlProfileData({id:req.params.id, collection: map[req.params.collection]}, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      return res.ok(JSON.parse(body), {view: 'profile'});
    });
  }
};