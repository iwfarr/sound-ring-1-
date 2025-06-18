input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1, 4380, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 1, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let item = 0
let ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
ring.clear()
ring.showRainbow(1, 360)
ring.setBrightness(50)
ring.show()
basic.forever(function () {
    item = input.acceleration(Dimension.X) / 250
    ring.rotate(item)
    ring.show()
    basic.pause(100)
})
