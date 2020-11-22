radio.onReceivedValue(function (name, value) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    music.setTempo(Math.map(signal, -98, -42, 75, 300))
    if (signal == -42) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
let signal = 0
basic.showIcon(IconNames.Ghost)
radio.setGroup(31)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
music.setTempo(100)
