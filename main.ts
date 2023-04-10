let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    let jas = 0
    if (jas == 0) {
        x = randint(0, 4)
        y = randint(0, 4)
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
})
