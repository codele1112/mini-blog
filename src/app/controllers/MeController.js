const Course = require('../models/Courses');

class MeController {
  // [GET] me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render('me/stored-courses.hbs', { deletedCount, courses });
      })
      .catch(next);
  }
  //[ GET] me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .lean()
      .then(courses => {
        var courseDeleted = [];
        courses.forEach(element => {
          if (element.deleted == true) {
            courseDeleted.push(element);
          }
        });
        res.render('me/trash-courses.hbs', { courses });
      })
      .catch(next);
  }
}

module.exports = new MeController();
