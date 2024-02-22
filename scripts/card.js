var container = document.querySelector('.container');
var overlay = document.querySelector('.overlay');
container.addEventListener('mousemove', function(e){
    var x = e.offsetX
    var y = e.offsetY
    rotateY = -1/5 * x + 20
    rotateX = 4/30 * y -20

    overlay.style = `background-position : ${x + y}%`

    container.style = `transform : perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})
container.addEventListener('mouseout', function(){
    overlay.style = 'filter : opacity(0)'
    container.style = 'transform: perspective(300px) rotateX(0) rotateY(0)'
})