basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.buttonIsPressed(Button.A)) {
        if (input.lightLevel() >= 100) {
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
        } else {
            music.playTone(523, music.beat(BeatFraction.Double))
            music.playTone(587, music.beat(BeatFraction.Double))
            music.playTone(659, music.beat(BeatFraction.Double))
        }
    }
})
