module.exports = {
  index: function (req, res, next) {

    var page = req.params.page || 1;
    var limit = 120;
    var skip = 100 * Number(page);
    var query = { where: {finish:true}, skip: skip, limit: limit, select:['localSmallPicSrc', 'title'], sort: 'type DESC'};
    Umei.find(query).exec(function (err, result) {
      if (err) {
        return res.serverError(err);
      }
      var data = {result: result, page: +page};
      res.ok(data, {view: 'index'});
    });
  },
  profile: function (req, res) {
    var id = req.params.id;

    Umei.findOne({where:{id:id, finish:true}, select:['localBigPic', 'title']}).exec(function (err, result) {
      console.log("result", result);

      var title = result.title;
      var localBigPic = result.localBigPic;
      return res.ok({title: title, localBigPic: localBigPic}, {view: 'profile'});
    });
  }
};