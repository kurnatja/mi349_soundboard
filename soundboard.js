var buttonElementOne = document.getElementById('button-one')
var buttonElementTwo = document.getElementById('button-two')
var buttonElementThree = document.getElementById('button-three')

var doorbell = new Audio('doorbell_x.wav')
var gong = new Audio('gong.wav')
var peeeooop = new Audio('peeeooop_x.wav')

buttonElementOne.addEventListener('click', function() {
    doorbell.play()
})

buttonElementTwo.addEventListener('click', function() {
    gong.play()
})

buttonElementThree.addEventListener('click', function() {
    peeeooop.play()
})