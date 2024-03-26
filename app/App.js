import { router } from './router-config.js';
import { PlayersController } from "./controllers/Players.js";

class App {

  router = router

  PlayersController = new PlayersController()

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
