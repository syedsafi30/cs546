//Here you will require route files and export them as used in previous labs.
const ArrayRoutes = require('./sortArray');

const constructorMethod = (app) => {
  app.use('/', ArrayRoutes);

  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = constructorMethod;