//Here you will require route files and export the constructor method as shown in lecture code and worked in previous labs.
const UserRoutes = require('./routesAPI');

const constructorMethod = (app) => {
    app.use('/', UserRoutes);
  
  
    app.use('*', (req, res) => {
      res.status(404);
    });
  };
  
  module.exports = constructorMethod;