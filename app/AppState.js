import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from "./models/player.js"
class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []




  players = [
    new Player("Khile"),
    new Player("Kevyn"),
    new Player("Zerah"),

  ];










}

export const AppState = createObservableProxy(new ObservableAppState())