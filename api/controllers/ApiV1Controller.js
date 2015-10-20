module.exports = {
  getList: function (req, res) {
    var page = req.param('page')|| 1;
    var limit = req.param('limit') || 20;
    if (limit > 100) {
      limit = 100;
    }
    var type = req.param('type')|| 'jp';
    var skip = limit * Number(page);
    var query = { where: {finish:true, type: type}, skip: skip, limit: limit, select:['localSmallPicSrc', 'title']};
    Umei.find(query).exec(function (err, result) {
      res.json(result);
    });
  },
  getProfile: function (req, res) {
    var id = req.param('id');
    Umei.findOne({where:{id:id, finish:true}, select:['localBigPic', 'title']}).exec(function (err, result) {
      res.json(result);
    });
  }
}