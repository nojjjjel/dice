input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
    music.play(music.stringPlayable("C - - - - - - - ", 400), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
basic.showIcon(IconNames.Yes)
