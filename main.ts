let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    }
})
