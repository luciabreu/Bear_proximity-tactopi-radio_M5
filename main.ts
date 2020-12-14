radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (!(playing)) {
        if (signal >= -50) {
            music.stopMelody(MelodyStopOptions.All)
            music.playMelody("C D C C - D - C5 ", 355)
            playing = true
        } else {
            music.setTempo(Math.map(signal, -128, -42, 20, 300))
        }
    }
})
input.onButtonPressed(Button.A, function () {
    startMusic()
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    playing = false
})
input.onButtonPressed(Button.B, function () {
    startMusic()
})
function startMusic () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
    music.setTempo(40)
}
let signal = 0
let playing = false
basic.showIcon(IconNames.Heart)
radio.setGroup(31)
playing = false
startMusic()
