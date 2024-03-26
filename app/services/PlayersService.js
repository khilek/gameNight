import { AppState } from "../AppState.js";


class PlayersService {

  scorePoint(playerName) {
    console.log('clicked', playerName);
    const playerToScore = AppState.players.find(player => player.name == playerName)
    console.log('Player Scored', playerToScore);
    playerToScore.score++
    console.log(playerToScore);
  }
}

export const playersService = new PlayersService()