import db from './models/index.mjs';

// import controllers here
import initIndexController from './controllers/index.mjs';

const IndexController = initIndexController(db);

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  app.get('/', IndexController.index);
  app.post('/', IndexController.handlePost);
}
