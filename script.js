const player1 = prompt('digite o nome do primeiro jogador: ')
const power1 =parseInt(prompt('digite o poder de ataque do primeiro jogador: '))
const player2 = prompt('digite o nome do segundo jogador: ')
let defensepower2 = parseInt(prompt('digite o poder de defesa do segundo jogador: '))
let live2 = parseInt(prompt('digite a quantidade de pontos de vida do jogador: '))
const shield2 = confirm('o jogador possui algun escudo?')

if (power1 > defensepower2 && shield2 === false ){
  let damagedone = power1 - defensepower2
  live2 = live2 - damagedone
  alert(`${player1} atacou. ${player2} sofreu ${damagedone} de dano e nao possui escudo. sua vida agora e ${live2}.`)
} else if (power1 > defensepower2 && shield2 === true){
  let damagedone = (power1 - defensepower2)/2
  lufe2 = live2 - damagedone
  alert( `${player1} atacou. ${player2} sofreu ${damagedone} de dano e possui escudo. sua vida agora e ${live2}.`)
} else if (power1 <= defensepower2){
  
  alert(`${player1} atacou,mais nao afetou ${player2}. nenhum dano causado!`)}
