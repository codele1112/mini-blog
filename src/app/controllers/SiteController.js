const Course = require("../models/Courses");

class SiteController {
  // GET / homepage
  async index(req, res, next) {
    // render database from mongoDB compass on browser

    // thằng Mogoose có cho 1 method để trả về old plain javascript object là lean(), hoặc nếu ko muốn convert thì thêm ._doc vào sau this như thế này
    // cách 1: model.find({}).lean().then(...).catch(...)
    // cách 2: {{this._doc.name}} {{this._doc.image}} ...

    Course.find({})
      .lean()
      .then((courses) => {
        res.render("home.hbs", { courses });
      })
      .catch(next);
  }

  // [GET] /search

  search(rew, res) {
    res.render("search.hbs");
  }
}

module.exports = new SiteController();
