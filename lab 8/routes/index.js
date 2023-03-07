const peopleRoutes = require('./people');
const path = require('path');

const constructorMethod = (app) => {
  app.use('/', peopleRoutes);

//   app.get('/about', (req, res) => {
//     res.sendFile(path.resolve('static/homepage.html'));
//   });

  app.use('*', (req, res) => {
    res.status(404).json("page not found");
  });
};

module.exports = constructorMethod;