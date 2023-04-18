radio.onReceivedNumber(function (receivedNumber) {
    Bala_Enemiga = game.createSprite(receivedNumber, 0)
    for (let index = 0; index < 4; index++) {
        Bala_Enemiga.change(LedSpriteProperty.Y, 1)
        basic.pause(130)
    }
    if (Jugador.isTouching(Bala_Enemiga)) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
    Bala_Enemiga.delete()
})
input.onButtonPressed(Button.A, function () {
    Jugador.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bala = game.createSprite(Jugador.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 3; index++) {
        Bala.change(LedSpriteProperty.Y, -1)
        basic.pause(130)
    }
    radio.sendNumber(Bala.get(LedSpriteProperty.X))
    Bala.delete()
})
input.onButtonPressed(Button.B, function () {
    Jugador.change(LedSpriteProperty.X, 1)
})
let Bala: game.LedSprite = null
let Bala_Enemiga: game.LedSprite = null
let Jugador: game.LedSprite = null
radio.setGroup(1)
Jugador = game.createSprite(2, 4)
