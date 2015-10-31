var map = {
  spring: 'umei',
  summer: 'mm131',
  autumn: 'd22mm',
  winter: 'mzitu'
};
module.exports = {
  index: function (req, res) {
    var collection = map[req.params.collection] || 'umei'
    var opt = {
      page: req.params.page || 1,
      type: req.params.type,
      collection: collection
    };
    sails.log.info('opt', opt);
    Request.getPrettyGirlIndexData(opt, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      if (!body) {
        return res.notFound();
      }
      body = JSON.parse(body);
      body.collection = req.params.collection;
      //var smallPicRule = 'umei.pc.small';
      body.smallPicRule = DetectService(req, collection);
      res.ok(body, {view: 'list'});
    });
  },
  profile: function (req, res) {
    Request.getPrettyGirlProfileData({id:req.params.id, collection: map[req.params.collection]}, function (err, response, body) {
      if (err) {
        return res.serverError(err);
      }
      if (req.param('from') === 'wechat') {
        return res.ok(JSON.parse(body), {view: 'wechatprofile'});
      } else {
        return res.ok(JSON.parse(body), {view: 'profile'});
      }
    });
  },
  redirect: function (req, res) {
    var url = '/summer/xinggan/page/1';
    return res.redirect(url);
  }
};