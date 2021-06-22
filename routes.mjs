import db from './models/index.mjs';

// import controllers here
import initIndexController from './controllers/index.mjs';
import initFeatureController from './controllers/feature.mjs';
import initBugController from './controllers/bug.mjs';

const IndexController = initIndexController(db);
const FeaturesController = initFeatureController(db);
const BugController = initBugController(db);

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  app.get('/', IndexController.index);
  app.post('/', IndexController.handlePost);
  app.get('/features', FeaturesController.index);
  app.get('/bugs', BugController.bugs);
}
