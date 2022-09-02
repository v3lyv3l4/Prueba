input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(N1)
    basic.showNumber(N2)
    basic.showString(P1)
})
input.onButtonPressed(Button.A, function () {
    S = N1 + N2
    basic.showNumber(S)
    P1 = "SUMASTE"
})
input.onButtonPressed(Button.AB, function () {
    M = N1 * N2
    basic.showNumber(M)
    P1 = "MULTIPLICASTE"
})
input.onButtonPressed(Button.B, function () {
    R = N1 - N2
    basic.showNumber(R)
    P1 = "RESTASTE"
})
let S = 0
let R = 0
let M = 0
let P1 = ""
let N2 = 0
let N1 = 0
N1 = randint(1, 5)
N2 = randint(1, 5)
P1 = "-"
M = 0
R = 0
S = 0
