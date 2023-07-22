class NewsController {
  // GET news
  index(req, res) {
    res.render("news.hbs");
  }
  // [GET] news/:slug

  show(rew, res) {
    res.send("new detail");
  }
}

module.exports = new NewsController();
