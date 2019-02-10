const cmdArg = require("yargs").argv

class PlayerTurn {
  constructor(rps){
    this.move = rps
  }
  playerChoice(){
    return this.move
  }
}

class Rock extends PlayerTurn{
  constructor(){super("rock")}
  losesTo(rps){return rps === "paper" ? true : false}
}
class Paper extends PlayerTurn{
  constructor(){super("paper")}
  losesTo(rps){return rps === "scissors" ? true : false}
}
class Scissors extends PlayerTurn{
  constructor(){super("scissors")}
  losesTo(rps){return rps === "rock" ? true : false}
}


class CMD {
  constructor(pm){
    this.rock = new Rock()
    this.paper = new Paper()
    this.scissors = new Scissors()
    this.rpsArr = ["rock","paper","scissors"]
    this.compMove = this.rpsArr[(Math.floor((Math.random()*3)+1)-1)] //gives between 0 and 2 to part of rpsArr
    this.playerMove = pm
    this.comp
    this.player
    this.results = ""
  }

  run(){
    if(this.compMove === "rock"){
      this.comp = this.rock
    }else if(this.compMove === "paper"){
      this.comp = this.paper
    }else{
      this.comp = this.scissors
    }
    if(this.playerMove === "rock"){
      this.player = this.rock
    }else if(this.playerMove === "scissors"){
      this.player = this.scissors
    }else{
      this.player = this.paper
    }
    if(this.comp.playerChoice()===this.player.playerChoice()){
      this.results = "Game Draw!"
    }else if(this.player.losesTo(this.comp.playerChoice())){
      this.results = "Computer Wins!"
    }else{
      this.results = "Player Wins!"
    }
    console.log("Playing a game of Roshambo against the computer")
    console.log(`Player plays ${this.player.playerChoice()}!`)
    let ooo = setInterval(()=>{
      console.log(`Computer plays ${this.comp.playerChoice()}!`)
      clearInterval(ooo)
    },1000)
    let oi = setInterval(()=>{
      console.log(this.results)
      clearInterval(oi)
    },2000)
  }
}

let game = new CMD(cmdArg.move)
game.run()
