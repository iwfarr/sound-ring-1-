def on_button_pressed_a():
    led.plot_bar_graph(input.acceleration(Dimension.X), 255)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    music.play(music.create_sound_expression(WaveShape.SQUARE,
            1,
            4380,
            255,
            0,
            1000,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    led.plot_bar_graph(input.light_level(), 100)
    basic.pause(2000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

item = 0
ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
ring.clear()
ring.set_pixel_color(6, neopixel.colors(NeoPixelColors.BLUE))
ring.show()

def on_forever():
    global item
    item = input.acceleration(Dimension.X) / 250
    ring.rotate(item)
    ring.show()
    basic.pause(100)
basic.forever(on_forever)
