class SiteController {
  // GET / homepage
  index(req, res) {
    res.render("home.hbs");
  }
  // [GET] /search

  search(rew, res) {
    res.render("search.hbs");
  }
}

module.exports = new SiteController();
