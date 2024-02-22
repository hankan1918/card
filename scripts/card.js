function handleMouseMovement(container, overlay) {
    overlay.style = 'filter : opacity(0)';

    container.addEventListener('mousemove', function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        rotateY = -1/5 * x + 20;
        rotateX = 4/30 * y -20;

        overlay.style = `background-position : ${x/5 + y/5}%`;

        container.style = `transform : perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    container.addEventListener('mouseover', function(){
        overlay.style = 'filter : opacity(0.1)';
    });
    container.addEventListener('mouseout', function(){
        overlay.style = 'filter : opacity(0)';
        container.style = 'transform: perspective(400px) rotateX(0) rotateY(0)';
    });
}

function createCards(name, imgUrl) {
    var title_card = document.createElement('div');
    title_card.classList.add('title-card');

    var container = document.createElement('div');
    container.classList.add('container');
    title_card.appendChild(container);

    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    container.appendChild(overlay);

    var card = document.createElement('div')
    card.classList.add('card');
    card.style.backgroundImage = `url(img/${imgUrl})`;
    container.appendChild(card);

    var nameP = document.createElement('p');
    nameP.textContent = name;
    title_card.appendChild(nameP);
    
    document.querySelector('.cards').appendChild(title_card);
    
    handleMouseMovement(container, overlay);
}

var actors = ['홍광호', '박은태', '서경수', '김지현', '박지연', '홍지희', '전재홍', '신성민', '최호중']

for(i = 0; i<actors.length; i++){
    createCards(actors[i], String(i+1).padStart(3, "0")+'.webp');
    console.log(`${actors[i]} Card is created from ${String(i+1).padStart(3,"0")}!`);
}
