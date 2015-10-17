module.exports = {
  getList: function (req, res) {
    var page = req.params.page || 1;
    var limit = 5;
    var skip = limit * Number(page);
    var query = { where: {finish:true}, skip: skip, limit: limit};
    Umei.find(query).exec(function (err, result) {
      console.log("result", result);
      res.json(result);
    });
  }
}