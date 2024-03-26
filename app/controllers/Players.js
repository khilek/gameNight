import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";



export class PlayersController {
  constructor() {
    console.log('character 🎮 loaded', AppState.players);
    this.drawPlayerButton()
  }

  drawPlayerButton() {
    let buttonHTML = ''
    AppState.players.forEach(Player => buttonHTML += `<button onclick="app.PlayersController.scorePoint('${Player.name}')"> ${Player.name} [${Player.score}] </button>`)

    let buttonElms = document.getElementById('player-buttons')
    buttonElms.innerHTML = buttonHTML
  }
  scorePoint(playerName) {
    console.log('clicked', playerName);
    playersService.scorePoint(playerName)
    this.drawPlayerButton()

  }


}

