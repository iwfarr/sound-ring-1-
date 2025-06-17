input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.plotBarGraph(input.acceleration(Dimension.X), 255)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    music.play(music.createSoundExpression(WaveShape.Square, 1, 4380, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    led.plotBarGraph(input.lightLevel(), 100)
    basic.pause(2000)
    basic.clearScreen()
})
let item = 0
let ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
ring.clear()
ring.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
ring.show()
basic.forever(function on_forever() {
    
    item = input.acceleration(Dimension.X) / 250
    ring.rotate(item)
    ring.show()
    basic.pause(100)
})
